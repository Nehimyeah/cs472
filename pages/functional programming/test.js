/*jslint browser: true */
/*global mocha, chai, describe, it*/
/*global sum, multiply, reverse */
/*global findLongWords */

(function () {
    "use strict";

    // setup test
    mocha.setup("bdd");
    let assert = chai.assert;
    let expect = chai.expect;

    describe("sum", function () {
        it("summing values of [2, 3] is 5", function () {
            assert.equal(sum([2, 3]), 5);
        });

        it("summing values of [4, 3, 5] is 12", function () {
            assert.equal(sum([4, 3, 5]), 12);
        });

        it("summing values of [-4, 300, -5, -50] is 241", function () {
            assert.equal(sum([-4, 300, -5, -50]), 241);
        });
    });

    describe("multiply", function () {
        it("multiplying values of [2, 3] is 6", function () {
            assert.equal(multiply([2, 3]), 6);
        });

        it("multiplying values of [4, 3, 5] is 60", function () {
            assert.equal(multiply([4, 3, 5]), 60);
        });

        it("summing values of [-4, 300, -5, -50] is -300000", function () {
            assert.equal(multiply([-4, 300, -5, -50]), -300000);
        });
    });

    describe("reverse", function () {
        it("reversing 'nehi' yields 'ihen'", function () {
            assert.equal(reverse("nehi"), "ihen");
        });

        it("reversing 'professor' yields 'rosseforp'", function () {
            assert.equal(reverse("professor"), "rosseforp");
        });

        it("reversing ''(empty string) yields ''(empty string)", function () {
            assert.equal(reverse(""), "");
        });
    });

    describe("findLongWords", function () {
        it("words longer that 3 in" +
        " ['nehi', 'ruti', 'bro'] are ['nehi', 'ruti']",
        function () {
            assert(
                expect(findLongWords(["nehi", "ruti", "bro"], 3))
                .to.eql(["nehi", "ruti"]));
        });

        it("words longer that 0 in ['nehi', 'ruti', 'bro']" +
            "are ['nehi', 'ruti', 'bro']", function () {
            assert(
                expect(findLongWords(["nehi", "ruti", "bro"], 0))
                    .to.eql(["nehi", "ruti", "bro"]));
        });

        it("words longer that 10 in " +
         "['nehi', 'ruti', 'bro'] are []", function () {
            assert(expect(findLongWords(["nehi", "ruti", "bro"], 10))
            .to.eql([]));
        });
    });

    mocha.run();
}());