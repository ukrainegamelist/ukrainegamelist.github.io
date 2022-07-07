const gameList =[
"STONKS-9800: Stock Market Simulator","Screaming Noppy"
];



function pickLocalLanguage()
{
	const languages = navigator.languages;
	for(let i=0; i<languages.length; i++){
	        if(languages[i]=="uk-UA"){
	                const maintitle = document.getElementById("maintitle");
			if(maintitle==null){
				alert("&#&");
			}
			maintitle.innerHTML = "Українські інді-ігри";
	        }
	}
}


function showGameList()
{
	const jsonGameListFile = require('./uagames.json');
	const jsonGameList = JSON.parse(jsonGameListFile);

	alert(jsonGameList);

	const feed = document.getElementById("feed");
	if(feed==null){
		alert("error:cant find id:feed");
	}
	for(let i=0; i<jsonGameList["gameList"].length; i++){
		var p = document.createElement("p")
		var jsonGame = jsonGameList["gameList"][i];
		var text = document.createTextNode(jsonGame["name"]);
		p.appendChild(text);
		feed.appendChild(p);
	}
}

function main()
{
	pickLocalLanguage();
	showGameList();
}

document.addEventListener("DOMContentLoaded", main);
