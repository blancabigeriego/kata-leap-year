import { LeapYear } from "../index.mjs";

describe('LEAP YEAR KATA', () => {
    const leapyear = new LeapYear();
    it('should create', () => {
        expect(leapyear).toBeDefined();
    });
    it('should return if we are in a leap year', () => {
        const result = leapyear.isLeapYear(2024);
        expect(result).toBe(true);

    });
    it('should return if next year is a leap year', () => {
        const result = leapyear.isLeapYear(2025);
        expect(result).toBe(false);
    });
    it('should return if 4 years it will be a leap year', () => {
        const result = leapyear.isLeapYear(2028);
        expect(result).toBe(true);
    });

})