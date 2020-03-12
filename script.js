//This example is implemented from Runway GPT-2 model with p5.js
//link : https://github.com/runwayml/Intro-Synthetic-Media/tree/master/Text/GPT2
// ===========================================================================
// RUNWAY
// www.ruwnayml.com

//get query from runway
let url = 'http://localhost:8001/query';
let inputVal;
let postData;
function search(ele) {
    if(event.keyCode == 13) {
        inputVal=ele.value;
         postData = { prompt: inputVal, seed: 120};
        //post data to runway
        const inputs = {"prompt": inputVal};
          
          fetch('http://localhost:8001/query', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
          })
            .then(response => response.json())
            .then(outputs => {
              const { generated_text, encountered_end } = outputs;
              const res=document.getElementById("output");
              const add=document.createElement("div");
              add.innerHTML = 
              `<div class="lists">
                 ${outputs.generated_text}
              </div>
              `  ;
              res.prepend(add)

            })
      }

 
}


