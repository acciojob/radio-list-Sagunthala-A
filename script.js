let div = document.createElement('div');
document.body.append(div)

for(let i = 0; i<6; i++){
	let radio = document.createElement('input');
	let label = document.createElement('label');
	let br = document.createElement('br');
	label.innerText = `Option ${i+1}`;
	
	radio.type ='radio';
	radio.name= 'ans';
	if((i+1)%2 == 0){
		radio.setAttribute('class','input')
	}
	if(i == 1){
		radio.disabled = true;
	}
	if(i==2){
		radio.checked=true;
	}
	
	div.append(radio,label,br);
}