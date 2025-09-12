---
marp: true
theme: default
---

# Il costrutto condizionale (if)

---

# Sfida: disegniamo un pallone

Per cominciare, una facile sfida. Implementare una funzione che disegni una palla alla coordinata passata come parametro della funzione

```js
function setup() {
  createCanvas(400, 400);
}

function pallone(x) {
    // TODO
}

function draw() {
    background(200, 255, 200);
    
    pallone(0);
}
```

---

# Sfida: pallone che rotola

Sfruttando il meccanismo delle animazioni di P5.JS, far rotolare la palla lungo l'asse x:

- dichiarare una variabile di stato:

```js
let x = 0
```

- richiamare la funzione pallone(), passando x come parametro
- incrementare x di un valore a piacere

---

# Problema...

L'Informatica è spesso una rincorsa alla soluzione di problemi.

Se la sfida precedente è stata risolta correttamente, la palla rotola, rotola, e alla fine esce dalla superficie di disegno!

Sarebbe bello farla tornare indietro.

--- 

# Formalizziamo il problema

Vogliamo che la palla cambi direzione e torni indietro **se** tocca il bordo:

![h:350px](img/Palla%20rimbalzo.jpg)

Cioè, se la sua x + 25 tocca o supera il lato destro della superficie!

---

# Traduciamo in JS:

Traduciamo questa condizione in codice JS usando il costrutto **if**:

```js
if (la palla tocca il bordo) {
    // inverti la direzione del movimento
}
```

La palla tocca il bordo se la sua x è a meno di 25 pixel dal bordo:

```js
if (x > 375) {
    // inverti la direzione del movimento
}
```

---

# Soluzione (parziale)

```js

// variabili di stato
let x = 0;
let velocità = 5;

function draw() {
    // disegna il pallone

    // sposta il pallone
    x = x + velocità;

    // se hai raggiunto il bordo...
    if (x > 375) {
        velocità = -5;    // inverti la direzione
    }
}
```

---

# Il costrutto if

E' un costrutto presente in tutti i linguaggi di programmazione. Consente di eseguire un **blocco di codice** solo se si verifica una precisa condizione.

Possiamo definire una condizione come un'**espressione** che ha come risultato i valori vero oppure falso. Il codice è eseguito se la condizione ha valore vero:

```js

if (condizione) {
    blocco di codice
}
else {
    blocco di codice alternativo, eseguito se la condizione è falsa
}

```

---

# Condizioni:

Esempi:
```js
x > 0     // vera se x è più grande di 0
x <= 5    // vera se x è minore o uguale a 5
x != 3    // vera se x è diversa da 3
x === 5   // -> NOTA: tre segni di uguale! Vera se x è uguale a 5 
```

---

# Sfida: 

Ora provate da soli: invertite nuovamente la direzione quando la palla torna a toccare il bordo sinistro.

---

# Ancora interazione col mouse

P5.JS ci consente di verificare che il bottone sinistro del mouse è premuto, mettendoci a disposizione la variabile globale **mouseIsPressed**.

Sviluppiamo una applicazione di disegno. Disegnamo un cerchio rosso nella posizione del mouse:

```js
function draw() {
    no
    noStroke();
    fill(200, 0, 0);
    ellipse(mouseX, mouseY, 10, 10);
}
```
... ma solamente **if (mouseIsPressed === true)**

---

# Condizioni complesse

**Sfida**: Riproduci in P5.JS questo disegno, ovvero un rettangolo giallo largo quanto la superficie di disegno e alto 200px:

![alt text](<img/Rettangolo click.png>)

Coloralo di rosso **se** il mouse si trova sopra il rettangolo.

:bulb: *ossia, se la coordinata mouseX è minore di 200*

---

# Condizioni complesse

Colora ora il rettangolo di rosso quando lo clicchiamo con il mouse. Ovvero:

- quando il mouse si trova sul rettangolo
- **e** il mouse viene cliccato, cioè **se mouseIsPressed === true**

Traduciamo questa condizione in javascript usando l'**operatore booleano and**:

```js
if (mouseX < 200 and mouseIsPressed === true) {
    // colora di rosso
}
```

--- 

# Sfida: colora il rettangolo

Ora posizioniamo il rettangolo al centro dello schermo.

![](<img/Rettangolo click centro.jpg>)

 Coloriamolo di rosso quando il mouse vi passa sopra.

---

# Sempre più difficile: colora la moneta!

Disegna una moneta al centro dello schermo. Colorala di giallo. Quando il mouse vi passa sopra, colorala di rosso:

![](<img/Palla click.png>)






