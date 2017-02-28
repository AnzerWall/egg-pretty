'use strict';

module.exports = app => {
    app.get('/success', "home.s");
    app.get('/fail', "home.f");
};
