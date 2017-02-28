# egg-pretty

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-pretty.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-pretty
[travis-image]: https://img.shields.io/travis/eggjs/egg-pretty.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-pretty
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-pretty.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-pretty?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-pretty.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-pretty
[snyk-image]: https://snyk.io/test/npm/egg-pretty/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-pretty
[download-image]: https://img.shields.io/npm/dm/egg-pretty.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-pretty

<!--
Description here.
-->

## Install

```bash
$ npm i egg-pretty --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.pretty = {
  enable: true,
  package: 'egg-pretty',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.pretty = {
        i18n:false,
        messages:{
            0:"成功",//this.success("data")   =>   {"code":0,"message":"成功"}
            1:"失败"//this.fail(1)   => {"code":1,"message":"失败"}
        }
};
```


see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
