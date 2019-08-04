const chai = require('chai');
chai.use(require('chai-http'));
const {expect} = chai;
const URL = 'http://localhost:3000';
const enviroment = require('../config/testEnviroment.json');
const bodyEnviroment = {
    role:'process-soat',
    cmd:'getSoatValue',
    vehiculo : enviroment.vehiculo
};

describe('Index', function(){
    describe('post/act role:process-soat, cmd:getSoatValue', function(){
        it('Seneca api funciona bien',function(done){
            this.timeout(30000);
            chai.request(URL)
            .post('/act')
            .send(bodyEnviroment)
            .end((err, res) =>{
                if(err) return done(err);
                expect(res.body).to.eql({...bodyEnviroment.vehiculo, soatValue:172900});
                done();
            });
        });
    });
});