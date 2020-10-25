'use strict';

const mySeconds = 15;

// IIFE (Arrow Function)
((seconds) => {

    let secondsBeforeRing = seconds;

    const alarm = setInterval(() => {
        secondsBeforeRing--;
        if(secondsBeforeRing > 0) {
            console.log(secondsBeforeRing);
        } else {
            clearInterval(alarm);
            console.log('¡¡¡RINGGGG!!! ¡¡¡A PRACTICAR JAVASCRIPT!!!')
        }
    }, 1000);


})(mySeconds);

 
