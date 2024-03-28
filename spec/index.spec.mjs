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
    })
})