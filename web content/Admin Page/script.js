window.onload=init;

function init()
{
	var b=document.querySelector("#employee-button");
	b.addEventListener('click',showEmployeeForm);
}

function showEmployeeForm(evt)
{
	document.querySelector("#employeeForm").style.display="block";	
}