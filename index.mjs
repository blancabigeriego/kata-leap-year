export class LeapYear {
    isLeapYear(year) {
        if(year === 2000 || year === 2400) return true;
        if(year % 4 === 0 && year % 100 !== 0) return true;
        return false;
    }
}