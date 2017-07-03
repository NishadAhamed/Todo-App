define(['helpers/common.helper'],
    function (CommonHelper) {
        'use strict';

        module('Common Helper tests');

        test("Generate unique guids:", function () {
            let i = 0, guids = [], isCollision = false, iterations = 10000;
            
            while (i++ < iterations) {
                let guid = CommonHelper.guid();
                if (guids.indexOf(guid) !== -1) {
                    isCollision = true;
                }
                guids.push(guid);
            }

            equal(isCollision, false, 'Collision was not appeared in ' + iterations + ' iterations.');
        });
    });