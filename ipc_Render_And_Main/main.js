const {app,BrowserWindow,ipcMain} = require('electron')
const path = require('path')
let win;
let cwin;
function createWindow() {
    win = new BrowserWindow({
        width:800,
        height:800,
        backgroundColor:'#182747',
        alwaysOnTop:true,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:true,
            // webContents:true,
            // webSecurity:true,
            preload: path.join(__dirname,"preload.js")

        }
    })
    win.loadFile("index.html")
    win.webContents.openDevTools()
}
function childwindow() {
    cwin = new BrowserWindow({
        width:800,
        height:800,
        // alwaysOnTop:true,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:true,
            // preload: path.join(__dirname,"preload.js") //if we include preload then child window will work as mainwindow
        }
    })
    cwin.loadFile("index.html")
}

// ipcMain.on('ping',(event)=>{
//     console.log('ping')
//     win.webContents.send("pong")
//     //or 
//     // event.sender.send("pong")
// })

ipcMain.on("png", ()=> {
    console.log("Ping");
    childwindow()
})

app.whenReady().then(
    createWindow
)