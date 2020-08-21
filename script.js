
var input = document.querySelector("#phone");

window.intlTelInput(input, {
    onlyCountries: ['us'],
    utilsScript: "build/js/utils.js",
});
    
    
input.addEventListener("click", function(){
    //fetch from server
    client.calls
        .create({
            url: 'http://demo.twilio.com/docs/classic.mp3',
            to: '+13107033228',
            from: '+12056357385'
        })
        .then(call => console.log(call.sid));
})
