let cells = document.querySelectorAll('.row > div');
let count = 1;

cells.forEach(e => {
    addEventListener('click', cellClicked);
});

function cellClicked() {
    if (count == 10) {
        removeElement();        
    }

    else if (event.target.textContent.length < 1) {
        
        if (count % 2 == 0) {
            event.target.textContent = 'O';
        } else {
            event.target.textContent = 'X';
        }
        if(count > 4){
            result(event.target.textContent);
        }

        count += 1;
        console.log(count);
    }

}

function result(who) {
    let check = [
        ['one','two','three'],
        ['four','five','six'],
        ['seven','eight','nine'],
        ['one','four','seven'],
        ['two','five','eight'],
        ['three','six','nine'],
        ['seven','five','three'],
        ['one','five','nine'],
    ]
    check.forEach(e => {
        win = '';
        e.forEach(ie => {
            win += document.querySelector('#'+ie).textContent;
        });
        if(win==="XXX"){
            document.querySelector('.result').textContent ="X wins!";
        }
        else if(win==="OOO"){
            document.querySelector('.result').textContent ="O wins!";
        }
    });

}
function removeElement() {
    cells.forEach( cell => {
        cell.textContent='';
    });
    count = 1;
}