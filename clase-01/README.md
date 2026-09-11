# Clase 01 - Introducción a MongoDB

## Conectarnos con los clientes al motor Atlas

### Mongo Shell

```sh
mongosh <string-connection> --apiVersion 1 --username <usuario>
# Enter password: ****************
```

### Mongo Compass
Van a "New Connection" > URI (connection string)

<mongodb+srv://<usuario>:<password>@ave-fenix.kfnq3ci.mongodb.net/>

## Conectarse con el motor de base de datos local

### Tengo que levantar el motor de DB (MONGODB) en el local

```sh
mongod
```

### Detener el motor de DB local

Ctrl + C

### Tengo que conectarme con cliente MongoSH al servidor

```sh
mongosh # En otra terminal ejecuto
```

### Para salir del cliente MongoSH

(Ctrl + C) * 2

```sh
.exit
```

# Dentro de MongoSH

## Listar Bases de datos

```js
show dbs
```

## Para limpiar MongoSH

```js
cls
```

## Para crear o cambiar a una DB

```js
use <nombre-db>
use db_pescar // minusculas y separador de palabaras _
```

## Para mostrar las colecciones

```sh
show collections
```

## Crear un colección 

```js
db.createCollection('<nombre-coleccion>')
db.createCollection('productos') // nombres de las colecciones siempre en plural
db.createCollection('clientes')
```
