export class UserService {
    constructor() {
        console.log('user service created')
    }
    listUser() {
        return [{
            name: 'mani',
            age: 21
        }]
    }
}