//ALL ARGUMENTS MUST TO BE STRING TYPES
function isEmpty(value) { return /^(\s*)+$/.test(value); }
function checkNumber(num_value) { return /^([-+]?\d*[\.|\d])?(\d+)*$/.test(num_value); }
function checkInteger(int_value) { return /^([-+]?\d)*(\d+)*$/.test(int_value); }
function checkNatural(nat_value) { return !/\D+/.test(nat_value); }
function checkNumberLetter(value) {return /^[A-Za-z0-9]+$/.test(value); }
function trim(value) {
   var result;
   return  isEmpty(value)? "": ((result = value.match(/\S.+\S/)) != null? result: value.match(/\S+/)).toString();
}
function checkSingleWord(code_value) { return !/\S.+\s+\S/.test(code_value); }
function checkEmail(email_value) { return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_value); }

/*
 All the variables in this file are headed with the followin rule:
 t1_k_fn_
 where k: is a number that identify a library file file (k=01)
   and
       n: is a number that identify each function
*/

function validate_Number(t1_01_f1_amount)
{
   return validate_SignedNumber(t1_01_f1_amount, false, "Monto inv?lido.\n");
}

function validate_SignedNumber(t1_01_f2_amount, t1_01_f2_signed, t1_01_f2_err_msg)
{
   return parse_Number(t1_01_f2_amount, t1_01_f2_signed, true, t1_01_f2_err_msg);
}

function parse_Number(amount, signed, alert_flag, err_msg, decimalSeparator) {
	var sAmount = ""+amount+"";
	var sAmountTemp="";
	var negative;
	var err_counter =0;
	if ((negative = signed && sAmount.charAt(0) =='-')) {
		sAmount = sAmount.substring(1);
	}

	var decimalPosition;
	var decimalDigits;
	var hasDecimalPoint = true;
	var decimalPoint;
	var thousandIndicator;

	if (!decimalSeparator) {
		var decimalPointPosition = sAmount.lastIndexOf('.');
		var decimalCommaPosition = sAmount.lastIndexOf(',');
		decimalPosition = (decimalPointPosition > decimalCommaPosition ) ? decimalPointPosition : decimalCommaPosition ;
		if (decimalPosition < 0 || (decimalDigits = sAmount.length - decimalPosition -1) > 4 ||  decimalDigits == 3) {   // only will be accepted 4,2,1,0 as decimal digits
			hasDecimalPoint = false;
		}
		decimalPoint = (hasDecimalPoint)? sAmount.charAt(decimalPosition): '\n';
		thousandIndicator = decimalPosition < 0? '\n': !hasDecimalPoint? sAmount.charAt(decimalPosition): (decimalPoint == '.'? ',': '.');
	}
	else {
		hasDecimalPoint = (decimalPosition = sAmount.lastIndexOf(decimalSeparator)) >=0;
		decimalPoint = decimalSeparator;
		thousandIndicator = (decimalPoint == '.'? ',': '.');
	}

	var numberParts = sAmount.split(decimalPoint);
	var thousands = numberParts[0].split(thousandIndicator);
	if (numberParts.length > 2) {
		err_counter =1;
	}
	else if (thousands.length == 1) {
		sAmountTemp = thousands[0];
	}
	else {
		for (var i = 0; err_counter == 0 && i < thousands.length; i++) {
			 if (thousands[i].length > 3 || (thousands[i].length < 3 && i > 0)) {
				err_counter = 2;
			 }
			 else {
				sAmountTemp += thousands[i];
			 }
		}
	}
	if (/\D+/.test(sAmountTemp)) {
		err_counter = 3;
	}
	else if (numberParts.length == 2) {
		if (/\D+/.test(numberParts[1])) {
			err_counter = 3;
		}
		else {
			sAmountTemp += "."+numberParts[1];
		}
	}
	sAmount =  sAmountTemp;
	if (err_counter > 0) {
		if (alert_flag)
			alert(err_msg);
		return 0;
	}
	return parseFloat((negative? '-' + sAmount: sAmount));
}

function formatDecimalNumber(sValue, decimals)
{

    var i;
    sValue = ""+sValue+"";

    var decPointPos = sValue.indexOf(".");

    if(decPointPos != -1)
    {
        i = decPointPos + decimals;
        tmp_value = (i < sValue.length)? sValue.substring(0,i+1): sValue;
        sValue = tmp_value.substring(0, i-decimals)+","+tmp_value.substring(i-(decimals-1));
    }
    else {
        decPointPos = sValue.length ;
    }

    i = 0;
    var fValue = "";

    if (decPointPos != -1) {
     fValue = sValue.substring(decPointPos);
    }
    for (i = decPointPos -3; i > 0; i -= 3) {
       fValue = '.'+sValue.substring(i, i+3)+ fValue;
    }
    fValue = sValue.substring(0, i+3)+fValue;

    return fValue;
}

function replacePoint(amount) {
	pointCounter = 0;
	commaCounter = 0;
	isPointM = false;
	isCommaM = false;
	found = false;
	for(var i=0; i<amount.length; i++) {
		if(amount.charAt(i) == ".")	{
			pointCounter ++;
			if(!found){
				isPointM = true;
				found = true;
			}
		}
		if(amount.charAt(i) == ",")	{
			commaCounter ++;
			if(!found){
				found = true;
				isCommaM = true;
			}
		}
	}
	if(isPointM && pointCounter == 1 && (amount.charAt(amount.length-2) == "."  || amount.charAt(amount.length-3) == ".") && commaCounter == 0){
		amount = amount.replace(".", ",");
	}else{
	    if(isCommaM && pointCounter == 1 && (amount.charAt(amount.length-2) == "."  || amount.charAt(amount.length-3) == ".")){
			for(var i = 0; i < pointCounter; i++){
				amount = amount.replace(".", "X");
			}
			for(var i = 0; i < commaCounter; i++){
				amount = amount.replace(",", ".");
			}
			for(var i = 0; i < pointCounter; i++){
			amount = amount.replace("X", ",");
			}
		}
	}
	
	
	//if(pointCounter == "1" && commaCounter == "0") {			
		//if(amount.charAt(amount.length-3) == ".") {	
			//amount = amount.replace(".", ",");		
		//}
	//}	
	return amount;
}

function haveTwoDecimal (xamount) {
// OJO: Esta  función solo  funciona si  se ha
// aplicado replacePoint() y parse_Number()
// previamente al monto. D.C. 2007-11-28
		status = 0;
		decimalCounter = 0;
		var amount=xamount+"";
		
		for(var i=0; i<amount.length; i++) {
			if(status == 1) decimalCounter ++;
			if(amount.charAt(i) == ".")	status = 1;
			if(amount.charAt(i) == ",")	status = 1;
		}

		if ( decimalCounter <= 2 )  return true;
		return false;
}