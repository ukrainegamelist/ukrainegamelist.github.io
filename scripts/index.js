const gameList =[
"STONKS-9800: Stock Market Simulator","Screaming Noppy"
];

function showGameList()
{
	const feed = document.getElementById("feed");
	if(feed==null){
		alert("error:cant find id:feed");
	}
	for(let i=0; i<gameList.length; i++){
		var p = document.createElement("p");
		var text = document.createTextNode(gameList[i]);
		p.appendChild(text);
		feed.appendChild(p);
	}
}

document.addEventListener("DOMContentLoaded", showGameList); 
