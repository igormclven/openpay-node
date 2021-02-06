var assert = require('assert');
var _ = require('underscore');

var Openpay = require('../lib/openpay');
/*Sandbox*/
var openpay = new Openpay('m1qp3av1ymcfufkuuoah', 'sk_ed05f1de65fa4a67a3d3056a4efa2905');
openpay.setTimeout(10000);
var enableLogging = true;

describe('Get fees list with creation[lte] filter', () => {
    it('should return fees list and 200 status code', (done) => {
        var searchParams = {
            'creation[lte]': '2021-01-01',
        };
        openpay.fees.list(searchParams, function (error, body, response) {
            printLog(response.statusCode, body, error);
            assert.equal(response.statusCode, 200, '');
            done();
        });
    })
})

function printLog(code, body, error){
    if(enableLogging){
        console.log(code, _.isUndefined(body) || _.isNull(body) ? '' : _.isArray(body) ? _.pluck(body, 'id') : body.id);
    }
    if(code>=300){
        console.log(' ');
        console.log(error);
        console.log(' ');
    }
}
