let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let layer4 = document.getElementById("layer4");
let layer5 = document.getElementById("layer5");
let candle = document.getElementById("candle");
let layer = 0;
let total = 0;

function addChocolate(){
    var l11 = document.getElementById("l1");
    document.getElementById("chocolateBill").innerHTML = l11.innerText;
   layer++;
   total += 300;
     if(layer == 1){
        layer1.style.visibility = "visible";
        layer1.style.background = "rgb(250, 118, 23)";
     }
     else if(layer == 2){
        layer2.style.visibility = "visible";
        layer2.style.background = "rgb(250, 118, 23)"; 
     }
     else if(layer == 3){
        layer3.style.visibility = "visible";
        layer3.style.background = "rgb(250, 118, 23)"; 
     }
     else if(layer == 4){
        layer4.style.visibility = "visible";
        layer4.style.background = "rgb(250, 118, 23)"; 
     }
     else if(layer == 5){
        layer5.style.visibility = "visible";
        layer5.style.background = "rgb(250, 118, 23)"; 
     }
     else if(layer > 5){
        return null;
         /*
         total -= 300;
      
         document.getElementById("total").innerHTML = "Total --------" +total;*/
     }
 }
 document.getElementById("chocobtn").addEventListener("click", chocolatefn);
 function addStrawberry(){
    var l12 = document.getElementById("l2");
    document.getElementById("strawberryBill").innerHTML = l12.innerText;
  layer++;
   total += 100;
      if(layer == 1){
         layer1.style.visibility = "visible";
         layer1.style.background = "rgb(247, 102, 126)";
      }
      else if(layer == 2){
         layer2.style.visibility = "visible";
         layer2.style.background = "rgb(247, 102, 126)";
      }
      else if(layer == 3){
         layer3.style.visibility = "visible";
         layer3.style.background = "rgb(247, 102, 126)";
      }
      else if(layer == 4){
         layer3.style.visibility = "visible";
         layer4.style.background = "rgb(247, 102, 126)";
      }
      else if(layer == 5){
         layer5.style.visibility = "visible";
         layer5.style.background = "rgb(247, 102, 126)";
      }
      else if(layer > 5){
        return null;
         /*total -= 100;
         candle.style.visibility = "visible";
         document.getElementById("total").innerHTML = "Total --------" +total;*/
      }
 }
 document.getElementById("berrybtn").addEventListener("click", strawberryfn) 
  function addButterscotch(){
    var l13 = document.getElementById("l3");
    document.getElementById("butterscotchBill").innerHTML = l13.innerText;
  layer++;
   total += 200;
      if(layer == 1){
         layer1.style.visibility = "visible";
         layer1.style.background = "rgb(250, 250, 136)";
      }
      else if(layer == 2){
         layer2.style.visibility = "visible";
         layer2.style.background = "rgb(250, 250, 136)";
      }
      else if(layer == 3){
         layer3.style.visibility = "visible";
         layer3.style.background = "rgb(250, 250, 136)";
      }
      else if(layer == 4){
         layer3.style.visibility = "visible";
         layer4.style.background = "rgb(250, 250, 136)";
      }
      else if(layer == 5){
         layer5.style.visibility = "visible";
         layer5.style.background = "rgb(250, 250, 136)";
      }
      else if(layer > 5){
        return null;
         /*total -= 200;
         candle.style.visibility = "visible";
         document.getElementById("total").innerHTML = "Total --------" +total;*/
      }
 }
 document.getElementById("scotchbtn").addEventListener("click", butterscotchfn)

 function addVannila(){
    var l14 = document.getElementById("l4");
    document.getElementById("vannilaBill").innerHTML = l14.innerText;
  layer++;
   total += 250;
      if(layer == 1){
         layer1.style.visibility = "visible";
         layer1.style.background = "#ffffff";
      }
      else if(layer == 2){
         layer2.style.visibility = "visible";
         layer2.style.background = "#ffffff";
      }
      else if(layer == 3){
         layer3.style.visibility = "visible";
         layer3.style.background = "#ffffff";
      }
      else if(layer == 4){
         layer3.style.visibility = "visible";
         layer4.style.background = "#ffffff";
      }
      else if(layer == 5){
         layer5.style.visibility = "visible";
         layer5.style.background = "#ffffff";
      }
      else if(layer > 5){
        return null;
        /* total -= 250;
         candle.style.visibility = "visible";
         document.getElementById("total").innerHTML = "Total --------" +total;*/
      }
 }
 document.getElementById("vannilabtn").addEventListener("click", vannilafn)

 function addRedvelvet(){
    var l15 = document.getElementById("l5");
    document.getElementById("redvelvetBill").innerHTML = l15.innerText;
  layer++;
   total += 350;
      if(layer == 1){
         layer1.style.visibility = "visible";
         layer1.style.background = "rgb(247, 46, 46)";
      }
      else if(layer == 2){
         layer2.style.visibility = "visible";
         layer2.style.background = "rgb(247, 46, 46)";
      }
      else if(layer == 3){
         layer3.style.visibility = "visible";
         layer3.style.background = "rgb(247, 46, 46)";
      }
      else if(layer == 4){
         layer3.style.visibility = "visible";
         layer4.style.background = "rgb(247, 46, 46)";
      }
      else if(layer == 5){
         layer5.style.visibility = "visible";
         layer5.style.background = "rgb(247, 46, 46)";
      }
      else if(layer > 5){
        return null;
        /* total -= 100;
         candle.style.visibility = "visible";
         document.getElementById("total").innerHTML = "Total --------" +total;*/
      }
 }
 function buy(){
    if(layer >= 5){
        candle.style.visibility = "visible";
        document.getElementById("total").innerHTML = "Total --------" +total;
    }
 }
