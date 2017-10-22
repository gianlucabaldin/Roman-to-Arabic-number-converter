
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
    
    it("should return 1234 MCCXXXIV", function() {
        assert.equal(romanToArabic('IX'), 9);
    });

});