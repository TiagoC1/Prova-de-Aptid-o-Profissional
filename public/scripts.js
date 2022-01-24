function init (){
    getNavbar()
    getNivel ()
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
}/*
function getNivel(){
    const nivel = document.getElementById('nivel')
    fetch('http://localhost:3000/percursos')
    .then (res => res.json())
    .then(data => {
        console.log(data)
        for(let i=0; i<data.length; i++){
            const op=
            `<option value ="${data[i].idnivel}">${data[i].designacao}</option>`
             nivel.innerHTML +=op
        }
    })
    .catch()
}
let pesquisarPercursos ={
    idnivel : nivel
}
let jsasonPesquisar = JSON.stringify(pesquisarPercursos)
*/