class TicketManager {
  eventos;
  #_precioBaseDeGanancia = 0.2;
  static ultimoId = 0;
  constructor() {
    this.eventos = [];
  }
  getEventos() {
    return this.eventos;
  }
  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    TicketManager.ultimoId++;
    const evento = {
      nombre,
      lugar,
      precio,
      capacidad,
      fecha,
      id: TicketManager.ultimoId,
      participantes: [],
    };
    this.eventos.push(evento);
  }
  agregarUsuario(idEvento, idUsuario) {
    if (!!!idEvento) throw new Error("Debe ingresar un id de evento");
    const evento = this.eventos.find((evento) => evento.id === idEvento);
    if (
      evento &&
      !evento.participantes.some((participante) => participante === idUsuario)
    ) {
      evento.participantes.push(idUsuario);
    }
  }
  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    const eventoOriginal = this.eventos.find(
      (evento) => evento.id === idEvento
    );
    return {
        ...eventoOriginal,
        id: idEvento,
        localidad: nuevaLocalidad,
        fecha: nuevaFecha,
    }
  }
}

const ticketManager = new TicketManager();
ticketManager.agregarEvento(
  "Final contra Marruecos",
  "Qatar",
  1000,
  null,
  "18 de diciembre"
);
