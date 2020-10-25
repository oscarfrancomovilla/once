# Curso de HTML y CSS

- El modelo de cajas
- Estilo de cajas

## El modelo de cajas

- El modelo de cajas de CSS es la base de la creación de layouts en las webs. Todos los elemtos que creamos están representados por unas cajas con distintas propiedades:

  ![img](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)

- **Ancho y alto:**

  - Las propiedades `width` e `height` definen el ancho y el alto de las cajas respectivamente y pueden ser definidas en cualquiera de las unidades. Excepto el height que no debe ser definido en unidades de tanto por ciento (%).

  - El valor por defecto es `auto`. El navegador es el que calcula el tamaño de las cajas que por defecto es el 100% del ancho de el padre y el alto establecido por el contenido.

- **Padding:**

  - La propiedad `padding` determina el margen interno de la caja; una distancia de seguridad entre los contenidos y el borde interno.

  - Podemos especificar padding de cada uno de los lados con las propiedades `padding-top, padding-right, padding-bottom e padding-left`.

- **Margin:**

  - La propiedad `margin` determina el margen externo de la caja; la distancia de los bordes de la caja con otras cajas que le rodean.

  - Si establecemos el valor como `auto`. el navegador cogerá el mayor margen disponible. Esto es aplicable a los margenes laterales y sirve tradicionalmente para centrar un elemento en el eje horizontal dentro de un contenedor.

  - Podemos especificar margin de cada uno de los lados con las propiedades: `margin-top, margin-right, margin-bottom e margin-left`.

  - Los márgenes tienen una condición especial _margin collapsing_: cuando dos cajas con margen se tocan la distancia entre ellas no es la suma de los margenes si no la distancia definida por el margen más grande.

- **Borde:**

  - La propiedad `border` se define el ancho, estilo y color de el borde, la linea habitualmente visible que rodea a la caja.

  ```css
  p {
    border: 2px solid black;
  }
  ```

- De todo esto podemos ver que el ancho total de una caja es la suma de el `width` + `padding` + `border`. Para cambiar este comportamiento debemos usar `box-sizing` que permite los siguiente valores:

  - `content-box`: es el valor por defecto. Si establecemos un `width` de 100px para calcular el total el navegador sumará el border y el padding.

  - `border-box`: cambia el modelo de cajas. Si establecemos un `width` de 100px el total siempre sera 100px independientemente de el border y el padding.

### Overflow

- Al poder establecer un ancho y alto manualmente puede ocurrir que en algunos casos el contenido no quepa dentro de una caja, para establecer lo que ocurre con este contenido usamos `overflow` que permite utilizar los siguientes valores:

  - `auto`: si el contenido no cabe en la  caja lo que quede fuera no se verá y aparecerán unas barras de scroll en la caja para poder ver ese contido.
  - `hidden`: el contenido que no quepa no se verá.
  - `visible`: el contenido que no quepa se verá fuera de la caja. Este es el valor por defecto.

### Límites de ancho e alto

- Podemos definir unos valores máximos de los que no queremos que se pase aún que el tamaño del contedor crezca.
- Para esto usamos las propiedades `max-width, max-height, min-width e min-height` y la caja cogerá esos valores en el caso de que el ancho o alto calculado porlas propiedades `width` y `height` salga de los límites que establecemos.

### Display

- Todo el comportamiento descrito anteriormente se aplican a los elementos de el tipo **block**, pero hay otros elementos de tipo **inline**. Como podemos ver hay otros tipos de modelos de cajas, que se pueden definir utilizando la propiedad de `display` de CSS:

  - **Cajas de bloque**: los elementos de tipo bloque se apilan unos sobre otros y tienen por defecto el ancho de el contenedor del que son hijos. Se puede modificar el ancho y el alto con `width` y `height` y aplican el modelo de cajas tal como esplicamos hasta ahora.

  - **Cajas inline**: los elementos inline fluyen como texto, aparecen en la misma línea que los elementos texto y otros elementos inline. su contenido no puede ser establecido mediante el ancho y alto pero se pueden establecer paddings y márgenes horizontales.

  - **Cajas inline-block**: este modo se puede definir sólo por CSS y funciona como una mezcla de las dos anteriores. Podemos establecer un `width y height` pero no se apilarán.

  ```css
  h1 {
    display: inline;
  }

  strong {
    display: block;
  }

  span {
    display: inline-block;
  }
  ```

