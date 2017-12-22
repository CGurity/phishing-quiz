var optPopUpPanel_ptbubbleV2=null;
var x_ptbubbleV2=0;
var y_ptbubbleV2=0;
var IE=navigator.appName!="Netscape"?true:false;
function showHelp(B,M,N,D){if(optPopUpPanel_ptbubbleV2!=null){return 
}var E="";
if(!D){D="176"
}var F=getBubbleSize(B,M,N,D);
var K=F[0];
var G=F[1];
var I=getPopupId(B,K,G);
var C=I+"Title";
var O=I+"Text"; 
if(I!=null){var A=new getObj(I);
A.style.display="none";
document.getElementById(C).innerHTML="<strong>"+M+"</strong>";
document.getElementById(O).innerHTML=N;
A.style.width=D+"px";
A.style.display="block";
bubbleWidth=document.getElementById(I).offsetWidth;
bubbleHeight=getHeight(I);
A.style.height=bubbleHeight+"px";
var L=getScrollXY();
var J=L[0];
var H=L[1];
if(I==B+"TopRight"||I==B+"TopLeft"){A.style.top=(H+(y_ptbubbleV2-bubbleHeight))+"px"
}else{if(I==B+"BottomRight"||I==B+"BottomLeft"){A.style.top=H+y_ptbubbleV2+"px"
}}if(I==B+"TopLeft"||I==B+"BottomLeft"){A.style.left=J+(x_ptbubbleV2-bubbleWidth)+"px"
}else{if(I==B+"TopRight"||I==B+"BottomRight"){A.style.left=J+x_ptbubbleV2+"px"
}}A.style.visible="true";
optPopUpPanel_ptbubbleV2=I
}}function getBubbleSize(A,H,I,C){testId=A+"TopRight";
var B=testId+"Title";
var E=testId+"Text";
var F=new getObj(testId);
F.style.display="none";
document.getElementById(B).innerHTML="<strong>"+H+"</strong>";
document.getElementById(E).innerHTML=I;
F.style.width=C+"px";
F.style.display="block";
var G=document.getElementById(testId).offsetWidth;
var D=getHeight(testId);
F.style.display="none";
return[G,D]
}function getHeight(A){document.getElementById(A).style.height="auto";
if(document.all){gh=document.getElementById(A).offsetHeight
}else{gh=document.getElementById(A).offsetHeight
}return gh
}function getScrollXY(){var B=0,A=0;
if(typeof (window.pageYOffset)=="number"){A=window.pageYOffset;
B=window.pageXOffset
}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){A=document.body.scrollTop;
B=document.body.scrollLeft
}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){A=document.documentElement.scrollTop;
B=document.documentElement.scrollLeft
}}}return[B,A]
}function hideHelp(A){document.getElementById(A+"TopRight").style.display="none";
document.getElementById(A+"BottomRight").style.display="none";
document.getElementById(A+"TopLeft").style.display="none";
document.getElementById(A+"BottomLeft").style.display="none";
if(optPopUpPanel_ptbubbleV2!=null){document.getElementById(optPopUpPanel_ptbubbleV2).style.display="none"
}optPopUpPanel_ptbubbleV2=null
}function getPopupId(G,E,B){var F=getWindowSize();
var C=F[0];
var D=F[1];
var H=false;
if(y_ptbubbleV2>=B){H=true
}var A=false;
if(x_ptbubbleV2+E<=C){A=true
}if(H){if(A){return G+"TopRight"
}return G+"TopLeft"
}else{if(A){return G+"BottomRight"
}return G+"BottomLeft"
}}function getWindowSize(){var B=0,A=0;
if(typeof (window.innerWidth)=="number"){B=window.innerWidth;
A=window.innerHeight
}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){B=document.documentElement.clientWidth;
A=document.documentElement.clientHeight
}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){B=document.body.clientWidth;
A=document.body.clientHeight
}}}return[B,A]
}function getObj(A){if(document.getElementById){this.obj=document.getElementById(A);
this.style=document.getElementById(A).style
}else{if(document.all){this.obj=document.all[A];
this.style=document.all[A].style
}else{if(document.layers){if(document.layers[A]){this.obj=document.layers[A];
this.style=document.layers[A]
}else{this.obj=document.layers.testP.layers[A];
this.style=document.layers.testP.layers[A]
}}}}}function getMouseXY(A){if(IE){x_ptbubbleV2=window.event.x;
y_ptbubbleV2=window.event.y
}else{x_ptbubbleV2=A.clientX;
y_ptbubbleV2=A.clientY
}if(x_ptbubbleV2<0){x_ptbubbleV2=0
}if(y_ptbubbleV2<0){y_ptbubbleV2=0
}};