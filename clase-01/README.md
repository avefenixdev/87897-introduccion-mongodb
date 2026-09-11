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

## Método insertOne() -> Crear un documento 

```js
db.<nombre-coleccion>.insertOne({
    field1: value1,
    field2: value2
})
```


```js
db.productos.insertOne({
    nombre: 'PC',
    categoria: 'Informatica',
    precio: 223.40
})
```

## Método insertMany() -> Crear un o más documentos

```js
db.<nombre-colección>.insertMany([
    {nombre: 'Celular'}, { nombre: 'Tablet'}
])
```

```js
db.productos.insertMany([
    {
        nombre: 'Celular',
        categoria: 'Comunicación',
        precio: 333.45
    }, 
    { 
        nombre: 'Tablet',
        categoria: 'Entretenimiento',
        precio: 232.34
    }
])
```

## Método find(): Me sirve para listar o filtrar elementos dentro de una colección

```js
db.<nombre-colección>.find() // Todos los elementos
db.<nombre-colección>.find({}) // Todos los elementos
db.productos.find({ nombre: 'PC' }) // Los documentos que tenga 'PC' en su field nombre
```

## Contar los documentos totales de una colección y los documentos obtenidos por alguna operación

```js
db.<nombre-colección>.countDocuments() // Me cuenta la cantidad total de documentos
db.productos.countDocuments() // Me cuenta la cantidad total de documentos
```

```js
// Me muestra la cantidad de documentos que devuelve la consulta
db.<nombre-colección>.find({}).count()
db.<nombre-colección>.find({}).size()
db.productos.find({ categoria: 'Informatica' }).count() // 2 documentos
```  