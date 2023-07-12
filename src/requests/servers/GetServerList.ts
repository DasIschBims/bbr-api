import {Request} from "../../types/Request";
import {Method} from "../../types/Method";
import axios from "axios";
import {ServerList} from "../../types/Server";
import {Constants} from "../../Constants";

class GetServerList implements Request {
    METHOD: Method = Method.GET;
    ENDPOINT: string = 'Servers/GetServerList';

    public async execute(): Promise<ServerList> {
        const url = `https://${Constants.API.HOST}/${this.ENDPOINT}`;

        try {
            const response = await axios({
                method: this.METHOD.toLowerCase(),
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': Constants.USER_AGENT
                }
            });

            return {
                servers: response.data
            } as ServerList;
        } catch (error) {
            throw new Error(error as string);
        }
    }
}

export default GetServerList;