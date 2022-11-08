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
    describe("sortHobbies", () => {
        const list = hobbies.sortHobbies();
        it("returns 'cooking'", () => {
            expect(list[0]).toBe("cooking");
        });
    })
    describe("lengthHobbies", () => {
        const list = hobbies.lengthHobbies();
        it("returns '5'", () => {
            expect(list).toBe(5);
        });
    })
})