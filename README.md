# likeMeG35_I

Se sube desafio en donde dentro del repositorio se suben 2 proyectos:
1.-likemereact.
   Este corresponde al codigo de apoyo entregado en el desafio que tiene la función de poder consumir la api que se debe desarrollar en node, este código no tiene cambios solo ajustar algunas referencias que estaban dando 
   problemas al monento de su ejecución.
2.-node-likeMeG35.
   Este proyecto contiene el desarrollo del componente del desafio según las siguientes hitos.
    1.Habilitar los cors en el servidor utilizando el paquete de npm. 
    2.Usar el paquete pg para conectarse e interactuar con la base de datos.
    3.Crear una ruta GET con Express para devolver los registros de una tabla alojada en PostgreSQL.
    4. Crear una ruta POST con Express que reciba y almacene en PostgreSQL un nuevo registro.

    Condiderar que dentro de este proyecto para las configuraciones se utiliza un archivo .env el cual tiene las credenciales de conexión a la base de datos postgress y puerto node.
    ##Config localhost 
       DBP_SERVER=localhost
       DBP_PORT=5432
       DBP_USER=postgres
       DBP_PASSWORD=admin
       DBP_DATABASE=likeme
    ##Config server 
       PORT=3000
   
