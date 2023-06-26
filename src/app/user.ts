export class User {
    constructor(
        public username: string,
        public email: string,
        public phone: number,
        public topic: string,
        public shift: string,
        public subscribe: boolean
    ){}
}
