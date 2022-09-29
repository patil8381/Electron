const btn = document.getElementById("btn");
const {ipcRenderer}=require('electron').remote

btn.addEventListener('click',()=>{
    // window.api.sendpop();
    ipcRenderer.send("popup");

    // alert("click");

})
window.api.sendpop((data),()=>{
    console.log(data)
})


// window.electronAPI.sendpop((event)=>{

//     window.electronAPI.sendpop();
// });




// window.electronAPI.getImage((event,data)=>{
//     // console.log(event,data);
//     imageTag.src=data;
//     window.electronAPI.closewindow2();
// });