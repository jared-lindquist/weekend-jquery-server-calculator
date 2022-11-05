const express = require('express');
const app = express();
const port = 5000;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

let calculationHistory = [];

//**all calculation functions need to be in this file  in app.post */


app.get('/calculations', (req, res) => {
    console.log('request for calculations was made');
// send back calculation history items so we can see it in the browser
console.log('calculationHistory');
res.send(calculationHistory);//send array to ajax in renderToDom function

})

app.post('/calculations', (req, res) => {
    console.log('we are posting', req.body);
    //assign data from client.js POST request to a variable
    let calcObj = req.body

    if ( calcObj.operator == '*'){
    calcObj.answer =  calcObj.num1 * calcObj.num2;  //calcObj.answer is being created as a property here
    } else if (calcObj.operator == '-') {
    calcObj.answer =  calcObj.num1 - calcObj.num2;
    } else if (calcObj.operator == '+') {
    calcObj.answer = calcObj.num1 + calcObj.num2;
    }else if (calcObj.operator == '/') {
    calcObj.answer = calcObj.num1 / calcObj.num2;
    }

//push object to the calculationHistory array
calculationHistory.push(calcObj);
console.log('the latest calculations are:', calcObj);
res.sendStatus(200);
})

app.listen(port, () => {
    console.log('listening on port', port);
})
