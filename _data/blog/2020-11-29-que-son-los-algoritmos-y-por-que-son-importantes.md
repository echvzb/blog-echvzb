---
template: BlogPost
path: /algorithms/what-are-they
date: 2020-11-29T21:23:09.631Z
title: "Algorithms: what are they?"
metaDescription: Nowadays, digital things are taking land concerning the time
  that doesn't stop. For this reason, the word algorithm every day becomes more
  frequent in listening to it in the lives of everyday people.
thumbnail: /assets/algorithms-1.jpg
---
Nowadays, digital things are taking land concerning the time that doesn't stop. For this reason, the word algorithm every day becomes more frequent in listening to it in the lives of everyday people.

## Content.

1. [What is an algorithm?.](#definicion)

* [The base: descriptive knowledge.](#base)

* [Algorithm differences: efficiency.](#eficiencia)

* [Technological innovation.](#innovacion)

* [References.](#ref)

<div id='definicion'></div>

## What is an algorithm?

Informally, we can define for simplicity with a comparison: _"An algorithm is like a recipe"_. For example, **recipe for making butter cookies**:

1. Sift 2 cups of wheat flour in a bowl.
2. Add 200 grams of sugar to the bowl.
3. Add a tablespoon of vanilla to the bowl.
4. Add a pinch of sodium bicarbonate to the bowl.
5. Add 250 grams of butter to the bowl.
6. Mix the ingredients of the bowl until they form a mass.
7. Cover the bowl with a piece of cloth.
8. Put the bowl in the fridge for 20 minutes.

This is an understandable example of an algorithm.

As we can see, a recipe or algorithm is a set of instructions that define a process. The above-mentioned process has a function to accomplish a task.

The instructions for each step are defined as: sift, add, mix, and so on. With which they have as object cooking ingredients such as sugar, vanilla, wheat flour, etc.

They're not just about cooking recipes, they're everywhere. A clear example is the daily routines such as getting up, making bed, taking a shower, doing homework, going to work, and so on. We do things step by step in order to accomplish tasks (most of the time).

Said the above, algorithms emphatically belong to technology, since they are essentially a technique for performing a task, and that's technology. It's time to analyze the object algorithm with what makes an amount of noise today, computer science. 

<div id='base'></div>

## The base: descriptive knowledge.

The algorithm instructions are executed by computers. The question here is how?, the answer is in **the descriptive knowledge**.

Computers aren't able to infer (still), unlike humans. They can only do exactly what they have instructed.

Existen dos tipos de conocimiento: 

* Descriptivo.

* Imperativo.

¿Qué significan y cuáles son las diferencias?, para responder esto se describirá la raíz cuadrada.

Imperativamente, tenemos definida la raíz cuadrada como: <br>"La raíz cuadrada de _x_ es _y_, tal que, _y_ por _y_ es igual a _x_".

Imaginemos que el elemento _x_ es igual a 25 y queremos encontrar la raíz cuadrada de _x_.

Gracias a nuestra experiencia podemos **inferir** que la raíz cuadrada de 25 es 5, porque es una verdad que, 5 por 5 es igual que 25. Esta es la forma en que las personas encontramos raíces cuadradas de cualquier número. Pero, ¿qué tal encontrar la raíz cuadrada de 13.2?, se volvió difícil, ¿verdad?.

No se describe el proceso para encontrar la raíz cuadrada, es decir, una secuencia de pasos con debidas instrucciones. Es aquí donde entra al juego el conocimiento descriptivo.

Existe un algoritmo que describe paso por paso la raíz cuadrada. Es conocido como _método babilónico_. Para obtener la raíz cuadrada de _x_ que es _y_, tenemos que hacer una serie de pasos de forma repetida.

1. Usar un número natural cualquiera menor que _x_: _y_ pertenece a _N_, tal que _y < x_.
+ Si la diferencia absoluta de _x_ menos _y_ por _y_ es menor o igual que 0.01, entonces _y_ es la raíz cuadrada de _x_.
+ De lo contrario, reemplazamos el valor de _y_ por: el promedio de la suma de _y_ más _x_ entre _y_.
+ Regresamos al paso número 2.

Siguiendo la situación imaginaria, el proceso se desarrollaría así:

```
x = 25

┬───────────────────┬────────────────────┬─────────────────────────┬───────────────────┐
│         y         │       y * y        │    abs(x - (y * y))     │ (y + (x / y)) / 2 │
┼───────────────────┼────────────────────┼─────────────────────────┼───────────────────┤
│         7         │         49         │           24            │ 5.285714285714286 │
│ 5.285714285714286 │ 27.93877551020408  │   2.9387755102040813    │ 5.007722007722007 │
│ 5.007722007722007 │ 25.077279706623333 │   0.07727970662333306   │ 5.000005953745353 │
│ 5.000005953745353 │ 25.000059537488973 │ 0.000059537488972694064 │ 5.000000000003545 │
┴───────────────────┴────────────────────┴─────────────────────────┴───────────────────┘

 y = 5.000023178253949

```
<br>

Concluimos con el resultado aproximado de la raíz cuadrada de 25.

En pocas palabras podemos definir a los conocimientos:

+ Imperativo: el qué.

+ Descriptivo: el cómo.

Las computadoras pueden satisfacer tareas, las cuales son desarrolladas a través de pensamiento computacional (cualquier problema definido como problema matemático mediante conocimiento descriptivo) y descritas con lenguajes de programación como Java, Python, Javascript, C, etc.

Por ejemplo, así desarrollé el método babilónico en Javascript.

```javascript
// Función metodo babilonico

// Entrada: x valor por defecto 25.
function metodoBabilonico(x = 25) {

  // Declaracion de y como un número real: 0 < y < x
  let y = Math.random() * (x - 1) + 1;

  // Conversion de y a número natural
  y -= (y % 1);

  // Ciclo infinito hasta encontrar la raíz cuadrada de x
  while (true) {
    // Declaracion de la diferencia real de x y y al cuadrado
    let dif = x - (y * y);

    // Conversion de la diferencia real a absoluta
    dif = dif < 0 ? dif * -1 : dif;

    // Condicional que evalua si se tiene raíz cuadrada de x aproximada
    if (dif <= 0.001) {

      // Se encuentra la raíz cuadrada y se retorna el resultado (y)
      return y;
    }

    // De no ser verdadera la condional. Reemplazo de y para volver a repetir el ciclo
    y = (y + (x / y)) / 2;
  }
}
```
<br>

No es necesario entender que quiere decir el montón de palabras en el ejemplo, sino la demostración del traslado de conocimiento descriptivo a serie de instrucciones en un lenguaje de programación (código) con el fin de que una computadora pueda realizar el proceso.

Un algoritmo computacional realiza instrucciones en una serie de pasos bien definidos, precisos para así una computadora sea capaz de cumplir con las tareas indicadas.

La piedra angular de los algoritmos indudablemente son las matemáticas. 

<div id='eficiencia'></div>

## Diferencias entre algoritmos: eficiencia.

En las matemáticas como en la vida, los problemas no se resuelven de una sola forma. Por ejemplo, hay personas que agregan leche antes del cereal y hay algunas que hacen lo contrario, la tarea a cumplir es la misma, hacer un cereal. Sin embargo, tus gustos son el factor clave, porque bien si agregas leche antes del cereal, no estás seguro si es suficiente cereal, se llena de leche y quizás te disgusta solo tener leche en tu plato. 

Esto es un ejemplo de un algoritmo con una situación de la vida diaria, donde en los problemas intervienen muchos factores, puede ser tiempo, cuestiones sociales, económicas, geográficas, étc.

Sin embargo, hay que centrarnos en lo que estamos, en el tema computacional medimos **eficiencia**: uso de recursos computacionales, cantidad de operaciones y precisión.

En una futura publicación se abordara el tema de eficiencia ya que es extenso.

Analizando _el método babilónico_, normalmente la cantidad de operaciones la denotamos por el número de veces que se repite un proceso cíclico (cada cuanto entra el ciclo), entonces en este algoritmo entra 4 veces para encontrar la raíz cuadrada de 25, vamos a cambiar el valor por defecto a un número más complejo, qué tal la raíz cuadrada de 1523.1523.

```

┌─────────┬───────────┬────────────────────┬────────────────────┬─────────────────────────┐
│ (index) │     x     │         y          │       y * y        │           dif           │
├─────────┼───────────┼────────────────────┼────────────────────┼─────────────────────────┤
│    0    │ 1523.1523 │        1047        │      1096209       │      1094685.8477       │
│    1    │ 1523.1523 │ 524.2273888729704  │ 274814.35524457257 │   273291.20294457255    │
│    2    │ 1523.1523 │ 263.56645361344715 │  69467.2754703694  │    67944.12317036939    │
│    3    │ 1523.1523 │ 134.6727301542055  │ 18136.744247187453 │    16613.59194718745    │
│    4    │ 1523.1523 │ 72.99137889562388  │ 5327.741393084528  │    3804.589093084528    │
│    5    │ 1523.1523 │ 46.92947164952973  │ 2202.3753093040145 │    679.2230093040146    │
│    6    │ 1523.1523 │ 39.69283563563566  │ 1575.521200797588  │    52.36890079758814    │
│    7    │ 1523.1523 │ 39.03315864407081  │ 1523.5874737331997 │   0.4351737331996901    │
│    8    │ 1523.1523 │   39.02758423313   │ 1523.1523310740574 │ 0.000031074057460500626 │
└─────────┴───────────┴────────────────────┴────────────────────┴─────────────────────────┘

```

Le tomó al algoritmo 9 operaciones (en base en el ciclo) encontrar la raíz cuadrada de 1523.1523.

Como en el ejemplo del cereal donde tenemos dos formas de realizar una tarea, hagamos lo mismo con la raíz cuadrada.

Buscaremos la raíz cuadrada de x que es igual a y, siguiendo los siguientes pasos:

1. Asignar el valor de _y_ igual a 0.
+ Si _y_ * _y_ es igual a _x_, entonces la raíz cuadrada de _x_ es igual a _y_.
+ De lo contrario, agregamos una unidad a _y_ y regresamos al paso número 2.

A este tipo de algoritmo se le denomina búsqueda. Lo que hacemos es que en un dominio buscamos elemento por elemento, en este caso la forma en que cómo estamos buscando el resultado es ordenada, de un número menor a uno mayor, por lo tanto es una búsqueda lineal.

Existen diversos tipos de búsquedas, pero en futura publicación se describirán cada una de las mismas con las diversas aplicaciones, requieren su propio espacio.

Antes de continuar, se puede analizar que el algoritmo solo aplica para ciertos casos de raíces cuadradas, el anterior puede encontrar cualquier raíz cuadrada real, pero este no, porque al sumar una unidad, únicamente estamos tomando en cuenta números naturales, es decir que el rango de _y_ aplica sólo para cuadrados perfectos como 0, 1, 4, 9, 16, 81, étc.

Dicho lo anterior nuestra función o método será denominado como: _búsqueda lineal de raíces cuadrada exactas_.

Los resultados de la raíz cuadrada de 25 son los siguientes:

```
┌─────────┬────┬───┬───────┐
│ (index) │ x  │ y │ y * y │
├─────────┼────┼───┼───────┤
│    0    │ 25 │ 0 │   0   │
│    1    │ 25 │ 1 │   1   │
│    2    │ 25 │ 2 │   4   │
│    3    │ 25 │ 3 │   9   │
│    4    │ 25 │ 4 │  16   │
│    5    │ 25 │ 5 │  25   │
└─────────┴────┴───┴───────┘
```

El número de operaciones en este algoritmo es muy predecible, en la raíz cuadrada de 25 tomó 6 operaciones encontrar el resultado, pero ¿qué tal 121? nada complejo de inferir, cerca de 12 operaciones, es decir, toma al algoritmo de operaciones al orden de raíz de n más uno, si tenemos la raíz cuadrada un número más interesante como 4 billones (4 * 10^12) (ejemplo para expresar una cantidad al orden del billón) tomaría alrededor de ¡2 millones operaciones para encontrar el resultado!, es demasiado.

Este es mi algoritmo de _búsqueda lineal de raíz cuadrada exacta_ en lenguaje de programación Python.

```python
# Funcion Busqueda Lineal de Raiz Cuadrada Exacta

# Entrada: valor por defecto de x igual a 25
def busquedaLinealRaizCuadradaExacta(x = 25):

  # Declaración de y igual a 0
  y = 0

  # Ciclo infinito hasta encontrar la raíz cuadrada
  while True:

    # Si y * y es igual a x, encontramos la raiz cuadrada de y
    if y * y == x:
      return y
    
    # De ser falsa la anterior proposicion, añadimos una unidad a y
    y += 1
```

Es hora de probar la eficiencia del método babilónico con la raíz de 4 billones, ¿cuántas operaciones tiene que realizar?:

```
┌─────────┬───────────────┬────────────────────┬────────────────────────┬────────────────────────┐
│ (index) │       x       │         y          │         y * y          │          dif           │
├─────────┼───────────────┼────────────────────┼────────────────────────┼────────────────────────┤
│    0    │ 4000000000000 │    101198733241    │ 1.0241183609583078e+22 │ 1.0241183605583077e+22 │
│    1    │ 4000000000000 │ 50599366640.26309  │ 2.5602959043957694e+21 │ 2.560295900395769e+21  │
│    2    │ 4000000000000 │ 25299683359.657734 │ 640073978098942500000  │ 640073974098942500000  │
│    3    │ 4000000000000 │ 12649841758.881239 │ 160018496524735600000  │ 160018492524735630000  │
│    4    │ 4000000000000 │ 6324921037.545364  │  40004626131183930000  │  40004622131183930000  │
│    5    │ 4000000000000 │ 3162460834.9821634 │  10001158532796082000  │  10001154532796082000  │
│    6    │ 4000000000000 │ 1581231049.909981  │  2500291633199421000   │  2500287633199421000   │
│    7    │ 4000000000000 │  790616789.792283  │   625074908301455100   │   625070908301455100   │
│    8    │ 4000000000000 │ 395310924.56667954 │   156270727081763000   │   156266727081763000   │
│    9    │ 4000000000000 │ 197660521.59204012 │   39069681796037360    │   39065681796037360    │
│   10    │ 4000000000000 │ 98840379.15442513  │    9769420551390518    │    9765420551390518    │
│   11    │ 4000000000000 │ 49440424.22237591  │   2444355547288494.5   │   2440355547288494.5   │
│   12    │ 4000000000000 │ 24760664.838514972 │   613090523245271.8    │   609090523245271.8    │
│   13    │ 4000000000000 │ 12461105.694653913 │   155279155133336.2    │   151279155133336.2    │
│   14    │ 4000000000000 │ 6391052.248343837  │   40845548841060.82    │   36845548841060.82    │
│   15    │ 4000000000000 │ 3508463.6377900047 │   12309317097694.674   │   8309317097694.674    │
│   16    │ 4000000000000 │ 2324281.9053367726 │   5402286375475.9375   │   1402286375475.9375   │
│   17    │ 4000000000000 │ 2022621.772747831  │   4090998835593.578    │   90998835593.57812    │
│   18    │ 4000000000000 │ 2000126.505263898  │   4000506037059.174    │   506037059.1738281    │
│   19    │ 4000000000000 │ 2000000.0040006423 │   4000000016002.5693   │    16002.5693359375    │
│   20    │ 4000000000000 │      2000000       │     4000000000000      │           0            │
└─────────┴───────────────┴────────────────────┴────────────────────────┴────────────────────────┘
```

Como se puede observar al _método babilónico_ le tomó 21 operaciones encontrar el resultado, es decir, ¡100 mil veces menos que _la búsqueda lineal de raíz cuadrada exacta_!. 

Pero vamos a contrastar con otro algoritmo que bien puede competirle _al método babilónico_, otro tipo de búsqueda, no hacerlo brutamente, sino más inteligente, su nombre es búsqueda binaria.

El proceso es el siguiente:

Necesitaremos un poco de apoyo con dos variables más, le llamaremos min y max (intervalos).

1. Declarar el valor _min_ igual a 0 y _max_ igual a _x_.
+ Declarar _y_ igual al promedio de la suma de min y max: (min + max) / 2.
+ Si la diferencia absoluta de _y_ al cuadrado y _x_ es menor o igual que 0.01, entonces la raíz cuadrada de _x_ es igual a _y_.
+ De lo contrario. Si _y_ por _y_ es mayor que _x_, entonces _max_ ahora es igual a _y_
+ De lo contrario, _min_ ahora es igual a _y_.
+ Regresamos al paso número 2.

Estas son las salidas con la raíz cuadrada de 25:

```
┌─────────┬────┬──────────────────┬───────────────────────┬────────────────────┬────────────────┬─────────────────┐
│ (index) │ x  │        y         │          dif          │       y * y        │      min       │       max       │
├─────────┼────┼──────────────────┼───────────────────────┼────────────────────┼────────────────┼─────────────────┤
│    0    │ 25 │       12.5       │        131.25         │       156.25       │       0        │       25        │
│    1    │ 25 │       6.25       │        14.0625        │      39.0625       │       0        │      12.5       │
│    2    │ 25 │      3.125       │       15.234375       │      9.765625      │       0        │      6.25       │
│    3    │ 25 │      4.6875      │      3.02734375       │    21.97265625     │     3.125      │      6.25       │
│    4    │ 25 │     5.46875      │     4.9072265625      │   29.9072265625    │     4.6875     │      6.25       │
│    5    │ 25 │     5.078125     │    0.787353515625     │  25.787353515625   │     4.6875     │     5.46875     │
│    6    │ 25 │    4.8828125     │   1.15814208984375    │ 23.84185791015625  │     4.6875     │    5.078125     │
│    7    │ 25 │    4.98046875    │  0.1949310302734375   │ 24.805068969726562 │   4.8828125    │    5.078125     │
│    8    │ 25 │   5.029296875    │  0.2938270568847656   │ 25.293827056884766 │   4.98046875   │    5.078125     │
│    9    │ 25 │   5.0048828125   │ 0.048851966857910156  │ 25.04885196685791  │   4.98046875   │   5.029296875   │
│   10    │ 25 │  4.99267578125   │  0.07318854331970215  │ 24.926811456680298 │   4.98046875   │  5.0048828125   │
│   11    │ 25 │  4.998779296875  │ 0.012205541133880615  │ 24.98779445886612  │ 4.99267578125  │  5.0048828125   │
│   12    │ 25 │ 5.0018310546875  │ 0.018313899636268616  │ 25.01831389963627  │ 4.998779296875 │  5.0048828125   │
│   13    │ 25 │ 5.00030517578125 │ 0.0030518509447574615 │ 25.003051850944757 │ 4.998779296875 │ 5.0018310546875 │
└─────────┴────┴──────────────────┴───────────────────────┴────────────────────┴────────────────┴─────────────────┘
```

<br>

Tomó 14 operaciones encontrar el resultado, ahora vamos con 4 billones para llegar a concluir.

<br>

```
┌─────────┬───────────────┬────────────────────┬────────────────────────┬───────────────────────┬────────────────────┬────────────────────┐
│ (index) │       x       │         y          │          dif           │         y * y         │        min         │        max         │
├─────────┼───────────────┼────────────────────┼────────────────────────┼───────────────────────┼────────────────────┼────────────────────┤
│    0    │ 4000000000000 │   2000000000000    │ 3.9999999999959997e+24 │         4e+24         │         0          │   4000000000000    │
│    1    │ 4000000000000 │   1000000000000    │   9.99999999996e+23    │         1e+24         │         0          │   2000000000000    │
│    2    │ 4000000000000 │    500000000000    │   2.49999999996e+23    │        2.5e+23        │         0          │   1000000000000    │
│    3    │ 4000000000000 │    250000000000    │    6.2499999996e+22    │       6.25e+22        │         0          │    500000000000    │
│    4    │ 4000000000000 │    125000000000    │    1.5624999996e+22    │      1.5625e+22       │         0          │    250000000000    │
│    5    │ 4000000000000 │    62500000000     │ 3.9062499959999997e+21 │      3.90625e+21      │         0          │    125000000000    │
│    6    │ 4000000000000 │    31250000000     │ 976562496000000000000  │ 976562500000000000000 │         0          │    62500000000     │
│    7    │ 4000000000000 │    15625000000     │ 244140621000000000000  │ 244140625000000000000 │         0          │    31250000000     │
│    8    │ 4000000000000 │     7812500000     │  61035152250000000000  │ 61035156250000000000  │         0          │    15625000000     │
│    9    │ 4000000000000 │     3906250000     │  15258785062500000000  │ 15258789062500000000  │         0          │     7812500000     │
│   10    │ 4000000000000 │     1953125000     │  3814693265625000000   │  3814697265625000000  │         0          │     3906250000     │
│   11    │ 4000000000000 │     976562500      │   953670316406250000   │  953674316406250000   │         0          │     1953125000     │
│   12    │ 4000000000000 │     488281250      │   238414579101562500   │  238418579101562500   │         0          │     976562500      │
│   13    │ 4000000000000 │     244140625      │   59600644775390620    │   59604644775390620   │         0          │     488281250      │
│   14    │ 4000000000000 │    122070312.5     │   14897161193847656    │   14901161193847656   │         0          │     244140625      │
│   15    │ 4000000000000 │    61035156.25     │    3721290298461914    │   3725290298461914    │         0          │    122070312.5     │
│   16    │ 4000000000000 │    30517578.125    │   927322574615478.5    │   931322574615478.5   │         0          │    61035156.25     │
│   17    │ 4000000000000 │   15258789.0625    │   228830643653869.62   │  232830643653869.62   │         0          │    30517578.125    │
│   18    │ 4000000000000 │   7629394.53125    │   54207660913467.41    │   58207660913467.41   │         0          │   15258789.0625    │
│   19    │ 4000000000000 │   3814697.265625   │   10551915228366.852   │  14551915228366.852   │         0          │   7629394.53125    │
│   20    │ 4000000000000 │  1907348.6328125   │   362021192908.2871    │   3637978807091.713   │         0          │   3814697.265625   │
│   21    │ 4000000000000 │  2861022.94921875  │   4185452315956.3545   │  8185452315956.3545   │  1907348.6328125   │   3814697.265625   │
│   22    │ 4000000000000 │ 2384185.791015625  │   1684341886080.8018   │   5684341886080.802   │  1907348.6328125   │  2861022.94921875  │
│   23    │ 4000000000000 │ 2145767.2119140625 │   604316927725.4492    │   4604316927725.449   │  1907348.6328125   │ 2384185.791015625  │
│   24    │ 4000000000000 │ 2026557.9223632812 │   106937012693.3789    │   4106937012693.379   │  1907348.6328125   │ 2145767.2119140625 │
│   25    │ 4000000000000 │ 1966953.2775878906 │   131094803786.2544    │  3868905196213.7456   │  1907348.6328125   │ 2026557.9223632812 │
│   26    │ 4000000000000 │ 1996755.599975586  │   12967073966.137695   │  3987032926033.8623   │ 1966953.2775878906 │ 2026557.9223632812 │
│   27    │ 4000000000000 │ 2011656.7611694336 │    46762924758.6958    │   4046762924758.696   │ 1996755.599975586  │ 2026557.9223632812 │
│   28    │ 4000000000000 │ 2004206.1805725098 │   16842414245.047852   │   4016842414245.048   │ 1996755.599975586  │ 2011656.7611694336 │
│   29    │ 4000000000000 │ 2000480.8902740479 │   1923792351.6469727   │   4001923792351.647   │ 1996755.599975586  │ 2004206.1805725098 │
│   30    │ 4000000000000 │ 1998618.245124817  │   5525110254.197266    │  3994474889745.8027   │ 1996755.599975586  │ 2000480.8902740479 │
│   31    │ 4000000000000 │ 1999549.5676994324 │   1801526313.0131836   │   3998198473686.987   │ 1998618.245124817  │ 2000480.8902740479 │
│   32    │ 4000000000000 │  2000015.22898674  │   60916178.88232422    │  4000060916178.8823   │ 1999549.5676994324 │ 2000480.8902740479 │
│   33    │ 4000000000000 │ 1999782.3983430862 │   870359277.1738281    │   3999129640722.826   │ 1999549.5676994324 │  2000015.22898674  │
│   34    │ 4000000000000 │ 1999898.8136649132 │   404735101.67285156   │   3999595264898.327   │ 1999782.3983430862 │  2000015.22898674  │
│   35    │ 4000000000000 │ 1999957.0213258266 │   171912849.52685547   │   3999828087150.473   │ 1999898.8136649132 │  2000015.22898674  │
│   36    │ 4000000000000 │ 1999986.1251562834 │   55499182.35498047    │   3999944500817.645   │ 1999957.0213258266 │  2000015.22898674  │
│   37    │ 4000000000000 │ 2000000.6770715117 │   2708286.5053710938   │  4000002708286.5054   │ 1999986.1251562834 │  2000015.22898674  │
│   38    │ 4000000000000 │ 1999993.4011138976 │   26395500.864257812   │  3999973604499.1357   │ 1999986.1251562834 │ 2000000.6770715117 │
│   39    │ 4000000000000 │ 1999997.0390927047 │   11843620.414550781   │  3999988156379.5854   │ 1999993.4011138976 │ 2000000.6770715117 │
│   40    │ 4000000000000 │ 1999998.8580821082 │   4567670.263183594    │   3999995432329.737   │ 1999997.0390927047 │ 2000000.6770715117 │
│   41    │ 4000000000000 │  1999999.76757681  │   929692.7060546875    │   3999999070307.294   │ 1999998.8580821082 │ 2000000.6770715117 │
│   42    │ 4000000000000 │ 2000000.2223241609 │   889296.6928710938    │   4000000889296.693   │  1999999.76757681  │ 2000000.6770715117 │
│   43    │ 4000000000000 │ 1999999.9949504854 │   20198.05810546875    │   3999999979801.942   │  1999999.76757681  │ 2000000.2223241609 │
│   44    │ 4000000000000 │ 2000000.1086373231 │   434549.30419921875   │   4000000434549.304   │ 1999999.9949504854 │ 2000000.2223241609 │
│   45    │ 4000000000000 │ 2000000.0517939043 │   207175.61962890625   │  4000000207175.6196   │ 1999999.9949504854 │ 2000000.1086373231 │
│   46    │ 4000000000000 │ 2000000.0233721947 │    93488.779296875     │  4000000093488.7793   │ 1999999.9949504854 │ 2000000.0517939043 │
│   47    │ 4000000000000 │  2000000.00916134  │    36645.3603515625    │  4000000036645.3604   │ 1999999.9949504854 │ 2000000.0233721947 │
│   48    │ 4000000000000 │ 2000000.0020559127 │    8223.65087890625    │   4000000008223.651   │ 1999999.9949504854 │  2000000.00916134  │
│   49    │ 4000000000000 │ 1999999.998503199  │    5987.20361328125    │  3999999994012.7964   │ 1999999.9949504854 │ 2000000.0020559127 │
│   50    │ 4000000000000 │ 2000000.000279556  │    1118.22412109375    │   4000000001118.224   │ 1999999.998503199  │ 2000000.0020559127 │
│   51    │ 4000000000000 │ 1999999.9993913774 │     2434.490234375     │   3999999997565.51    │ 1999999.998503199  │ 2000000.000279556  │
│   52    │ 4000000000000 │ 1999999.9998354667 │    658.13330078125     │  3999999999341.8667   │ 1999999.9993913774 │ 2000000.000279556  │
│   53    │ 4000000000000 │ 2000000.0000575115 │     230.0458984375     │   4000000000230.046   │ 1999999.9998354667 │ 2000000.000279556  │
│   54    │ 4000000000000 │ 1999999.999946489  │     214.0439453125     │   3999999999785.956   │ 1999999.9998354667 │ 2000000.0000575115 │
│   55    │ 4000000000000 │ 2000000.0000020002 │      8.0009765625      │   4000000000008.001   │ 1999999.999946489  │ 2000000.0000575115 │
│   56    │ 4000000000000 │ 1999999.9999742447 │    103.02099609375     │   3999999999896.979   │ 1999999.999946489  │ 2000000.0000020002 │
│   57    │ 4000000000000 │ 1999999.9999881224 │     47.51025390625     │  3999999999952.4897   │ 1999999.9999742447 │ 2000000.0000020002 │
│   58    │ 4000000000000 │ 1999999.9999950612 │     19.75537109375     │  3999999999980.2446   │ 1999999.9999881224 │ 2000000.0000020002 │
│   59    │ 4000000000000 │ 1999999.9999985308 │     5.87646484375      │  3999999999994.1235   │ 1999999.9999950612 │ 2000000.0000020002 │
│   60    │ 4000000000000 │ 2000000.0000002654 │      1.0615234375      │  4000000000001.0615   │ 1999999.9999985308 │ 2000000.0000020002 │
│   61    │ 4000000000000 │ 1999999.9999993981 │      2.4072265625      │   3999999999997.593   │ 1999999.9999985308 │ 2000000.0000002654 │
│   62    │ 4000000000000 │ 1999999.999999832  │     0.67236328125      │  3999999999999.3276   │ 1999999.9999993981 │ 2000000.0000002654 │
│   63    │ 4000000000000 │ 2000000.0000000487 │     0.19482421875      │   4000000000000.195   │ 1999999.999999832  │ 2000000.0000002654 │
│   64    │ 4000000000000 │ 1999999.9999999404 │       0.23828125       │  3999999999999.7617   │ 1999999.999999832  │ 2000000.0000000487 │
│   65    │ 4000000000000 │ 1999999.9999999944 │      0.0224609375      │  3999999999999.9775   │ 1999999.9999999404 │ 2000000.0000000487 │
│   66    │ 4000000000000 │ 2000000.0000000214 │     0.08544921875      │  4000000000000.0854   │ 1999999.9999999944 │ 2000000.0000000487 │
│   67    │ 4000000000000 │ 2000000.000000008  │     0.03173828125      │  4000000000000.0317   │ 1999999.9999999944 │ 2000000.0000000214 │
│   68    │ 4000000000000 │ 2000000.0000000012 │      0.0048828125      │   4000000000000.005   │ 1999999.9999999944 │ 2000000.000000008  │
└─────────┴───────────────┴────────────────────┴────────────────────────┴───────────────────────┴────────────────────┴────────────────────┘
```

<br>

Finalizamos observando que buscando la raíz cuadrada de un número grande como 4 billones, le tomó 69 operaciones. No es tan complejo decir que el más eficiente de los algoritmos es _el método babilónico_ y el menos eficiente es _la búsqueda lineal de raíz cuadrada exacta_.

Aquí es donde radica la importancia de resolver un problema, la forma, porque aparentemente podemos encontrar soluciones a problemas, pero en algunos casos no encuentran el resultado esperado, tal es el caso de la nuestra búsqueda lineal que solo encuentra raíces de cuadrados perfectos, aunque el _método babilónico_ una de sus consideraciones es su precisión, usamos un margen de diferencia, de 0.01, bien se pueden estar preguntando, ¿por qué no usar una diferencia de 0?, pues lo que sucede que los números decimales no son precisos, si son observadores, hacemos un promedio, partimos en dos un número, que bien puede ser por ejemplo 1.125, y las computadoras en algunos casos, manejan de diferente forma los números decimales, no son precisas (recomendación personal, traten de siempre trabajar con números enteros, los decimales son difíciles de manejar por computadoras), entonces si colocamos diferencia de 0, el ciclo sería infinito, es preferible tener un resultado aproximado en un tiempo record a tenerlo exacto hasta que se terminen nuestras vidas.

Este es mi código en Javascript de la busqueda binaria para encontrar la raíz cuadrada de x:

```javascript

// Función metodo babilonico

// Entrada: x valor por defecto 25
function busquedaBinariaRaizCuadrada(x = 25){
  // Declaración de intervalo min y max, y "y"
  let min = 0, max = x, y;


  // Ciclo infinito hasta encontrar la raiz cuadrada de x
  while(true){
    // Asignacion de y con el promedio de la suma de los intervalos
    y = (max + min) / 2;

    // Declaracion de la diferencia real de x y y al cuadrado
    let dif = x - (y * y);

    // Conversion de la diferencia real a absoluta
    dif = dif < 0 ? dif * -1 : dif;

    // Condicional que evalua si se tiene raíz cuadrada de x aproximada
    if(dif <= 0.01){
      return y;
    }

    // Condicional que evalua si y al cuadrado es mayor que x
    if((y * y) > x){

      // Reasignacion de max por y
      max = y;
    }else{
      // Reasignacion de min por y
      min = y;
    }
  }
}

```
<div id='innovacion'></div>

## Innovación tecnológica.

Si estás leyendo esta publicación, tienes un dispositivo inteligente, el cual simplifica tareas que años atrás eran difíciles de realizar. 

Por ejemplo, encontrar la ruta más corta, con menos tráfico con Google Maps o Waze usando el GPS; comprar un contenedor de artículos  de empresas chinas desde la comodidad de tu hogar con Alibaba (empresa china de ecommerce), asignar el envío de tu pedido, el seguimiento, étc; hoy en día con la pandemia, estudiar a distancia con "plataformas", que en realidad son CMS (Content Manager Systems) como Moodle o Blackboard, asignar tareas, exámenes, organizar temas o contenido, horarios; incluso los algoritmos están presentes en dispositivos que no interactuamos directamente, como las computadoras de los motores de transportes como automóviles, aviones, motos, étc, que suministran aire, aceite, monitorean presión, temperatura, étc. Los algoritmos están en todas partes. 

Miles de ejemplos se pueden dar de cuál importante es la tecnología digital que directamente ha mejorado la vida de las personas. Cada uno de nosotros hace uso de la tecnología como herramienta y apoyo.

Los algoritmos denotan la capacidad del ser humano de resolver problemas de forma eficiente. La computación o informática ha crecido exponencialmente en los últimos años y este crecimiento es gracias a su esencia: **los algoritmos**.


<div id='ref'></div>

## Referencias:

* Guttag, J. (2013). _Getting Started_. En Introduction to Computation and Programming Using Python (p.2). Cambridge, Massachusetts London, England: The MIT Press.

* Cormen, T. (2013). _What Are Algorithms and Why Should You Care?_ En Algorithms Unlocked (pp.2-8). Cambridge, Massachusetts London, England: The MIT Press.