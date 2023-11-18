let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("phython");
        habilidades[3].classList.add("cpp");
        habilidades[4].classList.add("ingles");
        habilidades[5].classList.add("adaptabilidad");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("gestiondeltiempo");
        habilidades[9].classList.add("empatia");
    }
}


window.onscroll = function(){
    efectoHabilidades();
} 