export interface ILogger {
    log(message: string): void;
};

export class ParentLogger implements ILogger {
    log(message: string) {
    }
};

export class ConsoleLogger extends ParentLogger {
    log(message: string) {
        console.log("Log in console: " + message);
    }
}

export class DBLogger extends ParentLogger {
    log(message: string) {
        console.log("Log in DB: " + message);
    }
}