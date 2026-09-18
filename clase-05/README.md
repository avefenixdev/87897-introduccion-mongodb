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

## noCursorTimeout()

<https://www.mongodb.com/docs/manual/reference/method/cursor.noCursorTimeout/>


# Trabajando con las listas (Arrays)

```js
db.alumnos.insertMany([
  { _id: 1, nombre: "Juan",   edad: 25,  tags: ["js", "node", "api"],        notas: [{ tipo: "examen", nota: 7 }, { tipo: "tarea", nota: 6 }] },
  { _id: 2, nombre: "Ana",    edad: 28,  tags: ["react", "frontend"],        notas: [{ tipo: "examen", nota: 9 }] },
  { _id: 3, nombre: "Pedro",  edad: 30,  tags: ["node", "mongo"],            notas: [{ tipo: "tarea", nota: 5 }] },
  { _id: 4, nombre: "Lucía",  edad: 22,  tags: ["css", "html"],              notas: [{ tipo: "examen", nota: 8 }, { tipo: "tarea", nota: 9 }] },
  { _id: 5, nombre: "Carlos", edad: 27,  tags: ["node", "js", "express"],    notas: [{ tipo: "examen", nota: 4 }] },
  { _id: 6, nombre: "María",  edad: 29,  tags: ["vue", "frontend"],          notas: [{ tipo: "examen", nota: 10 }] },
  { _id: 7, nombre: "Laura",  edad: 24,  tags: ["node", "react"],            notas: [{ tipo: "tarea", nota: 6 }] },
  { _id: 8, nombre: "Diego",  edad: 26,  tags: ["mongo", "api"],             notas: [{ tipo: "examen", nota: 7 }, { tipo: "tarea", nota: 8 }] },
  { _id: 9, nombre: "Marta",  edad: 31,  tags: ["css", "design"],            notas: [{ tipo: "tarea", nota: 10 }] },
  { _id: 10, nombre: "Javier",edad: 35,  tags: ["express", "api"],           notas: [{ tipo: "examen", nota: 9 }] },
  { _id: 11, nombre: "Rosa",  edad: 21,  tags: ["node", "js"],               notas: [{ tipo: "examen", nota: 5 }] },
  { _id: 12, nombre: "Nico",  edad: 23,  tags: ["vue", "html"],              notas: [{ tipo: "tarea", nota: 7 }] },
  { _id: 13, nombre: "Pablo", edad: 32,  tags: ["react", "api"],             notas: [{ tipo: "examen", nota: 6 }] },
  { _id: 14, nombre: "Cecilia",edad: 26, tags: ["js", "frontend"],           notas: [{ tipo: "tarea", nota: 9 }] },
  { _id: 15, nombre: "Tomás", edad: 25,  tags: ["express", "backend"],       notas: [{ tipo: "examen", nota: 8 }] },
  { _id: 16, nombre: "Verónica",edad: 27,tags: ["css", "design", "html"],    notas: [{ tipo: "tarea", nota: 7 }] },
  { _id: 17, nombre: "Gabriel",edad: 22, tags: ["node", "backend"],          notas: [{ tipo: "examen", nota: 10 }] },
  { _id: 18, nombre: "Sofía", edad: 28,  tags: ["vue", "js"],                notas: [{ tipo: "tarea", nota: 5 }] },
  { _id: 19, nombre: "Ricardo",edad: 33, tags: ["react", "api", "mongo"],    notas: [{ tipo: "examen", nota: 8 }] },
  { _id: 20, nombre: "Elena", edad: 24,  tags: ["html", "css", "design"],    notas: [{ tipo: "tarea", nota: 6 }] }
])
```

## Operador $all (Devuelve todos los alumnos que tengan 'vue' y 'js')

```js
db.alumnos.find(
    {
        tags: {
            $all: ['vue', 'js']
        }
    }
)
```  

```js
db.alumnos.find(
    {
        tags: {
            $all: ['node', 'js']
        }
    }
)
```  

## Operador $elemMatch ( Encuentra alumnos que tengan al menos una nota de examen mayor a 8 )

```js
db.alumnos.find(
    {
        notas: {
            $elemMatch: {
                tipo: 'examen',
                nota: {
                    $gt: 8
                }
            }
        }
    }
)
``` 

## Operador $size (Devuelve alumnos con exactamente 2 tags)

```js
db.alumnos.find(
    {
        tags: {
            $size: 2
        }
    }
)
```

## field.N:  Devuelve el alumno que tenga en la posición de la lista el elemento buscado

```js
db.alumnos.find(
    {
        'tags.0': 'node'
    }
)
```

```js
db.alumnos.find(
    {
        'tags.1': 'node'
    }
)
```

## Operador $exists: Devuelve si existe el field en el documento

```js
db.alumnos.find(
    {
        tags: { $exists: true }
    }
) /* Muestra todos los documentos que tengan el field 'tags' */
``` 

```js
db.alumnos.find(
    {
        activo: { $exists: false }
    }
) /* Muestra todos los documentos que no tenga el field 'activo' */
``` 

# Tareas de mantenimiento y trabajo con MONGO

## Mongo Dump
Nos permite hacer una imagen, backup de nuestras bases de datos y colecciones

<https://www.mongodb.com/docs/database-tools/mongodump/>

```sh
mongodump --version
``` 

```sh
# Trabajo local
mongodump --uri="mongodb://mongodb0.example.com:27017" [additional options]
mongodump --db=db_pescar --collection=products

# Trabajo remoto
mongodump "mongodb+srv://ave-fenix.kfnq3ci.mongodb.net/" --username avefenixdev_db_user --db=sample_mflix
```  
## Mongo Restore
Nos permite recuperar dumps (backups) de la base de datos o colecciones

<https://www.mongodb.com/es/docs/database-tools/mongorestore/>

```sh
mongorestore --version
``` 

```sh
# Trabajo local
mongorestore <options> <connection-string> <directory or file to restore>
mongorestore --nsInclude=db_pescar.products ./dump
mongorestore --nsInclude=db_pescar.* ./dump
mongorestore --nsInclude=sample_mflix.* ./dump

# Trabajo remoto
mongorestore "mongodb+srv://ave-fenix.kfnq3ci.mongodb.net/" --username avefenixdev_db_user --nsInclude=db_pescar.products ./dump
```  

## Mongo Import
Importar archivos json y csv a MongoDB conviertiendo a documentos.

<https://www.mongodb.com/es/docs/database-tools/mongoimport/>

```sh
mongoimport --version
``` 

```sh
mongoimport <options> <connection-string> <file>
mongoimport --db=db_pescar --collection=inscriptos --jsonArray --file=inscriptos.json
mongoimport --db=db_pescar --collection=autos_usados --jsonArray --file=autos_usados.json
``` 


## Mongo Export
Exportar documentos MongoDB a archivos json y csv.

<https://www.mongodb.com/es/docs/database-tools/mongoexport/>

```sh
mongoexport --version
```

```sh
mongoexport --db=db_pescar --collection=products --type=json --out=products.json
``` 