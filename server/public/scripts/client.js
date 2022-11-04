$(document).ready(onReady);

function onReady() {
    console.log('ready');

    //getCalculations(); //this could be how we keep the calc history on the DOM?
    //create click listener for the submit(=)btn
    //create click listeners for the (+, -, *, %)btns
    //
}

//function getCalculations() {
    //console.log('we are getting calculations from the server);
    //$.ajax({
        //method: 'GET',
        //url: /*insert route here
    //}).then(function(response) {
        //console.log('wahoo!', response);
        //renderToDom(response);//should we use this?
    //}).catch(function(error) {
        //alert('Too bad so sad :()
//     })
// }

//function renderToDom(do we need this?) {
    //$('#history').empty();

    //for (let output of calculations) {
        //$('#output').append(`
            //<li>
                //place holder for num1, calc function, num2, output
            //</li>
//         `)
//     }
// }

//function addCalculation() {
    //$.ajax({
    //method: 'POST',
    //url: *insert route here
    //data: ${num1 input}.val(),
        //  ${calcFunction} how do we capture this?,
        //  ${num2 input}.val(),
        //  ${output}.val()
    // }).then(function(response) {
        //console.log('very nice');
        //getCalculations(); //Must get updated data from server
    // }).catch(function(error) {
        //alert('not good', error)
    // })
// }