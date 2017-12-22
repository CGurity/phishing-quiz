//ALL ARGUMENTS MUST TO BE STRING TYPES
var ISO_FRM = 0;      //yyyy/dd/mm
var USA_FRM = 1;      //mm/dd/yyyy
var LATIN_FRM = 2;    //dd/mm/yyyy
var dateExp = new Array (/^\d{4}\/(0[1-9]|[1-9]|1[012])\/(3[01]|0[1-9]|[1-9]|[12]\d)/, /^(0[1-9]|[1-9]|1[012])\/(3[01]|0[1-9]|[1-9]|[12]\d)\/\d{4}/, /^(3[01]|0[1-9]|[1-9]|[12]\d)\/(0[1-9]|[1-9]|1[012])\/\d{4}/ );
var numExp  = new Array (/^([-+]?\d*[\.|\d])?(\d+)*$/, /^([-+]?\d*[\.|\d])?(\d+)*$/ );
function checkLocaleDate(value, localeID) { return dateExp[localeID].test(value); }
function checkTime (time_value) { return /^((2[0-3])|(0\d)|(1\d)):((0\d)|([1-5]\d)):((0\d)|([1-5]\d))$/.test(time_value); }
function checkDateTime (datetime_value) { return /^(3[01]|0[1-9]|[12]\d)\/(0[1-9]|1[012])\/\d{4}\s((2[0-3])|(0\d)|(1\d)):((0\d)|([1-5]\d)):((0\d)|([1-5]\d))$/.test(datetime_value); }

// Checks for a valid date (DD/MM/YYYY)
function checkDate(val) {
   if (checkLocaleDate(val, LATIN_FRM)) {
        var re =/^0+/
	var fields = val.split("/");
	var day = parseInt(fields[0].replace(re,""));
	var maxDay = getMaxDay(fields[1].replace(re,""), fields[2]);
	return day <= maxDay;
   }
}

function getMaxDay(month, year) {
	month = parseInt(month);
	year = parseInt(year);
	
	var maxDay =0;
	switch (month)
	{
		case 4:case 6:case 9:case 11:
			maxDay = 30;
			break;
		case 1:case 3:case 5:case 7:case 8:case 10:case 12:
			maxDay = 31;
			break;
		case 2:
			maxDay = (year % 4) == 0? 29: 28;
			break;
	}
	return maxDay;
}


// Checks for a valid amount format (###,###,###.##)
function isAmountFormatValid(val)
{
	result = true;
	if (val.length == 0) return false;

	p = val.split(",");

	s = p[p.length-1].split(".");

	if (s.length > 2)
		return false;
	if (s.length == 2)
		result = result && checkNumber(s[1]);
	if (p.length < 2)
		result = result && checkNumber(s[0]);
	else
	{
		result = result && checkNumber(s[0]) && (s[0].length == 3);
		for (i=1; i < (p.length-1); i++)
			result = result && checkNumber(p[i]) && (p[i].length == 3);
		result = result && checkNumber(p[0]) && (p[0].length <= 3);
	}
	return (result);
}

// Checks if there is a digit in the string
function isDigitIn(string) {

	for (i = 0;  i < string.length;  i++)
	     if ("0123456789".indexOf(string.charAt(i))!=-1)
		return true;
    	return false;
}

// Checks if there is a character in the string
function isCharIn(string) {

	var lowerString = string.toLowerCase();

	for (i = 0;  i < lowerString.length;  i++)
	     if ("abcdefghijklmnopqrstuvwxyz".indexOf(lowerString.charAt(i))!=-1)
         	return true;
    	return false;

}

// Checks for special Strings
function containsOnlyDigit(string) {
	for ( i = 0 ; i < string.length ; i++ ) {
		if ("1234567890.,".indexOf(string.charAt(i))==-1)  return false;
	}
	return true;
}


//FORMs Utility Tools

