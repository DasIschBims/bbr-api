import {Method} from "./Method";

export interface Request {
    METHOD: Method;
    ENDPOINT: string;
    BODY?: any;
}
