const fs = require('fs-extra');
const unflatten = require('flat').unflatten;
const { extractSheets } = require('spreadsheet-to-json');
const path = require('path');

extractSheets(
    {
        spreadsheetKey: '1WhQkih9UPFA9YuRfGoyPfPD-pb6KHB7wA8YlO-pBek8',
        credentials: require('../json/avid-folder-340114-9402a0c2e23b.json'),
        sheetsToExtract: ['index', 'menu', 'api', 'cardInfo']
    },
    (err, data) => {
        if (err) throw err;

        const read = [
            ...data['index'],
            ...data['menu'],
            ...data['api'],
            ...data['cardInfo']
        ];
        const result = {};
        const files = [];

        for (const key in read[0]) {
            if (key !== 'key') {
                files.push(key);
                result[key] = {};
            }
        }
        read.forEach((el) => {
            for (const file of files) {
                result[file][el['key']] = el[file] ? el[file] : '';
            }
        });
        for (const fileName of files) {
            fs.ensureDirSync(
                path.dirname(
                    path.resolve(__dirname, '../language', `${fileName}.json`)
                )
            );
            fs.writeJSONSync(
                path.resolve(__dirname, '../language', `${fileName}.json`),
                unflatten(result[fileName], { object: true }),
                { spaces: 2 }
            );
        }
    }
);
