'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/pretty.test.js', () => {
    let app;
    before(() => {
        app = mm.app({
            baseDir: 'apps/pretty-test',
        });
        return app.ready();
    });

    after(() => app.close());
    afterEach(mm.restore);

    it('should GET /success', () => {
        return request(app.callback())
            .get('/success')
            .expect({
                code: 0,
                message: "成功",
                data: "test"
            })
            .expect(200);
    });
    it('should GET /fail', () => {
        return request(app.callback())
            .get('/fail')
            .expect({
                code: 1,
                message: "失败"
            })
            .expect(200);
    });
});
