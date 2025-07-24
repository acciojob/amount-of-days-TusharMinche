//your JS code here. If required.
function isLeapYear(year){
	if(year%4 == 0){
		if(year%100 == 0){
			if(year%400 == 0){
				return true;
			}
			else{
				return false;
			}
		}
		else {
			return true;
		}
	}

	else {
		return false;
	}
}
function daysOfAYear(year)  {
	if(isLeapYear(year)){
		return 366;
	}
	else{
		return 365;
	}
}