function init (){
    getNavFooter()
    getNivel ()
    getIlhas()
    getArea()
}

function getNavFooter(){
    getNavbar()
    getFooter()
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function getFooter(){
    const fter = document.getElementById('fter')
    fetch('http://localhost:3000/footer')
    .then(res => res.text())
    .then((html)=>{
        fter.innerHTML += html
    })
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
    const ilhas = document.getElementById('ilha')
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
function getArea(){
    const ilhas = document.getElementById('area')
    fetch('http://localhost:3000/percursos/area')
    .then (res => res.json())
    .then(data => {
        console.log(data)
        for(let i=0; i<data.length; i++){
            const op=
            `<option value ="${data[i].idárea}">${data[i].nome_área}</option>`
             ilhas.innerHTML +=op
        }
    })
    .catch()
}

function pesquisar(){
    if(document.getElementById('area').value == 'Nenhum selecionado')
        alert('Deve escolher uma área!')
    let area = document.getElementById('area').value
    if (document.getElementById('nivel').value=='Nenhum selecionado')
        alert('Deve escolher um nível de ensino!')
    let nivel = document.getElementById('nivel').value
    if(document.getElementById('ilha').value=='Nenhum selecionado')
        alert('Deve escolher uma ilha!')
    let ilha = document.getElementById('ilha').value
    let ob = {
        area: area,
        nivel: nivel,
        ilha: ilha
    }
    //criar um JSON do objeto
  let jsonDados = JSON.stringify(ob)
  console.log(jsonDados)
  //preparar o pedido
  const options = {
      method: 'POST',
      headers: {
          'Content-type' : 'application/json'
      },
      body: jsonDados
  }
  fetch('http://localhost:3000/percursos/percursos', options)
  .then(res => res.json())
  .then(data => {
    console.log(data)
      if(data.length!=0)
        processData(data)
        else {
            const alert = document.getElementById('alert')
            alert.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Não existem cursos disponíveis nessa área e ilha</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `
        }
  })
  .catch((err) => {
      alert(err)  
  })

}
function processData(data){
    document.getElementById('alert').innerHTML=''
    const cartoes_cursos = document.getElementById('cartoes_cursos')
    cartoes_cursos.innerHTML=''
    for(let i =0 ; i < data.length; i++) {
        cartoes_cursos.innerHTML+=
        `<div class="card mb-5">
        <h5 class="card-header"><strong>Área de Educação e Formação: </strong>${data[i].nome_área}</h5>
        <div class="card-body">
          <p class="card-text">${data[i].nome_do_curso}</p>
          <p class="card-text">${data[i].nivel_do_curso}</p>
          <p class="card-text">${data[i].nome_das_escolas}</p>
          <p class="card-text">${data[i].nome_da_ilha}</p>
          <button onclick="getURL(${data[i].idcursos})" type="button" class="btn btn-primary">Ver mais</button>
        </div>
      </div>`
    }
}

function getURL(id){
    fetch('http://localhost:3000/percursos/url/'+id)
    .then (res => res.json())
    .then(data => {
        window.open(data.urlcatalogo, '_blank')

    })
    .catch()
}

