const gameList =[
[
"gra 1","gra 2"
];

const feed = document.getElementById("feed");

for(let i=0; i<feed.length; i++){
	let p=document.createElement("p");
	p.textContent=feed[i];
	feed.appendChild(p);
}

alert("script is working!");
