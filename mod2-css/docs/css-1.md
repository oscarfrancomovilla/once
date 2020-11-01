# Curso de HTML y CSS

- Breve historia del CSS
- Relación entre HTML y CSS
- Sintaxis del CSS
- Selectores

## Breve historia de el CSS

- El crecimiento de HTML y la falta de un estándar para la definición de los estilos dificultaban la creación de documentos con la misma apariencia en diferentes navegadores.
- El W3C propuso la creación de un lenguaje de hojas de estilos específico para HTML. De nueve propuestas se eligieron dos.
- Entre finales de 1994 y 1995 se unieron lo mejor de las dos propuesta y lo llamaron CSS (Cascading Style Sheets).
- A finales de 1996, el W3C publicó la primera recomendación oficial, conocida como "CSS nivel 1" (CSS1)
- El grupo de trabajo de CSS comenzó corrigiendo errores no revisados en el CSS1, resultando en la creación de CSS2(finales 1997). CSS3, cuyo desarrollo inició en 1998, sigue en desarrollo hoy en día.
- Desde aquí cada módulo evoluciona de forma independiente. Es decir no habrá CSS4 pero si actualizaciones de cada uno de los módulos.

## Relación entre HTML y CSS

- El CSS se aplica al HTML mediante unas reglas que son las que definen como se muentran determinados elementos (ej: que todos los párrafos sean de color rojo).
- Lo primero que hace el navegador es cargar el HTML.
- El HTMl puede referenciar el CSS de tres formas distintas (las veremos más aelante).
- Cuando todo está cargado el navegador transforma el HTML en lo que se llama DOM (representación en memoria de la estructura de el HTML).
- El navegador procesa el CSS y comprueba si hay reglas que se puedan aplicar al DOM y las aplica.
- Finalmente se renderiza el DOM en el viewport (parte del navegor donde se ve el body).

- Ejemplo:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>CSS</title>

      <style type="text/css">
        p {
          color: red;
        }
      </style>
    </head>
    <body>
      <h1>Relación entre HTML y CSS</h1>
      <p>El CSS se aplica al HTML mediante unas reglas que son las que definen como se muentran los tags (ej: que todos los párrafos sean de color rojo)</p>
    </body>
  </html>
  ```

## Sintaxis del CSS

- El CSS se construye mediante **declaraciones**.
Las Declaracines se agrupan en *bloques*, que están asociados a *selectores* que definen a que elemento de HTML se aplican.
El conjunto de todo esto es una **regla de CSS**.

- Las declaraciones de CSS están compuestas por **propiedades** y **valores** separados por (:) y separados de la siguiente declaración po (;):

  ```css
  background: blue;
  ```

  - Las propiedades indican el aspecto estilístico que queremos modificar: _color, tamaño_...
  - Los valores indican como cambiarlo: _red, 200px_...
- Los bloques son grupos de declaraciones entre llaves ({}):

  ```css
  {
    background: blue;
    color: yellow;
  }
  ```

- Es obligatorio que todas las declaraciones estén agrupadas en bloques, fuera de los bloques no pueden aparecer.

- **Todos** los bloques tienen que estar precedidos por *selectores*, los *selectores definen a que elementos* se aplican las declaraciones agrupadas en el *bloque*. Estas pueden hacer referencia directa a **tags, clases, ids**:

```css
h1 {
  background: blue;
  color: yellow;
}
```

- Fuera delos bloques pueden aparecer los **CSS Statements**, que son reglas especiales de *CSS* que definen: codificación de caracteres, media queries o módulos. Estas las veremos en las siguientes secciones:

```css
@import 'archivo.css';
```

- Igual que en HTML el espacio en blanco en CSS es ignorado.

### Formas de aplicar el CSS

Hay tres formas de aplicar CSS en el HTML:

- aplicar directamente las propiedades a las etiquetas (no recomendado):

```html
<h1 style="color:yellow;background:blue">not approved!</h1>
```

- usando la etiqueta style en _head_ . Tampoco es muy recomendable.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8" />
    <title>CSS</title>

    <style type="text/css">
      h1 {
        color: yellow;
        background: blue;
      }
    </style>

    </head>
    <body>
    <h1>Relación entre HTML y CSS</h1>
    </body>
</html>
```

