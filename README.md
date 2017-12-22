To see this file in English [go here :)](readme.en.md)

## Premisas
* **Poder instalarse en cualquier servidor que soporte php sin ningún tipo de módulo extra**.
* **No utilizar ningún tipo de base de datos** para evitar posibles configuraciones iniciales al instalar la herramienta, debido a esto todas las configuraciones relevantes se realizan en archivos.
* **Cada ejemplo debe manejarse aislado dentro de la estructura de archivos** para poder crearlos, editarlos y eliminarlos de la forma más sencilla posible.

## Instalación
Bastará con copiar el contenido del directorio ```src/``` en cualquier directorio público de un servidor que soporte php

## Consideraciones
* Dado que no se están utilizando bases de datos, las configuraciones asociadas a cada ejemplo, así como las configuraciones globales se realizarán en archivos .ini dentro del directorio de cada ejemplo

## Cómo se estructura el código
```
├── LICENSE
├── README.md
└── src
    ├── example.php             Muestra cada ejemplo fuera del quiz
    ├── examples                Directorio en donde se guardan los ejemplos
    │   ├── ejemplo1            Ejemplo
    │   │   ├── config.ini      Archivo de configuración del ejemplo
    │   │   ├── image.png       Imagen de referencia del ejemplo (opcional)
    │   │   ├── index_files     Directorio con recursos para el ejemplo
    │   │   └── index.html      Frame principal del ejemplo
    │   ├── ejemplo2
    │   ├── ejemplo3
    │   ├── ejemplo4
    │   └── ejemplon
    ├── img                     Directorio con imágenes comunes
    ├── list.php                Listado de todos los ejemplos para navegar
    ├── quiz.php                Gestión completa de preguntas y quiz
    ├── quiz_results.php        Gestión de resultados del quiz
    └── res                     Recursos estáticos
        ├── css
        │   ├── devices.min.css
        │   └── grid.css        Formatos propios de la instancia
        └── js
            └── quiz.js         Scripts propios de la instancia
```

## Cómo gestionar los proyectos
Tomando el cuenta el diseño del código todos los ejemplos se encuentran en el directorio ```examples/```, dentro de este para cada ejemplo debe haber otro directorio cuyo nombre no tenga espacios ni caracteres especiales para mejorar la compatibilidad de la herramienta y evitar errores potenciales. Dentro de cada directorio debería haber un archivo ```config.ini```con al menos la siguiente información:

```
; This is a sample configuration file
title = "Título del ejemplo"
description = "Descripción del ejemplo"
image = True

; type = website|app
type = "website"
frame_popover = "Mensaje de indicadores de phishing en contenido"

; platform = desktop|mobile
platform = "desktop"

phishy = True

url = "web.wattsapp.com"
url_popover = "Mensaje de indicadores de phishing en URL"

; ssl = green|grey|red|none
ssl = green
ssl_popover = "Mensaje de indicadores de phishing en conexión https"
```

Además del config.ini deberían existir los archivos necesarios de un sitio independiente que pueda ser incluido como iframe por el código de la herramienta, algunas técnicas para obtener estos ejemplos desde sitios existentes son:

1. Dependiendo del explorador utilizado guardar el sitio web de interés mediante el menú Archivo -> Guardar página como... (Este ejemplo aplica para Mozilla Firefox)
2. Utilizando herramientas avanzadas como [Httrack](https://www.httrack.com/), sin embargo, para la mayoría de los casos la primera opción será suficiente


## Mejores prácticas para incluir ejemplos
* Borrar todos los enlaces de los sitios almacenados para usarse como ejemplos, para evitar problemas visuales se pueden sustituir por "#"
* Evitar incluir en las páginas capturadas elementos no vistos que ocupen mucho espacio en disco, debido a que se pueden cargar en los equipos de los usuarios de forma innecesaria y muchos de ellos tendrán anchos de banda limitados, afectando el rendimiento de la herramienta.
* Borrar cualquier información personal que pueda haber en las capturas de sitios (nombres de usuario, correos electrónicos, avatares, mensajes reales, etc.)
