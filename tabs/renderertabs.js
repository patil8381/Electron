// const {ipcRenderer, contextBridge, Notification} = require('electron')
const pop = document.getElementById('pop')
const cw = document.getElementById("cw");

cw.addEventListener('click',()=>{
    window.api.cw()

})
pop.addEventListener('click',()=>{
    window.api.popupbtn()

})

// cw.addEventListener('click',()=>{ipcRenderer.send('cw')});
// btn.addEventListener('click', ()=> {
//     ipcRenderer.send('popupbtn');
// });


// const information = document.getElementById('info');
// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

/**
 * msi file 
 * package .exe , forge, builder 
 * contect bridge 
 * logs
 * 
 * docs 
 * 
 */
