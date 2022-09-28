const {app, BrowserWindow } = require("electron")

let win;

function createWindow() {
    win = new BrowserWindow({
        x: mainWindowState.x, 
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        backgroundColor: "#E1FFEE",
        alwaysOnTop: true,
        // resizable: false,
        title: "practice app",
        // frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    
    win.loadFile("index.html")
    
    
}


 app.on('before-quit',function(e){
    console.warn("before quit");
    e.preventDefault();
})
app.on('will-quit',function () {
    console.warn("will quit");
    // e.preventDefault();
})

app.on('browser-window-focus',function () {
    console.warn("window focus");

})
app.on('browser-window-blur',function () {
    console.warn("window blur");

})
 
app.on('ready', function () {
    createWindow();
    console.warn("function call hogya");
})