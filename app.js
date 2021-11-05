const inputs=document.querySelectorAll('.angle-input');
const isTriangleBtn=document.querySelector('#is-triangle-btn');
const outputE1=document.querySelector('#output');

 function calculateSumofAngles(angle1,angle2,angle3){
  const sumofAngles=angle1+angle2+angle3;
//   console.log(sumofAngles);
   return sumofAngles;
    

 }

function isTriangle() {
    const sumofAngles=calculateSumofAngles(45,45,90);  
}
isTriangleBtn.addEventListener("click",isTriangle)
