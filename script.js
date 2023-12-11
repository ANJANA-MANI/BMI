function bmi_calc()
{
    weight=document.getElementById("weight").value;
    height=document.getElementById("height").value;
    bmi=((weight)/(height/100)**2).toFixed(2);
    console.log(bmi);
    element=document.getElementById("op");
    element.textContent=bmi;
    element_content=document.getElementById("op_content");
    var slider = document.getElementById("myRange");
     slider.value=bmi;

 
    if(bmi<18.5)
    {

    element.classList.add('fade-out');

// Delay the innerHTML change to allow the transition to start
setTimeout(() => {

    element_content.innerHTML=`<h1 style="color:#F4D03F;">Time to grab a bite...<i class="fa-solid fa-bowl-food fa-fade"></i> </h1><P>By maintaining a healthy weight, you lower your risk of developing serious health problems.</P>`
    element.style.color="#FFC300";
    element.style.background="lightyellow";
    element.style.width="120px";
    element.classList.remove('fade-out');
     }, 500);


//element_content.innerHTML=`<h1 style="color:#FFC300;">Time to grab a bite </h1><P>By maintaining a healthy weight, you lower your risk of developing serious health problems.</P>`
//element.style.color="#FFC300";
//element.style.background="lightyellow";
//element.style.width="120px";

}
    else if((bmi>=18.5)&&(bmi<24.9))
    {
        element_content.innerHTML=`<h1 style="color:green;">Great Shape...<i class="fa-solid fa-person-circle-check fa-beat-fade"></i></h1><P>By maintaining a healthy weight, you lower your risk of developing serious health problems.</P>`
        element.style.color="green";
        element.style.background="lightgreen";
        element.style.width="120px";
    }

    else if((bmi>24.9)&&(bmi<=29.9))
    {
        element_content.innerHTML=`<h1 style="color:orange">Overweight.....<i class="fa-solid fa-person-circle-exclamation fa-fade"></i></h1><P>By maintaining a healthy weight, you lower your risk of developing serious health problems.</P>`
        element.style.color="orange";
        element.style.background="lightorange";
        element.style.width="120px";
        
    }


    else if((bmi>29.9))
    {
        element_content.innerHTML=`<h1 style="color:#922B21">Time to run!...<i class="fa-solid fa-person-running fa-bounce fa-danger"></i></h1><P>By maintaining a healthy weight, you lower your risk of developing serious health problems.</P>`
        element.style.color="#922B21";
        element.style.background="#F5B7B1";
        element.style.width="120px";
    }
    
}


slider.oninput = function() {
output.innerHTML = this.value;
}