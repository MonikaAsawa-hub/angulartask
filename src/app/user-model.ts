export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor (data:any = {}){
        this.id = data.id || '';
        this.username = data.username || '';
        this.password = data.password || '';
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
    
    }

}