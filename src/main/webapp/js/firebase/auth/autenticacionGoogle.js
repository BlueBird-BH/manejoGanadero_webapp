function ingresarGoogle() {
    const autenticacionGoogle = new firebase.auth.GoogleAuthProvider();
    autenticacion.signInWithRedirect(autenticacionGoogle);
    autenticacion
        .getRedirectResult()
        .then((result) => {
            if (result.credential) {
                var credential = result.credential;
                var token = credential.accessToken;
                console.log(token);
            }
            // The signed-in user info.
            var user = result.user;
        }).catch(error => {
            var mensajeError = error.message;
            alert(mensajeError);
        });
}
