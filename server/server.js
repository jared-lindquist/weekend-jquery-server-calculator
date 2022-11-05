const express = require('express');
const app = express();
const port = 5000;

//do we need to add a module to hold the calculation history in?
// let inventory = require('./modules/*insert route here')

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

let calculationHistory = [];

//**all calculation functions need to be in this file  in app.use */


app.get('/calculations', (req, res) => {
    console.log('request for calculations was made');
// send back calculation history items
// so we can see it in the browser
console.log('calculationHistory');
res.send(calculationHistory);

})

app.post('/calculations', (req, res) => {

console.log('we are posting', req.body);
//call the math function
let calcObj = req.body
math(calcObj.num1, calcObj.operator, calcObj.num2, calcObj.answer);
caclulationHistory.push(answer);//am I calling this correctly?

// send this response in every post request
res.sendStatus(200);
})

app.listen(port, () => {
    console.log('listening on port', port);
})

function math() {
    if ( calcObj.operator == '*'){
    calcObj.answer =  calcObj.num1 * calcObj.num2;  
} else if (calcObj.operator == '-') {
    calcObj.answer =  calcObj.num1 - calcObj.num2;
} else if (calcObj.operator == '+') {
    calcObj.answer = calcObj.num1 + calcObj.num2;
}else if (calcObj.operator == '/') {
    calcObj.answer = calcObj.num1 / calcObj.num2;
}
}