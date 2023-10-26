function convertFarenheits(){
     let inputFarenheits = parseInt(document.querySelector('.intake_farenheits').value);
     let celsius = ((inputFarenheits - 32) / 1.8).toFixed(0);
     let kelvin = parseInt(celsius) + 273; // Corrected this line
 
     switch(true) {
          case (celsius < 500):
               document.querySelector('.output_farenheits').innerHTML =  `<b>Celsius : <span class='bold'>${celsius}<i class="bi bi-fire" style="color:red"></i></span> and Kelvin: <span class='bold'>${kelvin}</span></b>`;
              break;       
      
          case (celsius >= 500 && celsius <= 800):
               document.querySelector('.output_farenheits').innerHTML =  `<b>Celsius : <span class='bold'>${celsius}<i class="bi bi-fire" style="color:red"></i></span> and Kelvin: <span class='bold'>${kelvin}</span></b>`;
              break;
      
          case (celsius > 800 && celsius <= 1100):
               document.querySelector('.output_farenheits').innerHTML =  `<b>Celsius  : <span class='bold'>${celsius}<i class="bi bi-fire" style="color:orange"></i></span> and Kelvin: <span class='bold'>${kelvin}</span></b>`;
              break;
      
          case (celsius > 1100 && celsius <= 1300):
               document.querySelector('.output_farenheits').innerHTML =  `<b>Celsius  : <span class='bold'>${celsius}<i class="bi bi-fire" style="color:yellow"></i></span> and Kelvin: <span class='bold'>${kelvin}</span></b>`;
              break;
      
          case (celsius > 1300):
               document.querySelector('.output_farenheits').innerHTML =  `<b>Celsius  : <span class='bold'>${celsius}<i class="bi bi-fire" style="color:blue"></i></span> and Kelvin: <span class='bold'>${kelvin}</span></b>`;
              break;
      
          default:
               document.querySelector('.output_farenheits').innerHTML = `
                  <h5>error input value</h5>
                  <br>
                  <img src="https://i.postimg.cc/T3YBZqQc/Warning-rafiki.png"
                  style=" width: 200px;
                  height: 200px;
                  object-fit: contain;
                  aspect-ratio: 2/5;">`;
      }
   
 }
 
  
function convertCelsius(){
    let inputCelsius = parseInt( document.querySelector('.intake_celsius').value);//input
    let fareheits = ((inputCelsius * 1.8 ) + 32).toFixed(0);//process
    let kelvin =parseInt(document.querySelector('.intake_celsius').value) + 273;
     document.querySelector('.output_celsius').innerHTML= `<b>Farenheits :</b><span class='bold'> ${fareheits}</span><b> and Kelvin : </b><span class='bold'> ${kelvin}</span`;//output
}

function refresh(){
     location.reload()
}

// c=(f -32)/1.8 ---->fereheit to celsius
// f = (c x 1.8) +32--> celsius to fereheit
// k = c + 273 ---> celsius to kelvinin