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

## ObjectID

<https://www.geeksforgeeks.org/mongodb/what-is-objectid-in-mongodb/>
<https://www.mongodb.com/es/docs/manual/reference/method/objectid/>

## Método insertMany(): De uno o más documentos

```js
db.<nombre-colección>.insertMany([{}, {}, {}])
db.personas.insertMany([
    {
        nombre: 'Lorena',
        edad: 22
    }, 
    {
        nombre: 'Pedro',
        edad: 33
    }, 
    {
        nombre: 'Juan',
        edad: 18
    },
    {
        nombre: 'Micaela',
        edad: 54
    },
    {
        nombre: 'Pablo',
        edad: 87
    },
    {
        nombre: 'Geraldine',
        edad: 38
    },
    {
        nombre: 'Diego',
        edad: 78
    },
    {
        nombre: 'Sandra',
        edad: 43
    },
    {
        nombre: 'Maxi',
        edad: 34
    }
])
```

```js
db.personas.insertOne({
    _id: 1,
    nombre: 'Paula',
    edad: 68
})
```

## Operadores de comparación

## Operador -> $eq: (Igual a...)

```js
db.personas.find({
    edad: {
        $eq: 43
    }
})
```

## Operador -> $gt: (Mayor que...)


```js
db.personas.find({
    edad: {
        $gt: 43
    }
})
```

## Operador -> $gte: (Mayor o igual que...)

```js
db.personas.find({
    edad: {
        $gte: 43 /* Incluye a los documentos cuya edad sea 43 */
    }
})
```

## Operador -> $lt: (Menor que...)

```js
db.personas.find({
    edad: {
        $lt: 43
    }
})
```

## Operador -> $lte: (Menor o igual que...)

```js
db.personas.find({
    edad: {
        $lte: 43
    }
})
```

## Operador -> $ne: (No igual que...)

```js
db.personas.find({
    edad: {
        $ne: 43 /* Todos los documentos que no tengan la edad de 43 */
    }
})
```

## Operador -> $in: (Incluido en...)
## Operador -> $nin: (No incluido en...)





