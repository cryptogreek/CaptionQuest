var bitch = false;
var statsScreenVisible = false;

function showImage(image){
	document.getElementById('output').innerHTML = `
	<img class="img" src="images/` + image + `">
	<br>
	`;
}
function inventoryButton(){
	if(statsScreenVisible){
		document.getElementById("inventory").style.visibility = "hidden";
		statsScreenVisible=false;
	}
	else{
		document.getElementById("inventory").style.visibility = "visible";
		statsScreenVisible=true;
	}
}