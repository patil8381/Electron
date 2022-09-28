
const { app, BrowserWindow, Menu } = require('electron');


function createMainWindow() {
    let mainWindowState = windowStateKeeper({
        //width: 600,
        // height: 300,
        defaultHeight: 800,
        defaultWidth: 300,
        
    })
    
    let win = new BrowserWindow({
        //these are browser window properties
        width: 400,
        height: 600,
        backgroundColor: "#E1FFEE",
        alwaysOnTop: true,
        
    })
    win.loadFile("index.html");
    
}
app.on('ready', function () {
    createMainWindow();
    console.warn("function call hogya");
})  
