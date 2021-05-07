/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef } from 'react';

import { Container, BackdropContainer, BtnClose } from './styles';

type TAlignModal = 'flex-start' | 'center' | 'flex-end';
type TScrollView = boolean;
interface IModalProps {
  btnClose?: boolean;
  modalVisible?: boolean;
  setModalVisible?: any;
  alignModal?: TAlignModal;
  scrollView?: TScrollView;
}

const Modal: React.FC<IModalProps> = ({
  btnClose = false,
  modalVisible = false,
  alignModal = 'center',
  scrollView = false,
  setModalVisible,
  children,
}) => {
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setModalVisible(modalVisible);
  }, [modalVisible, setModalVisible]);

  const handleModalVisible = useCallback(
    (e) => {
      if (e.target === backdrop.current) {
        // console.log('fora da modal');
        setModalVisible(!modalVisible);
      }
    },
    [modalVisible, setModalVisible],
  );

  return (
    <>
      <BackdropContainer
        ref={backdrop}
        visible={modalVisible}
        alignModal={alignModal}
        onClick={handleModalVisible}
      >
        <Container alignModal={alignModal} scrollView={scrollView}>
          <BtnClose
            visible={btnClose}
            onClick={() => setModalVisible(!modalVisible)}
          >
            &times;
          </BtnClose>
          {children}
        </Container>
      </BackdropContainer>
    </>
  );
};

export default Modal;
