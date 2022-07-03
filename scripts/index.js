const gameList =[
"gra 1","gra 2"
];

document.onload = showGameList;

function showGameList()
{
	const feed = document.getElementById("feed");

	for(let i=0; i<gameList.length; i++){
		var p = document.createElement("p");
		var text = document.createTextNode(gameList[i]);
		p.appendChild(text);
		feed.appendChild(p);
	}
}
alert("script is working!");
