import { start } from "repl";

var i;
var f=[0,0,0,0,0];
var c=0;
window.addEventListener('keydown', function (e) {
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	console.log(audio.keyCode);
	i=(e.keyCode-49);
	if(f[i]==0)
	{
	audio.play();
	f[i]=1;
	}



}
);

window.addEventListener('keydown', function (enter) {
var x=document.getElementsByClassName("col-12");
var p=x[0].getElementsByClassName("key");
console.log(p[i]);
	if (enter.keyCode == 13) {
		var name = document.getElementById("movie");
	
		var movies = ["raees", "humpty sharma ki dulhaniya", "main tera hero", "ek villain","ae dil hai mushkil"];
		
		if (name.value == movies[i]) {
			c++;
			
			p[i].style.background="green";

		}
		else{
			p[i].style.background="red";
		}
	}


}

);


function countTime()
{
var zero=document.getElementById("timer");
zero.innerHTML=00;
start();
}


function start()
{
var second=document.getElementById("timer").innerHTML;
sec=sec+1;
if(sec==59)
{
	var note=document.getElementById("note").innerHTML="OOPS! TIME UP";

}
}