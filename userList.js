export default class UserList {
    constructor() {
        this._users = [];
    }
    addUser(user) {
        this._users.push(user);
    }
}