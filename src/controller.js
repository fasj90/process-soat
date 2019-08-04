const {Engine} = require('json-rules-engine');

function processRules(rules, vehiculo){
    let engine = new Engine(rules);
    const vehiculoFact = {...vehiculo, antiguedad : calculateYearsOldFromModelo(vehiculo) };
    console.log('vehiculoFact', vehiculoFact);
    return engine.run({vehiculo : vehiculoFact});

    // .then(events => { // run() returns events with truthy conditions
    //     events.map(event => console.log(event.params.message))
    // });
};

function calculateYearsOldFromModelo({modelo}){
    return new Date().getFullYear() - modelo;
};

module.exports = {processRules};