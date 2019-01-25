let mongoose = require("mongoose");
let User = require('../models/user');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
var request = require('request');

chai.use(chaiHttp);
//Our parent block
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => {
            done();
        });
    });

    describe('/POST user', () => {
        it('it should POST a user ', (done) => {
            let user = {
                fullName: "feriel hajar ",
                email: "ibtissamelkaysouni@gmail.com",
                password: "test"
            }
            chai.request(server)
                .post('/api/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.user.should.have.property('fullName');
                    res.body.user.should.have.property('email');
                    res.body.user.should.have.property('password');
                    done();
                });
        });
    });
});
