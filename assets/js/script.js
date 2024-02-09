function cadastrar() {

    let payload = {
        fullName: document.querySelector("#fullName").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    fetch("", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then(response => response.json())
        .then(response => {
            Swal.fire({
                title: 'Bom Trabalho!',
                text: "Login realizado com sucesso!",
                icon: 'success',
                confirmButtonText: 'Ok!'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.setItem("userName", response.fullName);

                    window.location.href = "pagina.html";
                }
            })
        })
}