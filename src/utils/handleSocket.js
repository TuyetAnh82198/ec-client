import { SOCKET } from "./constants";

export const handleSocketConnect = (socket) => {
  socket.connect();
  return () => {
    socket.disconnect();
  };
};
export const handleSocketConnect2 = (socket) => {
  socket.connect();
};

const handleOnOff = (socket, handleCart) => {
  socket.on(SOCKET.CART.TITLE, handleCart);
  return () => {
    socket.off(SOCKET.CART.TITLE, handleCart);
  };
};

export const handleSocketAction = {
  cart: {
    add: (socket, setState) => {
      const handleCart = (data) => {
        if (data.action === SOCKET.CART.ADD) {
          setState(data.cartNumber);
        }
      };
      handleOnOff(socket, handleCart);
    },
    get: (socket, setState) => {
      const handleCart = (data) => {
        if (data.action === SOCKET.CART.GET) {
          setState(data.cart);
        }
      };
      handleOnOff(socket, handleCart);
    },
    checkout: (socket, setState) => {
      const handleCart = (data) => {
        if (data.action === SOCKET.CART.CHECKOUT) {
          setState(0);
        }
      };
      handleOnOff(socket, handleCart);
    },
  },
};
