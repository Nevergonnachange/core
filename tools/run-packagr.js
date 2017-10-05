/**
 * Author:      NeverGonnaChange
 * Project:     core - run-packagr.js
 * Created on:  03.10.2017 16:34
 */

const fs    = require('fs');
const path  = require('path');

fs.readFile(path.resolve(__dirname, '../entries.json'), 'utf-8', (err, entries) => {
    err ? console.log(err)
        : runPackagr(JSON.parse(entries));
});

function runPackagr(entries) {
    mkdirSync(path.resolve(__dirname, '../tmp/'));
    Object.keys(entries).forEach(entry => {
       generateNgPackage(entry, entries[entry])
    });
}

function generateNgPackage(name, fileName) {
    const data = {
        $schema: '../node_modules/ng-packagr/ng-package.schema.json',
        dest: '../dist/' + name,
        src: '../',
        'workingDirectory': '../.ng_build',
        lib: {
            entryFile: path.resolve(__dirname, '../src/lib/', fileName)
        }
    };
    fs.writeFile(path.resolve(__dirname, '../tmp/', 'ng-package-' + name + '.json'), JSON.stringify(data), (err, res) => {
        console.log(err);
        console.log(res);
    })
}

const mkdirSync = function (dirPath) {
    try {
        fs.mkdirSync(dirPath)
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
}
