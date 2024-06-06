function insertValues(numb) {
    const result = document.getElementById('result');
    result.innerHTML += numb;
        
}

function calculate() {
    const result = document.getElementById('result');
    if(result) {
       let refactorFloatNumber = eval(result.innerText);
        refactorFloatNumber = refactorFloatNumber.toFixed(2);
        result.innerHTML = refactorFloatNumber;
    }
}

function squareCalculate() {
    const result = document.getElementById('result');
    const resultValue = result.innerText;
    console.log(Math.sqrt(Number(resultValue)));
    if(isNaN(Number(resultValue))) {
        clean();
        return alert('Insira apenas um número sem operador!');
    }
    result.innerHTML =  '' + Math.sqrt(Number(resultValue));
}

function back() {
    const result = document.getElementById('result');   
    const text = result.innerText;
    result.innerHTML = text.slice(0, - 1);
}

function clean() {
    const result = document.getElementById('result');
    result.innerHTML =' ';
}

