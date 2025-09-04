---
marp: true
theme: default
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

> function setup() {
>    Eseguita una volta sola:
>    inserire qui il codice per preparare l'area di disegno  
> }

---

# Struttura di un programma P5JS

Esecuzione.

> function draw() {
> Eseguita continuamente:
> inserire qui i comandi di disegno
> }

--- 

# Preparazione

Crea una superficie di disegno di dimensione 400x400 pixel:

>  createCanvas(400, 400);

---

# Esecuzione

Aggiungiamo un testo:

> text('Hello, world!', 0, 0);

Osserva: in che punto della superficie viene inserito il testo?


