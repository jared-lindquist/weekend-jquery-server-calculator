$(document).ready(onReady);

let operator = '';

function onReady() {
    console.log('ready');

    getCalculations(); //this could be how we keep the calc history on the DOM?
    //create click listener for the submit(=)btn
    $('#submit').on('click', storeCalculation );
    $('.mathOperator').on('click', grabSign);
    $('#clear').on('click', emptyInputs);
    }
//$("button").click(function() {
//     var button = $(this).val();
//     alert(button);
// });


 function grabSign() {
    console.log('registering operator click');//correctly registering click
     operator = $(this).text();
     console.log('operator is:', operator);
 }

 

function getCalculations() {
    console.log('we are getting calculations from the server');
    $.ajax({
        method: 'GET',
        url: '/calculations',//matches with server js:23
    }).then(function(response) {
        console.log('wahoo!', response);
        renderToDom(response);//should we use this?
    }).catch(function(error) {
        alert('Too bad so sad', error);
    })//end ajax
}//end getCalculations

function renderToDom() {
    console.log('in renderToDom');
    $.ajax({
     method: 'GET',
     url: '/calculations'
    }).then( (response) => {
        $('#history').empty();

        for (let calculations of response) {
        $('#history').append(`
            <li>
           ${calculations.num1}  ${calculations.operator}
           ${calculations.num2}  =  ${calculations.answer}
            </li>
        `)//end append
      }// end for loop
    })
}//end ajax

function storeCalculation() {

    console.log('in storeCalculation');
    console.log(operator);
    $.ajax({
    method: 'POST',
    url: '/calculations',
    data: {
        num1: $('#num1').val(),
        operator: operator,
        num2: $('#num2').val(),    
    }
    }).then(function(response) {
        console.log(response);
        emptyInputs();
        renderToDom();
        getCalculations(); //Must get updated data from server
    }).catch(function(error) {
        alert('not good', error)
    })//end ajax
}//end storeCalculation

function emptyInputs() {
    console.log('emptying inputs');
    $('#num1').val('');
    $('#num2').val('');
}

