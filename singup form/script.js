// first name validation

function fname_validation(){
    let tick = document.getElementById("tick");
    let title = document.getElementById("title1").value;
    let title1 = document.getElementById("title1");
    title == ""? title1.setAttribute("value", "This field is empty."):tick.style.display = "inline";
    title == ""? title1.style.color = "red":tick.style.display = "inline";
    title == ""? title1.title.border = "1px solid red":tick.style.display = "inline";
}

function fname_validation_close(){
    let tick = document.getElementById("tick");
    let title = document.getElementById("title1").value;
    let title1 = document.getElementById("title1");
    title == "This field is empty."? setAttribute("value", ""):tick.style.display = "inline";
    title == "This field is empty."? title1.style.color = "black":tick.style.display = "inline";
    title == "This field is empty."? title1.style.border = "1px solid black":tick.style.display = "inline";
}
//first name validation ends
// last name validation starts
function lname_validation(){
    let tick = document.getElementById("tick1");
    let title = document.getElementById("title2").value;
    let title1 = document.getElementById("title2");
    title == ""? title1.setAttribute("value", "This field is empty."):tick.style.display = "inline";
    title == ""? title1.style.color = "red" : tick.style.display = "inline";
    title == ""? title1.title.border = "1px solid red" : tick.style.display = "inline";
}

function lname_validation_close(){
    let tick = document.getElementById("tick1");
    let title = document.getElementById("title2").value;
    let title2 = document.getElementById("title2");
    title == "This field is empty."? setAttribute("value", ""):tick.style.display = "inline";
    title == "This field is empty."? title2.style.color = "red":tick.style.display = "inline";
    title == "This field is empty."? title2.style.border = "1px solid black":tick.style.display = "inline";
}

// last name validation ends

// Mobile no validation

function mobile_val(){
    let mobile = document.getElementById("mob1").value;
    let input = document.getElementsById("mob1");
    let tick = document.getElementById("tick2");
    mobile == "" ? input.value = "This field is empty" : mobile;
    window.alert(mobile.value.charAt(9));

}
// mobile validation Ends

// mobile rename property

function re_num(){
    num = document.getElementById("mob1").value;
    re_num = document.getElementById("mob2").value;
    numre = document.getElementById("mob2");
    re_num == num ? re_num : numre.setAttribute("value","please enter same mobile number");

}





// username validation


function uname(){
    let x = document.getElementById("title1").value;
    let y = document.getElementById("title2").value;
    let uname = document.getElementById("username").value;
    let uname2 = document.getElementById("username");
    uname == (x+y)?uname:uname2.setAttribute("value", "Username shold be the add of firstname and lastname.")
}

// submit btn validation