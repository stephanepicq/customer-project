export interface ILogger {
    log(): void;
};

export class ParentLogger implements ILogger {
    log() {
    }
};

export class ConsoleLogger extends ParentLogger {
    log() {
        console.log("Write a message in Console");
    }
}

export class DBLogger extends ParentLogger {
    log() {
        console.log("Write a message in DB");
    }
}