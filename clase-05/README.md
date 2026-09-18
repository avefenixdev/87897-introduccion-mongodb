# Clase 05 - Introducción a Mongo

## Arrancar el servidor

```sh
mongod
``` 

## Conectarnos al motor de DB

```sh
mongosh
``` 

## Listar bases de datos

```js
show dbs // show databases
```

## Crear o cambiarse de base de datos

```js
use <nombre-db>
use db_pescar
```

## Listar indices de una colección

```js
db.<nombre-colección>.getIndexes()
db.indices.getIndexes()
```

## Crear un índice

```js
db.indices.createIndex({ nombre: 1 }) // asc: 1 | desc: -1
```

## Eliminar un índice

```js
db.indices.dropIndex({ nombre: 1 })
``` 

# CURSORES (Cursors) -> Es un objeto
El cursor es un elemento que me permite ir obteniendo todos los documentos de una query, no de forma completa, sino de a paquetes (batches) de documentos. O sea obtener documentos de forma perezosa (Lazy). El cursor una vez consumido, no tiene más información. Se agoto (se queda sin info). Para volver a llenar el cursor tengo que volver a ejecutar la query (consulta).

![cursor](_ref/cursors.png)

# Como trabajar con Scripts (js)
Si estoy en el directorio donde están los scripts, me va a resultar mucho más fácil ejecutar los scripts

```js
load('<ruta>/<al>/<script>/cursor01.js')
load('cursor01.js')
```

## Para eliminar una colección

```js
db.<nombre-colección>.drop()
db.archivos.drop()
``` 