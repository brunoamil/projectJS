class DateHelper{
    constructor(){
        //usando throw para lancar um erro caso a classe seja chamada
        throw new Error('Esta classe nao pode ser instanciada');
    }
    //usando o static para poder chamar a classe sem precisar instanciar
    static dataParaTexto(data){
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    static textoParaData(texto){
        //expressao regular para verificar o formato da data correta
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

    return new Date(...texto.split("-").map((item, indice) => item - indice % 2));
   }

  
}