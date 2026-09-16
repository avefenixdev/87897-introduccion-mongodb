# Clase 03 - Introducción a MongoDB

## Levantar motor de DB

```sh
mongod
```

## Detener motor de DB

Ctrl + C

## Arrancar cliente de DB

```sh
mongosh
```

## Detener el cliente

(Ctrl + C) * 2

## Crear o cambiar de DB

```js
use <nombre-base-datos>
use db_pescar
```

## Mostrar DBs disponibles

```js
show dbs
```

## Crear una colección

```js
db.createCollection('<nombre-colección'>)
db.createCollection('personas')
```

## Listar y filtrar los elementos dentro de una DB

```js
db.<nombre-colección>.find()
db.<nombre-colección>.find({})
db.<nombre-colección>.findOne({}) // Me muestra el primer documento que encuentre según el filtro
```

## Método insertOne(): Creamos un documento dentro de la colección

```js
db.<nombre-colección>.insertOne()
db.personas.insertOne({
    nombre: 'Laura',
    edad: 43
})
```