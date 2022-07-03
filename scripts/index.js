const gameList =[
"gra 1","gra 2"
];

const feed = document.getElementById("feed");

for(let i=0; i<gameList.length; i++){
	let p=document.createElement("p");
	p.textContent=gameList[i];
	feed.appendChild(p);
}

alert("script is working!");
