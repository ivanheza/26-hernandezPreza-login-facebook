# Desafío Inicio de Sesión con Facebook

##### Inicializar desde la consola dentro de la carpeta server con:

-  **npm run start:** inicializa el proyecto

-  Acceder al proyecto en la dirección **http://localhost:9000**

Para este desafío persistencia de los datos esta basada en FileSystem y la persistencia de usuarios y sesiones en MONGODB.

## LOG-IN

-  La aplicación inicia en la vista de log-in. Para acceder a las demás rutas, se debe "iniciar sesión" con la verificación de Facebook.
-  Al iniciar sesión se guarda un nuevo User en la base de datos de Mongo.

## MOCKS Productos

-  Para genererar los productos via mocks, usar el boton addMocks.

## Chat Cambios

-  Para la persistencia del chat se esta utilizando fileSystem. Esto con la finalidad de aplicar la normalización de datos en los objetos anidados.

### Git Ignore

> > > node modules y archivos .DIR

### Main Dependencies

-  Para el servidor, manejo de rutas [Express JS](https://expressjs.com/es/ "Ver más")
-  Para el manejo de sessions en mongo [connect-Mongo](https://www.npmjs.com/package/connect-mongo "Ver más")
-  Para manejo de session en la app [Express Session](https://www.npmjs.com/package/express-session "Ver más")
-  Para el render del frontend [Express Handlebars](https://www.npmjs.com/package/express-handlebars "Ver más")
-  Middleware de autenticación para Node [passport](https://www.npmjs.com/package/passport "Ver más")
-  Para el manejo de autenticación de Facebook [passport-facebook](https://www.npmjs.com/package/passport-facebook "Ver más")
-  Para la implementación de mysql [mysql](https://momentjs.com/ "Ver más")
-  Para la normalización de objetos anidados en la instancia de mensajes [normalizr](https://www.npmjs.com/package/normalizr "Ver más")
-  Para la configuracion del servidor y la comunicación entre el backend y frontend [socket io](https://socket.io/ "Ver más")

-  Se utilizó la dependencia de dotenv para la implementacion y uso de variables de entorno .env [dotenv](https://www.npmjs.com/package/dotenv "Ver más")
-  Herramienta para trabajar con MongoDB [mongoose](https://www.npmjs.com/package/mongoose "Ver más")

#### Created by: **Ivan Hernández Preza**
