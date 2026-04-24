
let proposition = Math.floor(Math.random() * 10) + 1;
let a;

let score = 0;


do {
            
    
    a = Number(prompt("Entrer un nombre entre 1 et 10"));

    if (a > proposition) {
        alert("Le nombre à deviner est plus petit");
    } 
    else if (a < proposition) {
        alert("Le nombre à deviner est plus grand");
    } 
    else {
        alert("Bravo ! Tu as trouvé en", score + 1, "tentatives");
    }

    score++;

} while (a !== proposition)
