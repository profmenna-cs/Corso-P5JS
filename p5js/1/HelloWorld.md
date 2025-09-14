---
marp: true
theme: default
---

# P5.JS

Iniziamo qui il nostro percorso di esplorazione dei principi della programmazione utilizzando il linguaggio Javascript, ma servendoci anche della libreria [P5.js](p5js.org).

*p5.js is a friendly tool for learning to code and make art. It is a free and open-source JavaScript library built by an inclusive, nurturing community. p5.js welcomes artists, designers, beginners, educators, and anyone else!*

---

# Hello World!

Ogni corso di programmazione non può che iniziare con la celebre frase: "Hello World". Ciao Mondo!

Quando vedremo comparire questa frase nel nostro browser, potremo dire di aver imboccato la strada giusta nel nostro percorso nel mondo della programmazione.

Dove arriveremo? Chissà.

Iniziamo.

---

# Creare una pagina vuota

Creiamo una nuova directory, in cui poi caricheremo i due file vuoti di partenza:

- index.html: la pagina web che contiene il nostro programma
- sketch.js: lavoreremo qui

---

# Struttura di un programma P5JS

Preparazione.

```js
function setup() {
    // Eseguita una volta sola:
    //inserire qui il codice per preparare l'area di disegno  
}
```

---

# Struttura di un programma P5JS

Esecuzione.

```js
function draw() {
    // Eseguita continuamente:
    // inserire qui i comandi di disegno
}
```

--- 

# Preparazione

Crea una superficie di disegno di dimensione 400x400 pixel:

```js
    createCanvas(400, 400);
```

---

# Esecuzione

Aggiungiamo un testo, usando una **funzione** messa a disposizione dalla libreria P5.JS

```
    text('Hello, world!', 0, 0);
```

Osserva: in che punto della superficie viene inserito il testo?

---

# Ha funzionato?

Visualizziamo con il nostro browser il file **index.html**

Se visualizziamo il saluto "Hello, world!", allora il nostro primo programma P5.JS ha funzionato.

*Provate a scrivere qualche testo (dignitoso) a piacere...*
