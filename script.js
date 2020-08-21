
var input = document.querySelector("#phone");

let url = "localhost:1832"

window.intlTelInput(input, {
    onlyCountries: ['us'],
    utilsScript: "build/js/utils.js",
});
    
    
input.addEventListener("click", function(){
    fetch()
})
