function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateNumber() {
    const randomNumberElement = document.getElementById("randomNumber");
    const currentNumber = parseInt(randomNumberElement.textContent);
    let newNumber = getRandomInt(currentNumber - 50, currentNumber + 50);

    // Vérifier les limites
    if (newNumber < 130) {
        newNumber = 130;
    } else if (newNumber > 333) {
        newNumber = 333;
    }

    randomNumberElement.textContent = newNumber;

    // Planifier le prochain appel avec un intervalle aléatoire
    const nextInterval = getRandomInt(20000, 40000);
    setTimeout(updateNumber, nextInterval);
}

// Appeler la première fois la fonction updateNumber
updateNumber();
