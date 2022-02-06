import React, { ReactElement, ReactNode, SetStateAction } from "react";

export interface IHandleClivk {
  img_url: string;
  name: string;
  price: number;
  id: number;
}

export interface AuxProps {
  children: ReactElement | ReactElement[] | null;
  onClose?: () => void;
  id?: string;
}

export interface IDataProps {
  id: number;
  img_url: string;
  name: string;
  price: number;
  content?: string;
}

export interface IRegisterProviderProps {
  children: ReactNode;
}

export interface IRegisterProduct {
  id: number;
  img_url: string;
  img?: any;
  name: string;
  price: any;
  content?: any;
}

export interface IUpdateProduct {
  name?: string;
  price?: string;
  content?: string;
  img?: any;
}

export interface IRegisterProductData {
  registerProduct?: (userData: IRegisterProduct[]) => void;
  updateProduct?: any;
  products: IDataProps[];
  setProducts: React.Dispatch<SetStateAction<IDataProps[]>>;
  deleteProduct: (id: number) => void;
  registerNewProduct: any;
}
