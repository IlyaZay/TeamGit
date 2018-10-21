function goToProfile(){

  // alert("GoingToProfile");

  window.open("../userPage.html","_self");

}

function randomQuote(){

  // alert("GENERATING RANDOM QUOTE");
  document.getElementById("dailyQuote").textContent = dailyQuote[Math.floor(Math.random() * dailyQuote.length)];

}

function logOutButton(){


  alert("LOG OUT");
  window.close(this);
  window.open("./login.html");


}

function openLeaderbords(){

  // alert("OPENING LEADERBORDS");
  window.open("./leaderbords.html","_self");


}
