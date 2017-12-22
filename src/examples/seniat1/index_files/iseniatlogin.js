
var altoVentana = screen.height;
var anchoVentana = screen.width;


var browsertype=navigator.appName;

if(browsertype.indexOf("Explorer")==-1) // Netscape/Firefox/Opera
{
    altoVentana = altoVentana - 60;
    anchoVentana = altoVentana - 14;
}

function abrirVentanaCompleta(url){
    parametros  = 'width='+(screen.width*0.99);
    parametros += ', height='+(screen.height*0.95);
    parametros += ', top=0, left=0';
    parametros += ',scrollbars=yes';
    
    newwin=window.open(url,"iSeniat", parametros);
    if (window.focus) {newwin.focus()}
    
     return false;
}

function ventanaLogueo(contexto)
{
    var mitadAlto = (screen.height - 370)/2;  //top
    var mitadAncho = (screen.width - 310)/2; //left
 
    var prov_win = window.open (contexto+"/cuadroLogueo.jsp", "loginWindow","width=310,height=370,scrollbars=auto,statusbar=no");
    prov_win.moveTo (mitadAncho,mitadAlto);
    prov_win.focus();
 
}

/** Permite enviar el funcionario al pulsar enter en el campo de password */
function pasaEnter(e){
    var keynum

    if(window.event) // IE
    {
        keynum = e.keyCode
    }
    else if(e.which) // Netscape/Firefox/Opera
    {
        keynum = e.which
    }
    
    if (keynum == 13){
        document.forms[0].elements["clave"].focus();
    }
   
}

/** Permite enviar el funcionario al pulsar enter en el campo de password */
function pasaEnterK(e){
    var keynum

    if(window.event) // IE
    {
        keynum = e.keyCode
    }
    else if(e.which) // Netscape/Firefox/Opera
    {
        keynum = e.which
    }
    
    if (keynum == 13){
        document.forms[0].elements["kaptcha"].focus();
    }
   
}
/** Permite enviar el funcionario al pulsar enter en el campo de password */
function verificaEnter(e){
    var keynum

    if(window.event) // IE
    {
        keynum = e.keyCode
    }
    else if(e.which) // Netscape/Firefox/Opera
    {
        keynum = e.which
    }
    
    if (keynum == 13){
        validarIngreso();
    }
   
}

function registroNat(servidor){
    abrirVentanaCompleta(servidor+"registroportal/inicio.do");
    
}

function registroJur(servidor){
    abrirVentanaCompleta(servidor+"registroportal/inicio.do");
}

function olvidoClave(servidor){
//    abrirVentanaCompleta(servidor+"recclave/buscarUsuario.jsp")
    abrirVentanaCompleta(servidor+"recclave/inicio.do")
}

function olvidoTodo(servidor){
    abrirVentanaCompleta(servidor+"recusuarioclave/inicio.do")
}


function ventana(contexto)
{
var mitadAlto = (screen.height - 370)/2;
var mitadAncho = (screen.width - 310)/2;
 
var prov_win = window.open (contexto+"/contribuyente.do", "loginWindow");
    prov_win.moveTo (mitadAncho,mitadAlto);
    prov_win.focus();
 
}


function validarIngreso()
{ 
    var formulario = document.getElementById("consultaForm");

    /*if (formulario.site2pstoretoken.value == "") {
        formulario.site2pstoretoken.value = "v1.2~2E87F3B9~16A85667A175AF47F8FA5A8C39ECD50C5CE6E8737391E7D07AF455C1A81227B04758EA14C496BE981B6FE7E51402F2E8CDE3A949170474B783A496C077100C3A58517E804D1EB31DCCD8B9912CFF54529C16F0FFA2C13B28F319B9C8003C8793717F4C26A7AE840EE11242EE767A98F431163EDB51AF76600BFF1F48907B1700CB9961D69D56421D67E5A55AB1B0807C05FF533D664B5B879F839406B65BF2246E841033AB77C19E2B9E9992AD2DBAFC7E0D0771B342EECAF24E0888E9B57FB4";
    } */

    document.getElementById("mensajeErrorSubmit").innerHTML = '<br>';

  if(document.forms[0].elements["usuario"].value == "") {error(document.forms[0].elements["usuario"],"Por favor ingrese su Usuario"); }
  else if(document.forms[0].elements["clave"].value == "") {error(document.forms[0].elements["clave"],"Por favor ingrese su Clave"); }
  else if(document.forms[0].elements["kaptcha"].value == "") {error(document.forms[0].elements["kaptcha"],"Por favor ingrese el código de la imagen"); }
  else {document.getElementById("mensajeError").innerHTML = '<br>'
        document.getElementById("mensajeError").style.visibility ="hidden";
        verBloqueo(true);
        document.forms[0].submit();
       }
}


function revalidaCorreo(indicador)
{ 
       var objForm = window.document.forms[0];
       var url = contexto + '/actualizaCorreo.do?';
       url = url + 'tipoOperacion='+indicador;
       
       if(indicador=='N'){
           var correoP = document.getElementById("correoP"); 
           //var correoC = document.getElementById("correoC"); 

           if (correoP.value== '') {
                alert('Debe ingresar una dirección de correo electrónico.');
                correoP.focus();
           }else if (!verifyMailAddress(correoP.value)) {
                alert('Correo no válido. Por favor coloque el correo correctamente.');
                correoP.focus();
           /*}else if (correoC.value== '') {
                alert('Debe reescribir la dirección de correo electrónico.');
                correoC.focus();
           }else if (!verifyMailAddress(correoC.value)) {
                alert('Correo no válido. Por favor coloque el correo correctamente.');
                correoC.focus();
           }else if (correoC.value!=correoP.value) {
                alert('Los correos no coinciden. Por favor verifique.');
                correoP.focus();*/
           }else{
                url = url +'&correoP='+correoP.value;
                retrieveURL(url);
           }
       }else{

         retrieveURL(url);
       }
       
       //retrieveURL(url);
}
function verifyMailAddress(value) {
	var reMail = /^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$/;
	return reMail.test(value);
} 
function continuar()
{ 
       var objForm = window.document.forms[0];
       objForm.submit();
}