- Hay más tipos de caja, por ejmeplo `flex` o `grid` que veremos en los próximos capítulos.

## Estilo de cajas

### Fondo

- El fondo es la parte posterior de la caja.

- Podemos especificar fondos de color o de imagen usando una serie de propiedades:

  - `background-color`: permite establecer un color de fondo. Por defecto las cajas tienen como color de fondo `transparent`:

```css
p {
  padding: 2rem;
  background-color: rebeccapurple;
  color: white;
}
```

- `background-image`: permite establecer una imagen como fondo usando la notación `url(...)`:

```css
h1 {
  background-image: url(/images/fondo.png);
}
```

- `background-repeat`: por defecto los fondos de imagen se repiten para cubrir todo el espacio da caja, esta propiedad permite definir como funciona esa repetición:

  - `no-repeat`: la imagen de fondo no se va repetir, sólo se mostrará una vez.
  - `repeat-x`: a imagen sólo se repetirá horizontalmente.
  - `repeat-y`: a imagen sólo se repetirá verticalmente.
  - `repeat`: este es el valor por defecto y repetirá la imagen horizontal e verticalmente hasta cubrir todo el espacio da caja.

- `background-position`: en el caso de tener un fondo que no se repita esta propiedad nos va a permitir posicionar esa imagen. Por defecto soporta dos valores separados por espacio para especificar las coordenadas *x* e *y* de la imagen con respecto al centro de coordenadas que es la esquina superior izquierda. Aparte de sorportar calquera de las unidades conocidas (px, rem, %), tambien soporta posiciones con nombre (y cualquier combinación entre unas y outras):

  - left, center, right: para posicionamento horizontal
  - top, center, bottom: para posicionamento vertical

```css
p {
  background-color: rebeccapurple;
  background-image: url(/images/fondo.png);
  background-repeat: no-repeat;
  background-position: 200px center;
}
```

- `background-size`: permite establecer el tamaño de la imagen especificada como fondo con `background-image`. Los posibles valores son:

  - Dos valores separados por espacio: establece el tamaño de la imagen de fondo, los dos valores pueden ser en las unidades típicas de css o `auto`. El valor por defecto de la propiedad es `auto auto`.
  - `contain`: intenta encajar la imagen dentro de el fondo sin recortarla ni modificar las proporciónes.
  - `cover`: intenta encajar la imagen en el background sin modificar las proporciones pero puede recortala se es necesario. Esta propiedad es muy útil para poner imágenes de fondo en cajas de tamaño variable.

