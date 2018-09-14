const yaml     = require('js-yaml');
const fs       = require('fs');
const CONSTS   = require('./consts.json');
const _        = require('lodash');
const sites    = {};
module.exports = function() {
    _.forEach(CONSTS.ENV, (env) => {
        try {
            let yaml_file = yaml.safeLoad(fs.readFileSync(`${process.cwd()}/group_vars/${env}/wordpress_sites.yml`, 'utf8'));
            _.forIn(yaml_file.wordpress_sites, (value, key) => {
                let envStat = {[env]: "✅"};
                _.set(sites, [key], {});
                _.assign(sites[key], envStat);
            })
        } catch (e) {
            console.log(e);
        }      
    })
    console.log(sites);
}