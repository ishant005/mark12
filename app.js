const inputs=document.querySelectorAll('.angle-input');
const isTriangleBtn=document.querySelector('#is-triangle-btn');
const outputEl=document.querySelector('#output');

 function calculatesumOfAngles(angle1,angle2,angle3){
   const sumOfAngles=angle1+angle2+angle3;
  //  console.log(sumOfAngles);
   return sumOfAngles;
 }



 function isTriangle(){
     if(inputs[0].value>0 && inputs[1].value>0 && inputs[2].value>0 ){
    const sumOfAngles=calculatesumOfAngles(Number(inputs[0].value),
    Number(inputs[1].value),Number(inputs[2].value));
    //  console.log(typeof inputs[0].value,inputs[1].value,inputs[2].value);
    // console.log(sumOfAngles);
    if(sumOfAngles===180){
     
      outputEl.innerText="yay,this is traingle";
    }else{
     outputEl.innerText="oh The angles dont form a triangle"
    }
  }else{
    outputEl.innerText="Angle cannot be zero or negative in triangle"
  }
  }
 isTriangleBtn.addEventListener("click",isTriangle)