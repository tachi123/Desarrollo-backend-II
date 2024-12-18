document.getElementById('loginForm')
    .addEventListener('submit', async(e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        });

        if(response.ok){
            console.log('Login exitoso');
            console.log(document.cookie);

            //Redirigimos a otra página
        }else{
            console.error('Error en el login');      
        }
    })
/* SE AGREGA ESTE HEADER EN CADA SOLICITUD
    'Authorization' : "Bearer ${localStorage.getItem('authToken')}"
*/
    /* COMO ALMACENA EL USUARIO SI USA LOCALSTORAGE

        const response = await fetch('/loginLocalStorage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        }).then(result => result.json())
        .then(json=> {
            localStorage.setItem('authToken', json.token)
        })


    */