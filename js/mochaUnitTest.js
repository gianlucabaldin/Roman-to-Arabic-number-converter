
/* Mocha initialization */
var assert = chai.assert;
mocha.setup('bdd');

/* Mocha unit tests */
describe("Roman numbers", function() {

    it("should return 1 for I", function() {
        assert.equal(romanToArabic('I'), 1);
    });

    it("should return 1234 MCCXXXIV", function() {
        assert.equal(romanToArabic('MCCXXXIV'), 1234);
    });
    
    it("should return 23 XXIII", function() {
        assert.equal(romanToArabic('XXIII'), 23);
    });
    
    it("should return 999 CMXCIX", function() {
        assert.equal(romanToArabic('CMXCIX'), 999);
    });
    
    it("should return 984 CMLXXXIV", function() {
        assert.equal(romanToArabic('CMLXXXIV'), 984);
    });
    
    it("should return 238 CCXXXVIII", function() {
        assert.equal(romanToArabic('CCXXXVIII'), 238);
    });

});
