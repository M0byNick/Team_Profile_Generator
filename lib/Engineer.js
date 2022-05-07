const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, githubProfile){
        super(name, id, email)
        this.githubProfile = githubProfile;
    }

    getGithub() {
        return this.githubProfile;
    }

    getRole() {
        return 'engineer';
    }
    
}

module.exports = Engineer;