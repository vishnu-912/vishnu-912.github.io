var data1={image:"./IMAGE.jpg",name : "Vishnu Vardhan Reddy",designation:"Software Engineer"};
var data2={image: "./IMAGE2.jpg",name : "VISHNU",designation:"Software Developer"};
var isdata1= true;
var displaydata;
var changemypic = function(){
    if (isdata1){
        displaydata=data2;
        isdata1 = false;
    }
    else{
        displaydata = data1;
        isdata1=false;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydesig").innerHTML=displaydata.designation;
}