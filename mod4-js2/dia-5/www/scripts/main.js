// const success = pos => {
//     const crd = pos.coords
//     console.log(crd)
//     console.log(crd.latitude)
// }

// const error = err => {
//     console.warn('ERROR(' + err.code + '): ' + err.message)
// }

// navigator.geolocation.getCurrentPosition(success, error)

const target = {
    latitude: 0,
    longitude: 0
}

const success = pos => {
    const crd = pos.coords
    console.log('De camino')
    if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
        console.log('Has llegado a tu destino')
        navigator.geolocation.clearWatch(navigator.geolocation.watchPosition(success, error))
    }
}

const error = err => {
    console.warn(` ERROR(${error.code}): ${error.message}`)
}

navigator.geolocation.watchPosition(success, error)
