# Clase 02 - Introducción a MongoDB

## Arrancar el motor de MongoDB

```sh
mongod
```

## Salir del montor de DBs

Ctrl + C


## Conectar al motor de DB

```sh
mongosh
```

## Salir del cliente mongosh

```js
.exit // (Ctrl + C) * 2
```

## Mostrar las DBs disponibles (Listarlas)

```js
show dbs
```

## Cambiarme de DB o crear una DB

```sh
use <nombre-db>
use db_pescar
```

## Listar colecciones de una DB

```js
show collections
```

## Crear una colección

```js
db.createCollection('<nombre-colección>')
db.createCollection('categories')
```

## Insertar documentos en la colección

```js
db.<nombre-colección>.insertMany([{}, {}])
db.categories.insertMany([
    {
        name: 'Mouse',
        slug: 'mouse',
        description: 'Mouse para oficina y gaming',
        active: true
    },
    {
        name: 'Webcams',
        slug: 'webcams',
        description: 'Cámaras web para videoconferencias',
        active: true
    },
    {
        name: 'Almacenamiento',
        slug: 'almacenamiento',
        description: 'Discos SSD y dispositivos de almacenamiento',
        active: true
    },
])
```




