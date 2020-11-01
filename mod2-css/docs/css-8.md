# Curso de HTML y CSS

- Grid

## CSS Grid Layout

- **CSS Grid Layout** es un módulo de CSS que permite dividir un elemento en filas y columnas creando una retícula de 2 dimensiones la diferencia básica con flexbox es que este es un sistema unidimensional.
- Trabajaremos con grid asignado una serie de propiedades al contenedor (_grid container_) y con los hijos (_grid items_).

### Terminología

- _Grid container_: es el elemento en el que queremos crear una cudrícula y que se divida en filas y columnas.
- _Grid item_: cada un de los hijos de primer nivel del _grid container_ y que podremos posicionar en la cuadrícula.
- _Grid line_: las líneas que separan las filas y las columnas y que determinan la estructura de la cuadrícula.
- _Grid track_: cada una de las filas y de las columnas que crea la cuadrícula.
- _Grid cell_: cada una de las celdas que conforman las filas y columnas al cruzarse,es el elemento mínimo de la cuadrícula.
- _Grid area_: un grupo de celdas que podremos agrupar para posicionar items en ella.

### Definiendo filas y columnas

- Antes de nada, para crear una retícula en una elemento tenemos que aplicar la propiedad CSS `display: grid`.
- Para determinar las filas y columnas usamos las propiedades `grid-template-columns` y `grid-template-rows` que definirán los _tracks_:

```css
.container {
  display: grid;
  grid-template-columns: 500px 20rem;
  grid-template-rows: 100px 100px 100px;
}
```

- En ejemplo anterior estamos creando un grid con 2 columnas y 3 filas.
- Podemos establecer el tamaño de las filas y las columnas en cualquier unidad válida de CSS y mezclarlas.
- Tambien podemos usar unidades especiales:
  - _auto_: primero colocará todas las filas o columnas con un tamaño especificado y despues llenará el espacio que sobre hasta llenar el contenedor con las filas/columnas que tengan tamaño auto siendo como mínimo el tamaño de el contenido de las mismas.
  - _fr_: es una unidad de tamaño que permite especificar el tamaño en base al espacio libre que quede en el track (fila/columna). Funciona similar al _flex-grow / flex-shrink_.

  - Podemos usar tambien la funcion _repeat_ para definir los tracks:

```css
  .container {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    /* Esto creará 4 columnas de 100px */

    grid-template-rows: repeat(3, 10rem 5rem);
    /* Esto creará: 10rem 5rem 10rem 5rem 10rem 5rem /*
  }
```

### Tracks explícitos e implícitos

- Por ejemplo, si creamos un grid de 3 columnas y 2 filas:

```css
  .container {
    display: grid;
    grid-template-columns: 10rem 1fr 15rem;
    grid-template-rows: 100px 100px;
  }
```

- Si el contenedor tiene 10 hijos de primer nivel los primeros hijos se colocarán en tres columans y dos filas y al acabar las columnas y filas pasarán a la siguiente línea y así sucesivamente.

- Las filas y columnas definidas se llaman grid explícito, El resto de las filas son tracks implícitos. El tamaño de los tracks implícitos podremos definirlo usando las propiedades `grid-auto-rows` y `grid-auto-columns`:

```css
  .container {
    display: grid;
    grid-template-columns: 10rem 1fr 15rem;
    grid-template-rows: 100px 100px;
    grid-auto-rows: 20px 50px;
  }
```

En este caso las filas que no son explícitas tendrán una altura de 20px la primera, tercera, quinta, etc. y de 50px la segunda, cuarta, sexta, etc.

- Si definimos `grid-auto-columns` la mayoría de las veces no va a pasar nada porque por defecto los grid van a crecer en filas y no en columnas. Pero podemos cambiar este comportamineto con la propiedad `grid-auto-flow` que por defecto tiene el valor _row_ pero podemos asignarlo a _column_ y así el grid crecerá en columnas. Esto puede ser útil para layout horizontal.

- Para modificar este comportamiento podemos asignar las propiedades `grid-column` y `grid-row` a calquiera de los `grid items`:

