alert('connected');
let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');
// let body = document.querySelectorAll('body');
let x = 1;
for (let btn of buttons) {
	btn.addEventListener('click', () => {
		let cmd = btn.dataset['command'];
		if(cmd === 'createlink') {
			let url = prompt("Enter the link here: ", "http:\/\/");
			document.execCommand(cmd, false, url);
        } 
        if(cmd === 'night'){
            if(x==1){
                document.querySelector("body").classList.remove("normal");
                document.querySelector("body").classList.add("night");
                output.classList.remove('output-d');
                output.classList.add('output-n');
                x = 0;
            }
            else{
                
                document.querySelector("body").classList.remove("night");
                document.querySelector("body").classList.add("normal");
                output.classList.remove('output-n');
                output.classList.add('output-d');
                x=1;
            }

        }
        else {
			document.execCommand(cmd, false, null);
		}
	})
}