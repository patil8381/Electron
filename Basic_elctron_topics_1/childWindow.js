
const { app, BrowserWindow, Menu } = require('electron');

 
function createMainWindow() {
    let win = new BrowserWindow({
        //these are browser window properties
        width: 400,
        height: 600,
        backgroundColor: "#E1FFEE",
        alwaysOnTop: true,
        
    })
    /*      this creates a child window or opwn new page  */ 
    let childwindow = new BrowserWindow();
    childwindow.loadFile("child.html");
    childwindow.show();
    win.loadFile("index.html");
     
}
app.on('ready', function () {
    createMainWindow();
    console.warn("function call hogya");
})  
