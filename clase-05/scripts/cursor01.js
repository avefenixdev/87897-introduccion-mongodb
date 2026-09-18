print('Cursores')

print('-------------------------------------------------------------')
print('Creamos dinamicamente 100 documentos en la colección archivos')
print('-------------------------------------------------------------')

/* for (let i = 0; i < 100; i++) {
    db.archivos.insertOne(
        {
            archivo_id: i,
            nombre: 'archivo_' + i,
            created_at: new Date()
        }
    )
} */

print('------------------------------')
print('Interactuando con los cursores')
print('------------------------------')

let cursor = db.archivos.find()
//print(cursor) // <---- El cursor es un objeto
//console.dir(cursor)

print('--------------------------')
print('/* Métodos de los cursores')
print('--------------------------')

// ---------
// forEach()
// ---------

print('------------------------ forEach()')

/* cursor.forEach(function(doc) {
    print('----------')
    print(doc)
}) */

// ! -------------------------------------------------
// ! Otros métodos de los cursores (sort, skip, limit)
// ! -------------------------------------------------

cursor = db.archivos.find(
    {
        archivo_id: { $gte: 60 }
    },
    {
        _id: 0,
        archivo_id: 1,
        nombre: 1
    }
)
.skip(5)
.limit(20)
.sort({ archivo_id: -1}) /* -1 -> desc | 1 -> asc */
.noCursorTimeout()

//console.log(cursor)

// ! ---------------------------
// ! Métodos hasNext() y next()
// ! ---------------------------

print('---------------------- hasNext() y next()')

/* while ( cursor.hasNext() ) {
    print('--')
    print(cursor.next())
} */

// ! -----------------
// ! Métodos toArray()
// ! -----------------

print('--------------------- toArray()')

print('cursor (objeto) -----> array (métodos los arrays)')

//print(cursor)

let documentosArray = cursor.toArray()

print('Acceso directo a un documento en particular')

let document = documentosArray[0]
print(document)
document = documentosArray[5]
print(document)
document = documentosArray[documentosArray.length-1]
print(document)
print('Cantidad de documentos dentro del array:', documentosArray.length)