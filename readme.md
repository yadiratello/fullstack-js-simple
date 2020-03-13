1.
```bash
npm init -y
```
2. instalando modulos para el backend
```
npm i express mongoose morgan multer dotenv cross-env cors

npm i fs-extra
```

3. levantar el servidor
```bash
node backend/index.js
```

4.instalando nodemon como dependencia -D de desarrollo
```bash
npm i nodemon -D
```
5. levantar el proyecto
```bash
npm run dev
```
6. ejecutar mongodb
```bash
mongod.exe
mongo.exe
```
si se cuelga el servidor de mongodb
1.reparar el archivo db
> mongod --dbpath "C:\data\db" --repair
2. ejecutar el servidor de mongod
> mongod.exe

si no funciona hacer esto:
>mongod.exe storageEngine=mmapv1 --dbpath "C:\data\db"
7.
instalando dependencias de desarrollo para el frontend
```bash
npm i webpack webpack-cli html-webpack-plugin css-loader style-loader mini-css-extract-plugin webpack-dev-server timeago.js -D
```
8.generando la carpeta public
```bash
npx webpack
npm run build
```
ejecutar comando
```bash
npm run server:dev
npm run dev
```
9.
localhost:3000