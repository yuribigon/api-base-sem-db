import {v4 as uuidv4} from 'uuid';

export class User {
    private uuid: string;

    constructor(
        private name: string,
        private email: string,
        private password: string
    ){
        this.uuid = uuidv4();
    }

    getUuid(): string{
        return this.uuid
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }
    getPassword(): string {
        return this.password
    }
}

