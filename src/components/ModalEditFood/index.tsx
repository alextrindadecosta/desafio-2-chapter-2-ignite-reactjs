import { FormEvent, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { FormHandles } from '@unform/core';
import { FoodData, InputProps } from '../../types';

interface ModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodData) => void;
  isOpen: boolean;
  editingFood: {
    image: string,
    name: string,
    price: number,
    description: string
  }
}

export function ModalEditFood(props: ModalEditFoodProps) {

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: FoodData) {
    const { setIsOpen, handleUpdateFood } = props;

    console.warn(data)

    handleUpdateFood(data);
    setIsOpen();
  };

  const { isOpen, setIsOpen, editingFood } = props;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
