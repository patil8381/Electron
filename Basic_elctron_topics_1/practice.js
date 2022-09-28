const { app } = require('electron')
app.commandLine.appendSwitch('remote-debugging-port', '8315')
app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1')



function createWindow() {
    let window=new BrowserWindow({width:300,height:400,backgroundColor:"#967E76",alwaysOnTop:true});
    window.loadFile("index1.html");
}
app.on('ready',()=>{createWindow()});