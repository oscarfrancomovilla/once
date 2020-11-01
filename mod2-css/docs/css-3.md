# Curso de HTML y CSS

- Unidades y colores
- Estilo de textos
- Tipografía

## Unidades y colores

### Unidades

- Muchas de las propiedades tienen valores numéricos, la mayoría de ellos van asociado a unidades pero no todos.

- Las unidades más habituales son los píxeles (px), que son unidades absolutas y siempre miden igual.

  ```css
  p {
    margin: 5px;
    padding: 10px;
    border: 2px solid black;
  }
  ```

- Hay otras unidades absolutas como cuartos de milímetro (q), milímetros (mm), centrímetros (cm), pulgadas (in), etc... pero su uso no es habitual.
- Con la proliferación de la web en dispositivos de diferentes tamaños de pantallas, las unidades absolutas estan quedando en desuso a favor de las relativas; que en general dependen de otros factores como el tamaño del contenedor, el de el viewport o otros facotres proporcionales:
  - **em** : `1em` coincide con en tamaño de la fuente del elemnto donde se aplica, que normalmente viene heredada del elemento padre. Por defecto `1em` en los navegadores es 16px.
  - **rem** : Es muy similar al anterior pero en lugar de heredar el tamaño de la fuente de el elemnto padre, lo heredaría de el tamaño de la fuente del elemnto raíz que es el `html`. Por lo que si usamos siempre unidades **rem** será muy simple modificar la proporción simplemente modificando el tamaño de fuente del elemento `html` mediante CSS.
  - **vw, vh** : unidades que dependen de el tamaño de el *viewport*, ventana de navegador. `1vw` es una centésima parte parte de el ancho de la ventana y `1vh` es una centésima parte parte de el alto de la ventana.
  - **(%) porcentajes** : si establecemos una unidad como (%) estamos estableciendo el porcentaje de el valor por defecto de esa propiedad. p.ej: `font-size: 200%;` establecería el tamaño de la fuente a el doble de la heredada; y si usamos `width: 50%;` estableceríamos un ancho de la mitad de el contenedor para ese elemento.
  - Si establecemos un valor 0 no es necesario establecer las unidades, 0 es siempre 0; p.ej: `margin: 0;`.
  - Hay otras propiedades que adminten valores sin unidades, p.ej: `line-height` que establece el alto de linea de un texto. Por defecto es *1.2*, sin unidades.

### Colores

