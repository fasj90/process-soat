const chai = require('chai');
const { assert } = chai;
const controller = require('../../src/controller');
const domain = require('../../src/domain');
const enviroment = require('../../config/testEnviroment.json');
// const enviroment = {
//     vehiculo:{
// 		tipoVehiculo: 'ciclomotor',
// 		modelo:2019,
// 		cilindraje:100,
// 		capCargaTon:5
// 	}
// };

describe('Controller', function(){
    describe('processRules', function(){
        it('Process rules returns promise', function(done){

            domain.getRules(`${enviroment.vehiculo.modelo}-01-01`, `${enviroment.vehiculo.modelo}-12-31`)
            .then(rules =>{
                return controller.processRules(rules, enviroment.vehiculo);
            })
            .then(events => { // run() returns events with truthy conditions
                assert.isOk('everything','verything is ok.');
                done();
            })
            .catch(error => done(error));
        });

        it(`Process rules for ciclo motor year ${enviroment.vehiculo.modelo} returns 172900`, function(done){
            domain.getRules(`${enviroment.vehiculo.modelo}-01-01`,`${enviroment.vehiculo.modelo}-12-31`)
            .then(rules =>{
                return controller.processRules(rules, enviroment.vehiculo);
            })
            .then(events => { // run() returns events with truthy conditions
                const soatValues = events.map(event => event.params.message);
                assert.equal(soatValues[0], 172900);
                done();
            })
            .catch(error => done(error));
        });
    });
});