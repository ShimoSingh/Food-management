window.onload=init;
var manage={type:null,operation:null,name:null};
function init()
{
	var empForm=document.querySelector("#employee-button");
	empForm.addEventListener('click',showEmployeeForm);
	empForm=document.querySelector("#food-button");
	empForm.addEventListener('click',showFoodForm);
	empForm=document.querySelector("#cancelForm");
	empForm.addEventListener('click',closeManageForm);
	empForm=document.querySelector("#doneForm");
	empForm.addEventListener('click',submitManageForm);
	document.querySelector("#formInput").addEventListener('change',showSuggestions);
	document.querySelector("#objectAddButton").addEventListener('click',setManageToAdd);
	document.querySelector("#objectRemoveButton").addEventListener('click',setManageToRemove);
}
function showSuggestions()
{
	
}
function submitManageForm()
{
	
}
function setManageToAdd(evt)
{
	manage.operation="add";
	evt.target.style.backgroundColor="blue";
	document.querySelector("#objectRemoveButton").style.backgroundColor="";
	document.querySelector("#formInput").addEventListener('change',showSuggestions);
}
function setManageToRemove(evt)
{
	manage.operation="remove";
	evt.target.style.backgroundColor="blue";
	document.querySelector("#objectAddButton").style.backgroundColor="";
	document.querySelector("#formInput").removeEventListener('change',showSuggestions);
}
function showEmployeeForm(evt)
{
	manage.type="employee";
	document.querySelector("#manageHead").innerHTML="Manage Employees";
	var form=document.querySelector("#form");	
	form.style.display="block";
	form.style.overflow="hidden";
	}
function showFoodForm(evt)
{
	manage.type="food";
	document.querySelector("#manageHead").innerHTML="Manage Food Items";
	var form=document.querySelector("#form");	
	form.style.display="block";
	form.style.overflow="hidden";
}
function closeManageForm()
{
	var form=document.querySelector("#form");	
	form.style.display="none";
}