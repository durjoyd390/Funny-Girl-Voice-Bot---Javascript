var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
var text = event.results[0][0].transcript;

var output = document.getElementById("output").innerHTML=text;
read(text);
}

function read(text){
var speech = new SpeechSynthesisUtterance; speech.text = text;

speech.default=false;
speech.localservice=true;
speech.lang = "en-GB";

if(text=='hello'){
speech.text="Hello";
}
else if(text=="hi"){
speech.text="Hello";
}
else if(text=="how are you"){
speech.text="Iam fine. And you?"; 
}
else if(text=="i love you"){
speech.text="Love you too baby!"; 
}
else if(text=="love you"){
speech.text="Love you too baby!"; 
}
else if(text=="Tumi Kemon aso"){
speech.text="valo. tumi kamon aso?"; 
}
else if(text=="Tumi Kemon acho"){
speech.text="valo. tumi kamon aso?"; 
}
else if(text=="what is your name"){
speech.text="My name is Priyanka."; 
}
else if(text=="what's your name"){
speech.text="My name is Priyanka."; 
}
else if(text=="can you help me") {
speech.text="Yes. How can I help you?";
}
else if(text=="do you love me") {
speech.text="No. Because, I have a boyfriend.";
}


document.getElementById("res").innerHTML=speech.text;
window.speechSynthesis.speak(speech);
}