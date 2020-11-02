var ba=["Chrome","Firefox","Safari","Opera","Edge"];
var b,ua=navigator.userAgent;
for(var i=0; i<ba.length;i++){
    if(ua.indexOf(ba[i])>-1){
        b=ba[i];
        break;
    }
}
document.getElementById("brow").innerHTML="Your Browser : "+b;
if(b=="Safari"){
    document.getElementById("im").src=b+".png";
    document.getElementById("im").width="500";
    document.getElementById("im").style.marginRight="200";
}
else{
document.getElementById("im").src=b+".png";
}