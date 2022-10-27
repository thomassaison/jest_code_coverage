import IDotEnv from "../interfaces/dotenv.interface";
import dotenv from "dotenv";

export default class DotEnv implements IDotEnv {
    port: number | undefined;
    test: string;

    constructor() {
        this.port = +(dotenv.config()?.parsed?.port || 3000);
        this.test = "test"; // Only for testing
    }
}
