import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppContextProvider } from "../context/AppContext";

import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import WalletProvider from "../context/WalletContext";
import StorageProvider from "../context/Web3StorageProvider";
import ContractProvider from "../context/ContractProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <WalletProvider>
        <StorageProvider>
          <ContractProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ContractProvider>
        </StorageProvider>
      </WalletProvider>
    </AppContextProvider>
  );
}
export default MyApp;
