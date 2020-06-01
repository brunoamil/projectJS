class DateHelper {

    constructor() {
        throw new Error("DateHelper não deve ser instanciado");
    }
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`; 
        
    }
    static textoParaData(texto) {
        //Expresão regular
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error("Deve estar no formato yyyy-mm-dd");

        return new Date(...texto.split('-').map((item, indice) =>  item - indice % 2));
    }
}