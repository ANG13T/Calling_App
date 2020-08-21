
var input = document.querySelector("#phone");

let url = "localhost:1832"

window.intlTelInput(input, {
    onlyCountries: ['us'],
    utilsScript: "build/js/utils.js",
});
    
    
input.addEventListener("click", function(){
    const options = {
        method: "POST", 
        body: JSON.stringify({phoneNumber: input.value}),
        headers: {'Content-Type': 'application/json'}
    }

    fetch(url, options);
})
