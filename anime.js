document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets : 'h1',
        translateY : [-150,0],
        duration : 1000,
        delay : 1000,
    }),
    anime({
        targets : '.container',
        opacity : [0,1],
        easing : 'easeInOutExpo',
        duration : 2000,
        delay : 1000,
    })
})