- La forma más recomendable es usar un archivo css externo, para eso tendríamos que indicar en el head la referencia a ese archivo,con un tag _link_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hola amigxs!</h1>
  </body>
</html>
```

esto es lo que contien el archivo *style.css*:

```css
h1 {
  color: yellow;
  background: pink;
}
```

## Selectores

- Los selectores de CSS permiten asociar bloques de declaraciones de CSS con elementos.
- Tipos de selectores:
  - **Selectores simples**: permiten seleccionar por tipo de elemento (nombre del tag), class o id.
  - **Selectores por atributos**: permiten seleccionar elementos basándose en sus atributos o valores de atributos.
  - **Pseudo-classes**: permiten seleccionar elementos basándose en su estado actual.
  - **Pseudo-elements**: permite seleccionar contenido posicionado respecto a un elemento o generar contenido asociado a un elemento.

### Selectores simples

#### Selectores por tipo de elemento

- Para seleccionar un elemento por su nombre de tag simplemente indicamos el nombre del tag en el selector:

```html
<p>lorem ipsum</p>
```

```css
p {
  color: orange;
}
```

- Los selectores por nombre de tag son muy potentes y *afectan a todos los tags*, hay que usarlos con cuidado y normalmente combinados con otros selectores.

- Hay un selector especial que es asterisco (\*) que selecciona todos los elementos. Usar con cuidado y normalmente combinados con otros selectores.

```css
* {
  padding: 10px;
}
```

#### Selectores por class

- `class` es un atributo que puede tener cualquier elemento HTML. Se puede especificar una `class` o varias para cada elemento y puede haber múltiples elementos en la misma página con el mismo `class`. No puede tener espacios.

```html
<p class="defecto parrafo-especial destacado">lorem ipsum</p>
```

- Para seleccionar por class en CSS simplemente indicamos el nombre de la class con un punto (.) antes:

```css
.parrafo-especial {
  background: lightgray;
}
```

##### Selectores por id

- El id es un atributo que puede tener cualquier elemento HTML, al igual que los `class` no puede tener espacios. Los ids tienen que ser **únicos** dentro de el mismo documento HTML pero se pueden reptir en otros documentos del sitio web.

```html
<h1 id="principal">Lorem ipsum</h1>
```

- Para seleccionar por id en CSS simplemente indicamos el nombre de el id con una almohadilla (#) antes:

```css
#principal {
  text-decoration: underline;
}
```

#### Selectores por atributos

- Los elementos HTML pueden tener distintos atributos

```html
<p lang="en">Texto en inglés</p>
<a href="http://google.com">Google</a>
```

- Aparte de los atributos propios de cada elemento (ver la documentación de MDN de cada elemento particular) estos son los atributos globales que soportan todos los [elementos]( https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

- Hay un atributo especial *data* que nos permite crear atributos personalizados, simplemente tenemos que formar un atributo que se llame "data-ALGO":

  ```html
  <p data-autor="Tu">Tu eres el protagonista</p>
  <article data-etiquetas="producto destacado oferta">bla, bla...</article>
  ```

- Para seleccionar por nome de atributo usamos o selector _[atributo]_:

  ```css
  [lang] {
    background: blue;
  }

  [data-autor] {
    color: red;
  }
  ```

- Para seleccionar por combinación de atributo e valor usamos _[atributo=valor]_:

```css
[data-autor='Tu'] {
  color: green;
}
```

Eso seleccionaría todos los elementos que tengan el atributo _data-autor_ con valor *Tu*.

- Para seleccionar por contenido de atributo usamos _[atributo~=valor]_ :

```css
[data-etiquetas~='ofterta'] {
  font-size: 2rem;
}
```

Eso seleccionaría todos los elementos que tengan la palabra oferta como valor de su atributo _data-etiquetas_

- `[atributo~="val"]`: selecciona todos los elementos cuyo atributo sea la palabra "val"
- `[atributo^="val"]`: selecciona todos los elementos cuyo atributo empiece por "val"
- `[atributo$="val"]`: selecciona todos los elementos cuyo atributo acabe por "val"
- `[atributo*="val"]`: selecciona todos los elementos cuyo atributo contenga la cadena de texto "val", da igual que forme parte de una palabra, ej: seleccionaría los atributos con valor "o**val**ado".

- Más [info](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors)
