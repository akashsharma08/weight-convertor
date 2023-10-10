const input = document.querySelector("#input");
const error = document.querySelector("#error");
const result = document.querySelector("#result");
result.innerText =  "" ;
let errorTime ;
let resultTime ;
function updateResults(){
    if(input.value <= 0 || isNaN(input.value)){
        error.innerText = "Please enter a valid number!";
        clearTimeout(errorTime);
        errorTime = setTimeout(()=>{
            error.innerText = "";
            input.value = "";
            result.innerText =  "" ;
        }, 2000);
    }
    else{
        result.innerText = (+input.value * 0.453592).toFixed(2) ;
        clearTimeout(resultTime);
        resultTime = setTimeout(()=>{
            input.value = "";
            result.innerText =  "" ;
        }, 5000);

    }
}

input.addEventListener("input" , updateResults);