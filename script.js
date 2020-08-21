
var input = document.querySelector("#phone");
var button = document.getElementById("callButton");

let url = "http://localhost:1832/call"

window.intlTelInput(input, {
    onlyCountries: ['us'],
    utilsScript: "build/js/utils.js",
});
    
    
button.addEventListener("click", function(){
    if(input.value.length == 10){
        sendCall("+1" + input.value)
    }else{
        alert("Enter proper phone number!")
    }
})


function sendCall(phoneNumberValue){
    const options = {
        method: "POST", 
        body: JSON.stringify({phoneNumber: phoneNumberValue}),
        headers: {'Content-Type': 'application/json'}
    }

    fetch(url, options).then(() => {
        alert("Call sent!")
        input.value = "";
    });

}