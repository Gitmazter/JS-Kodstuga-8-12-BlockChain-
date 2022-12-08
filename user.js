export default class User {
    constructor(name, password) {
        this._name = name;
        this._password = this.savePassword(password);
        this._id = self.crypto.randomUUID();
    }

    async consumePassword(password) {
        let pWordInt8 = new TextEncoder().encode(password);
        let hashBuffer = await crypto.subtle.digest("SHA-256", pWordInt8);
        let hashArray = Array.from(new Uint8Array(hashBuffer));
        let HashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
        return HashHex;
    }

    async savePassword(password) {
        // SAVE THE ENCRYPTED GIVEN PASSWORD FOR USER IN THIS.PASSWORD
        let hashPass = await this.consumePassword(password);
        this._password = hashPass;
    }

    async checkPassword(password) {
        // CHECK IF PWORD IS RIGHT UPON LOGIN
        let testPassword = await this.consumePassword(password);
        
        console.log("testPassword", testPassword, this._password);

        if (testPassword == this._password) {
            console.log("correct password");
            console.log(this._id);
            return this._id;
        } else {
            console.log("Wrong Password");
        }
    }
}