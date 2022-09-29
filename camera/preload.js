const { contextBridge, ipcRenderer } = require('electron')

/**
 *  contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    })
    window.electronAPI   helps to send data from main to render and rednder to render */


contextBridge.exposeInMainWorld('electronAPI', {
    getImage: (callback) => ipcRenderer.on('get-image', callback), /** taking data from main to send to render  */
    open_camera: ()=>   ipcRenderer.send('open_camera'),
    closewindow2:()=>   {ipcRenderer.send('close-window-2')},  /**this will close window after click  */
    save :()=> ipcRenderer.send('save'),
    dlt :()=> ipcRenderer.send('dlt'),
    tabWindow: ()=> ipcRenderer.send('tabWindow'),
    popup: ()=> ipcRenderer.send('popup'),

})


