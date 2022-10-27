import ApiConsumer from "./consumer";

describe("ApiConsumer", () => {
    it("should return a consumer", () => {
        let consumer = new ApiConsumer();
        expect(consumer).toBeDefined();
    });

    it("should return a response", async () => {
        let consumer = new ApiConsumer();
        let response = await consumer.get("https://google.com");
        expect(response).toBeDefined();
    });
});
