/* Esercizio

Creiamo la prima applicazione con NodeJs e inizializziamola con npm init ✅
Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”.✅
Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base. ✅
Impostiamo ora uno script “start” in package.json e facciamo in modo di lanciare il nostro script con npm run start✅
Impostiamo un nuovo script “watch” in package.json che possa essere lanciato con npm run watch
e che aggiorni in tempo reale le modifiche ai nostri file. ✅
Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. ✅
Dovremmo vedere il terminale senza fermare e rilanciare il server.✅

Bonus ✅

Proviamo a modificare la nostra app Node, in modo da passare dal terminale una frase diversa da “Hello Boolean”. Forse potrà servirvi qualcosa vista ieri! 😉 
*/

console.log("Hello Boolean");
const changeSentence = process.argv[2] || "Hello Boolean"; //nel terminale sarebbe node[0] index.js[1] "Ciao sono Veronica prossima Booleaner"[2]
console.log(changeSentence);
