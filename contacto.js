((d) => { 
    const $form = d.querySelector(".contact-form"),
        $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector("contact-form-response");

    d.addEventListener("submit", e => {
       // e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/42067cf0bbeba3c77af5c0e744107b0f", {
            method: "POST",
            body: new FormData(e.targer)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res) )
        .then( json => {
            console.log(json),
            location.hash = "#gracias";
            $form.reset();
        } )
        .catch( err => {
            console.log(json);
            let message = err.statusText || "Ocurrio un error"
            $response.querySelector("h3").innerHTML = `Error ${err.status} : ${message}`;
        })
        .finally(() => {
            $loader.classList.add("none");
            setTimeout(() => {
                location.hash = "#close"
            }, 3000)
        })
})
})(document); 