var second = 30;
var i,interval;
var flag, ans = 0;
var f = [0, 0, 0, 0, 0];
var x = document.getElementsByClassName("key-option");
var p = x[0].getElementsByClassName("key");
var audio;
window.addEventListener('keydown', function (e) {
	audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (e.keyCode > 48 && e.keyCode < 54) {
		i = (e.keyCode - 49);
		if (f[i] == 0) {

			audio.play();
			document.getElementById("timer").innerHTML = 30;
			document.getElementById("note").innerHTML = "  ";
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


		//when answer is matched and time is not over
		if (name.value == movies[i]) {
			p[i].style.background = "green";
			var note = document.getElementById("note").innerHTML = "yeayy!! correct";
			clearInterval(interval);
		
		}

		else if (name.value != movies[i]) //when answer does not match and time is not over
		{
			p[i].style.background = "red";
			var note = document.getElementById("note").innerHTML = "OOps!! wrong";
			document.getElementById("timer").innerHTML =" ";
		
			clearInterval(interval);
		}
	}


}

);




function countTime() {
	var zero = document.getElementById("timer").innerHTML;

interval=setInterval(start, 1000);

}


function start() {
	second = document.getElementById("timer").innerHTML;

	if (second >= 1) {
		second--;
		flag = 0;
		document.getElementById("timer").innerHTML = second;
	}
	//when time is over whether the answer is correct or not ,it is not valid
	if (second == 0) {
		flag = 1;
		p[i].style.background = "red";
		var note = document.getElementById("note").innerHTML = "OOps!! Time Up";
	}
}