- Ampliando conocimiento en la MDN:

  - [Fondos múltiples](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Backgrounds#Multiple_backgrounds)
  - La propiedad `background` permite establecer varias de las propiedades comentadas anteriormente en una sola línea, puedes aprender más de ella [aquí](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
  - [Gradientes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Backgrounds#Background_image_gradients)

### Border

- está definido por tres propiedades: *anchura, estilo y color*. Por defecto las cajas tienen un borde de anchura 0, negro y solido.

-La propiedad `border` permite definir las tres propiedades en la misma línea o establecerlas por separado con las propiedades `border-width, border-style e border-color`:

```css
h1 {
  border: 2px solid blue;
}

/* Estas dos reglas son iguales */
h1 {
  border-width: 2px;
  border-style: solid;
  border-color: blue;
}
```

- `border-width`: establece el ancho de el borde en calquier unidad de CSS (excepto %).
- `border-style`: los posibles valores de estilo son [estos](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values). Los típicos valores son `solid` (por defecto), `dotted` e `dashed` que establecen líneas sólidas, de puntos y de rayas respectivamente.
- `border-color`: establece el color de el borde usando calquier notación de color de CSS.

- Si queremos hacer border redondeados usamos la propiedad `border-radius` que permite establecer el radio de redondeo de los bordes:

  ```css
  p {
    border: 2px solid red;
    borde-radius: 20px;
  }
  ```

  Si queremos establecer un radio de redondeo diferente para cada esquina podemos establecer cuatro valores separados por espacio que establecerían por orden el radio de: equina superior izquierda, superior derecha, inferior derecha e inferior izquierda:

  ```css
  p {
    border: 2px solid red;
    borde-radius: 20px 20px 0 0;
    /*só teria os as esquinas superiores redondeadas*/
  }
  ```

### Sombras

- Al igual que el texto (`text-shadow`) las cajas pueden tener sombras con la misma notación:

  ```css
  h1 {
    box-shadow: 2px 2px 5px black;
  }
  ```

- Los valores son respectivamente: desplazamento horizontal, desplazamento vertical, radio de difusión y color de sombra.

### Flotando elementos

- La propiedad `float` nos permite sacar elementos de el flujo normal en el contenedor posicionándolos en la parte izquierda o derecha y haciendo que el resto de los elementos aparezcan rodeándolo.
- Históricamente se uso como las tablas para hacer _layouts_ pero ahora con la aparición de Flexbox y Grid ese uso quedo obsoleto.
- El valor por defecto es none pero puede ser left o right.

```css
.left {
  float: left;
  margin-right: 10px;
  height: 200px;
}
```

```html
<section class="container">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
    sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
    iaculis velit. Aliquam vel malesuada erat.
  </p>

  <aside class="left">
    <blockquote>Cita famosa</blockquote>
  </aside>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
    sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
    iaculis velit. Aliquam vel malesuada erat.
  </p>
</section>
```

- Vemos en el ejemplo que todos los párrafos se distribuyen alrrededor del elemento flotado. Si queremos que uno delos elementos no tenga ese comportamento podemos establecer la propiedad `clear`, que permite los valores none, left y right.

- Si establecemos un `clear: left` al segundo párrafo hará que no se distribuya alrrededor de los elementos flotados a su izquierda.

### Posicionando elementos

- Los elementos que siguen el flujo normal del documento por defecto tienen unha propiedad de CSS que se llama `position` con valor `static`.
- Vamos a ver otros tipos de posicionamento: `relative`, `absolute` y `fixed`.

#### Posicionamento relativo

- Los elementos con `position: relative` vamos poder darle una serie de propiedades de CSS: *top, left, bottom y right* que van a modificar a su posición con respecto a su posición por defecto:

```css
.desplazado {
  position: relative;
  top: 20px;
  left: 20px;
}
```

- El espacio original ocupado en el documento por el elemento posicionado *relativamente* se mantiene aún que el elemento esté en otra posición.

#### Posicionamento absoluto

- Los elemento con `position: absolute` se posicionan con respecto a su contexto de posicionamento.

- El contexto de posicionamento es el primer padre que tenga `position: relative` y si no hay ninguno es el elemento `html`, o sea, la parte superior izquierda de la página.

  ```css
  .absoluto {
    position: absoluto;
    right: 20px;
    bottom: 100px;
  }
  ```

- A diferencia de los relativos estos elementos dejan de ocupar el espacio que ocuparían inicialmente en el caso de no estar posicionados absolutamente.

#### Posicionamento fijo

- La `position: fixed` funciona exactamente igual que el absoluto pero el contexto de posicionamento sempre va ser el viewport de la página por lo que aún que hagamos scroll el elemento siempre se va manter en la misma posición.

#### Z-index

- en el caso de que dos elementos posicionados absolutamente o relativamente el que va aparecer encima de el otro es el que tiene la propiedad CSS `z-index` mayor. Esta propiedad acepta valores numéricos positivos o negativos sin unidad.
- en el caso de no tener establecido un `z-index` aparecerá por encima el último elemento que esté definido en el `HTML`.
