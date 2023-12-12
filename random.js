
function randomNumber(){
    let value = Math.random() * 10;
    let jackpot = '';
        if (value > 0 && value < 1.25) {
            jackpot = 'Pnut';
        } else if (value >= 1.25 && value < 2.5) {
            jackpot = 'Poy';
        } else if (value >= 2.5 && value < 3.75) {
            jackpot = 'Time';
        } else if (value >= 3.75 && value < 5) {
            jackpot = 'Pleum';
        } else if (value >= 5 && value < 6.25) {
            jackpot = 'Nine';
        } else if (value >= 6.25 && value < 7.5) {
            jackpot = 'Sun';
        } else if (value >= 7.5 && value < 8.75) {
            jackpot = 'Moning';
        } else if (value >= 8.75 && value <= 10) {
            jackpot = 'May';
        }else{
            jackpot = 'Noone';
        }


        if(jackpot === 'Pnut'){
            console.log('pnut');
        }else if(jackpot === 'Poy'){
        console.log('Poy');
        }else if(jackpot === 'Time'){
            console.log('Time');
        }else if(jackpot === 'Pleum'){
            console.log('Pleum');
        }else if(jackpot === 'Nine'){
            console.log('Nine');
        }else if(jackpot === 'Sun'){
            console.log('Sun');
        }else if(jackpot === 'Moning'){
            console.log('Moning');
        }else if(jackpot === 'May'){
            console.log('May');
        }else{
            console.log('confused');
        }
}
function showPic(){
    document.getElementById();
}