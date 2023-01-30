class Contador {
    contador;
    #_responsable;
    static contadorGlobal = 0;
    constructor(responsable) {
        this.#_responsable = responsable;
        this.contador = 0;
        Contador.contadorGlobal += 1;
    }
    get responsable() {
        return this.#_responsable;
    }
    contar () {
        this.contador++;
        Contador.contadorGlobal++;
    }
    getCuentaIndividual() {
        return this.contador;
    }
    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }
}

const miContador = new Contador('Santiago');
console.log(miContador.responsable);