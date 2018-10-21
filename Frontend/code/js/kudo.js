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
var Kudo = {

  id: 0,
  text: "The Best Co-Worker ever, brings me coffee every morning ;) ",
  // date : date.getDate(),
  senderID: 0,
  reciverID: 0,
  theme: "Just a favour",
  answered: false,

}
var Kudo2 = {

  id: 0,
  text: "Repaired my server ! Ty very much sir! ",
  // date : date.getDate(),
  senderID: 0,
  reciverID: 0,
  theme: "Maintainance",
  answered: false,

}
var Kudo3 = {

  id: 0,
  text: "I can't express how good your instructions were! Thank you very much! ",
  // date : date.getDate(),
  senderID: 0,
  reciverID: 0,
  theme: "Information Sharing",
  answered: false,

}
var Kudo4 = {

  id: 0,
  text: "I was strugling 10h on my code, and he fixed it in just few minutes! Awesome guy!",
  // date : date.getDate(),
  senderID: 0,
  reciverID: 0,
  theme: "Information Sharing",
  answered: false,

}
var KudoSent = {

  id: 0,
  text: "Thank you for the Call. Much Apreciated! ",
  // date : date.getDate(),
  senderID: 0,
  reciverID: 0,
  theme: "Information Sharing",
  answered: false,

}
var Kudo2Sent = {

  id: 0,
  text: "That buissnis idea was exelt! Thank you for advice!",
  // date : date.getDate(),
  senderID: 0,
  reciverID: 0,
  theme: "Information Sharing",
  answered: false,

}
window.onload = function(e) {
  console.log('kudo.js LOADED');

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


  // RECIVED KUDU
  document.getElementById("kudoText").textContent = Kudo.text;
  document.getElementById("kudoTheme").textContent = Kudo.theme;

  document.getElementById("kudoText2").textContent = Kudo2.text;
  document.getElementById("kudoTheme2").textContent = Kudo2.theme;

  document.getElementById("kudoText3").textContent = Kudo3.text;
  document.getElementById("kudoTheme3").textContent = Kudo3.theme;

  document.getElementById("kudoText4").textContent = Kudo4.text;
  document.getElementById("kudoTheme4").textContent = Kudo4.theme;

  // SENT KUDU

  document.getElementById("kudoTextSent").textContent = KudoSent.text;
  document.getElementById("kudoThemeSent").textContent = KudoSent.theme;

  document.getElementById("kudoText2Sent").textContent = Kudo2Sent.text;
  document.getElementById("kudoTheme2Sent").textContent = Kudo2Sent.theme;
}
