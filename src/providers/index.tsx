import { ProductsProvider } from "./products/products";
import { IRegisterProviderProps } from "../interfaces";

const Providers = ({ children }: IRegisterProviderProps) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default Providers;
