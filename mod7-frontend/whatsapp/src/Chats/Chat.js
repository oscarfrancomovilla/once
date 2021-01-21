import './Chat.css'

function Chat({ chat }) {
  const handleClick = () => alert('Esa es la foto de: ' + chat.contact)

  return (
    <div className="chat">
      <div
        className="avatar"
        style={{ backgroundImage: 'url(' + chat.avatar + ')' }}
        onClick={handleClick}
      />
      <div className="last-message">
        <div className="contact">{chat.contact}</div>
        <div className="message">{chat.lastMessage}</div>
      </div>
      <div>{new Date(chat.date*1000).toISOString()}</div>
    </div>
  );
}

export default Chat;
