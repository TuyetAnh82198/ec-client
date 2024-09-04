import { SOCKET } from "./constants";

export const handleSocketConnect = (socket) => {
  socket.connect();
  return () => {
    socket.disconnect();
  };
};

export const handleSocketAction = {
  add: (socket) => {
    const handleCart = (data) => {
      if (data.action === SOCKET.CART.ADD) {
        localStorage.setItem(SOCKET.CART.NUMBER, data.cartNumber);
      }
    };
    socket.on(SOCKET.CART.TITLE, handleCart);
    return () => {
      socket.off(SOCKET.CART.TITLE, handleCart);
    };
  },
};
