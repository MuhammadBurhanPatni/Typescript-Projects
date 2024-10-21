var palyer1 = 'paper';
var palyer2 = 'scissors';
if (palyer1 == palyer2) {
    console.log('tie');
}
else if (palyer1 == 'rock' && palyer2 == 'scissors' || palyer1 == 'paper' && palyer2 == 'rock' || palyer1 == 'scissors' && palyer2 == 'paper') {
    console.log('palyer1 wins');
}
else {
    console.log('player2 wins');
}
