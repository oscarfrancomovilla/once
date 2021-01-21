const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const secret = process.env.SECRET || 'change-me'

const userdb = []

function home(req, res) {
  res.send('This is the file upload backend demo! Use your frontend to access it.')
}

function signup(req, res) {
  // Check params
  if (!req.body || !req.body.username || !req.body.password) {
    res.status(400).send({ error: 'Missing one or more body parameters: username, password' })
    return
  }
  if (userdb.find(u => u.username === req.body.username)) {
    res.status(400).send({ error: 'User already exists' })
    return
  }
  // Save user
  const user = {
    id: userdb.length,
    username: req.body.username,
    password: req.body.password,
    displayName: req.body.displayName,
    email: req.body.email,
    city: req.body.city,
    avatar: null
  }
  userdb.push(user)
  // Prepare token
  const token = jwt.sign({ id: user.id }, secret)
  // Send info to the client
  res.send({
    token,
    user: { ...user, password: '*' }
  })
}

function login(req, res) {
  // Check params
  if (!req.body || !req.body.username || !req.body.password) {
    res.status(400).send({ error: 'Missing one or more body parameters: username, password' })
    return
  }
  const user = userdb.find(u => u.username === req.body.username)
  if (!user || user.password !== req.body.password) {
    res.status(401).send({ error: 'Wrong username or password' })
    return
  }
  // Prepare token
  const token = jwt.sign({ id: user.id }, secret)
  // Send info to the client
  res.send({
    token,
    user: { ...user, password: '*' }
  })
}

function getUsers(req, res) {
  // Check auth
  if (!req.auth) {
    req.status(401).send({ error: 'Auth required' })
    return
  }
  // Send user list
  res.send(userdb.map(u => ({ ...u, password: '*' })))
}

function getMe(req, res) {
  // Check auth
  if (!req.auth) {
    req.status(401).send({ error: 'Auth required' })
    return
  }
  // Send logged in user
  const user = userdb.find(u => u.id === req.auth.id)
  res.send({ ...user, password: '*' })
}

function updateProfile(req, res) {
  // Check auth
  if (!req.auth) {
    req.status(401).send({ error: 'Auth required' })
    return
  }
  const user = userdb.find(u => u.id === req.auth.id)
  // Update any other provided fields
  if (req.body) {
    if (req.body.displayName) user.displayName = req.body.displayName
    if (req.body.email) user.email = req.body.email
    if (req.body.city) user.city = req.body.city
  }
  // If we got a file, save it and set the URL as avatar
  if (req.file) {
    fs.writeFileSync(path.join('uploads', 'user-' + req.auth.id + '.jpg'), req.file.buffer)
    user.avatar = 'http://localhost:8080/static/user-' + req.auth.id + '.jpg'
  }
  // Send success message
  res.send({ ...user, password: '*' })
}

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization
  const token = auth && auth.substr(7)
  const info = token && jwt.verify(token, secret)
  if (info) {
    req.auth = info
  }
  next()
}

module.exports = {
  authMiddleware,
  home,
  login,
  signup,
  getUsers,
  getMe,
  updateProfile
}
