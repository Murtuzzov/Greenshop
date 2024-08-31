import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const CartModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Cart</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shopping Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Вставь сюда содержимое корзины */}
            <p>Your cart items will be displayed here.</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartModal;
