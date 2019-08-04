const domain = require('./domain');
const controller = require('./controller');
const ROLE = 'process-soat';

module.exports = function () {
    const seneca = this;

    seneca.add(`role:${ROLE},cmd:getSoatValue`, async (payLoad, reply) =>{
        try{           
            const {vehiculo} = payLoad;
            const soatValue = await getSoatValue(vehiculo);
            reply(null, soatValue);
        } catch(error){
            reply(error);
        }     
    });

};

async function getSoatValue(vehiculo){
    const currentYear = new Date().getFullYear();
    const rules = await domain.getRules(`${currentYear}-01-01`, `${currentYear}-12-31`);
    const events = await controller.processRules(rules, vehiculo);

    try{
        if(events && events.length > 0){
            return {...vehiculo, soatValue: events[0].params.message};
        }
        else{
            return {soatValue: null};
        }
    }
    catch(err){
        return err;
    }
}