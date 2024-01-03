import FormLogin from 'components/FormLogin/FormLogin';
import { Header } from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => setIsShowModal(true);

  const closeModal = () => setIsShowModal(false);

  function createUser(data) {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log('newUser :>> ', newUser);
  }

  return (
    <div className="container">
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <Header showModal={showModal} />
      <Outlet />
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <FormLogin closeModal={closeModal} createUser={createUser} />
        </Modal>
      )}
    </div>
  );
};
