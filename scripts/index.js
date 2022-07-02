
const gameList = [
[
"STONKS-9800: Stock Market Simulator",
["pc","xbox one","ps4","ps5","nintendo switch"],
["economical simulator"],
"Simulator of 80-90s japanesee brocker",
"picture"
]
];

let feed = document.getElementById("#feed");

feed.addEventListener("load", () => {
	for(let i=0; i<gameList.length; i++){
		let item=document.createElement("p");
		item.textContent=gameList[i][0];
		feed.appendChild(item);
	}
});