//return the form index for an element name
function indexOfElement(form, elementName) {
	for (var e=0; e < form.elements.length; e++) {
		if (form.elements[e].name == elementName) 
			return e;
	}
	return -1;
}


// Find and sets the index of the string in a select list.
function getIndex(string, element) {
	for ( i=0 ; i<element.length ; i++ ) {
		if (string==element.options[i].value) return i;
	}
}


// Find and sets the checked property in a radio array.
function radioChecker(sValue, element) {
   for ( i = 0 ; i<element.length ; i++) {
      if (element[i].value==sValue) {
         element[i].checked=true;
      }
   }
}

function cleanFormBlock(form, startIndex, length) {
	var endIndex = startIndex + length;
	if (endIndex > form.elements.length) {
		endIndex = form.elements.length;
	}
	for (var i = startIndex; i < endIndex; i++) { 
		cleanFormElement(form.elements[i]);
	}
}

function disableFormBlock(form, startIndex, length, flag, clean) {
	var endIndex = startIndex + length;
	if (endIndex > form.elements.length) {
		endIndex = form.elements.length;
	}
	for (var i = startIndex; i < endIndex; i++) { 
		form.elements[i].disabled = flag;
		if (clean) {
			cleanFormElement(form.elements[i]);
		}
	}
}

function isRadioChecked(radioGroup) {
   if (radioGroup.length) {
	   for (var r=0; r < radioGroup.length; ) {
		if (radioGroup[r++].checked) return r;
	   }
   }
   else if (radioGroup.checked) {
   	return 1;
   }
   return 0;
}

function cleanFormElement(element) {
	var elementType = (element.type || "");
	if (elementType == "text" 
	    || elementType == "password")
	{
		element.value = "";
	}
	else if (typeof(element.selectedIndex) != "undefined") 
	{
		element.selectedIndex = 0;
	}
	else if (typeof(element.checked) != "undefined") {
		element.checked = false;
	}
}

function getFieldValue(element) {
	return (element.options)? element.options[element.selectedIndex].value: (element.type != "radio" || element.checked? element.value: "");
}


function validateDateFields(day, month, year) {
	var strDate = "";
	if (day) {
		strDate = filler(day,'0',2)+'/';
		if (month) {
			strDate += filler(month,'0',2) +'/';
			return  (year) && checkDate(strDate + year)
		}
	}
	return false;
}

function filler(origValue, ch, len) {
	var rightJustify = len > 0;
	len = Math.abs(len);
	while (len > origValue.length) {
		if (rightJustify) {
			origValue = ch +origValue;
		}
		else {
			origValue += ch;
		}
	}
	return origValue;
}

function validateAmountData(e){
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla==8) return true;
    patron = /[\d\,\.]/;
	te = String.fromCharCode(tecla);
	e.cancelBubble = true;
	return patron.test(te);
}

function validateConceptData(e) { 
    tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    if (tecla==95)return false; 
    patron = /[\w\,\.\ ]/;
    te = String.fromCharCode(tecla); 
    e.cancelBubble = true;
    return patron.test(te);  
}

function validateNumberData(e){
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla==8) return true;
    patron = /[\d]/;
    te = String.fromCharCode(tecla);
    e.cancelBubble = true;    
	return patron.test(te);
}
function validateNickNameData(e){
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    if (tecla==95)return false; 
    patron = /[\w]/;
    te = String.fromCharCode(tecla); 
    e.cancelBubble = true;
    return patron.test(te);  
}
function validateAlphanumericSpaces(e){
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    if (tecla==95)return false; 
    patron = /[\w\ñ\Ñ\ ]/;
    te = String.fromCharCode(tecla); 
    e.cancelBubble = true;
    return patron.test(te);  
 }

function validateAlphanumericSpacesIp(e){
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    if (tecla==95)return false; 
    patron = /[\w\ñ\Ñ\/\#\?\.\-\(\)\ ]/;
    te = String.fromCharCode(tecla); 
    e.cancelBubble = true;
    return patron.test(te);  
 }