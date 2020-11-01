# Curso de HTML y CSS

- Selectores
- Modelo de cascada y herencia
- Modularización

#### Pseudo-classes

- Las *pseudo-classes* permiten darle estilos a los elementos **en base a su estado, posicion, hijos, etc.**

- Se escribe con dos puntos (:) antes y normalmente complementan a otros selectores.

```html
<a href="http://google.com">Google</a>
```

```css
a:visited {
  color: gray;
}
```

- Hay muchas pseudo-classes que se pueden consultar aquí: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes

- Las pseudo-classes mas conocidas son:

  - :checked - selecciona inputs de tipo checkbox que estén marcados.
  - :first-child - selecciona el elemento que sea primer hijo de un grupo de hijos.
  - :last-child - selecciona el elemento que sea el último hijo de un grupo de hijos
  - :not(selector) - selecciona elementos no afectados por "selector"
  - :nth-child(valor) - selecctiona elementos en base a su posición.

#### Pseudo-elements

- Los pseudo-elements son selectores que nos permiten referirnos a **partes de los elementos**.

- Son similares ás pseudo-classes pero en lugar de dous puntos (:) antes escríbense con dous puntos dobles (::).

- los pseudos elementos más usados son:

  - ::first-letter - permite dar estilo a la primera letra del elemento
  - ::first-line - permite dar estilo a la primera línea del elemento
  - ::selection - permite darle estilo al texto que esté seleccionado

- Hay dos pseudo-elements especiales que seleccionan partes de los elementos **que no existen** y permiten crearlas para introducir contenido. Son ::before y ::after.

```css
p.especial::after {
  content: 'Ver más';
  color: red;
}
```

Esto añadiría el texto "Ver más" después de los `p` class "especial".

#### Combinación de selectores

- Hay varias formas de combinar selectores para otimizar CSS
  - **Lista de selectores:** `A, B` cualquier elemento que seleccione el A, y/o el B.
  - **Descendientes:** `A B`: selecciona los elementos B que sean hijos de A.
  - **Descendientes directos:** `A > B` selecciona los elementos B padre directo a A.
  - **Adjacentes:** `A + B` selecciona los elementos B que aparezcan justo después de A siendo los dos hijos directos del padre.
  - **Hermanos no seguidos:** `A ~ B` selecciona los elementos B que aparezcan despues de A aún que no sean los siguientes, siempre que compartan el mismo padre.

### Modelo de cascada e herencia

#### La cascada

- Cuando escribimos selectores llegará un momento que múltiples reglas de CSS afectarán a un mismo elemento.

- El modelo de cascada define cual de las reglas gana y es aplicada.

- Hay tres factores que afectan al modelo de cascada: importancia, especifidad y orden.

- La importancia de una propiedad de CSS se puede aplicar con la declaración _!important_:

```html
<p class="especial">lorem ipsum</p>
<p class="especial" id="unico">hello kitty</p>
```

```css
#unico {
  border: 1px solid red;
  color: red;
}

.especial {
  color: green;
  border: none !important;
}
```

- Los _!important_ deben ser usados como ultima opción.

- La especifidad determina cuan concreto es un selector.

- Como regla general los selectores de un elemento tienen poca especifidad, la única forma de ganar a un selector con ID es con la propiedad _!important_

- El CSS que se establece mediante el atributo style directamente en los tags (**no recomendado!**) gana siempre.

- Quitando estas excepciones las reglas son así:

  - Cada selector va tener un valor de especificidad numérico.

  - Cada elemento que contenga el selector aumenta la especificidad en 1.

  - Cada clase o pseudo-clase que contenga el selector aumenta la especificidad en 10.

  - Cada id que contenga el selector aumenta la especificidad en 100.

  - Los pseudo-elementos no afectan al valor de especificidad.

    ```css
    /* especificidad: 101 */
    #outer a {
      background-color: red;
    }

    /* especificidad: 201 */
    #outer #inner a {
      background-color: blue;
    }

    /* especificidad: 104 */
    #outer div ul li a {
      color: yellow;
    }

    /* especificidad: 113 */
    #outer div ul .nav a {
      color: white;
    }

    /* especificidad: 24 */
    div div li:nth-child(2) a:hover {
      border: 10px solid black;
    }

    /* especificidad: 23 */
    div li:nth-child(2) a:hover {
      border: 10px dashed black;
    }

    /* especificidad: 33 */
    div div .nav:nth-child(2) a:hover {
      border: 10px double black;
    }
    ```

- EL orden en la que está especificado el CSS tambien afecta a la Cascada, por lo tanta la última regla ,con la misma especifidad gana.

#### La herencia

- La herencia en CSS determina que propiedades van afectar a los hijos de un elemento cuando le aplicamos CSS.
- Algunas propiedades se heredan y otras no. Por ejemplo, el tipo de letra, color si que se herdan pero el margen no.
- Si vamos a la documentación de la propiedad _font-style_: https://developer.mozilla.org/en-US/docs/Web/CSS/font-style#Specifications vemos en la sección de "Specifications" unha tabla de fondo azul que indica si es "Inherited" o no.
- Hay dos valores especiales que son inherentes a cualquier propiedad de CSS que permite controlar la herencia: _inherit_ y _initial_.
- _inherit_ siempre herdarán el valor de su elemento padre
- _initial_ cancelarán calquier herencia, cojerán el valor de la hoja de estilos por defecto del navegador

### Modularización

- Los archivos CSS permiten cargar otros archivos CSS mediante el _statement_ @import.

- @import va acompañado de la URL que queremos cargar:

```css
@import '/css/otros-estilos.css';
```

- Los @import **siempre** deben aparecer al principio de la hoja de estilos antes que calquier otra regla.
