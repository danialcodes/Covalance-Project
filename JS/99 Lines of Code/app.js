friends = ['Danial', 'Sharthok', 'Mahfuza', 'Rafiqul', 'Dadi'];
const body = document.querySelector('body');
document.addEventListener('DOMContentLoaded', function () {
    // let h = document.createElement('h1');
    // let th = document.createTextNode('My Singing Friends');
    // h.appendChild(th);
    // body.appendChild(h);

    document.getElementsByTagName('button')[0].addEventListener('click', function () {
        mp('h1', body, 'My Singing Friends');
        friends.forEach(name => {
            make(name);
        });
    });




    function mp(e, d, p) {
        let pa = document.createElement(e);
        let pt = document.createTextNode(p);
        pa.appendChild(pt);
        d.appendChild(pa);
    }

    function make(name) {
        let d = document.createElement('div');
        d.className = 'friend';
        mp('h3', d, name);

        for (let i = 99; i > 0; i--) {
            if (i == 1) {
                p = i + ' line of code in the file, ' + i + ' line of code; ' + name + ' strikes one out, clears it all out, no more lines of code in the file';
                mp('p', d, p);
            }
            else {
                p = i + ' lines of code in the file, ' + i + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file';
                mp('p', d, p);
            }

        }
        body.appendChild(d);
    }

});


