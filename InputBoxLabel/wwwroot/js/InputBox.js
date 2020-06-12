
function checkInputBoxPlacholderNeeded() {
    console.log("Looking for input box");

    var inputs = $(".InputBox");
    console.log("Input box's found: " + inputs.length);
    for (var i = 0; i < inputs.length; i++) {
        inputBoxPlaceHolder(inputs[i]);
    }
    inputs = $(".DropDownPlaceHolder");
    console.log("Input box's found: " + inputs.length);
    for (var ii = 0; i < inputs.length; ii++) {
        inputBoxPlaceHolder(inputs[ii]);
    }
}

function inputBoxPlaceHolder(inputBox) {

    var labelText = "";
    var a = $(inputBox).val().trim().length;

    if ($(inputBox).hasClass("InputEntered") === false && a > 0) {
        $(inputBox).addClass("InputEntered");

        labelText = $('label[for=' + inputBox.id + ']');
        labelText.addClass("InputEnterLabelViewable");
        $(labelText).text($(inputBox).data("placholder"));
    } else if (a === 0) {
        $(inputBox).removeClass("InputEntered");
        labelText = $('label[for=' + inputBox.id + ']');
        labelText.removeClass("InputEnterLabelViewable");
    }
}