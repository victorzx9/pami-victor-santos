// Criação do array de cidades
const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre'];

// Função que lista as cidades
function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => {
        console.log(cidade);
    });
}

// Chamando a função para listar as cidades
listarCidades(cidades);
