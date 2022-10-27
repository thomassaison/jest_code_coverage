import Bot from "./bot";

describe("Bot LIKES", () => {
    it("should return an empty list", () => {
        let bot: Bot = new Bot();

        expect(bot.getLikes()).toEqual([]);
    });
});

describe("Bot MATCHES", () => {
    it("should return an empty list", () => {
        let bot: Bot = new Bot();

        expect(bot.getMatches()).toEqual([]);
    });
});