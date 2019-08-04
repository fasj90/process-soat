const chai = require('chai');
const { assert } = chai;
const domain = require('../../src/domain');

describe('Domain', function(){
    describe('getRules',function(){
        it('Get rules returns an array.', function(done){
            domain.getRules('2019-01-01', '2019-12-31')
            .then((rules) =>{
                assert.isArray(rules);
                done();
            })
            .catch(err => {
                done(err);
            });

        });
    });
});