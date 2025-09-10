const login_form = document.getElementById("login_form")

login_form.addEventListener("submit",(evento)=>{
    evento.preventDefault()

    const email = document.getElementById("email").value
    const contrasena = document.getElementById("password").value
    //console.log(email)
    //console.log(contrasena)

    if(email === "admin@gmail.com" && contrasena === "123456789012"){
        //console.log(1)
        // Un payload es la información que almaceno en un Token:
        const payload = {
            email,
            rol: "Administrador",
            exp: Date.now() + (60000*15)
        }
        // console.log(payload)
        // Ahora crearemos un token con la información del payload:
        const token = btoa(JSON.stringify(payload))
        localStorage.setItem("token",token)
        window.location.href = "src/admin/home.html"
    }
})