import DotEnv from "./dotenv.class";

describe("Dotenv", () => {
    it("should load .env file", () => {
        const dotenv = new DotEnv();
        expect(dotenv.test).toEqual("test");
    });
})