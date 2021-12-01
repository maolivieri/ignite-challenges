import { useRef, FunctionComponent } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import Input from '../Input';

type Food = {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}


interface ModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (data: any) => void;
  isOpen: boolean;
  editingFood: Food;
}

const ModalEditFood: FunctionComponent<ModalEditFoodProps> = ({ isOpen, setIsOpen, editingFood, handleUpdateFood }) => {
  const ref = useRef<any>()
  const handleSubmit = async (data: any) => {
    handleUpdateFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={ref} onSubmit={handleSubmit} initialData={editingFood}>
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

export { ModalEditFood };
