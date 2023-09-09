var obj = {
    firstName : 'Muneet',
    lastName : 'kumar',
    arr : ['Muneet','kumar',21,true,11.11]
}

for(var key in obj){
    if (key === 'arr'){
        for(var i=0 ; i < obj[key].length ; i++){
            document.write(obj[key][i],'<br>')
        }
    }
    else{
        document.write(obj[key],'<br>')
    }
}