- Hay varias formas de especificar los colores en CSS y todas tienen el mismo resultado.
- El color en los dispositivos son una combinación de 3 canales de color: rojo (R), verde (G) y azul (B). Cada una de estas unidades permite 256 valores numéricos, entre 0 y 255.
- Formas de especificar colores CSS:
  - Colores con nombre: CSS soporta un gran número de colores por defecto que tienen un nombre asociado. Aquí se puede ver la [lista completa](https://developer.mozilla.org/es/docs/Web/CSS/color_value#Valores)

```css
h1 {
  color: green;
}
```

- Formato **hexadecimal**: permite establecer el valor de los 3 canales como 6 números hexadecimales (valores entre 0 y f: 0123456789abcdef) agrupados en pares.

```css
h1 {
  color: #32A899;
}
```

- Formato **RGB**: simplemente indicamos os valores de cada canal en formato decimal (entre 0 y 255), se usa de la siguiente manera:

```css
h1 {
  color: rgb(102, 51, 153);
}
```

- El formato RGB permite establecer un cuarto valor que especifica la opacidad (tranparencia). El valor oscilaría entre 0 y 1 siendo 0 totalmente transparente y 1 totalmente sólida (p.ej: 0.5 sería 50%). Se usa `rgba` en lugar de `rgb`:

```css
h1 {
  color: rgba(76, 151, 53, 0.75);
}
```

## Estilos de texto

- Muchos de los elementos *HTML* que vimos hasta ahora pueden contener texto y podemos darle estilos visuales mediante *CSS*: colores, tipografías, tamaños...

- En general los estilos se agrupan en dos tipos: estilos de fuente y de disposición.

### Estilos de fuente

- Podemos dar color a una fuente usando la propiedad `color`:

```css
p {
  color: red;
}
```

- Darle una fuente tipografica con `font-family`:

```css
p {
  font-family: Arial;
}
```

- Las tipografías pueden establecerse usando valores genéricos: *serif, sans-serif, monospace*. Utilizando estos valores dejamos al navegador que use la tipografía que considere más apropiada para ese valor.

- Tambien podemos establecer valores específicos usando el nombre de fuente, p.ej: Arial. Si el nombre de la fuente consta de dos palabras deben ponerse comillas (""):

```css
p {
  font-family: 'Comic Sans';
}
```

- Lo normal es especificar varias tipografías separadas por comas así el navegador va a coger la primera disponible. Se establece como última opción el nombre genérico para que en el caso de que no hubiera una fuente disponible se coja una similar.

```css
p {
  font-family: 'Trebuchet MS', Arial, sans-serif;
}
```

- Para darle tamaño de texto usamos la propiedad `font-size` especificada en cualquier unidad que vimos anteriormente:

```css
p {
  font-size: 200%;
}

p {
  font-size: 2rem;
}

p {
  font-size: 20px;
}
```

- Hay otras propiedades como:

  - [font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style): permite establecer texto en cursiva.
  - [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight): permite establecer el grado de grosor del texto.
  - [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform): permite modificar las mayúsculas y minúsculas del texto.
  - [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration): permite establecer diferentes tipos de subrayados.

- Si queremos darle una sombra al texto usamos la propiedad `text-shadow` que define una sombra estableciendo el desplazamiento horizontal, desplazamiento vertical, grado de difusión (o difuminación) y el color de la sombra:

```css
h1 {
  text-shadow: 2px 2px 5px black;
}
```

### Estilos de disposición

- La disposición de texto afecta al *alineado, interlineado y separación de letras y palabras*.

- Para cambiar el alneamiento de el texto usamos la propiedad `text-align` que admite los valores `left, center e right`. Tambien admite el valor `justify` para justificar el texto a los borders pero no es recomendable por las limitaciones de los navegadores a la hora de dividir palabras.

```css
h1 {
  text-align: center;
}
```

- Para cambiar el alto de línea usamos _line-height_ que admite valores **sin** unidades. El valor por defecto es 1.2.

```css
p {
  line-height: 2;
}
```

- La separación entre letras y palabras puede controlarse con las propiedades `letter-spacing` y `word-spacing` que permiten valores en las típicas unidades:

```css
h1 {
  letter-spacing: -2px;
  word-spacing: 0.3rem;
}
```

## Tipografías

- Para poder asignar tipografías que no esten en el sistema operativo hay que cargar el archivo de la fuente.

- El método más habitual es usar Google Fonts, solo tenemos que escoger la fuente y tendremos dispoñible el código CSS necesario para usar esa fuente, para la tipografía [Open Sans](https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans)

```css
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
```

- Este código tendríamos que colocarlo al principio de todo de el *CSS* ya que es un `@import`, despues de eso podríamos usar esta tipografía como se fuese cualquier otra fuente instalada:

```css
p {
  font-family: 'Open Sans', sans-serif;
}
```

- En el caso de que queramos una tipografía que no esta en Google Fonts debemos conseguir el archivo de la tipografía original.

- Después tendremos que convertir la fuente a distintos formatos, ya que no todos los navegadores soportan los mismos. Los modernos soportan los formatos _woff_ e _woff2_. Podemos usar [web-font-generator](https://www.web-font-generator.com/)

- Después tenemos que colocar los archivos resultantes en una carpeta en nuestro sitio web y tenemos que definir la fuente mediante el statement `@font-face`:

```css
@font-face {
  font-family: 'cantarellregular';
  src: url('cantarell-regular-webfont.woff2') format('woff2'), url('cantarell-regular-webfont.woff')
      format('woff');
  font-weight: normal;
  font-style: normal;
}
```

### Ejemplo @font-face paso a paso

- Primero hay que tener un archivo con extensión `.ttf` o `.otf`
- Vamos a la página [Web font generator](https://www.web-font-generator.com/) u otra similar.
- Generamos nuestras versiones de el archivo en todos los formatos; primero aceptando el EULA (dándole al check) y despues a el botón de generar.
- En la siguiente página le damos al botón de descargar.
- Descomprimimos el archivo descargado.
- Dentro de esta carpeta tendremos los formatos de fuentes que tenemos que meter eun una carpeta **fonts** dentro de **www**.
- Tambien tendremos un archivo `.css` de donde copiaremos el código para pegarlo en nuestro estilo.

```css
@font-face {
  font-family: 'cantarellregular';
  src: url('cantarell-regular-webfont.woff2') format('woff2'), url('cantarell-regular-webfont.woff')
      format('woff');
  font-weight: normal;
  font-style: normal;
}
```

- **Importante** las `url(...)` realmente apunten a los ficheros en nuestro servidor.

- Nos podemos deshacer de el archivo `.css` y de el `.html`.
