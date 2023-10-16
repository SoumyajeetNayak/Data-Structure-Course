import {add} from "../src/add";

describe('Add', () => {
    it("should add", () => {
        expect(add(3,4)).toBe(7)
    })
});