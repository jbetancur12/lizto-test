# Lizto Software Prueba de Programación
Cualquier duda relacionada a la prueba puede enviarla a **desarrollo@lizto.co**
-----

## Descripción de la prueba
La prueba consiste en el desarrollo de un CRUD de facturas de compra de productos y generación de Informes.

El proyecto debe permitir:

1. Listar las compras realizadas.
2. Registrar una Compra.
- Registrar los datos generales de la compra.
- Registrar los productos comprados.
3. Editar una Compra.
- Editar los datos generales de la compra.
- Editar los productos comprados.
4. Recibir una compra.
5. Anular una Compra.
6. Generación de informes en HTML.
- Informe de Compras por rango de fechas.
- Informe de Compras totalizdo por productos.
- Informe de Compras totalizdo por proveedor.

### Restricciones
- Una compra se crea en estado IN_PROGRESS (En este estado se pueden modificar datos generales y los productos)
- La opcion de recibir una compra cambia el estado de la compra RECEIVED
- Cuando una compra pasa a estado RECEIVED o CANCELLED no se puede editar
- Anular una Compra cambia su estado a CANCELLED
- Todos los informes deben estar totalizados al final.

### Estructura Base de DB
products
- id
- name

suppliers
- id
- name

purchases
- consecutive
- date
- supplier_id
- state [IN_PROGRESS, RECEIVED, CANCELLED]
- total_cost

purchase__detail
- purchase_id
- product_id
- quantity
- cost
- total_cost

## Tecnologias
- Backend: Php 7.2 Laravel > 8
- Frontend:
  - Javascript Estandar ES6: VueJS (Preferiblemente)
  - CSS3: Bootstrap (Preferiblemente)
- Base de Datos (Mysql 5.6 o 8)
- Control de Versiones: Git

## Aspectos a tener en cuentas
- Uso del sistema de Login de Laravel (Por defecto)
- Uso de un patrón de diseño para el flujo de una petición HTTP (Ej Controller, Repository, HTTP Response)
- Uso de medidas para evitar la repetición de código (mixins, traits, etc) (DRY)
- Definición de variables, nombres de archivos y demas
 - Nombre en Inglés
 - Usar CamelCase
 - Nombres explicativos
- Uso de un estándar de programación (Tabulación, Espacios, etc)
 - JS: SLint (Sugerido)
 - PHP: phpcs (Sugerido)
- Documentación si la lógica lo requiere.

## Entrega
- La prueba deberá ser entregada 5 días hábiles después de ser recibida. Por favor confirmar recepción del correo con este documento.
- El código debe ser entregado por medio de una URL a un repositorio GIT. (GitHub, Bitbucket, GitLab, etc).
- Se debe incluir un archivo *readme.md* con instrucciones para la ejecución del proyecto y anotaciones que se quiera compartir sobre el desarrollo.
