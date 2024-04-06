#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue.white.bold.italic("-------(WELCOME TO MY TO-DO LIST PROJECT)-------"));
console.log("______________________________________________");
console.log();

let toDos: string[] = [];
let condition = true;

while (condition) {
    let addTask = await inquirer.prompt([
        {
            message: "What do you want to do with your To-Dos?",
            type: "list",
            name: "operator",
            choices: ["Add", "View", "Update", "Delete", "Exit"]
        }
    ]);

    if (addTask.operator === "Add") {
        let add = await inquirer.prompt([
            {
                message: "Please add some items:",
                type: "input",
                name: "addItem"

            }

        ]);
        toDos.push(add.addItem);
        console.log(chalk.cyan("Item added successfully!"), toDos);
    } else if (addTask.operator === "View") {
        console.log(chalk.redBright("Your To-Dos:"));
        console.log(chalk.yellowBright(toDos));
    } else if (addTask.operator === "Update") {
        let update = await inquirer.prompt([
            {
                message: "Select item to update:",
                type: "list",
                name: "updateItem",
                choices: toDos
            },
            {
                message: "Update Item:",
                type: "input",
                name: "updatedItem"
            }
        ]);
        let index = toDos.indexOf(update.updateItem);
        if (index !== -1) {
            toDos[index] = update.updatedItem;
            console.log(chalk.magenta("Item updated successfully!"));
        } else {
            console.log(chalk.blue("Item not found!"));
        }

    } else if (addTask.operator === "Delete") {
        let del = await inquirer.prompt([
            {
                message: "Select item to delete:",
                type: "list",
                name: "deleteItem",
                choices: toDos
            }
        ]);
        let index = toDos.indexOf(del.deleteItem);
        if (index !== -1) {
            toDos.splice(index, 1);
            console.log("Item deleted successfully!");
        } else {
            console.log(chalk.red("Item not found!"));
        }
    } else if (addTask.operator === "Exit") {
        condition = false;
        console.log(chalk.yellow("Exiting To-Do List..."));
    }
}

console.log();
console.log(chalk.bgGrey.green("-------(THE END!)-------"));
console.log(chalk.white("________________________"));