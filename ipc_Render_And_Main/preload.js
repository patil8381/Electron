const { contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld("eApi", {
    ping: ()=> ipcRenderer.send("png")
} )
