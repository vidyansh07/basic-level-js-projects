function show_massage(){
    let  massage = document.getElementById("massage");
    massage.style.display = "block";
    massage.style.color = "red";

}
function check(){
    let icon = document.getElementById("icon");
    let div = document.getElementById("massage")
    let user = document.getElementById("password").value;
    let first = document.getElementById("first");
    let third = document.getElementById("third");
    let second = document.getElementById("second");
    let u_case = /[A-Z]/g;
    let l_case = /[a-z]/g;
    let num = /[0-9]/g;
    user.match(u_case)?first.style.color = "green": first.style.color = "red";
    user.match(l_case)?second.style.color = "green":second.style.color = "red";
    user.match(num)?third.style.color = "green": third.style.color = red;
    user.match(u_case)&& user.match(l_case)&& user.match(num)? icon.style.display = "block":icon.style.display = "none";
    
}