const btn = document.getElementById("btn");
if (btn) {
    btn.addEventListener('click',()=>{
        // window.api.sendpop();
        // ipcRenderer.send("popup");
        window.api.popupbtn();
    
        // alert("click");
    
    })
}

const ping = document.getElementById("tabs");
if (ping) {
    ping.addEventListener('click',()=>{
        window.api.ping()
    })
}
// window.api.sendpop((data),()=>{
//     console.log(data)
// })


// window.electronAPI.sendpop((event)=>{

//     window.electronAPI.sendpop();
// });




// window.electronAPI.getImage((event,data)=>{
//     // console.log(event,data);
//     imageTag.src=data;
//     window.electronAPI.closewindow2();
// });