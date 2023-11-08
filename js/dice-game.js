function rollDice() {
    let goldCoins = 0;

    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert(`You rolled a ${roll}`);
        if (roll === 1) {
            alert("Game over, no more rolls!");
            break;
        }
        if (roll < 4) {
            alert(`You win nothing || Gold coin total: ${goldCoins}`);
            continue;
        }
        if (roll === 4 && goldCoins > 0) {
            --goldCoins;
            alert(`You have lost 1 gold coin || Total: ${goldCoins}`);
            continue;
        }
        alert(`Congratulations, you win ${roll} gold coins!`);
        goldCoins += roll;
        alert(`Gold coin total: ${goldCoins}`);
    }
    alert(`You've won a total of ${goldCoins} gold coins`);
}
