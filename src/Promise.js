function displayOutput(output){
    console.log(output);
}

let myPromise = new Promise(function(myResolve, myReject){
    let inputName = "Hanbin";
    // let inputName = "Elaine";

    if(inputName.startsWith("E")){
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value){
        displayOutput(value);
    },
    function(error){
        displayOutput(error);
    }
);