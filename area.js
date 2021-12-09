const base=document.querySelector("#base");
const height=document.querySelector("#height");
const OutputDiv=document.querySelector("#output");

const button=document.querySelector("#check");
 
function calculateArea(){
     if(base.value>0 && height.value>0){
     const baselength=Number(base.value);
     const heightDimension=Number(height.value);

     const area=(baselength*heightDimension)/2;

     OutputDiv.innerText="The area of the triangle is" +area;
}
else{
     OutputDiv.innerText="Base and height cannot be zero or negative";
}

}

button.addEventListener("click",calculateArea)

