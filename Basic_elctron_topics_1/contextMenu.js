
const { app, BrowserWindow, Menu } = require('electron');

let template = [{ label: 'item 1' }, { label: 'item 2' }, { role: 'minimize' }, { role: 'quit',label:'Close' }];
let contextMenu = Menu.buildFromTemplate(template);
// let menu = Menu.buildFromTemplate(template); //created for menu in main.js

function createMainWindow() {
    let win = new BrowserWindow({
        //these are browser window properties
        width: 400,
        height: 600,
        backgroundColor: "#E1FFEE",
        alwaysOnTop: true,
        
    })
    win.loadFile("index.html");
    // win.webContext.on("contextMenuu",()=>{contextMenuu.popup()})
    win.webContents.on("context-menu",() => { 
        contextMenu.popup();
     });
}
app.on('ready', function () {
    createMainWindow();
    console.warn("function call hogya");
})  


