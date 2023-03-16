let valor = 0;

process.on("message", (msg) => {
  for (let i = 0; i < 5e9; i++) {
    valor += i;
  }
  process.send(valor);
});

