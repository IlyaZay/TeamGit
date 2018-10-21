var user = {

  id: 0,
  name: "Robert Bownnitz",
  email: "robert.it.department@gmail.com",
  team: {
    name: "Lanaco",
    id: "158118",
  },
  position: {
    name: "Head of IT",
    id: "noPositionID",
  },
  gender: "Male",
  age: 37,
  personalScore: 120,
  kudosRecived: 78,
  kudosSent: 46,
  userPicture: "./images/Robert.jpg",
  kudosLeft: 3


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

var winners = {

  nameFirst: "Sebastian de Morgan",
  pointsFirst: 346,

  nameSecound: "Nika Kralj",
  pointsSecond: 224,

  nameThird: "Aljosa Vladimirov Ivanovic",
  pointsThird: 188

}

window.onload = function(e) {

  console.log('user.js LOADED');

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
  document.getElementById("yourScore").textContent = user.personalScore;
  // document.getElementById("userRankValue").textContent = ;
  // document.getElementById("teamRankValue").textContent = ;
  // Waiting to data inmput

  console.log('kudo.js LOADED');

  window.onload = randomQuote();


  // // RECIVED KUDU
  // document.getElementById("kudoText").textContent = Kudo.text;
  // document.getElementById("kudoTheme").textContent = Kudo.theme;
  //
  // document.getElementById("kudoText2").textContent = Kudo2.text;
  // document.getElementById("kudoTheme2").textContent = Kudo2.theme;
  //
  // document.getElementById("kudoText3").textContent = Kudo3.text;
  // document.getElementById("kudoTheme3").textContent = Kudo3.theme;
  //
  // document.getElementById("kudoText4").textContent = Kudo4.text;
  // document.getElementById("kudoTheme4").textContent = Kudo4.theme;
  //
  // // SENT KUDU
  //
  // document.getElementById("kudoTextSent").textContent = KudoSent.text;
  // document.getElementById("kudoThemeSent").textContent = KudoSent.theme;
  //
  // document.getElementById("kudoText2Sent").textContent = Kudo2Sent.text;
  // document.getElementById("kudoTheme2Sent").textContent = Kudo2Sent.theme;
  //

  // LIDERBORDS

  document.getElementById("firstPlace").textContent = winners.nameFirst + "   | Points: ";
  document.getElementById("firstPoints").textContent = winners.pointsFirst;

  document.getElementById("secoundPlace").textContent = winners.nameSecound+ "  |  Points: ";
  document.getElementById("secoundPoints").textContent = winners.pointsSecond;

  document.getElementById("thirdPlace").textContent = winners.nameThird+ "   | Points: ";
  document.getElementById("thirdPoints").textContent = winners.pointsThird;






}
