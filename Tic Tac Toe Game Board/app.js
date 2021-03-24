let cells = document.querySelectorAll('.row > div');
let count = 1;

cells.forEach(e => {
    addEventListener('click', cellClicked);
});

function cellClicked() {
    if (count == 10) {
        document.querySelector('.result').textContent = '';
        removeElement();        
    }

    else if (event.target.textContent.length < 1) {
        if (count % 2 == 0) {
            event.target.textContent = 'খ';
        } else {
            event.target.textContent = 'ক';
        }
        
        result();
        

        count += 1;
        console.log(count);
    }

}

function result() {
    if (count==9) {
        document.querySelector('.result').textContent ="পেটকাটা!";
    }
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
        if(win==="ককক"){
            document.querySelector('.result').textContent ="ক জিতছে!";
            count=9;
        }
        else if(win==="খখখ"){
            document.querySelector('.result').textContent ="খ জিতছে!";
            count=9;
        }
    });

}
function removeElement() {
    cells.forEach( cell => {
        cell.textContent='';
    });
    count = 1;
}