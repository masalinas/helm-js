const { exec } = require('child_process');

function Helm(conf) {
    this.binary = conf.binary || 'helm'
}

function getArguments(command, arg01, arg02, arg03) {
    var args = command;

    if (arg01)
        args = args + ' ' + arg01;

    if (arg02)
        args = args + ' ' + arg02;

    if (arg03)
        args = args + ' ' + arg03;

    return args;
}

Helm.prototype.delete = function (arg01, arg02, done) {
    return new Promise((resolve, reject) => {
        exec(this.binary + ' ' + getArguments('delete', arg01, arg02, undefined), (error, stdout, stderr) => {
            if (error)
                return reject(error);

            if (stderr)
                return reject(stderr);

          resolve(stdout);
        }); 
    });
}

Helm.prototype.get = function (arg01, arg02, done) {
    return new Promise((resolve, reject) => {
        exec(this.binary + ' ' + getArguments('get', arg01, arg02, undefined), (error, stdout, stderr) => {
            if (error)
                return reject(error);

            if (stderr)
                return reject(stderr);

          resolve(stdout);
        }); 
    });
}

Helm.prototype.install = function (arg01, arg02, done) {
    return new Promise((resolve, reject) => {
        exec(this.binary + ' ' + getArguments('install', arg01, arg02, undefined), (error, stdout, stderr) => {
            if (error)
                return reject(error);

            if (stderr)
                return reject(stderr);

          resolve(stdout);
        }); 
    });
}

Helm.prototype.list = function (arg01, arg02, done) {
    return new Promise((resolve, reject) => {
        exec(this.binary + ' ' + getArguments('list', arg01, arg02, undefined), (error, stdout, stderr) => {
            if (error)
                return reject(error);

            if (stderr)
                return reject(stderr);

          resolve(stdout);
        }); 
    });
}

Helm.prototype.status = function (arg01, arg02, done) {
    return new Promise((resolve, reject) => {
        exec(this.binary + ' ' + getArguments('status', arg01, arg02, undefined), (error, stdout, stderr) => {
            if (error)
                return reject(error);

            if (stderr)
                return reject(stderr);

          resolve(stdout);
        }); 
    });
}

Helm.prototype.upgrade = function (arg01, arg02, arg03, done) {
    return new Promise((resolve, reject) => {
        exec(this.binary + ' ' + getArguments('upgrade', arg01, arg02, arg03), (error, stdout, stderr) => {
            if (error)
                return reject(error);

            if (stderr)
                return reject(stderr);

          resolve(stdout);
        }); 
    });
}

Helm.prototype.version = function (arg01, done) {
    return new Promise((resolve, reject) => {
        exec(this.binary + ' ' + getArguments('version', arg01, undefined, undefined), (error, stdout, stderr) => {
            if (error)
                return reject(error);

            if (stderr)
                return reject(stderr);

          resolve(stdout);
        }); 
    });
}

module.exports = function (conf) {
    cnf = conf || {};

    return new Helm(cnf);
}
