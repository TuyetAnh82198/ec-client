import { SOCKET } from "./constants";

export const handleSocketConnect = (socket) => {
  socket.connect();
  return () => {
    socket.disconnect();
  };
};

export const handleSocketAction = {
  add: (socket, setState) => {
    const handleCart = (data) => {
      if (data.action === SOCKET.CART.ADD) {
        setState(data.cartNumber);
      }
    };
    socket.on(SOCKET.CART.TITLE, handleCart);
    return () => {
      socket.off(SOCKET.CART.TITLE, handleCart);
    };
  },
};
