const fs = require("node:fs");

class ProductManager {
  productos;
  constructor(path) {
    this.path = path;
    this.cargarElArchivo();
  }

  agregarProducto(producto) {
    // ...
    this.guardarEnArchivo();
  }

  guardarEnArchivo() {
    try {
      fs.writeFileSync(this.path, JSON.stringify(this.productos));
    } catch (err) {
      throw new Error(err);
    }
  }

  async guardarEnArchivo() {
    try {
      await fs.promises.writeFile(this.path, JSON.stringify(this.productos));
    } catch (err) {
      throw new Error(err);
    }
  }

  cargarElArchivo() {
    try {
      this.productos = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    } catch (err) {
      throw new Error(err);
    }
  }
}

productManager = new ProductManager("./productos.json");
