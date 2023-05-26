function convertFarenheits(){
     let inputFarenheits = parseInt( document.querySelector('.intake_farenheits').value);//input
    let celsius = ((inputFarenheits  - 32) /1.8).toFixed(0);//calculation/process
    let kelvin =parseInt(celsius + 273);
     document.querySelector('.output_farenheits').innerHTML= `<b>Farenheits : <span class='bold'>${celsius}</span> and Kelvin: <span class='bold'>${kelvin}</span></b>`;//output
}
  
function convertCelsius(){
    let inputCelsius = parseInt( document.querySelector('.intake_celsius').value);//input
    let fareheits = ((inputCelsius * 1.8 ) + 32).toFixed(0);//process
    let kelvin =parseInt(document.querySelector('.intake_celsius').value) + 273;
     document.querySelector('.output_celsius').innerHTML= `<b>Farenheits :</b><span class='bold'> ${fareheits}</span><b> and Kelvin : </b><span class='bold'> ${kelvin}</span`;//output
}

// c=(f -32)/1.8 ---->fereheit to celsius
// f = (c x 1.8) +32--> celsius to fereheit
// k = c + 273 ---> celsius to kelvinin