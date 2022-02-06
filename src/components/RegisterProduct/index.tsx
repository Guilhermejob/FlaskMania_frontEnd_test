import Modal from "../modal";
import * as yup from "yup";
//Imports do styled components
import { FormRegister, RegisterButton } from "./style";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseProducts } from "../../providers/products/products";

const RegisterProductForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const { registerNewProduct } = UseProducts();

  const schema = yup.object().shape({
    name: yup.string().required("Nome do produto é obrigatório"),
    content: yup.string(),
    price: yup
      .number()
      .positive("O preço precisa ser um numero positivo")
      .required("Preço do produto obrigatório"),
    img: yup.mixed().required("A imagem é um campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    registerNewProduct(data);
  };

  return (
    <>
      <RegisterButton onClick={() => setOpenModal(true)}>
        Registar Novo produto
      </RegisterButton>
      {openModal ? (
        <Modal onClose={() => setOpenModal(false)}>
          <FormRegister onSubmit={handleSubmit(onSubmit)}>
            <div className="inputContainer">
              <input
                {...register("name")}
                type="text"
                placeholder="Nome do produto"
              />
              <span className="text-error">{errors.name?.message}</span>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Content"
                {...register("content")}
              />
            </div>
            <div className="inputContainer" placeholder="Preço">
              <input
                placeholder="Preço"
                type="number"
                step=".01"
                {...register("price")}
              />
              <span className="text-error">{errors.price?.message}</span>
            </div>
            <div className="inputContainer">
              <input
                placeholder="Selecione uma imagem"
                type="file"
                {...register("img")}
                name="img"
              />
              <span className="text-error">{errors.img?.message}</span>
            </div>
            <button type="submit">enviar</button>
          </FormRegister>
        </Modal>
      ) : null}
    </>
  );
};

export default RegisterProductForm;
