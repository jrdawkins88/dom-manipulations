  // TASK #1 
document.querySelector("#thanks button").addEventListener('click',function(){

  alert("yowch! don't click me so hard!"); 
})

  // TASK #2
document.querySelector("#double button").addEventListener('click',function(){
var el = document.getElementById('compoundInvestment');  

el.textContent = parseInt(el.textContent) * 2; 
})

  // TASK #3
document.querySelector("#color-circle button").addEventListener('click',function(){
	var color = document.getElementById("circle-bw"); 
	if(color.style.backgroundColor === "black"){
		color.style.backgroundColor = "white";
	}  else {
		color.style.backgroundColor = "black"; 
	}

})
  // TASK #4
document.querySelector("#blow-up button").addEventListener('click',function(){
	var el = document.getElementsByClassName('circle-red')[0]; 
	if (parseInt(el.clientWidth) < 320) {
		el.style.width = parseInt(el.clientWidth) * 2 + 'px'; 
		el.style.height = parseInt(el.clientHeight) * 2 + 'px'; 
	} else {
		el.style.width = 40 + 'px';
		el.style.height = 40 + 'px'; 
	}

})
  // TASK #5
document.querySelector("#remove button").addEventListener('click',function(){
	var elements = document.querySelectorAll("li.inactive");
	for(var i = 0; i < elements.length; i++){
		var el = elements[i];
		el.parentElement.removeChild(el);
	}
})

  // TASK #6
document.querySelector("#reverse-squares button").addEventListener('click',function(){
	var elements = document.querySelectorAll("span.square"); 
	var parent = elements[0].parentElement;
	for (var i = 0; i < elements.length; i++){
		var el = elements[i];
		parent.removeChild(el); 
	}
	for (var i = elements.length - 1; i >= 0; i--) {
		var el = elements[i];
		parent.appendChild(el); 
	}
})
  // TASK #7
document.querySelector("#pig-latin button").addEventListener('click', function(){
	// var tasks = document.querySelectorAll('#tasks >li');
	// var result; 
	// var parent = document.querySelectorAll('#tasks'); 

	// for (var j = 0; j < tasks.length; i++) {
	// 	result = ''; 

	// }

	// for (var i = tasks[i].textContent.length - 1; i >= 0; i--) {
	// 	var result = += tasks[i].textContent.length[i];  

	// }

	// parent.innerHTML = (++result);  

	}); 
	// function reverse (string) {
	// 	string.split("").reverse().join("");
	// }
// })
  // TASK #8
document.querySelector("#cycle-image button").addEventListener('click',function(){

})

//Src attribute of image img.src 