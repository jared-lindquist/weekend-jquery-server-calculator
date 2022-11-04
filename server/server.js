const express = require('express');
const app = express();
const port = 5000;

//do we need to add a module to hold the calculation history in?
// let inventory = require('./modules/*insert route here')

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

//let calculationHistory = ({
    //num1: ${num1}.val(),
    //calcFunction: *how do we define which button was clicked?
    //num2: ${num2}.val(),
    //answer: *output value of the calc function that is run
// })

//**all calculation functions need to be in this file */


//app.get(/*insert route here, (req, res) => {
    // console.log('request for *insert route here was made');
//send back calculation history items
//so we can see it in the browser

//res.send(*insert module here) **if we use a module to store the 
//calculation history
//res.sendStatus(200);
// })

//app.post('/*insert route here, (req, res) => {

//console.log('we are posting', req.body);

//let item = req.body;
//inventory.push(item);

//send this response in every post request
//res.sendStatus(200);
// })

app.listen(port, () => {
    console.log('listening on port', port);
})

