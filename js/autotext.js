const textEl = document.getElementById('text');
const program = "Comunicadora gráfica/  programadora";
let idx = 1;

setInterval(whiteText, 100);

function whiteText(){
    textEl.innerText = program.slice(0,idx);

    idx++;

    if(idx > program.length){
        idx = 1
    }
}


