let abilityScore = parseInt(document.getElementById('abilityScore').value);
let modifier = (abilityScore - 10) / 2;

function rollAttack() {
    let rollValue = Math.ceil(Math.random() * 20 + modifier);
    let damageValue = Math.ceil(Math.random() * 8);
    document.getElementById('result').innerHTML = 'You rolled ' + rollValue + '!';
    if (rollValue >= 12) {
        document.getElementById('hitOrMiss').innerHTML = 'It hits for ' + damageValue + ' damage!';
    }
    
    else {
        document.getElementById('hitOrMiss').innerHTML = 'It misses!';
    }
}