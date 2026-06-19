const codes = {


    "1201":{

        ligne:"C3",

        destination:"GARE PART-DIEU"

    },


    "1202":{

        ligne:"C3",

        destination:"SAINT-PAUL"

    },


    "1203":{

        ligne:"C3",

        destination:"LA GRAPPINIERE"

    },


    "1301":{

        ligne:"C13",

        destination:"HOTEL DE VILLE"

    },


    "1302":{

        ligne:"C13",

        destination:"GRANGE BLANCHE"

    },


    "2501":{

        ligne:"C25",

        destination:"FRANCHEVILLE"

    }


};





function touche(chiffre){


    let input =
    document.getElementById("codeInput");


    input.value += chiffre;


    document.getElementById("codeAffiche")
    .textContent=input.value;


}






function valider(){


    let code =

    document.getElementById("codeInput")
    .value;




    let data = codes[code];



    if(!data){


        alert("Code girouette inconnu");

        return;

    }




    document.getElementById("ligne")
    .textContent=data.ligne;



    document.getElementById("destination")
    .textContent=data.destination;




    document.getElementById("infoLigne")
    .textContent=data.ligne;



    document.getElementById("infoDest")
    .textContent=data.destination;



}







function effacer(){


    document.getElementById("codeInput")
    .value="";



    document.getElementById("codeAffiche")
    .textContent="----";


}






document

.getElementById("codeInput")

.addEventListener("keydown",function(e){


    if(e.key==="Enter"){

        valider();

    }


});
