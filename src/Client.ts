import {Constants} from "./Constants";
import GetServerList from "./requests/servers/GetServerList";
import {ServerList} from "./types/Server";

interface ClientOptions {
    customUserAgent?: string | boolean;
}

export class Client {
    private readonly apiHost: string;
    private readonly customUserAgent: string | boolean;

    public constructor(options: ClientOptions = {}) {
        this.apiHost = `https://${Constants.API.HOST}`;
        this.customUserAgent = options.customUserAgent ?? true;
    }

    public async getServerList(): Promise<ServerList> {
        const request = new GetServerList();
        return await request.execute(this.customUserAgent);
    }
}