/*funcion pra poder escribir*/
function appendToDisplay(value){
    document.getElementById('calc-display').value += value;
}

/*funcion para elimar todos los numeros del contenedor */ 
function clearDisplay(){
    document.getElementById('calc-display').value ='';
}

/*borra de uno por uno los dijitos escritos ene el contenedor*/ 
function deleteLast(){
    let currentDisplay =document.getElementById('calc-display').value;
    document.getElementById('calc-display').value=currentDisplay.slice(0,-1);
}

/* */
function calculateResult(){
    let currentDisplay = document.getElementById('calc-display').value;
    try {
        
        // Reemplazar constantes
        currentDisplay = currentDisplay.replace(/π/g, "Math.PI");
        currentDisplay = currentDisplay.replace(/e/g, "Math.E");
        currentDisplay = currentDisplay.replace(/\^/g, "**");
        document.getElementById('calc-display').value=eval(currentDisplay);
    } catch (error){
        alert('Invalid Expression')
    }

}