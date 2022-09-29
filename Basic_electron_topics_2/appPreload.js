const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld("api", {
    sendpop: ()=> Hello
//   sendpop:()  =>  ipcRenderer.send('popup'),  /**this will close window after click  */    
})