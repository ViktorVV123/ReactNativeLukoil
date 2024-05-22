import React, {createContext, useContext, useState} from 'react';

const ModalContext = createContext(undefined);

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({children}: {children: JSX.Element}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('Default text');
  const [modalStyle, setModalStyle] = useState({});

  const toggleModal = () => setModalVisible(!isModalVisible);
  const updateModalContent = (text: string, style = {}) => {
    setModalContent(text);
    setModalStyle(style);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        toggleModal,
        modalContent,
        updateModalContent,
        modalStyle,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
