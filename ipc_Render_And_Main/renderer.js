//javascript code 

// const {ipcRenderer} = require('electron')

let btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
     window.eApi.ping();
    
    // console.log('print'),
    // ipcRenderer.send('ping')

    // ipcRenderer.on("pong",(event)=>{
    //     console.log("pong")
    // })
})
