//your JS code here. If required.


for(let i = 0; i<6; i++){
	let radio = document.createElement('input');
	let label = document.createElement('label');
	let br = document.createElement('br');
	label.innerText = `Option ${i+1}`
	
	radio.type ='radio';
	
	document.body.append(label,radio,br);
}