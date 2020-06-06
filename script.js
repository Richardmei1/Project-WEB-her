/* Functies om login/filter/zoekbalk te weergeven */

function toggleLogin() {
    toggleSection('login');
    toggleOff('filter');
    toggleOff('search');
}

function toggleFilter() {
    toggleSection('filter');
    toggleOff('login');
    toggleOff('search');
}

function toggleSearch() {
    toggleSection('search');
    toggleOff('filter');
    toggleOff('login');
}

/* Sections laten zien */

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

/* Sections weghalen */

function toggleOff(sectionId) {
    var section = document.getElementById(sectionId);

    section.style.display = "none";
}

/* Section buttons functies */

document.getElementById("loginButton").onclick = function () {
    toggleLogin()
};

document.getElementById("filterButton").onclick = function () {
    toggleFilter()
};

document.getElementById("searchButton").onclick = function () {
    toggleSearch()
};

/* Close filter & search dropdown */

function closeFilter() {
    toggleOff('filter');
}

function closeSearch() {
    toggleOff('search');
}

document.getElementById("closeFilter").onclick = function () {
    closeFilter()
};

document.getElementById("closeSearch").onclick = function () {
    closeSearch()
};

/* Like button */

/*var likeElement = document.getElementById("likeButton");

function like() {
    if (likeElement.innerHTML = "&#9825;") {
        likeElement.innerHTML = "&#9829;"
    } else {
        likeElement.innerHTML = "&#9825;"
    }
};

likeElement.addEventListener('click', like);*/


var likeButtonNew = document.getElementById("likeButtonDiv");

function like() {
    console.log(likeButtonNew.style.backgroundImage);
    if (likeButtonNew.style.backgroundImage === "url(\"images/leeslijst_niet%20geselecteerd.svg\")") {
        console.log("change toliked")
        likeButtonNew.style.backgroundImage = "url(images/leeslijst_wel%20geselecteerd.svg)"
    } else /*if (likeButtonNew.style.backgroundImage === "url(images/leeslijst_wel%20geselecteerd.svg)")*/ {
        console.log("change to non-liked")
        likeButtonNew.style.backgroundImage = "url(images/leeslijst_niet%20geselecteerd.svg)";
    }
};

likeButtonNew.onclick = like;

/* Bron: https://codepen.io/FED_HERK04/pen/wvBBOqN */

/* On load Hide all */

function init() {
    toggleOff('login');
    toggleOff('filter');
    toggleOff('search');
    closeModal(modal);
    checkHasReviewed();
}

window.onload = init;

/* Review */

var hasReviewed = false;
const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-reviewclose-button]")
const submitModalButtons = document.querySelectorAll("[data-reviewsubmit-button]")
const overlay = document.getElementById("overlay")

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})


overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})

submitModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal)
        hasReviewed = true;
        console.log(hasReviewed.toString());
        checkHasReviewed();
    })
})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
}

function checkHasReviewed() {
    console.log("CheckHasReviewed function running");
    if (hasReviewed) {
        console.log("has reviewed is gecheckt");
        document.getElementById("review-button").innerHTML = "Wijzig beoordeling";
        console.log("Changed review button text");
    } else if (!hasReviewed) {
        document.getElementById("review-button").innerHTML = "Beoordeel verhaal";
    }
}
