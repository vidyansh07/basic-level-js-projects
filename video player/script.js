function playvideo(){
    let x = document.getElementById("video");
    x.play();
}
function pausevideo(){
    let x = document.getElementById("video");
    x.pause();
}
function vload(){
    let x = document.getElementById("inputdata").value.replace(/.*(\/|\\)/,'');
    let y = document.getElementById("video");
    y.src = x;
}