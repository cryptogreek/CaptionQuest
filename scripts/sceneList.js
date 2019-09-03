function writeText (text) {
	document.getElementById('output').innerHTML += `
	<p class='rawText'>` + text + `</p>
	`;
}

function writeScene(scene) {
	document.getElementById('output').innerHTML = '';
	switch(scene) {
		case "beginning" : {
			writeText("Hello and welcome to your new Sissy Life! This is some placeholder text to basically just ask \
				the question of whether or not things freak out at all when I add a lot of text, and to see if I need \
				to use the enter key for a lot of stuff. I might end up using it anyway for code-readability, though.")
			document.getElementById('output').innerHTML += `<div class="choiceContainer">
			<p class="choiceText" onclick="writeScene('choseBitch')">
			Bitch
			</p>
			&emsp;&emsp;
			<p class="choiceText" onclick="writeScene('bitchCheck')">
			Kennel
			</p>
			</div>
			`;
			break;
		}
		case "characterCreate" : {
			writeText("You'd like to get started, then? Alright, we'll get right to it! <br>\
				First, please enter your personal information below!");
			document.getElementById('output').innerHTML +=`<div style="line-height: 10%">
			<p>Name: <input type="text" id="playerNameSubmission" value="Sammy"></p>
			<p>STR: <input type="text" id="playerSTRSubmission" value="1"></p>
			<p>DEX: <input type="text" id="playerDEXSubmission" value="3"></p>
			<p>INT: <input type="text" id="playerINTSubmission" value="2"></p>
			<p>CHA: <input type="text" id="playerCHASubmission" value="5"></p>
			<p>SUB: <input type="text" id="playerSUBSubmission" value="5"></p>
			<p class="choiceText" onclick="writeScene(acceptCharCreate)"style="line-height:125%">Accept</p>
			</div>
			`;
			break;
		}
		case "acceptCharCreate" : {
			
		}
		case "bitchCheck" : {
			if(bitch === true){
				writeScene('noGoingBack');
			}
			else{
				writeScene('choseKennel');
			}
			break;
		}
		case "noGoingBack" : {
			writeText("Did you really think I wouldn't notice?")
			writeText("You're a bitch now, girl.")
			document.getElementById('output').innerHTML += `
			<p class="choiceText" onclick="showImage('pikapeek.png')">
			Get Off
			</p>
			`;
			break;
		}
		case "choseBitch" : {
			writeText("A new bitch, is it?");
			writeText("How cute... Why not come right over here, hun?");
			bitch = true;
			document.getElementById('bitchPlayer').className="statsList";
			document.getElementById('output').innerHTML += `
			<p class="choiceText" onclick="showImage('pikapeek.png')">
			Get Off
			</p>
			`;
			break;
		}
		case "choseKennel" : {
			writeText("A new breaker?")
			writeText("As if. Just go suck someone off.")
			document.getElementById('output').innerHTML += `
			<p class="choiceText" onclick="showImage('guda.png')">
			Suck Off
			</p>
			`;
			break;
		}
	}
}