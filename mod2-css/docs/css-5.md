# Curso de HTML e CSS

- Transformaciones
- Transiciones
- Animaciones

## Transform

- La propiedad CSS `transform` nos permite realizar múltiples transformaciones en la representación visual de un elemento.
- Estas transformaciones se aplican usando una serie de funciones de CSS que reciben determinados parámetros.
- Las funciones son las seguientes:
  - `translate`: Permite modificar la posición con respecto a la posición por defecto
  - `scale`: Permite cambiar la escala del elemento
  - `rotate`: Permite rotar el elemento
  - Aparte podremos combinar varias de las anteriores.
  - Hay más funciones de transformación [aquí](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function), entre ellas hay transformaciones 3D pero las tres anteriores son las más habituales.

  - Por defecto las transformaciones se aplican tomando como referencia el centro visual de el elemento pero podemos modificar esa referencia con la propiedad `transform-origin` que admite valores numéricos o genéricos como `top, left, right, bottom`.

### Translate

- La función *translate* nos permite desplazar el elemento horizontal o verticalmente:

```css
  .selector {
    transform: translate(1rem, 2rem);
  }
```

Esta clase moverá el elemento 1rem horizontalmente y 2rem verticalmente.

- Podemos usar cualquier unidad con valores positivos o negativos.

- Esta propiedad pode dividirse en dos: `translateX(1rem)` y `translateY(2rem)`.

- Vimos una propiedad similar que es `position: relative` pero las transformaciones son más modernas y pueden usar la aceleración de la tarjeta gráfica del dispositivo (+ eficientes).

### Scale

- La función scale permite cambiar el tamaño visual del elemento:

```css
  .selector {
    transform: scale(2);
  }
```

En este caso haría que el elemento visualmente fuese el doble y escalaría proporcionalmente su tamaño horizontal y vertical. Podemos usar valores decimales. También podemos usar valores negativos pero en ese caso aplicará la escala invirtiendo especularmente el elemento.

Si usamos la función con dos valores: `transform: scale(2, 1)` cada valor aplicará el cambio de escala horizontal y verticalmente.

- Esta propiedad igualmente puede dividirse en `scaleX` y `scaleY` que aplicaría la transformación por separado horizontal y verticalmente.

### Rotate

- La función rotate permite rotar el elemento:

  ```css
  .selector {
    transform: rotate(90deg);
  }
  ```

  El ángulo de rotación se expresa en grados: la rotación completa sería `360deg`

## Transicións

- Las transiciones permiten definir como se va a mostrar visualmente a través del tiempo el cambio entre dos estados de un elemento, por defecto son instantáneas.

- Permiten crear animaciones básicas pero muy efectivas.

- Los cambios de estado de un elemento sabemos hacerlos usando pseudo-classes de CSS o veremos como hacerlos usando JavaScript.

- Las propiedades CSS que usaremos para definir la transición de un elemento serán:

  - `transition-property`: para definir que propiedad debe transicionar de forma animada. Podemos usar el valor `all` para que cualquier cambio de propiedad ejecute una transición animada, pero no es muy optimizado.
  - `transition-duration`: define el tiempo que va a durar la animación de transición. Se mide en segundos (s) o milisegundos (ms).
  - `transition-timing-function`: define la curva de aceleración durante la duración de la transición. [Aquí podéis ver las funciones](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
  - `transition-delay`: define el tiempo de espera antes de comenzar la transición.

- P.ej:

```css
  .box {
    padding: 1rem;
    background: pink;
    width: 100px;
    transition-property: background-color;
    transition-duration: 1s;
    transition-timing-function: ease-out;
    transition-delay: 500ms;
  }

  .box:hover {
    background: green;
  }
```

  En este caso cuando pasemos el cursor por encima del elemento con clase `.box` este modificará su color de fondo gradualmente entre rosa y verde durante un segundo y la transición tardará medio segundo en empezar.

- La transición puede resumirse usando una sola propiedad de resumen:

```css
  .box {
    transition: background-color 1s ease-out 500ms;
  }
```

[Más sobre esta sintáxis](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

## Animaciones

- Las animaciones de CSS permiten establecer transiciones de elementos más avanzadas.
- Tienen dos partes:
  - Definición de la secuencia de animaciones usando `keyframes`
  - Definición de la aplicación de la animación

### Keyframes

- Mediante EL statement `@keyframes` definimos los diferentes estados de la animación y el nombre de la misma:

```css
  @keyframes slide {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
```

- Vemos que usamos los keywords `from` y `to` pero podemos usar tambien valores porcentuales para definir más estados intermedios:

```css
  @keyframes crazymove {
    0% {
      top: 0;
      left: 0;
      transform: rotate(0);
    }
    25% {
      top: 100px;
      left: 100px;
      transform: rotate(180deg);
    }
    75% {
      top: 40px;
      left: 40px;
      transform: rotate(270deg);
    }
    100% {
      top: 0;
      left: 0;
      transform: rotate(0);
    }
  }
```

### Configuración da animación

- Después de haber definido los `keyframes` podemos aplicar la animación usando una serie de propiedades de CSS similares a las vistas anteriormente de transformación:
  - `animation-name`: define que keyframes va a usar la animación. El valor debe ser el nombre que le demos a los keyframes.
  - `animation-duration`: define cuanto va a durar la animación en segundos (s) o milisegundos (ms)
  - `animation-timing-function`: define como va a ser la curva de aceleración de la animación igual que en las transiciones.
  - `animation-delay`: define el retardo en el inicio de la animación.
  - `animation-iteration-count`: define cuantas veces queremos que se ejecute la animación, podemos usar un valor numérico o `infinite` si queremos que se ejecute indefinidamente.
  - `animation-direction`: define si la animación debe ejecutarse de principio a fin, de fin a principio o alternadamente:
    - `normal`: la animación va ir entre `from` y `to` (o valores porcentuales).
    - `reverse`: ... entre `to` y `from`.
    - `alternate`: alternará entre normal y reverse cada vez que se ejecute la animación (definimos el número de veces en `animation-iteration-count`).
  - `animation-fill-mode`: define como se aplica la animación antes y después de su ejecución. Su valor por defecto es `none` por lo que ningún estilo definido en los keyframes de la animación se va a aplicar si la animación no se está ejecutando. Otros valores son:
    - `forwards`: la animación cuando acabe mantendrá los estilos definidos en los keyframes finales de la animación.
    - `backwards`: el elemento cogerá los estilos definidos en el primer keyframe de la animación tan pronto se aplique.
    - `both`: una combinación de las anteriores.
