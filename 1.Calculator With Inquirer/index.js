import chalk from 'chalk';
console.log(chalk.black("if you want to check BMI first enter your weight then your height"));
import inquirer from "inquirer";
const ans = await inquirer.prompt([
    { message: (chalk.blue("Please enter your first number")), type: "number", name: 'num1' },
    { message: (chalk.blue("Please enter your second number")), type: "number", name: 'num2' },
    {
        message: (chalk.yellow('please select an operation from the below list      (use arrow keys)')),
        type: 'list',
        name: 'operation',
        choices: ['addition', 'subtraction', 'multiplication', 'division', 'modulus', 'exponentiation', 'BMI',]
    }
]);
if (ans.operation == 'addition') {
    console.log(chalk.green(ans.num1 + ans.num2));
}
else if (ans.operation == 'subtraction') {
    console.log(chalk.green(ans.num1 - ans.num2));
}
else if (ans.operation == 'multiplication') {
    console.log(chalk.green(ans.num1 * ans.num2));
}
else if (ans.operation == 'division') {
    console.log(chalk.green(ans.num1 / ans.num2));
}
else if (ans.operation == 'modulus') {
    console.log(chalk.green(ans.num1 % ans.num2));
}
else if (ans.operation == 'exponentiation') {
    console.log(ans.num1 ** ans.num2);
}
else if (ans.operation == 'BMI') {
    console.log(ans.num1 / (ans.num2 * ans.num2));
}
