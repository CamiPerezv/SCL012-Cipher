
# Top Secret

En la actualidad, existen varia situciones en las que nos vemos obligados a buscar la forma de enviar mensajes sin que el resto se entere. ya sea en contexto personal, laboral, profecional, etc.
Si nos centramos en el contexto personal, como lo es la amistad entre mujeres de entre 20-30. Podemos ver que mas de alguna vez se han visto envueltas en esta situación. 

Algunos ejemplos:

 - Contarle un secreto a una amiga, pero ella se encuentra en un lugar donde posiblemente se pueda filtrar. 
 - Se enteró de algo y quiere decirlo a alguien, pero no puede ser muy explícita al redactarlo.
 - Está chateando en el transporte publico y no quiere que la persona que va a su lado lea sus mensajes.

# El proyecto

Lo que se busca es facilitar la comunicación en situaciones complejas entre el grupo mas cercano de amigas. 
¿De qué forma?, creando una página web que permita cifrar mensajes y descifrarlos. 

Para lograr esto se basará en el Cifrado Cesar. Es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante (o antes en el caso del descifrado) en el mismo alfabeto.


# test de usabilidad 

[Video Nº1](https://www.loom.com/share/a989c81de5ca4ae49f986f7eabd4efcf)
[Video Nº1](https://www.loom.com/share/ec6216d8a60e4999ac9ccef4aebb78af)
[Video Nº1](https://www.loom.com/share/6f292ad6767e4831ad6f916b3226470c)
[Video Nº1](https://www.loom.com/share/d87ccbba799045f1bfbf7db2e65fff9f)
[Video Nº1](https://www.loom.com/share/377d460c701143c6b5b8dec756871726)


# Procesos y decisiones de diseño.

Sketch

En el proceso de diseño del proyecto se realizó un sketch a mano alzada con ideas iniciales de la pagina web. En este proceso lo primordial fue que cada pantalla tuviera lo necesario para que el usuario pudiera interactuar de forma fluida.
una pantalla que contenga 2 opciones de codificar o decodificar y otra pantalla con 2 cajas de texto en el que pueda ingresar el mensaje y otra para ver el resultado. una opcion de seleccionar numero de desplazamiento y un botor para realizar la acción de preferencia.


![prototiposketch](https://github.com/CamiPerezv/SCL012-Cipher/blob/master/src/img/sketch.jpg)
![prototiposketch2](https://github.com/CamiPerezv/SCL012-Cipher/blob/master/src/img/sketch2.jpg)

Prototipo de Baja fidelidad

- En este proceso se traspasa el sketch a un prototipo digital, en el que de a poco se va acercando al diseño final. se ocupará la herramienta Balsamiq, la que nos permitirá obtener recursos ya predeterminados para ayudandonos en al realizacion del diseño.

![prototipo1](https://github.com/CamiPerezv/SCL012-Cipher/blob/master/src/img/Mockup1.png?raw=true)
![prototipo2](https://github.com/CamiPerezv/SCL012-Cipher/blob/master/src/img/Mockup2.png?raw=true)
![prototipo3](https://github.com/CamiPerezv/SCL012-Cipher/blob/master/src/img/Mockup2.png?raw=true)



Prototipo de Alta fidelidad 

 Para acercarse al prototipo final, en esta instancia se ocupará la plataforma Figma, que permite acercarse al diseño final, aplicando imagenes, colores y dandole interacción a la pagina web. 
 En este caso, basandose en la psicologia del color, se ocuparán tonalidades rosas, que dice: El color rosa es un color relajante que influye en los sentimientos invitándolos a ser amables, suaves, e induciendo de esta forma a sentir cariño y protección. lo que calza perfecto con nuesta intención de generar un ambiente de confianza entre amigas.

- Logo: Se centra en las mismas tonalidades y se da un simbolo de mensajería para contextualizar la idea central de enviar mensajes
 
- Pantalla de bienvenida: Contará con una breve introducción creando un contexto. y dandole la opcion al usuario de cual es la acción que desea realizar.

- Pantallas cifrado/descifrado: En ambas existirá una breve introducción y pasos a realizar. Una caja de texto para ingresar el mensaje y otra para mostrar el resultado. Una sección para poder seleccionar un numero de desplazamiento. Y un botón que ejecutará la acción del cifrao o descifrado dependiendo de lo que requiera el usuario. Para darle la opción de volver a alegir una opción. Se crea un botón "atrás" el que deriva a a pantalla inicial de la pagina. Y finalmente un botón limpiar el cual dejara los espacios vacios para volver a cifrar o descifrar.
- En la realización de proyecto se ocupará el programa Visual Studio Code 


[VER PROTOTIPO AQUÍ](https://www.figma.com/proto/p3dzDdmuCbiN8qnkQxRnUc/cipher?node-id=3%3A2&scaling=scale-down)



# Conclusión

Considerando los multiples contexto en los cuales cada mujer puede necesitar enviar un mensaje de forma confidencial, se hace necesaria una plataforma en la que se pueda hacerlo de forma segura.
Esta página web nace en base a esa necesidad, ayudando a cada usuaria a sentirse segura de expresarse con su circulo mas cercano.

Con los Test de usabilidad surgieron los siguientes puntos a considerar:

- Un 20% de las usuarias que interactuaron con la página lograron realizar correctamente cada uno de los pasos.
- El total las usuarias tuvo por intuición ingresar primero a la página de descifrar antes de cifrar.
- El 80% consideró que con una información mas detallada hubiera podido lograr la finalidad de la página.
- Un cambio sugerido a favor sería cambiar el concepto de cifrado y descifrado por uno que esté mas familiarizado con la usuaria, ya que éste no queda claro.
- Un 60% preferiría que el resultado fuera apareciendo a medida que se ingresa el mensaje, sin la necedidas de precionar un botón.
- Las usuarias creen que tienen que escibir en ambas cajas de texto (mensaje, Resultad.o)
- Para el 100% la página les pareció amigable visualmente.


En una futura modificación del prototipo se logra establecer lo siguiente:

- Eliminar la caja de resultado, dejando sólo una para que ingrese su mensaje, asi se evita que escriba en ambos.
- Explicar cuál es la funcion del desplazamiento y detallar el proceso del cifrado en sí. Ayudandose de símbolos.
- Hacer más visible el botón que genera de cifrado/descifrado ya que pasa desapercibido. 
- Mantener la cantidad de texto de la página ya que todas leyeron y podría ser perjudicial añadir más.


En base a lo anterior, queda en constancia que la página con estas mejoras puede satisfacer más las necesidades de la usuaria y asi facilitar su interación. También servirá para obtener una mayor preferencia en cuanto a páginas similares.



