friends =['Danial','Sharthok','Mahfuza','Rafiqul','Dadi'];

friends.forEach(name => {
    console.log(name+': ');
    for (let i = 99; i>0 ; i--) {
        if (i==1) {
            p = i + ' line of code in the file, '+ i+' line of code; '+name+' strikes one out, clears it all out, no more lines of code in the file';
            console.log(p);
        }
        else{
            p = i + ' lines of code in the file, '+ i+' lines of code; '+name+' strikes one out, clears it all out, '+i-1+'98 lines of code in the file';
            console.log(p);
        }
        
    }
    
    
});