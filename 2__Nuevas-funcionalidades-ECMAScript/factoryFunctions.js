function pescadoFactory(raza, edad) {
    return {
        raza,
        edad,
        calcularTiempoRestante: () => 12 - edad
    }
}

const nemo = pescadoFactory('Payazo', 7);
const dory = pescadoFactory('Paracanthurus ', 7);

console.log(nemo.calcularTiempoRestante());