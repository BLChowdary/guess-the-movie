var second=10;
var i;
var flag;
var f = [0, 0, 0, 0, 0];
var x = document.getElementsByClassName("key-option");
var p = x[0].getElementsByClassName("key");

window.addEventListener('keydown', function (e) {
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
if(e.keyCode>48 && e.keyCode<54){	
	i = (e.keyCode - 49);
	if (f[i] == 0) {
		
		audio.play();
		document.getElementById("timer").innerHTML=10;
		document.getElementById("note").innerHTML ="  ";
        countTime();
		f[i] = 1;
		
	}

}

}
);

document.getElementById("movie").addEventListener('keydown', function (enter) {
	

	if (enter.keyCode == 13) {
		var name = document.getElementById("movie");

		var movies = ["raees", "humpty sharma ki dulhaniya", "main tera hero", "ek villain", "ae dil hai mushkil"];

		if (name.value == movies[i]) {
            p[i].style.background = "green";
            var note = document.getElementById("note").innerHTML = "yeayy!! correct";


		}
	
		else{
			p[i].style.background = "red";
            var note = document.getElementById("note").innerHTML = "OOps!! wrong";

        }
	}


}

);


function countTime() {
	var zero = document.getElementById("timer").innerHTML;

       setInterval( start, 1000);

}


function start() {
    second = document.getElementById("timer").innerHTML;
  
if(second>=1){
	second--;
	flag=0;
    document.getElementById("timer").innerHTML=second;
}
if(second==0){
	flag=1;
	 p[i].style.background = "red";
	var note = document.getElementById("note").innerHTML = "OOps!! Time Up";
}
}