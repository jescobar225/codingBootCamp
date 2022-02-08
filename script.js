function showConfirm() {
    let answer = window.confirm("By submitting this application you are saying that you are a good person. Is this true?");
    if (answer == true) {
        window.alert("Thank you for being a good person. Your application has been received.");
    } else {
        window.alert("Better luck next time."); 
    }
}