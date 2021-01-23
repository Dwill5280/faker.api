const express = require("express");
const { request, response } = require("express");
const app = express ();
const faker = require('faker');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = `${faker.address.streetAddress()}, ${faker.address.city()} , ${faker.address.state()} ${faker.address.zipCode()}, ${faker.address.country()}`;
    }
}

app.get("/api/users/new", (req, res) => {
    const user = new User()
    return res.json(user)
});

app.get("/api/companies/new", (req, res) => {
    const company = new Company()
    return res.json(company)
});

app.get("/api/user/company", (req, res) => {
    const user = new User()
    const company = new Company()
    return res.json({user, company})
})



app.listen(8000, () => {
console.log('running on port 8000')
});