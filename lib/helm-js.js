const { spawn } = require('child_process');

function Helm(conf) {
    this.binary = conf.binary || 'helm'
}

Helm.prototype.spawn = function (args, done) {
    var helm = spawn(this.binary, args), stdout = '', stderr = '';

    helm.stdout.on('data', (data) => {
        stdout += data;
    });

    helm.stderr.on('data', (data) => {
        stderr += data;
    })

    helm.on('close', function (code) {
        if (!stderr)
            stderr = undefined;

        done(stderr, stdout);
    })
}

Helm.prototype.list = function (flags = [], filter, done) {
    flags.unshift('list');

    this.spawn(flags, function (err, data) {
        if (err)
            done(err, data);

        done(null, data);
    })
}

Helm.prototype.version = function (flags = [], done) {
    flags.unshift('version');

    this.spawn(flags, function (err, data) {
        if (err)
            done(err, data);

        done(null, data);
    })
}

module.exports = function (conf) {
    cnf = conf || {};

    return new Helm(cnf);
}
