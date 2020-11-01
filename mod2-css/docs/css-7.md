# Curso de HTML y CSS

- Media queries

## Media Queries

- Sirven para adaptar o modificar tu página web en función del tipo de dispositivo.
- Se aplican los estilos correspondientes, siguiendo las reglas usuales de cascada.
- Se puede aplicar a reglas de CSS `@media e @import` y a los elementos de HTML `<link> y <source>`

```css
  <!-- CSS media query within a style sheet -->
  @media (max-width: 600px) {
    .facet_sidebar {
      display: none;
    }
  }
```

```css
  @import url('landscape.css') screen and (orientation:landscape);
```

```html
  <!-- CSS media query on a link element -->
  <link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
```

```html
 <source src="vid/video1.mp4" type="video/mp4" media="all and (min-width: 1024 px)">
```

### Media Types

- Describen la categoría general de un dispositivo. El tipo de medio es opcional y será interpretada como *all*

- **all**: Apto para todos los dispositivos.
- **print**: Destinado a impresión y/o visualización de documentos en una pantalla en el modo de vista previa de impresión.
- **screen**: Destinado principalmente a las pantallas.
- **speech**: Destinado a sintetizadores de voz.

### Operadores Lógicos

- Se pueden redactar queries utilizando operadores lógicos, incluyendo **not, and, y only.**

- Se puede combinar múltiples queries en una lista separada por comas; si se cumple cualquiera de las queries de la lista el estilo es aplicado. Equivalente a una operación lógica **or**:

  - **and**: es usado para colocar juntas múltiples funciones multimedia.

```css
  @media (max-width: 600px) and (orientation: landscape) {
    .facet_sidebar {
      display: none;
    }
  }
```

- **lista separada por comas**: se comportan como el operador *or*. Cuando alguno de los queries es verdadero, el estilo sera aplicado.

```css
  @media (max-width: 600px), (orientation: landscape) {
    .facet_sidebar {
      display: none;
    }
  }
```

- **not**: aplica a todo el query y retorna verdadero si es posible y sino retorna falso. El operador not no puede ser usado para negar un query individual, solo para un query completo.

```css
  @media not (max-width: 600px) and (orientation: landscape) {
    .facet_sidebar {
      display: none;
    }
  }
```

- **only**: previene que navegadores antiguos que no soportan queries con funciones apliquen los estilos asignados:

```css
  <link rel="stylesheet" media="only screen and (color)" href="Ejemplo.css" />
```
