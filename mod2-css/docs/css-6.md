# Curso de HTML y CSS

- Flexbox

## Flexbox

### Intro

- Flexbox es un módulo de CSS (conjunto de propiedades con sus respectivos valores) relativamente nuevo pero con bastante buen soporte. Proporciona un método eficiente de definir como van a ocupar el espacio interno los hijos de un contenendor sin que sea necesario saber el tamaño de el contenedor, de ahí el nombre flex o fluído.

- Cuando definidos un contenedor como `display: flex;` podremos a través de una serie de propiedades de css alterar el ancho y el alto de sus hijos para ajustarlos al espacio disponible.

- Flexbox es complementario a el módulo Grid que es más moderno aún y mientras que este último se usa normalmente para definir layouts más grandes el flexbox es perfecto para más pequeños.

### Terminología

- **Contenedor (flex-container)**: es el elemento que se define como flex y por lo tanto sus hijos van ser afectados por este tipo de display. La mayoría de propiedades css de el modulo flexbox se aplica a el contenedor.

- **Hijos (flex-item)**: son los elementos internos de primer nivel de el contenedor que se distribuyen en el espacio segun las propiedades aplicadas al padre. Hay una serie de propiedades en el modulo que sólo se aplican a los hijos.

- **Eje principal**: una línea imaginaria que por defecto cruza horizontalmente el contenedor y sobre esa línea se distribuirán los hijos el contenedor.

- **Eje secundario (eje cruzado)**: una línea imaginaria que por defecto cruza verticalmente el contenedor.

### Propiedades del contenedor

Para que un contenedor sea de tipo flex tiene que tener la propiedad de CSS `display: flex`. Todos los hijos del contenedor que tenga esa propiedad estarán afectados por las propiedades de flexbox que vemos a continuación.

- **flex-direction:** determina cual de los ejes va a ser el eje principal y por lo tanto sobre cual van a fluir los hijos. Los posibles valores son:
  - `row`: horizontalmente de izq. a dcha. _(valor por defecto)_
  - `row-reverse`: horizontalmente de dcha. a la izq.
  - `column`: verticalmente de arriba a abajo
  - `column-reverse`-reverse: verticalmente de abajo a arriba.

- **flex-wrap**: por defecto *flexbox* va a intentar distribuir todos los hijos en una sola línea aún que se pase de el ancho de el contenedor. En el caso de que queramos que los items que no entren pasen a la siguiente línea tenemos que usar esta propiedad. Los valores posibles son:
  - `nowrap`: todos los hijos van estar en aun sola línea _(valor por defecto)_
  - `wrap`: los items pasarán a la línea inferior en el caso de que no encajen al anterior.
  - `wrap-reverse`: el mismo que la anterior pero pasan a la línea superior.

- **justify-content**: esta propiedad define como se van a alinear los elementos en el eje principal (`flex-direction`). Los valores posibles son:
  - `flex-start`: los elementos estan apilados al principio de la línea definida en el eje. (valor por defecto)
  - `flex-end`: los elementos se apilan al final de la línea.
  - `center`: los elementos se apilan en el centro de la línea.
  - `space-between`: los elementos se distribuyen ocupando toda a línea correspondiente, estando el primero pegado al principio de la línea y el último al final de la misma.
  - `space-around`: similar al anterior pero el primero y el último elemento tienen una unidad de separación con respecto al principio y el final respectivamente y dos unidades de separación entre el resto de los elementos.
  - `space-evenly`: hace que todas las separaciones incluídas la inicial y la final sean iguales.

  - **align-items:** esta propiedad es similar a la anterior pero se aplica a la distribución en el eje secundario (en el cruzado el contrario al `flex-direction`). Los valores posibles son:
  - `flex-start, flex-end, center`: iguales que en el caso de _justify content_.
  - `baseline`: alinea los elementos según la línea base de texto.
  - `stretch:` estira los elementos verticalmente para ocupar el espacio del contenedor _(valor por defecto)_

- **align-content:** similar a justify content pero sólo aplicable a los hijos cuando estos ocupan más de una línea. Las propiedades son:
  - `flex-start`: apila las líneas al principio del contedor.
  - `flex-end`: el mismo pero al final del contedor.
  - `center, space-between, space-around`: apila las líneas de la misma forma que las mismas propiedades en justify-content.
  - `stretch`: hace que las líneas ocupen todo el espacio _(valor por defecto)_

### Propiedades de los hijos

- **order:** determina el orden en la que van aparecer en el eje en el que se distribuyen, independentemente del orden en que aparezcan en el HTML. Valores posibles:
  - `número entero`. _(valor por defecto: 0)_
- **flex-grow:** determina si un hijo puede aumentar su ancho o alto para ocupar oel espacio libre disponible en la línea correspondente. Valores posibles:
  - `número entero`. (valor por defecto: 0)
- **flex-shrink:** lo mismo que el anterior pero en lugar de aumentar sería disminuír.
- **flex-basis:** determina el tamaño por defecto del hijo antes de que flex distribuya el espacio. Valores por defecto.
  - `un tamaño determinado por culaquier unidad de css (em, rem, %, px, etc...) o auto.` _(valor por defecto: auto)_
- **align-self:** permite establecer un valor propio del hijo que se aplicaría en lugar del valor de *align-items* definido en el contenedor.
  - `auto, flex-start, flex-end, center, baseline o stretch.`
