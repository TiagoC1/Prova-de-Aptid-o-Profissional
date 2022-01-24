function init (){
    getNivel ()
}

function getNivel(){
    const nivel = document.getElementById('nivel')
    fetch('http://localhost:3000/percursos')
    .then (res => res.json())
    .then(data => {
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