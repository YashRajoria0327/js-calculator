// to get history from keyboard

let getHistory  = () =>{
    return document.querySelector('#history-value').innerText;
}
// print history
let printHistory = (num) =>{
    document.querySelector('#history-value').innerText = num;

}
//get output from keyboard
let getOutput = () =>{
    return document.querySelector('#output-value').innerText;
}
// to print out the value on calculator
let printOutput = (num) =>{
    if (num==""){
        document.querySelector('#output-value').innerText = (num);

    }
    else{
        document.querySelector('#output-value').innerText = getFormatNumber(num);

    }
}
// get the number in format
let getFormatNumber = (num) =>{
    if(num=="-"){
        return "";
    }
    let n  =  Number(num);
    let value  = n.toLocaleString("en");
    return value;
}


// to reverse teh string in old format
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
};
// click on operator
let operator = document.getElementsByClassName("operator");
for(let i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                //output has value
                output = output.substr(0,output.length-1);
                printOutput(output);
            }

        }
        else{
            let output = getOutput();
            let history = getHistory();
            if (output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,output.length-1);
                    printOutput(output);
                }

            }
            if(output!="" || history!=""){
                output = output==""?
                
                output : reverseNumberFormat(output);
                history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
                }
                else{
                    history = history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

// click on number

let number = document.getElementsByClassName("number");
for(let i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
        let output = reverseNumberFormat(getOutput());
        if (output!=NaN){
            // if output is a number
            output= output+this.id;
            printOutput(output);
        }
    });
}




