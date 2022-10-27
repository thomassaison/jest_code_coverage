import IDotEnv from "../interfaces/dotenv.interface";
import dotenv from "dotenv";

export default class DotEnv implements IDotEnv {
    port: number | undefined;

    constructor() {
        this.port = +(dotenv.config()?.parsed?.port || 3000);

        console.log(this);
    }
}
