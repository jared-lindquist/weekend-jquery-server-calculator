$(document).ready(onReady);

function onReady() {
    console.log('ready');

    //getCalculations(); //this could be how we keep the calc history on the DOM?
    //create click listener for the submit(=)btn
    $('#submit').on('click', addCalculation );

 }

// function getCalculations() {
//     console.log('we are getting calculations from the server');
//     $.ajax({
//         method: 'GET',
//         url: '/calculations',//matches with server js:23
//     }).then(function(response) {
//         console.log('wahoo!', response);
//         renderToDom(response);//should we use this?
//     }).catch(function(error) {
//         alert('Too bad so sad', error);
//     })
// }

//function renderToDom(do we need this?) {
    //$('#history').empty();

    //for (let output of calculations) {
        //$('#output').append(`
            //<li>
                //item.num1, item.operator, item.num2, '=',  item.answer
            //</li>
//         `)
//     }
// }

// function addCalculation() {
//     $.ajax({
//     method: 'POST',
//     url: '/calculations',
//     data: {
//         num1: ${num1 input}.val(),
//          operator: ${calcFunction} 'how do we capture this?',
//          num2: ${num2 input}.val(),
//          
//     }
//     }).then(function(response) {
//         console.log('very nice');
//         getCalculations(); //Must get updated data from server
//     }).catch(function(error) {
//         alert('not good', error)
//     })
// }