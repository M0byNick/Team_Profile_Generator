const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const team = []

const sampleAnswers = {
    name: "Nick M",
    id: 1,
    email: "nmorihisa@gmail.com",
    officeNum: "152"

}

const manager = new Manager(sampleAnswers.name, sampleAnswers.id, sampleAnswers.email, sampleAnswers.officeNum)

team.push(manager)

//Need fs.write file to put team in