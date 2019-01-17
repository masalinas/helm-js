const { exec } = require('child_process');

function Helm(conf) {
    this.binary = conf.binary || 'helm'
}

function getArguments(command, flags, argument) {
    var args = command;

    if (flags)
        args = args + ' ' + flags;

    if (argument)
        args = args + ' ' + argument;

    return args;
}

Helm.prototype.delete = function (flags, release, done) {
    exec(this.binary + ' ' + getArguments('delete', flags, release), (error, stdout, stderr) => {
        done(error, stdout, stderr);
    });
}

Helm.prototype.get = function (flags, release, done) {
    exec(this.binary + ' ' + getArguments('get', flags, release), (error, stdout, stderr) => {
        done(error, stdout, stderr);
    });
}

Helm.prototype.install = function (flags, chart, done) {
    exec(this.binary + ' ' + getArguments('install', flags, chart), (error, stdout, stderr) => {
        done(error, stdout, stderr);
    });
}

Helm.prototype.list = function (flags, filter, done) {
    exec(this.binary + ' ' + getArguments('list', flags, filter), (error, stdout, stderr) => {
        done(error, stdout, stderr);
    }); 
}

Helm.prototype.status = function (flags, release, done) {
    exec(this.binary + ' ' + getArguments('status', flags, release), (error, stdout, stderr) => {
        done(error, stdout, stderr);
    }); 
}

Helm.prototype.version = function (flags, done) {
    exec(this.binary + ' ' + getArguments('version', flags, undefined), (error, stdout, stderr) => {
        done(error, stdout, stderr);
    });
}

module.exports = function (conf) {
    cnf = conf || {};

    return new Helm(cnf);
}
