'use strict';
exports.__esModule = true;
const fs_mjs_1 = require('./fs.mjs');
const commander_1 = require('commander');
commander_1.program
    .option('--filepath <valeur>', 'Spécifiez le fichier à convertir')
    .option('--fileout <valeur>', 'Spécifiez le fichier de sortie (optionnel)')
    .parse(process.argv);
const options = commander_1.program.opts();
if (options.filepath) {
    (0, fs_mjs_1.createDocument)(options.filepath, options.fileout);
} else {
    console.error(
        'Le paramètre filepath est obligatoire. Utilisez --filepath pour spécifier le fichier à convertir.',
    );
}
