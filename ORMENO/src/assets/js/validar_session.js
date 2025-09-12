// Vamos a validar si existe un token:
const token = localStorage.getItem("token")
if(!token){
    window.location.href = "./../../login.html"
    alert("Tiene que iniciar sesión")
}else{
    const payload = JSON.parse(atob(token))
    if(Date.now() > payload.exp){
        localStorage.removeItem("token")
        alert("Tu sesión ha expirado")
        window.location.href = "./../../login.html"
    }
}

const btn_logout = document.getElementById("btn_logout")
btn_logout.addEventListener("click",()=>{
    window.location.href("./../../../index.html")
    localStorage.removeItem("token")
})