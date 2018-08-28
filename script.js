window.onload=init();

function init()
{
	var empButton=document.querySelector("#employee-button");
	empButton.addEventListener('click',showEmployeeForm);
}

function showEmployeeForm(evt)
{
	document.querySelector("#employeeForm").style.display="block";	
}