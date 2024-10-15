const { src, dest, series } = require("gulp");
const replace = require("gulp-replace");

const path = {
    replaceHtml: "inputs/**/*.html",
    replaceTxt: "inputs/**/*.txt"
}

function replaceStringTxt() {
    return src(path.replaceTxt)
        .pipe(replace("®", "(R)"))
        .pipe(replace("©", "(C)"))
        .pipe(replace("PassTM", "Pass(TM)"))
        .pipe(replace("Pass™", "Pass(TM)"))
        .pipe(replace("™", "(TM)")) 
        
        .pipe(dest("outputs/"));
};

function replaceStringHtml() {
    return src(path.replaceHtml)
        .pipe(replace("á", "&aacute;"))
        .pipe(replace("é", "&eacute;"))
        .pipe(replace("í", "&iacute;"))
        .pipe(replace("ó", "&oacute;"))
        .pipe(replace("ú", "&uacute;"))
        .pipe(replace("Á", "&Aacute;"))
        .pipe(replace("É", "&Eacute;"))
        .pipe(replace("Í", "&Iacute;"))
        .pipe(replace("Ó", "&Oacute;"))
        .pipe(replace("Ú", "&Uacute;"))
        .pipe(replace("ñ", "&ntilde;"))
        .pipe(replace("®", "<sup>&reg;</sup>"))
        .pipe(replace("©", "&copy;"))
        .pipe(replace("$", "&#36;"))
        .pipe(replace("PassTM", "Pass(TM)"))
        .pipe(replace("Pass™", "Pass<sup>TM</sup>"))
        .pipe(replace("™", "<sup>TM</sup>"))  

        .pipe(dest("outputs/"));
};

function finalesHtml() {
    return src(path.replaceHtml)
        
        .pipe(replace("image/", "https://i.email.americanexpress.com/wpm/1288/Images/"))

        .pipe(dest("outputs/"));
};

function cheetahToMarigoldHtml() {
    return src(path.replaceHtml)
        .pipe(replace("%%email%%", "{(email)}"))
        .pipe(replace("%%FNAME%%", "{(FNAME)}"))
        .pipe(replace("%%INTL_LAST5%%", "{(LAST_5)}"))
        .pipe(replace("%%ignore%%", ""))
        .pipe(replace("http://ebm.email.americanexpress.com/c/tag/%%t%%/doc.html?t_sparams=%%t_sparams%%", "https://x.email.americanexpress.com/ats/msg.aspx?sg1={(URLSignature1)}"))
        
        .pipe(dest("outputs/"));
};

function cheetahToMarigoldTxt() {
    return src(path.replaceTxt)
        .pipe(replace("%%email%%", "{(email)}"))
        .pipe(replace("%%FNAME%%", "{(FNAME)}"))
        .pipe(replace("%%INTL_LAST5%%", "{(LAST_5)}"))
        .pipe(replace("%%ignore%%", ""))
        .pipe(replace("http://ebm.email.americanexpress.com/c/tag/%%t%%/doc.html?t_sparams=%%t_sparams%%", "https://x.email.americanexpress.com/ats/msg.aspx?sg1={(URLSignature1)}"))
        
        .pipe(dest("outputs/"));
};

exports.replacerAll = series(replaceStringHtml, replaceStringTxt);
exports.replacerTxt = replaceStringTxt;
exports.replacerHtml = replaceStringHtml;
exports.finalesHtml = finalesHtml;
exports.cheetahToMarigold = series(cheetahToMarigoldHtml, cheetahToMarigoldTxt);