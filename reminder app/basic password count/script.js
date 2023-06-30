function wap(){
    let user = document.getElementById("span");
    user.innerHTML = "Enter at least 10 digit password."
}

function loader(){
    let x = document.getElementById("loader");
    x.style.opacity = 15;
    let y = document.getElementById("span");
    y.innerHTML = "";
    let z = document.getElementById("count").value;
    z.length > 10? x.style.opacity = "0": x.style.opacity ="15";
    let k = document.getElementById("check");
    z.length > 10? k.style.opacity = "15": x.style.opacity = "15";
    z.length > 10? y.innerHTML= "": x.style.opacity = "15";
}