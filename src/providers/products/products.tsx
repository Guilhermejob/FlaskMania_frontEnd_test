import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api/api";

import {
  IRegisterProduct,
  IRegisterProductData,
  IRegisterProviderProps,
  IDataProps,
} from "../../interfaces";

const ProductsContext = createContext<IRegisterProductData>(
  {} as IRegisterProductData
);

export const ProductsProvider = ({ children }: IRegisterProviderProps) => {
  const [products, setProducts] = useState<IDataProps[]>([]);

  const getProducts = () => {
    api.get(`products`).then((res) => setProducts(res.data));
  };

  const registerNewProduct = (data: IRegisterProduct) => {
    const form = new FormData();
    form.append("name", data.name);
    form.append("price", data.price);
    form.append("content", data.content);
    form.append("img", data.img[0]);

    console.log(data.img[0]);

    const options: any = {
      method: "POST",
      url: "http://127.0.0.1:5000/products",
      params: { "": "" },
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      data: form,
    };

    api
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getProducts();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const deleteProduct = (id: number) => {
    api
      .delete(`/products/${id}`)
      .then(function (res) {
        console.log(res.data);
        getProducts();
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    api.get(`products`).then((res) => setProducts(res.data));
  }, []);

  const updateProduct = (data: IRegisterProduct, id: number) => {
    const form = new FormData();
    form.append("name", data.name);
    form.append("price", data.price);
    form.append("content", data.content);
    form.append("img", data.img[0]);

    const options: any = {
      method: "PATCH",
      url: `http://127.0.0.1:5000/products/${id}`,
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
      },
      data: form,
    };

    api
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getProducts();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        registerNewProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const UseProducts = () => useContext(ProductsContext);
