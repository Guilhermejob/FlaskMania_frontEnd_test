import Card from "../card";
import Modal from "../modal";

import { useState, useRef } from "react";
// Imports dos Styled components
import {
  ListContainer,
  ContainerButtons,
  ModalInfoSection,
  EditDeleteContainer,
} from "./styles";

import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import { IDataProps } from "../../interfaces";

import { UseProducts } from "../../providers/products/products";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CardList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [productId, setProductId] = useState<number>(0);
  const { products, updateProduct, deleteProduct } = UseProducts();
  const carrosel = useRef<any | null>(null);

  // Funções para mover o carrosel Inicio

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();
    carrosel.current.scrollLeft += carrosel.current.offsetWidth;
  };

  // Funções para mover o carrosel FIM

  // Schema do yup inicio

  const schema = yup.object().shape({
    name: yup.string().required("Nome do produto é obrigatório"),
    content: yup.string(),
    price: yup.number().required("Preço do produto obrigatório"),
    img: yup.mixed().required(),
  });

  // Schema do yup inicio Fim

  const [modalInfo, setModalInfo] = useState({
    img_url: "default",
    name: "default",
    price: 0,
    id: 0,
    content: "default",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    updateProduct(data, productId);
  };

  const [edit, setEdit] = useState(false);

  const handleClick = (
    img_url: string,
    name: string,
    price: number,
    id: number,
    content?: any
  ) => {
    setOpenModal(true);
    setModalInfo({
      img_url: img_url,
      name: name,
      price: price,
      id: id,
      content: content,
    });

    setProductId(id);
  };

  return (
    <>
      <ListContainer ref={carrosel}>
        {products.length === 0 ? (
          <h1>Não tem nada aqui</h1>
        ) : (
          <>
            {products.map((item: IDataProps) => {
              return (
                <div
                  onClick={() =>
                    handleClick(
                      item.img_url,
                      item.name,
                      item.price,
                      item.id,
                      item.content
                    )
                  }
                >
                  <Card
                    url={item.img_url}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              );
            })}
          </>
        )}
      </ListContainer>
      <ContainerButtons>
        <button onClick={handleLeftClick}>
          <BsFillCaretLeftFill />
        </button>
        <button onClick={handleRightClick}>
          <BsFillCaretRightFill />
        </button>
      </ContainerButtons>

      {openModal ? (
        <Modal onClose={() => setOpenModal(false)}>
          <div className="Edit">
            {edit ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputContainer">
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Nome do produto"
                  />
                </div>
                <div className="inputContainer">
                  <input
                    type="text"
                    placeholder="Content"
                    {...register("content")}
                  />
                  <span className="text-error">{errors.name?.message}</span>
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
                <button type="submit">Atualizar</button>
              </form>
            ) : (
              <ModalInfoSection>
                <figure>
                  <img src={modalInfo.img_url} />
                </figure>
                <div className="info">
                  <h1>{modalInfo.name}</h1>
                  <p>Preço: {modalInfo.price} R&#x00024;</p>
                </div>
              </ModalInfoSection>
            )}
            <EditDeleteContainer>
              {edit ? (
                <div>
                  <button className="cancelar" onClick={() => setEdit(false)}>
                    Cancelar
                  </button>
                </div>
              ) : (
                <div className="editDelet">
                  <FaEdit onClick={() => setEdit(true)} />
                  <FaRegTrashAlt onClick={() => deleteProduct(modalInfo.id)} />
                </div>
              )}
            </EditDeleteContainer>
          </div>
        </Modal>
      ) : undefined}
    </>
  );
};

export default CardList;
