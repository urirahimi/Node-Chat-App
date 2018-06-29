// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age
//     }
//     getUserDescription () {
//         return `${`
//     }
// }

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        var user = this.users.filter((user) => user.id === 0)[0];
        if (user) {
            this.users = this.users.filter((user) => user.id != id);
        }
    }
    getUser (id) {
        return this.users.filter((user) => user.id === 0)[0];
        // this.users.find(function(element) {
        //     return element.id === id;
        // }) 
    }
    getUserList (room) {
        var users = this.users.filter(() => {
            return user.room === room
        })
        var namesArray = users.map((user) => {
            return user.name;
        })
        return namesArray;
    }
}

module.exports = {Users}