function ingresaCorreo()
{ 
       var url = contexto + '/actualizaCorreo.do?';
       url = url + 'tipoOperacion=A';
       retrieveURL(url);
}

function retrieveURL(url) {
    if (window.XMLHttpRequest) { 
        req = new XMLHttpRequest();
        req.onreadystatechange = processStateChange;
        try{
            req.open("GET", url, true); 
        }catch (e) {
            error(null,"Problema de Comunicacion con el Servidor" + e);
        }
        req.send(null);
    }else if (window.ActiveXObject){
        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req) {
            req.onreadystatechange=processStateChange;
            req.open("GET", url, true);
            req.send();
        }
    }
}

function processStateChange(){
    if (req.readyState == 4){ 
        //alert("req.status: "+req.status)
        if (req.status == 200){
            if (req.responseText.split('/////')[0] == "errorAjax"){
                window.document.write(req.responseText.split('/////')[1]);
            }else{
                document.getElementById("tablaRespuesta").innerHTML = req.responseText; 
            }
        }else{
            window.location.replace("error.jsp");
        }
    }
}

function agrandarVentana()
{
    if (top != self) { top.location = document.location; }
    self.moveTo(0,0);
    self.resizeTo(screen.availWidth,screen.availHeight);
  
}


///////////////////////////////Mensajes de Error///////////////////////////////////

function error(campo, mensaje){
  var mensajeError = document.getElementById('mensajeError');
  //Validar si existe el objeto mensajeError.
  mensajeError.innerHTML = mensaje;
  mensajeError.style.visibility ="visible";
  campo.focus();
}

/////////////////////////////Fin Mensajes de Error//////////////////////////////////

////////////////////////////Funciones del Efecto Loading//////////////////////////////

function resizeBloqueo() {
		var x,y;
		
		var test1 = document.body.scrollHeight;
		var test2 = document.body.offsetHeight
		if (test1 > test2) // all but Explorer Mac
		{
			x = document.body.scrollWidth;
			y = document.body.scrollHeight;
		}
		else // Explorer Mac;
			 //would also work in Explorer 6 Strict, Mozilla and Safari
		{
			x = document.body.offsetWidth;
			y = document.body.offsetHeight;
		}

		var oObj
		oObj=document.getElementById("divBloqueoTransparente")
		if ( oObj ) {
			oObj.style.height=y
			oObj.style.width=x
		}
	}
	
	function verBloqueo(pPath){
      
		setToTop();
	
		if ( document.all ) {
			winWinner = document.body.offsetWidth;
			winHinner = document.body.offsetHeight;
		} else {
			winWinner = window.innerWidth;
			winHinner = window.innerHeight;
		}

		var x,y;
		
		var test1 = document.body.scrollHeight;
		var test2 = document.body.offsetHeight
		if (test1 > test2) // all but Explorer Mac
		{
			x = document.body.scrollWidth;
			y = document.body.scrollHeight;
		}
		else // Explorer Mac;
			 //would also work in Explorer 6 Strict, Mozilla and Safari
		{
			x = document.body.offsetWidth;
			y = document.body.offsetHeight;
		}
		window.onresize=function () { resizeBloqueo() };

		winW=x;
		winH=y;
		
		var oObj
		var oObjAux
		oObj=document.getElementById("divBloqueoTransparente")
		if ( oObj )
		{
			oObj.style.backgroundColor="#999999" 
			if ( document.all ) {
				oObj.style.filter='alpha(opacity="50")'
			}else{
				oObj.style.MozOpacity=0.5 
			}
			oObj.style.height=winH
			oObj.style.width=winW
			oObj.style.visibility='visible'
			oObj.style.display="block"
			oObj.style.top=0;
			
			// Posicionamos el DIV bloqueo propiamente dicho en el centro del div utilizado para hacer el opaco.
			oObj=document.getElementById("divBloqueo")
			oObj.style.height=90
			oObj.style.width=180
			oObj.style.top=(winHinner/2) - (85/2)
			oObj.style.left=(winWinner/2) - (180/2)
			oObj.style.visibility='visible'
			oObj.style.display="block"
		}
		//myDelay(500);
		
	}
	
	function myDelay(myTime) {
		rightNow = new Date();
		var now = new Date();
		now.setTime(now.getTime() + myTime);
	
		while(rightNow < now) {
			rightNow = new Date();
		}
	}
	
	function setToTop(){
		window.scrollTo(0,0);
	}

	function showBloqueo( pShow )
	{
		var o=document.getElementById('divBloqueoTransparente');
		if ( pShow ){ o.style.visibility='visible'; } else { o.style.visibility='hidden'; }
		var o=document.getElementById('divBloqueo');
		if ( pShow ){ o.style.visibility='visible'; } else { o.style.visibility='hidden'; }
	}
	
	function hideBloqueo()
	{
		showBloqueo( false );
	}

////////////////////////Fin Funciones del Efecto Loading/////////////////////////////