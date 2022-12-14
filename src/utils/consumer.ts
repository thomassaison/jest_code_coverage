import axios from "axios";

const url = "https://5094-93-31-170-122.eu.ngrok.io";

export default class ApiConsumer {
    private headers: any;

    get(url: string) {
        return axios.request({
            url: url,
            method: "get",
        });
    }
}
