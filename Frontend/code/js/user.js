var user = {

  id: 0,
  name: "noooName",
  email: "noEmail",
  team: {
    name: "noTeamName",
    id: "noTeamID",
  },
  position: {
    name: "noPositionName",
    id: "noPopsitionID",
  },
  gender: "noGender",
  age: 0,
  personalScore: 0,
  kudosRecived: 0,
  kudosSent: 0,
  userPicture: "./images/defUser.png",
  kudosLeft: 0


}

var dailyQuote = [

  "What do you call a fake noodle? An Impasta.",
  "How many apples grow on a tree? All of them.",
  "What do you call a Mexican who has lost his car? Carlos.",
  "Ill call you later. Don't call me later, call me Dad.",
  "What do you call an elephant that doesn't matter? An irrelephant",
  " What do you call cheese that isn't yours? Nacho Cheese.",
  "The shovel was a ground-breaking invention.  ",
  " What do you call a man with a rubber toe? Roberto. ",
  " What's brown and sticky? A stick. ",
  " Woman: Doctor, where are we going? Doctor: To the morgue. Woman: I’m not dead yet, doctor. Doctor: We’re not at morgue yet, either ",
  " Kid: but mom I don’t want to see grandma Mom: shut up and keep digging ",
  " Fatty and skinny were in a bed. Fatty rolled over and skinny was dead ",
  " What do you call a dead fly? – A flew.  ",
  " I’m not going to bungee jump. I was born because of broken rubber and i’m not gonna die the same way. ",
  "  Stephen Hawkings isn’t really dead, he’s just rebooting",
  " Whats the best thing about dead baby jokes? they never get old "

]


window.onload = function(e) {

  console.log('iyhyi');

  window.onload = randomQuote();
  document.getElementById("userName").textContent = user.name;
  document.getElementById("userEmail").textContent = user.email;
  document.getElementById("userAge").textContent = user.age;
  document.getElementById("userGender").textContent = user.gender;
  document.getElementById("userPosition").textContent = user.position.name;
  document.getElementById("userProfilePic").src = user.userPicture;
  document.getElementById("userTeam").textContent = user.team.name;
  document.getElementById("kudosRecived").textContent = user.kudosRecived;
  document.getElementById("kudosSent").textContent = user.kudosSent;
  document.getElementById("userScore").textContent = user.personalScore;
  // document.getElementById("userRankValue").textContent = ;
  // document.getElementById("teamRankValue").textContent = ;
  // Waiting to data inmput


}
