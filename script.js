var date=new Date();
var year=date.getFullYear();
var month=date.getMonth();
var myYear=2003;
var myMonth=7;
var actYear=year-myYear;
if (month<myMonth){
    document.getElementById("agecal").innerHTML=actYear-1;
}
else if(month>=myMonth){
    document.getElementById("agecal").innerHTML=actYear;
}

var comp1=document.getElementById("first-comp");
var comp2=document.getElementById("second-comp");
var comp3=document.getElementById("third-comp");
var comp4=document.getElementById("fourth-comp");
var comp5=document.getElementById("fifth-comp");
var comp6=document.getElementById("sixth-comp");
var comp7=document.getElementById("seventh-comp");
var comp8=document.getElementById("eighth-comp");
var comp9=document.getElementById("ninth-comp");
var comp10=document.getElementById("tenth-comp");



function retrive_details(){
    comp1.style="display:none !important;";
    comp2.style="display:none !important;";
    comp3.style="display:none !important;";
    comp4.style="display:none !important;";
    comp5.style="display:none !important;";
    comp6.style="display:none !important;";
    comp7.style="display:none !important;";
    comp8.style="display:none !important;";
    comp9.style="display:none !important;";
    comp10.style="display:flex !important;";
}
function retrive_home(){
    comp1.style="display:flex !important;";
    comp2.style="display:flex !important;";
    comp3.style="display:flex !important;";
    comp4.style="display:flex !important;";
    comp5.style="display:flex !important;";
    comp6.style="display:flex !important;";
    comp7.style="display:flex !important;";
    comp8.style="display:flex !important;";
    comp9.style="display:flex !important;";
    comp10.style="display:none !important;";
}