```css
  .container {
    grid-template-columns: 10rem 1fr 15rem;
    grid-template-rows: 100px 100px;
  }

  .item1 {
    grid-column: span 2;
    /*  .item1 se expandirá en 2 columnas en lugar de 1 */
  }

  .item2 {
    grid-column: 1 / 3;
    /* .item2 comenzará en la columna 1 y se expandirá hasta la 3 */
  }

  .item3 {
    grid-column: 2 / -1;
    /*  .item3 empezará en la columna 2 llegará hasta la última */
  }

  .item4 {
    grid-column: 2 / -2;
    /* .item4 empezará en la columna 2 llegará hasta la penúltima */
  }

  .item5 {
    grid-column: 2 / span 3;
    /* .item5 empezara en la columna 2 y se expandirá 3 columnas */
  }
```

- Si no hay espacio suficiente en el track esto puede crear espacios vacíos en el grid pasando los items para nuevos tracks donde exista espacio.

-Si hacemos que un elemento se expanda con más columnas de las que hay en el track emepzará a crear columnas implícitas.

### auto-fill y auto-fit

- Si queremos crear un grid de filas/columnas variables en base al tamaño de los _items_ podemos usar los keywords _auto-fill  auto-fit_ a la hora de definir el grid.

```css
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
  }
```

- En este caso creará tantas columnas de 150px de ancho como permita el ancho del contedor, pasando las que no entren para la seguinte línea.
  - La diferencia es:

    - `auto-fill` : va a llenar la fila hasta el final con el número de columnas del tamaño especificado que entren en base al tamaño del contenedor.

    - `auto-fit` : solo creará las columnas necesarias en base al número de items.

### minmax

- La combinación de `auto-fill y auto-fit` con `minmax` nos va a permitir crear grids `responsive` sin necesidad de media queries.

```css
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
```

  En este ejemplo va crear una fila con tantas columnas como pueda siendo el tamaño de la columna mínimo de 150px y máximo de todo el espacio dispoñible.

### Grid areas

- Podemos darle nombres a las agrupaciones de las celdas creadas por las filas y las columnas para referirnos a ellas a la hora de posicionar _items_.
- Por ejemplo si creamos un grid de 3 columnas y 3 filas:

```css
  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 600px 1fr;
    grid-template-rows: 200px 200px 100px;
    grid-template-areas:
      'lateral-1 content lateral-2'
      'lateral-1 content lateral-2'
      'footer footer footer';
  }

  footer {
    grid-area: footer;
  }

  .content {
    grid-area: content;
  }
```

  Con `grid-template-areas` agrupamos por nombre las celdas creadas por los tracks y podemos posicionar en ellas los items del grid.

### Alineando el grid y sus items

#### Items

- Por defecto los _grid items_ ocupan todo el espacio determinado por el tamaño de la celda en la que están posicionados.
- De forma similar a flexbox podemos modificar el espacio que ocupan usando las propiedades _justify-items e align-items_ que se aplican al contenedor.
- La propiedad _justify-items_ por defecto tiene un valor de _stretch_ que hace que los îtems\* ocupen todo el espacio horizonal de la celda pero tambien podremos darle los valores: start, center y end para posicionar al principio, centro y final de la celda respectivamente.
- La propiedad _align-items_ tiene un comportamento exactamente igual pero se aplica verticalmente.
- Podemos aplicar esas dos propiedades al mismo tiempo usando la _place-items_:

```css
.container {
  place-items: center center;
  /* Esto es lo mismo que justify-items: center y align-items: center */
}
```

- Si queremos aplicar una de estas propiedades a un item específico y no a todos podemos usar las propiedades _justify-self y align-self_ en el item (no en el contedor) que permiten los mismos valores que las anteriores.

#### Grid

- Si el grid no ocupa el espacio del contenedor porque la suma de las columnas es menor que el ancho del contenedor podemos usar las propiedades _justify-content y align-content_ para hecer que las tracks se distribuyan mejor en el espacio determinado por el contenedor.
- La propiedad justify-content distribuirá el espacio horizontal de las columas. El valor por defecto es start que posicionará las columnas al principio del contenedor pero podremos usar:
  - _center_: para posicionarlas en el centro del contenedor
  - _end_: al final del contendo
  - _stretch_: estirando el ancho de las columnas para ocupar todo el espacio
  - _space-around, space-between, space-evenly_: que tienen un comportamento igual que en flexbox.
- La propiedade _align-content_ tiene un comportamento exactamente igual pero se aplica verticalmente.
- Podemos aplicarlas al mismo tempo usando _place-content_ igual que en el ejemplo anterior.
