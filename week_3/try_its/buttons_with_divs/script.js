function doAlert() {
    alert("The 'Alert button' was clicked!");
}

function doConfirm() {
    var message;
    var choice = confirm("Do you confirm?");
    if (choice) {
        message = "You pressed OK!";
    } else {
        message = "Are you sure you want to cancel?";
    }
    alert(message);
}
