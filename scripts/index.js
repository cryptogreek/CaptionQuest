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
		document.getElementById("statsScreen").style.visibility = "hidden";
		statsScreenVisible=false;
	}
	else{
		document.getElementById("statsScreen").style.visibility = "visible";
		statsScreenVisible=true;
	}
}