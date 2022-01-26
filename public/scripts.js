function init (){
    getNavbar()
    getNivel ()
    getIlhas()
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>[
        nbar.innerHTML += html
    ])
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}
function getNivel(){
    const nivel = document.getElementById('nivel')
    fetch('http://localhost:3000/percursos')
    .then (res => res.json())
    .then(data => {
     
        for(let i=0; i<data.length; i++){
            const op=
            `<option value ="${data[i].idnivel}">${data[i].nivel_do_curso}</option>`
             nivel.innerHTML +=op
        }
    })
    .catch()
}
function getIlhas(){
    const ilhas = document.getElementById('ilhas')
    fetch('http://localhost:3000/percursos/ilhas')
    .then (res => res.json())
    .then(data => {
        console.log(data)
        for(let i=0; i<data.length; i++){
            const op=
            `<option value ="${data[i].idilhas}">${data[i].nome_da_ilha}</option>`
             ilhas.innerHTML +=op
        }
    })
    .catch()
}
/*
let pesquisarPercursos ={
    idnivel : nivel,
    idilhas : ilhas,
}
let jsasonPesquisar = JSON.stringify(pesquisarPercursos)
*/