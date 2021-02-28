// menu - todos los .html
var menubutton = document.getElementById("menu-icon");
var menu = document.getElementById("menu-container");
var body = document.getElementById("body");
var menu_li = document.getElementById("menu-li");
var menu_li_ul = document.getElementById("menu-li-ul");
var menu_li_arrow = document.getElementById("menu-li-arrow");

menubutton.addEventListener("click", () => menu.classList.add("menu-container--show"))

menubutton.addEventListener("click", () => menubutton.classList.add("menu-icon--rotate"))

menubutton.addEventListener("click", () => body.classList.add("overflow--off"))

menu_li.addEventListener("click", () => menu_li_ul.classList.add("menu-li-ul--show"))

menu_li.addEventListener("click", () => menu_li_arrow.classList.add("menu-li-arrow--rotate"))

menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-container")) menu.classList.remove("menu-container--show")
})

menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-container")) menubutton.classList.remove("menu-icon--rotate")
})

menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-container")) body.classList.remove("overflow--off")
})

menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-container")) menu_li_ul.classList.remove("menu-li-ul--show")
})

menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-container")) menu_li_arrow.classList.remove("menu-li-arrow--rotate")
})


// información de sabores - nuestros-jugos.html

    // información de sabor naranja
    var naranja_info_button = document.getElementById("naranja-info-button");
    var naranja_info_button_close = document.getElementById("naranja-info-button-close")
    var naranja_info_container = document.getElementById("naranja-info-container");

    naranja_info_button.addEventListener("click", () => naranja_info_container.classList.add("naranja-info--show"))

    naranja_info_button.addEventListener("click", () => body.classList.add("overflow--off"))

    naranja_info_button_close.addEventListener("click", () => naranja_info_container.classList.remove("naranja-info--show"))

    naranja_info_button_close.addEventListener("click", () => body.classList.remove("overflow--off"))

    naranja_info_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("naranja-info-container")) naranja_info_container.classList.remove("naranja-info--show")
    })

    naranja_info_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("naranja-info-container")) body.classList.remove("overflow--off")
    })    

    // información de sabor uva
    var uva_info_button = document.getElementById("uva-info-button");
    var uva_info_button_close = document.getElementById("uva-info-button-close");
    var uva_info_container = document.getElementById("uva-info-container");

    uva_info_button.addEventListener("click", () => uva_info_container.classList.add("uva-info--show"))

    uva_info_button.addEventListener("click", () => body.classList.add("overflow--off"))

    uva_info_button_close.addEventListener("click", () => uva_info_container.classList.remove("uva-info--show"))

    uva_info_button_close.addEventListener("click", () => body.classList.remove("overflow--off"))

    uva_info_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("uva-info-container")) uva_info_container.classList.remove("uva-info--show")
    })    

    uva_info_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("uva-info-container")) body.classList.remove("overflow--off")
    })    

    // información de sabor durazno
    var durazno_info_button = document.getElementById("durazno-info-button");
    var durazno_info_button_close = document.getElementById("durazno-info-button-close");
    var durazno_info_container = document.getElementById("durazno-info-container");

    durazno_info_button.addEventListener("click", () => durazno_info_container.classList.add("durazno-info--show"))

    durazno_info_button.addEventListener("click", () => body.classList.add("overflow--off"))

    durazno_info_button_close.addEventListener("click", () => durazno_info_container.classList.remove("durazno-info--show"))

    durazno_info_button_close.addEventListener("click", () => body.classList.remove("overflow--off"))

    durazno_info_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("durazno-info-container")) durazno_info_container.classList.remove("durazno-info--show")
    })    

    durazno_info_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("durazno-info-container")) body.classList.remove("overflow--off")
    })    

    // información de sabor manzana
    var manzana_info_button = document.getElementById("manzana-info-button");
    var manzana_info_button_close = document.getElementById("manzana-info-button-close");
    var manzana_info_container = document.getElementById("manzana-info-container");

    manzana_info_button.addEventListener("click", () => manzana_info_container.classList.add("manzana-info--show"))

    manzana_info_button.addEventListener("click", () => body.classList.add("overflow--off"))

    manzana_info_button_close.addEventListener("click", () => manzana_info_container.classList.remove("manzana-info--show"))

    manzana_info_button_close.addEventListener("click", () => body.classList.remove("overflow--off"))

    manzana_info_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("manzana-info-container")) manzana_info_container.classList.remove("manzana-info--show")
    })    

    manzana_info_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("manzana-info-container")) body.classList.remove("overflow--off")
    })    

    // información de sabor limon
    var limon_info_button = document.getElementById("limon-info-button");
    var limon_info_button_close = document.getElementById("limon-info-button-close");
    var limon_info_container = document.getElementById("limon-info-container");

    limon_info_button.addEventListener("click", () => limon_info_container.classList.add("limon-info--show"))

    limon_info_button.addEventListener("click", () => body.classList.add("overflow--off"))

    limon_info_button_close.addEventListener("click", () => limon_info_container.classList.remove("limon-info--show"))

    limon_info_button_close.addEventListener("click", () => body.classList.remove("overflow--off"))

    limon_info_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("limon-info-container")) limon_info_container.classList.remove("limon-info--show")
    })    

    limon_info_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("limon-info-container")) body.classList.remove("overflow--off")
    })    

