const {rules} = require('../config/rules.json');
const  {Rule} = require('json-rules-engine');

function getRules(ruleValidFrom, ruleValidTo){
    return new Promise((resolve, reject) =>{

    //    console.log('ruleValidFrom',Date.parse(ruleValidFrom));
    //    rules.map(rule =>{
    //        console.log('rule.validFrom',Date.parse(rule.validFrom));
    //     });

    //     console.log('ruleValidTo',Date.parse(ruleValidTo));
    //    rules.map(rule =>{
    //        console.log('rule.validTo',Date.parse(rule.validTo));
    //     });

        const rulesJson =  rules.filter(rule => Date.parse(ruleValidFrom) >=  Date.parse(rule.validFrom) &&
                            Date.parse(ruleValidTo) <=  Date.parse(rule.validTo))
                            .map(rule => rule.rule);

        resolve(rulesJson.map(ruleJson => new Rule(ruleJson)));                    
    });
}

module.exports = {getRules};