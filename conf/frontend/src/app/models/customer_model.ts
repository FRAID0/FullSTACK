export class Customer {

    constructor(
        public c_name: string,
        public c_address: string,
        public c_phone: string,
        public total?: number,
        public nation?: string,
    ){}
}