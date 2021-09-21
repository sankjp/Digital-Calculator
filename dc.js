let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let display='';

for(item of buttons) {
    item.addEventListener('click',(c)=>{
        buttonText=c.target.innerText;

        if (buttonText=='X'){
            buttonText='*';
            display += buttonText;
            screen.value=display;
        }
        else if(buttonText=='C'){
            display='';
            screen.value=display;
        }
        else if (buttonText=='='){
            screen.value= eval(display);
        }
        else{
            display += buttonText;
            screen.value=display;
        }
    })
}