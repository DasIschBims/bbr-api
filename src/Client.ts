import {Constants} from "./Constants";
import GetServerList from "./requests/servers/GetServerList";
import {ServerList} from "./types/Server";

export class Client {
    private readonly apiHost: string;

    public constructor() {
        this.apiHost = `https://${Constants.API.HOST}`
    }

    public async getServerList(): Promise<ServerList> {
        const request = new GetServerList();
        return request.execute();
    }
}