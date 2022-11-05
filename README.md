# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?
PROJECT NAME: Weekend-Jquesry-server-side-calculator

What problem did you solve?
    This project solved the client's problem of not being able to calculate artithmetic functions and store a history of calculations made.

How did we solve the problem?
    We solved this client's problem by creating a client facing calculator application. This application allows the user to input 2 numbers, choose a calculation method of either addition, subtraction, multiplication, or division. Upon entering the inputs and clicking the equals (=) button on the DOM, the calculation request is sent to the server where the arithmetic function runs and returns the calculation in a list that appends in the DOM underneath the input fields. Every time a new calculation is submitted, the list of calculations is updated to include the most recent calculation.

Prerequisites
    node.js
    GitHub
    VS Code
    Terminal

Installation
    1. Fork and clone the repository supplied via GitHub in Terminal
    2. Open the repository in VSCode by typing code . in Terminal
    3. Once opened in VS Code, in Terminal type the command
       npm install express
    4. This should install an instance of Express, allowing the user to host a local server on their machine.
    5. If entered correctly, Terminal should read 'Listening on port 5000.
    6. Open a browser, and in the address type: localhost:5000, this should open the application in the browser.

Usage
    1. Use the input fields to type in numbers, and the operator buttons (+, -, *, /) to calculate arithmetic. Upon clicking the equals (=) button, the calculation will appear in the browser underneath the 'Amswer History" prompt. example: 2 + 2 = 4

Built with:

    Visual Studio Code
    Node.js
    Express

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
