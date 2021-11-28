const base=document.querySelector("#base");
const height=document.querySelector("#height");
const OutputDiv=document.querySelector("#output");

const button=document.querySelector("#check");
 
function calculateArea(){
     const baselength=Number(base.value);
     const heightDimension=Number(height.value);

     const area=(baselength*heightDimension)/2;

     OutputDiv.innerText="The area of the triangle is" +area;
}



button.addEventListener("click",calculateArea)

