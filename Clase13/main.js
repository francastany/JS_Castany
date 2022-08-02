let botonError = document.getElementById("botonError")
let botonBien = document.getElementById("botonBien")

botonError.addEventListener("click", () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
    })

})
botonBien.addEventListener("click", () => {
   /*  Swal.fire({
        icon: 'success',
        title: '¡Listo!',
        text: 'Tu evento fue guardado correctamente.',
    }) */
    
    Toastify({
        text: "Evento creado",
        duration: 1800,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
})
