const hobbies = require('../hobbies');
describe("API unit test suite", () => {
    describe("getHobbies", () => {
        const list = hobbies.getHobbies();
        it("returns 5 hobbies", () => {
            expect(list.length).toEqual(5);
        });
        it("returns 'jogging' as first hobby", () => {
            expect(list[0]).toBe("jogging");
        });
    })
    describe("getReverseHobbies", () => {
        const list = hobbies.getReverseHobbies();
        it("returns 5 hobbies", () => {
            expect(list.length).toEqual(5);
        });
        it("returns 'reading' as first hobby", () => {
            expect(list[0]).toBe("reading");
        });
    })
    describe("getHobby", () => {
        const list = hobbies.getHobby(2);
        it("returns 'cooking'", () => {
            expect(list).toBe("cooking");
        });
    })
    describe("find hobby", () => {
        const list = hobbies.findHobby("swimming");
        it("returns 'true'", () => {
            expect(list).toBe(true);
        });
    })
        describe("dont find hobby", () => {
        const list = hobbies.findHobby("judo");
        it("returns 'false'", () => {
            expect(list).toBe(false);
        });
    })

})