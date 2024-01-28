const alunos = ['Evaldo', 'Márcia', 'Maria', 'Mauro'];
const media = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return media[indice] < 7;
})

console.log(reprovados);