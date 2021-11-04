const inputs=document.querySelectorAll('.angle-input');
const isTriangleBtn=document.querySelector('#is-triangle-btn');
const outputE1=document.querySelector('#output');

 function calculateSumofAngles(angle1,angle2,angle3){
  const SumofAngles=angle1+angle2+angle3;
  console.log(SumofAngles);


 }

function isTriangle() {
    const SumofAngles=calculateSumofAngles(45,45,90);  
}
isTriangleBtn.addEventListener("click",isTriangle)
