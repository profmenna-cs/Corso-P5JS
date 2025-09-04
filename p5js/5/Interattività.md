---
marp: true
theme: default
---

# Dalla grafica all'interazione

Fin qui siamo riusciti a disegnare oggetti in una tela JS.

Sfruttando poi le proprietà della funzione draw, utilizzando opportune variabili di stato, siamo anche riusciti a mettere in movimento i nostri oggetti.

Capiamo ora come fare ad interagire con i nostri oggetti usando il cursore del mouse.

---

# Sfida preparatoria

Disegna un cerchio di dimensione 30x30 al centro dello schermo.

Colore di riempimento: rosso.

Imposta anche il colore del contorno, usando il comando:

```
stroke(r, g, b);
```

r, g, e b sono i soliti valori, compresi tra 0 e 255, che indicano quanta componente dei colori rosso, verde e blu utilizzare.

---

# Posizione del cursore

La libreria P5.JS mette a disposizione due variabili speciali:

- mouseX
- mouseY

che contengono le coordinate del cursore del mouse.

Prova a posizionare il cerchio disegnato nella sfida preparatoria sul punto (mouseX, mouseY). che accade?

--- 

# Sfida: mordi il pomodoro!

Nel disegno [pomodoro.js](pomodoro.js) viene disegnato... un pomodoro.

Prova a modificare il disegno: mordi il pomodoro muovendo il mouse!

Hint:
- dai un morso al pomodoro disegnandovi sopra un'ellisse bianca:

```
    fill(255, 255, 255);
    ellipse(<x>, <y>, 30, 30);
```