import { AuxProps } from "../../interfaces";
import { ModalContainer } from "./style";

const Modal = ({ id = "modal", onClose = () => {}, children }: AuxProps) => {
  //Função encarregada por fechar o modal caso seja clicado do lado de fora do mesmo
  const handleOutSideClick = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };

  return (
    <ModalContainer id={id} onClick={handleOutSideClick}>
      <div className="Container">
        <button className="close" onClick={onClose} />
        <div className="content">{children}</div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
