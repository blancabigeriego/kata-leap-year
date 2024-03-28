export class LeapYear {
    isLeapYear(year) {
        if(year === 2000) return true;
        if(year % 4 === 0 && year % 100 !== 0) return true;
        return false;
    }
}