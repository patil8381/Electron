const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('electronAPI', {
    sendImage: (data) => ipcRenderer.send('set-image', data),
});/** this is taking data from electronAPI and collects the data  */



