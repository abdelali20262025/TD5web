let QUESTIONS = [
    ["Que signifie HTML ?", "hypertext markup language"],
    ["Quelle propriété change la couleur du texte ?", "color"],
    ["Quel mot-clé déclare une variable ?", "let"],
    ["Quelle fonction demande une saisie utilisateur ?", "prompt"],
    ["Quelle balise sert à créer un lien ?", "a"]
]

function lancerQuiz() {
    let score = 0;

    for (let i = 0; i < QUESTIONS.length; i++) {
        let question = QUESTIONS[i][0];
        let reponseCorrecte = QUESTIONS[i][1];
        let reponseUtilisateur = prompt(question);
        if (reponseUtilisateur === null) {
            alert("Quiz annulé !");
            return;
        }
        if (reponseUtilisateur.toLowerCase() === reponseCorrecte.toLowerCase()) {
            alert("Réponse juste");
            score++;
        } else {
            alert("Réponse fausse");
        }
    }

    alert("fin du quiz !\nVous avez répondu correctement à "
         + score + " questions sur " + QUESTIONS.length);
}