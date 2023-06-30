//start firstname validation
function fname_val()
{
	var fname = document.getElementById("firstname").value;
	var input = document.getElementById("firstname");
	var check = document.getElementById("tick");
	fname == "" ? input.setAttribute("value","This field is empty field") :style.display = "inline";
	fname == "" ? input.setAttribute("class","animated infinite bounce") : check.style.display = "inline";
	fname == "" ? input.style.color = "red" : check.style.display = "inline";
	fname == "" ? input.style.border = "1px solid red" : check.style.display = "inline";
}

function fname_val_close()
{
	var fname = document.getElementById("firstname").value;
	var input = document.getElementById("firstname");
	fname == "This field is empty field" ? input.setAttribute("value",""):check.style.display = "inline";
	fname == "This field is empty field" ? input.setAttribute("class",""):check.style.display = "inline";
	fname == "This field is empty field" ? input.style.color = "black":check.style.display = "inline";
	fname == "This field is empty field" ? input.style.color = "1px solid #ccc":check.style.display = "inline";
	
}

//end firstname validation

// start lastname validation


function lname_val()
{
	var lname = document.getElementById("lastname").value;
	var input = document.getElementById("lastname");
	var check = document.getElementById("tick");
	lname == "" ? input.setAttribute("value","This field is empty field") : check.style.display = "inline";
	lname == "" ? input.setAttribute("class","animated infinite bounce") : check.style.display = "inline";
	lname == "" ? input.style.color = "red" : check.style.display = "inline";
	lname == "" ? input.style.border = "1px solid red" : check.style.display = "inline";
}

function lname_val_close()
{
	var lname = document.getElementById("lastname").value;
	var input = document.getElementById("lastname");
	lname == "This field is empty field" ? input.setAttribute("value",""):check.style.display = "inline";
	lname == "This field is empty field" ? input.setAttribute("class",""):check.style.display = "inline";
	lname == "This field is empty field" ? input.style.color = "black":check.style.display = "inline";
	lname == "This field is empty field" ? input.style.color = "1px solid #ccc":check.style.display = "inline";
	
}

// end lastname validation


// start mobile validation

function mobile_val()
{
	var mobile = document.getElementById("mobile").value;
	var input = document.getElementById("mobile");
	var check = document.getElementById("tick");
	var check_digit_legth = mobile == "" ? input.setAttribute("value","this field is empty"):mobile;
	var digit_check = check_digit_legth.length == 10 ? check_digit_legth : input.setAttribute("value","Enter only 10 digit mobile number");
	digit_check.charAt(0) == 9 || digit_check.charAt(0) == 8 || 
	digit_check.charAt(0) == 7 ? check.style.display = "inline" : input.setAttribute("value","Enter indian number only");
	
}

// end mobile validation