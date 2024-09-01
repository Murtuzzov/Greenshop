import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  selectTotalPrice,
} from "../../redux/slices/cartSlice";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import store from "../../redux/store";

const CartModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Используем ReturnType для получения состояния cart
  const cartItems = useSelector(
    (state: ReturnType<typeof store.getState>) => state.cart.items
  );
  const totalPrice = useSelector((state: ReturnType<typeof store.getState>) =>
    selectTotalPrice(state.cart)
  ); // Общая сумма
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Open Cart</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shopping Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="mb-4">
                    <div className="flex items-center justify-between">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20"
                      />
                      <div className="flex-1 ml-4">
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p>{item.price}</p>
                        <div className="flex items-center">
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 border rounded-full bg-green-500 text-white"
                          >
                            -
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 border rounded-full bg-green-500 text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        {/* Цена за количество товаров */}
                        <p>
                          Total:{" "}
                          {(
                            parseFloat(item.price.replace(/[^0-9.-]+/g, "")) *
                            item.quantity
                          ).toFixed(2)}
                        </p>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="ml-4 text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {/* Общая сумма */}
            <div className="mt-4 text-right font-bold text-xl">
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartModal;
