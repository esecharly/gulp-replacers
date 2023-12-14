const { src, dest } = require('gulp');
const replace = require('gulp-replace');

const path = {
    replaceHtml: 'inputs/replace-str/**/*.html',
    replaceTxt: 'inputs/replace-str/**/*.txt'
}

function replaceStringTxt() {
    return src(path.replaceTxt)
        .pipe(replace('®', '(R)'))
        .pipe(replace('©', '(C)'))
        .pipe(dest('outputs/replaced-str/'));
};

function replaceStringHtml() {
    return src(path.replaceHtml)
        .pipe(replace('á', '&aacute;'))
        .pipe(replace('é', '&eacute;'))
        .pipe(replace('í', '&iacute;'))
        .pipe(replace('ó', '&oacute;'))
        .pipe(replace('ú', '&uacute;'))
        .pipe(replace('Á', '&Aacute;'))
        .pipe(replace('É', '&Eacute;'))
        .pipe(replace('Í', '&Iacute;'))
        .pipe(replace('Ó', '&Oacute;'))
        .pipe(replace('Ú', '&Uacute;'))
        .pipe(replace('ñ', '&ntilde;'))
        .pipe(replace('®', '<sup>&reg;</sup>'))
        .pipe(replace('©', '&copy;'))
        .pipe(replace('$', '&#36;'))
        .pipe(dest('outputs/replaced-str/'));
};

function replaceAll() {
  replaceStringTxt;
  replaceStringHtml;
};

exports.replacerAll = replaceAll;
exports.replacerTxt = replaceStringTxt;
exports.replacerHtml = replaceStringHtml;