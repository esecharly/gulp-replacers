# gulp-replacers

<img align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gulp.js_Logo.svg/800px-Gulp.js_Logo.svg.png" height="150px">

Fork de gulp-utils adaptada para escapar caracteres especiales en archivos HTML y TXT en mails de Mamut.

<br><br>

## Requerimientos

+ [NodeJS + npm](https://nodejs.org/en)
+ [git](https://git-scm.com/)

Si te encuentas en Windows tambien es necesario activar el uso de scripts en PowerShell, para ello debes abrir PowerShell como administrador y escribir el siguiente comando:

`Set-ExecutionPolicy Unrestricted`

Una vez instalado NodeJs + npm y permitidos los scripts en PowerShell instalaremos el CLI de gulp con el siguiente comando:

`npm install --global gulp-cli`

## Uso del repositorio

Necesitaras clonar este repositorio en una carpeta en tu PC:

`git clone https://github.com/esecharly/gulp-replacers.git`

Dentro de la carpeta de el proyecto abre una consola y usa el comando:

`npm install`

Este comando instalar&aacute; los modulos necesarios

Terminado el proceso de instalacion de dichos modulos contaremos con dos funciones para ejecutar desde el gulp CLI

1) `gulp replacerTxt` -> Reemplaza los caracteres de los archivos `.txt` contenidos en el directorio `inputs/` y las alojara en el directorio `outputs/`.

2) `gulp replacerHtml` -> Reemplaza los caracteres de los archivos `.html` contenidos en el directorio `inputs/` y las alojara en el directorio `outputs/`.

3) `gulp replacerAll` -> Ejecuta las dos funciones descritas arriba

### Mas Informaci&oacute;n

Para mas informaci&oacute;n visitar:

+ [gulp](https://gulpjs.com/)
+ [gulp-replace](https://www.npmjs.com/package/gulp-replace)

---
