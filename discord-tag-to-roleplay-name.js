var discordTagsToRoleplayNames = {
	"spartacus#6134": "Franklin Hudson",
	"old_dude47#3377": "Harold Elliotsone",
	"AModerateFlipFlop#4974": "Henry Lee S",
	"drifters🍿#9665": "Drifters",
	"dubblebubbleguy#8460": "Dubblebubbleguy",
	"andreasersson05#6619": "Andreas Ersson",
	"Landers#7367": "Spencer Landers",
	"Ive_been_crushed_by_a_giant_bell#8544": "Dennis Edwards",
	"GodofPolitics#7746": "GodofPolitics",
	"Nick R#6802": "Nicholas Richardson",
	"Kaidon Spare For President#2299": "Kaidon Spare",
	"Kaidon Spare#2299": "Fmr. President Kaidon Spare",
};

var politicianLists = document.getElementsByClassName("politician");
var politicianLists2 = document.getElementsByClassName("politician-no-overlay");

// Find all politician tags, replace their discord tag with their roleplay name and give them an overlay for their discord tag
for(i=0;i<politicianLists.length;i++) {
	if(discordTagsToRoleplayNames[politicianLists[i].innerHTML] != null) {
		politicianLists[i].innerHTML = discordTagsToRoleplayNames[politicianLists[i].innerHTML] + ' <span class="politician-overlay"><i>'+politicianLists[i].innerHTML+'</i></span>';
	}
}

// Find all politician tags, replace their discord tag with their roleplay name but don't give them an overlay
for(i=0;i<politicianLists2.length;i++) {
	if(discordTagsToRoleplayNames[politicianLists2[i].innerHTML] != null) {
		politicianLists2[i].innerHTML = discordTagsToRoleplayNames[politicianLists2[i].innerHTML];
	}
}