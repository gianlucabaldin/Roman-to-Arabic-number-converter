
/*  ROMAN TABLE
1	2	3	4	5	6	7	8	    9   10	20	30	40	50	60	70	80	    90	100	200	300	400	500	600	700	800	    900  1000
I	II	III	IV	V	VI	VII	VIII	IX	X	XX	XXX	XL	L	LX	LXX	LXXX    XC	C	CC	CCC	CD	D	DC	DCC	DCCC	CM   M
*/

// "Tranlate" button click event
$('#convert').click(function(e){

    // get inserted Roman value
    var romanInput = $('#toConvert').val().toUpperCase();
    // check input correctness
    if( checkInput(romanInput) ) {
        // hide (eventul) previous error message
        $('#error').hide();
        // call the converter function
        $('#converted').val( romanToArabic( romanInput ) );
    } else {
        // set to blank (eventul) previous converted text
        $('#converted').val('');
        // input not correct, show the message error
        $('#error').show();
    }

});

// check input correctness function
function checkInput(romanInput){

    // check only Roman character(s) - I / V / X / L / C / D / M
    if( /[^IVXLCDM]/.test(romanInput) ) {
        $('#errorText').html('<strong>Error</strong> with ' + romanInput + ' because it contains non ROMAN character(s)');
        return false;
    }
    // check valid Roman characters combination(s) correctness --> for example 'IM' is made with single Roman valid characters but it's no sense in Roman, since 4000-1 (3999) must be represented as 'MMMCMXCIX'
    if(! /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(romanInput) ) {
        $('#errorText').html('<strong>Error</strong> with ' + romanInput + ' because it contains non ROMAN character(s) valid combination. <br/>Tip: Remember that "IM" or "MMMM" uses single valid characters <i>but</i> they aren\'t valid because their combination(s) go against Roman number rules');
        return false;
    }
    return true;
}

// main function converts from Roman to Arabic
function romanToArabic(romanInput){

    // map the Roman characters with their arabic values
    const romanDecimal = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};    
    // force the uppercase on input avoiding double Roman mapping for the same Arabic value
    romanInput = romanInput.toUpperCase();
    // start with result = 0
    var arabicResult = 0;
    // check over every input character --> if just one char the for loop will be skipped
    for (var i = 0; i < romanInput.length-1; i++) {
        // get i-th element
        let actual = romanDecimal[romanInput[i]];
        // get nex element --> since the for loop checks for minor (not minor or equal) lenght-1, it will always be valid
        let next = romanDecimal[romanInput[i+1]];
        // if actual is major or equal than next one, add it to the sum
        if ( actual >= next) {
            arabicResult += actual;
        } else {    // if actual is minor than next one, substruct it to the sum
            arabicResult -= actual;
        }
    }
    // add the last element - if input with lenght == 1 it will be just the unique operation, otherwise if length >1 it refers to the last element of the input since it had been excluded by the for loop cycling condition ("<" and "lenght-1")
    arabicResult += romanDecimal[romanInput[romanInput.length-1]];
    // print the results over the input field
    //$('#converted').val(arabicResult);
    return arabicResult;
}

// "Test with Mocha" button click event
$('#test-mocha').click(function(){
    mocha.run();
});
