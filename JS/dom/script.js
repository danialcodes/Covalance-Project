document.addEventListener('DOMContentLoaded', function () {
    /* ........................ Study..............*/
    //     let paragraph = document.createElement('p');
    //     let text = document.createTextNode('Hay there');

    //     paragraph.style.color = 'Red';
    //     paragraph.style.textTransform = "uppercase";
    //     paragraph.className = 'some';
    //     paragraph.append(text);
    //     document.body.appendChild(paragraph);

    //     let button = document.createElement('button');
    //     let btnText = document.createTextNode('Click Me!');
    //     button.appendChild(btnText);
    //    document.body.appendChild(button);
    //    button.addEventListener('click',function(){
    //        let heading = document.createElement('h1');
    //        let hedtxt = document.createTextNode('Added by single clicking');
    //        heading.appendChild(hedtxt);
    //        document.body.appendChild(heading);
    //    }); 


    // ........................ DOM Drills........................
    let div = document.createElement('div');
    div.className = 'header-container';

    // let h1 = document.createElement('h1');
    // let h1txt = document.createTextNode('This is H1');
    // h1.appendChild(h1txt);
    // div.appendChild(h1);

    // let h2 = document.createElement('h2');
    // let h2txt = document.createTextNode('This is H2');
    // h2.appendChild(h2txt);
    // div.appendChild(h2);

    // let h3 = document.createElement('h3');
    // let h3txt = document.createTextNode('This is h3');
    // h3.appendChild(h3txt);
    // div.appendChild(h3);
    // let h4 = document.createElement('h4');
    // let h4txt = document.createTextNode('This is h4');
    // h4.appendChild(h4txt);
    // div.appendChild(h4);
    // let h5 = document.createElement('h5');
    // let h5txt = document.createTextNode('This is h5');
    // h5.appendChild(h5txt);
    // div.appendChild(h5);

    // let h6 = document.createElement('h6');
    // let h6txt = document.createTextNode('This is h6');
    // h6.appendChild(h6txt);
    // div.appendChild(h6);
    const color = ['red', 'green', 'blue', 'yellow', 'black', 'brown'];
    for (let i = 1; i < 7; i++) {
        let h = 'h' + i;
        h = document.createElement('h' + i);
        h.className = 'h' + i;
        let txt = 'h' + i + 'txt';
        txt = document.createTextNode('This is h' + i);
        h.appendChild(txt);
        div.appendChild(h);

    }
    document.body.appendChild(div);

    for (let i = 1; i < 7; i++) {
        let h = document.getElementsByTagName('h' + i);
        h[0].addEventListener('dblclick', function () {
            let random = Math.floor(Math.random() * color.length);
            h[0].style.color = color[random];
        });

    }


    // document.getElementsByClassName(h).style.color = color[random];
    // div.appendChild(h);



});
