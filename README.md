# OBJETIVO DEL SISTEMA
El objetivo del sistema es poder hacer reservas de las canchas de fútbol del complejo ydebe tener un ecommerce para vender productos. Para poder cumplir con esto debemostener un registro, login de usuarios y poder crear un crud de canchas y de productos asícomo también administrar los usuarios. Más detalles a continuación.


# Página principal.
La página principal debe tener información del complejo y publicidades. También debetener productos relacionados para que puedan ser comprados por los usuarios, ylógicamente mostrar las canchas disponibles.

# Administrador
El administrador debe poder hacer un crud de productos y de canchas.
Detalle de las canchas, NO puede ser reservada dos veces en el mismo horario.
También debe poder administrar los usuarios, eliminando o dejando inactivos a losmismos.

# Secciones
- Quienes Somos
- Contacto
- Galería de Imagenes

# Especificaciónes técnicas

# Definir la estructura de la base de datos
Crea un modelo de datos en MongoDB para almacenar la información necesaria. Porejemplo,
tener colecciones para usuarios, productos y canchas. Deben incluir campos comonombre, correo electrónico, contraseña, roles, productos, horarios de las canchas, etc.

# Configurar la autenticación y autorización
Implementa el registro y el inicio de sesión utilizando Node.js y Express. Utilizar bibliotecascomo jsonwebtoken para generar tokens JWT y bcrypt para el hash de las contraseñas.

# Integrar el backend con el frontend
Conectar el frontend de React.js con el backend de Node.js y Express, utilizando la bibliotecaaxios para realizar solicitudes HTTP desde el frontend al backend y viceversa. Definir lasrutas en Express para manejar las solicitudes de API, como obtener los productos, realizaruna compra o reserva, etc.

# Implementar el CRUD de productos y canchas
Desarrolla las funcionalidades de creación, lectura, actualización y eliminación (CRUD) paralos productos y las canchas. Esto implica crear formularios y vistas que permitan a losusuarios administradores realizar estas acciones. Asegurarse de proteger estas rutas yfuncionalidades para que solo los usuarios con los permisos adecuados puedan acceder aellas.

# Implementar la reserva de canchas
Validar las fechas y horarios de las canchas para evitar la duplicación de reservas. Se puedeutilizar lógica en el backend para verificar si una cancha ya está reservada en un horarioespecífico antes de aceptar una nueva reserva.

# Desarrollar la funcionalidad de administrador
Crear una interfaz para que los usuarios con el rol de administrador puedan ver y gestionar alos usuarios registrados. Esto puede incluir la capacidad de eliminar usuarios o suspendersus cuentas.

# Validaciones
Cada acción que le permitamos hacer al usuario final o administrador debe estar validada.
Ejem. Input.

# Error 404
El error 404 proviene desde el backend. Cuando se nos dé este estado, desde el frontenddebemos consumirlo y mostrar una página relativa a ese error

# Códigos de estado
Cada código de estado debe estar bien especificado con su respectivo texto. Esos códigosdebemos consumirlos desde el frontend dependiendo la acción de usuario y debemosmostrar el texto pertinente. Ejemplo. Códigos de error ---> Mostrar al usuario cual fue el errory qué debe hacer para poder arreglarlo.