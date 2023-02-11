const { Server } = require("socket.io");
class Socket {
  constructor(httpserver) {
    this.Rooms = [{ ID: 0, owner: 0, identifier: 0 }];
    this.io = new Server(httpserver, {
      cors: {
        origin: ["http://localhost:3000"],
      },
    });
    this.io.on("connect", (socket) => {
      this.connected(socket);
    });
  }
  connected(socket) {
    let found = false;
    for (let i = 0; i < this.Rooms.length; i++) {
      if (this.Rooms[i].owner === socket.id) {
        found = true;
      }
    }
    if (!found) {
      let preventRooms = this.Rooms;
      preventRooms.push({
        ID: this.Rooms.length === 1 ? 1 : this.Rooms.length - 1,
        owner: socket.id,
        identifier: this.generateIdentifier(),
      });
      this.Rooms = preventRooms;
      socket.emit("init", {
        id: preventRooms[preventRooms.length - 1].ID,
        identifier: preventRooms[preventRooms.length - 1].identifier,
      });
    }
  }
  generateIdentifier() {
    let [KEYS, KEYS_NUMERIC, generated] = [
      ["X9", "x8", "y2", "x", "a", "VV", "K2x", "K22", "pp", "Mz0"],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      "",
    ];
    for (let i = 0; i < 6; i++) {
      generated += KEYS[Math.floor(Math.random() * KEYS.length)];
      generated +=
        KEYS_NUMERIC[Math.floor(Math.random() * KEYS_NUMERIC.length)];
    }
    return generated;
  }
}
exports.Servidor = Socket;
