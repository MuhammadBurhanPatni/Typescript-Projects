import inquirer from "inquirer"

let friend= await inquirer.prompt([
    {
        name :'name',type:'string',message:"enter your friend's name"
    }

]
)

if(friend.name=="burhan"||friend.name=="shoaib")
{
    console.log(`${friend.name} is your friend`);
}
else
{
    console.log(`${friend.name} is not your friend`);
    
}