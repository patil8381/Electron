// this is a nodejs file for mainjs 

// contextBridge.exposeInMainWorld("api",{sendpopup :()=> ipcRenderer.send(sendpopup)    }   )

// contextBridge.exposeInMainWorld('api', {
//     sendpop: () => {ipcRenderer.send('popup')},
// })
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  cw: () => ipcRenderer.send('cw'),
  popupbtn: () => ipcRenderer.send('popupbtn'),
  electron: () => process.versions.electron,
  ping:()=>ipcRenderer.send('ping')
});



// window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//       const element = document.getElementById(selector)
//       if (element) element.innerText = text
//     }
  
//     for (const dependency of ['chrome', 'node', 'electron']) {
//       replaceText(`${dependency}-version`, process.versions[dependency])
//     }
//   })