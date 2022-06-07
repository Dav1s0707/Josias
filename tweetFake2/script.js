const data = [

    {
        id:0,
        userName: "Casimiro Miguel",
        userId: "@casimiro",
        msg: "Meteu essa? kkkkk",
        pic: "images/casimiro.jpg",
    }

]
/*
    Create- ok
    Read - ok
    Update
    Delete-50%
*/

//Inserir dados no Banco
//Refresh nos dados ja disponiveis na tela
//mostrar tweet novo

//BRB

document.addEventListener("DOMContentLoaded", () => {
    //mostra todos os tweets
    show("main");

    const main = document.querySelector("main")

    //adiciona o tweets ao banco
    const btn = document.querySelector("#publicar")
    const txtarea = document.querySelector("#txtarea")

    btn.addEventListener("click", () => {
        data.push({
            id: Date.now(),
            userName: "Casimiro Miguel",
            userId: "@casimiro",
            msg: txtarea.value,
            pic: "images/casimiro.jpg"

        });
        txtarea.value = "";
        //atualiza os tweets do main
        main.innerHTML = "";
        show("main");
    })


});

//Mexam no Tweet creator para adicionar um botão de apagar


function tweetCreator(userName, userId, msg, pic, target) {
    const tweet = document.createElement("div");
    const header = document.createElement("div");
    const imgProfile = document.createElement("img");
    const textos = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const txt = document.createElement("p");
    const t = document.querySelector(target);
    const errase = document.createElement("p")

    h2.innerHTML = userName;
    h3.innerHTML = userId;
    errase.innerHTML = "💋";
    errase.id = "errase";
    txt.innerHTML = msg;
    imgProfile.src = pic;

    header.className = "header";
    tweet.className = "tweet";

    textos.appendChild(h2);
    textos.appendChild(h3);
    textos.appendChild(errase)

    header.appendChild(imgProfile);
    header.appendChild(textos);

    tweet.appendChild(header);
    tweet.appendChild(txt);

    t.appendChild(tweet);
}


function show(target) {
    for (let i = 0; i < data.length; i++) {
        tweetCreator(
            data[i].userName,
            data[i].userId,
            data[i].msg,
            data[i].pic,
            target
        )
    }
    
}

function findMyIndex(id){
    for (let i = 0; i < data.length; i++) {
        if (data[i].id===id) {
            return i; 
        }

    }
}

