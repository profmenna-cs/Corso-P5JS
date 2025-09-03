---
marp: true
theme: default
---

# Sfida: disegniamo un'auto

Ora siamo già esperti: due ellissi, due rettangoli, un po' di colore e via:

![h:200px](img/auto.png)

Iniziamo così:

> let x = 10;

Disegniamo le parti dell'auto a partire da questa variabile.

---

# Partenza!

Abbiamo detto che la funzione p5JS:

> function draw() { }

viene eseguita continuamente.

Vediamo ora che accade se:
- spostiamo la dichiarazione della funzione all'inizio del file js, prima di setup()
- al termine della funzione modifichiamo il valore della variabile x:
> x = x+1;

Aggiornate la pagina e tenetevi forti!

--- 

# Cos è un'animazione?

Otteniamo l'effetto di animazione mostrando al nostro occhio immagini ad alta frequenza, almeno 30 immagini al secondo.

Incrementando il valore di x, abbiamo generato ad ogni esecuzione della funzione draw() un'immagine leggermente diversa dalla precedente.

Il nostro occhio è ingannato dalla somiglianza delle immagini e dalla velocità del cambiamento, e percepisce una figura in movimento.

--- 

# Variabili di Stato

Per ottenere questo effetto abbiamo dovuto spostare la variabile x fuori dalle funzioni, nella porzione globale del programma JS.

L'abbiamo resa una **variabile di stato**. Conserva il suo valore per tutta la vita della pagina web, consente di memorizzare lo stato in cui si trova l'esecuzione del nostro programma.

---

# Sfida

Pallone in caduta libera

