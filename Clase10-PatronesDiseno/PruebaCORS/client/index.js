function peticion(){
    fetch( 'http://localhost:3000/test')
    .then(result => result.json())
    .then(json => console.log(json));
}