const express = require('express');

// express aplicativo - confg o acesso as funções

const app = express();

// registrar a visualização da engenharia

app.set('view engine', 'ejs')

// ouvindo as requisições na porta

app.listen(3002);

// acessando rota 

app.get('/', (req,res) => {
    // res.sendFile('./views/index.html', {root: __dirname}); //mandar arquivo para tela do cliente , root caminho vai partir apartir da raiz 

    res.render('index', {titulo:'Home'}); // com o ejs minimiza o codigo anterior 
});

// nova rota

app.get('/sobre', (req,res) => {
    // res.sendFile('./views/sobre.html', {root: __dirname});

    res.render('sobre', {titulo:'Sobre'}); // com EJS
});


//redirecionameto de pagina 

app.get('/sobrenos', (rep,res) => {

    res.redirect('/sobre');
});



//Rota criação do conteudo

app.get('/blog/criar', (req,res) => {

    res.render('criar', {titulo: 'Criar novo blog'})

});



// Erro 404

app.use((req,res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname});

    res.status(404).render('404', {titulo: '404'}); // com ejs
    
}); // use vai buscar a rota e dar o erro , rotas que não existem 