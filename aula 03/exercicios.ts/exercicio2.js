// Criação do array de cidades
var cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre'];
// Função que lista as cidades
function listarCidades(cidades) {
    cidades.forEach(function (cidade) {
        console.log(cidade);
    });
}
// Chamando a função para listar as cidades
listarCidades(cidades);
