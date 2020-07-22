var adData = {
	["rentAdSpace"]: {
		["chance"]: 1,
		["src"]: "../../../../../ad.PNG",
		["link"]: "../../../../../rent-an-ad.html"
	},
	["nickForPresident"]: {
		["chance"]: 2,
		["src"]: "../../../../../nickForPresident.PNG",
		["link"]: "../../../../../rent-an-ad.html"
	},
};

function selectRandomAd() {
	var adsByChance = new Array();
	var adsByChanceLength = 0;
	for(var ad in adData) {
		for(var i=0;i<adData[ad]["chance"];i++) {
			adsByChance[adsByChanceLength] = ad;
			adsByChanceLength++;
		}
	}
	
	randomAd = adData[adsByChance[Math.floor(Math.random()*adsByChanceLength)]];
	return randomAd;
}

var leftAd = selectRandomAd();
var leftAdHTML = "";
if(leftAd.link != null) {
	leftAdHTML = "<a href="+leftAd.link+">";
}
leftAdHTML = leftAdHTML + "<img src="+leftAd.src+">";
if(leftAd.link != null) {
	leftAdHTML = leftAdHTML + "</a>";
}
document.getElementById("ad-container-left").innerHTML = leftAdHTML;

var rightAd = selectRandomAd();
var rightAdHTML = "";
if(rightAd.link != null) {
	rightAdHTML = "<a href="+rightAd.link+">";
}
rightAdHTML = rightAdHTML + "<img src="+rightAd.src+">";
if(rightAd.link != null) {
	rightAdHTML = rightAdHTML + "</a>";
}
document.getElementById("ad-container-right").innerHTML = rightAdHTML;