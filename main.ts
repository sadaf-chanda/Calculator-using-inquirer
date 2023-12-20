import inquirer from 'inquirer'

let runAgain=1
for(let i=0;i<runAgain;i++){
    let calculatorInputs=await inquirer.prompt([{
             type:"number",
             name:"firstNumber",
            message:"Enter First Number :"
         },{
             type:"number",
             name:"secondNumber",
             message:"Enter Second Number :"
         },{
             type:'list',
             name:'operation',
             message:"Which operation do you want to know? ",
             choices:['addition','subtraction','multiplication','division']
         }
         ])
         console.log(calculatorInputs.operation);
        
         if(calculatorInputs.operation==='addition'){
             console.log(calculatorInputs.firstNumber + calculatorInputs.secondNumber);
         }else if(calculatorInputs.operation==='subtraction'){
             console.log(calculatorInputs.firstNumber - calculatorInputs.secondNumber);
         }else if(calculatorInputs.operation==='multiplication'){
             console.log(calculatorInputs.firstNumber * calculatorInputs.secondNumber);
         }else if(calculatorInputs.operation==='division'){
           console.log(calculatorInputs.firstNumber / calculatorInputs.secondNumber);
         }
        
    let ques=await inquirer.prompt({
        type:"input",
        name:"runAgain",
        message:" do you want to perform another calculation?"
    })
   // console.log(ques.runAgain);
   if(ques.runAgain==='yes'){
    //console.log('you are running again');
    runAgain +=1;

   }


}