const codes = {

    "0101": {
        ligne: "C1",
        destination: "GARE PART-DIEU V. MERLE"
    },

    "0102": {
        ligne: "C1",
        destination: "GARE PART-DIEU V. MERLE • Ligne Déviée"
    },

    "0103": {
        ligne: "C1",
        destination: "CUIRE Métro C"
    },

    "0104": {
        ligne: "C1",
        destination: "CUIRE Métro C • Ligne Déviée"
    },

    "0105": {
        ligne: "C1",
        destination: "BROTTEAUX Métro B • Service Partiel"
    },
    
    "0106": {
        ligne : "C1",
        destination: "CITE INTERNATIONALE CTRE CONGRES • Service Partiel"
};

function valider(){

    const code =
        document.getElementById("codeInput")
        .value.trim();

    const fiche = codes[code];

    if(!fiche){

        alert("Code inconnu");
        return;
    }

    document.getElementById("ligne")
        .textContent = fiche.ligne;

    document.getElementById("destination")
        .textContent = fiche.destination;

    document.getElementById("infoLigne")
        .textContent = fiche.ligne;

    document.getElementById("infoDest")
        .textContent = fiche.destination;
}

function effacer(){

    document.getElementById("codeInput")
        .value = "";

    document.getElementById("ligne")
        .textContent = "---";

    document.getElementById("destination")
        .textContent = "EN ATTENTE";

    document.getElementById("infoLigne")
        .textContent = "---";

    document.getElementById("infoDest")
        .textContent = "---";
}

document
.getElementById("codeInput")
.addEventListener("keydown", e => {

    if(e.key === "Enter"){
        valider();
    }
});
