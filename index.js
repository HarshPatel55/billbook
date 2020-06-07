var num = ["one" , "two" , "three" , "four" , "five" ,"six" , "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "forteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninteen", "twenty", "twentyone", "twentytwo", "twentythree" , "twentyfour", "twentyfive", "twentysix", "twentyseven", "twentyeight", "twentynine", "thirty"];
var pg = parseInt(prompt("Enter Page Number:"));
var a;
document.querySelector(".footer").innerHTML=pg;
var condition;
if(pg>=2){
  var pgA = pg - 1;
  a  = (15* pgA)+(15*pgA);
  condition = a *2;
}else{
  a = 0;
  condition = 30;
}

for(i=a; i<condition; i++){
  document.querySelector("." + num[i-a]).textContent = i+1;
}
