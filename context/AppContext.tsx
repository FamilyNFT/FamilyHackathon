import { ethers } from "ethers";
import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type Popup = {
  isLoading: boolean;
  message: string;
  isError: boolean;
  txHash: string;
  show: boolean;
};

type Context = {
  isLoading: boolean;
  isFantom: boolean;
  showPopup: boolean;
  addr: string;
  price: any;
  stocks: any;
  currentSupply: number;
  isConnected: boolean;
  familyContract: any;
  familyContractSigner: any;
  txHash: string;
  errMsg: string;
};

const initialContext = {
  contextState: {
    isLoading: false,
    isFantom: true,
    showPopup: false,
    addr: "",
    price: 0,
    stocks: [],
    currentSupply: 0,
    isConnected: false,
    familyContract: null,
    familyContractSigner: null,
    txHash: "",
    errMsg: "",
  },
  setContextState: (state: Context) => {},
};

const AppContext = createContext(initialContext);

const AppContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContextState] = useState(initialContext.contextState);

  return (
    <AppContext.Provider value={{ contextState, setContextState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
