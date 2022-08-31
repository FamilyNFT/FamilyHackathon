import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { AppContext } from "../context/AppContext";
import Nav from "../components/Nav";

declare let window: any;

import Airtable from "airtable";
import validateInfo from "../utils/functions/validate";
import { getTeesDetails } from "../utils/functions/FamilyFunctions";
import { FAMILY_ABI, FAMILY_ADDRESS } from "../utils/contracts/FamilyContract";
import { airtableLoad } from "../utils/functions/airtable";

type Form = {
  name: string;
  address: string;
  address2: string;
  email: string;
  town: string;
  zip: number;
  ph: number;
  addr: string;
  color: string;
  size: string;
};
type FormError = {
  name: string;
  address: string;
  email: string;
  town: string;
};

const Home: NextPage = () => {
  const { contextState, setContextState } = useContext(AppContext);
  const initForm: Form = {
    name: "",
    address: "",
    address2: "",
    email: "",
    town: "",
    zip: 0,
    ph: 0,
    addr: "",
    color: "",
    size: "",
  };
  const initFormError: FormError = {
    name: "",
    address: "",
    email: "",
    town: "",
  };

  const [isLoading, setIsLoading] = useState(true);
  const [ownsNFT, setOwnsNft] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState<Form>(initForm);
  const [formError, setFormError] = useState<FormError>(initFormError);

  useEffect(() => {
    if (!window.ethereum) {
      window.alert("You must install MetaMask to use this website");
      return;
    }
    connectWallet();
    window.ethereum.on("accountsChanged", () => {
      connectWallet();
    });

    window.ethereum.on("chainChanged", () => {
      document.location.reload();
    });
  }, []);

  async function connectWallet() {
    if (!window.ethereum) {
      window.alert("You must install MetaMask to use this website");
      return;
    }
    setContextState({ ...contextState, isLoading: true });
    let provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    let network = await provider.getNetwork();
    await provider.send("eth_requestAccounts", []);

    if (network.chainId != 250) {
      // window.alert("Switch to Fantom to continue");
      setContextState({ ...contextState, isFantom: false, isConnected: true });
      return;
    }

    const addr = await provider.send("eth_requestAccounts", []);
    let signer = provider.getSigner();
    const familyContract = new ethers.Contract(
      FAMILY_ADDRESS,
      FAMILY_ABI,
      provider
    );
    const { owns, color, size } = await getTeesDetails(familyContract, addr[0]);
    setOwnsNft(owns);
    setIsLoading(false);
    setForm({ ...form, color, size, addr: addr[0] });
    setContextState({
      ...contextState,
      addr: addr[0],
      isLoading: false,
      isConnected: true,
    });
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  async function airtableSubmit() {
    const { errors, isError } = validateInfo(form);
    setFormError(errors);
    if (!isError) {
      const status = await airtableLoad(form, setFormSent);
    }
    // setFormSent(status);
  }

  return (
    <div className="font-rubik items-center justify-center flex bg-black ">
      <Head>
        <title>FamilyNFT </title>
        <meta
          name="description"
          content="NFT based clothing apparells on Fantom"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-col items-center w-screen justify-center px-8 lg:px-16 max-w-screen-2xl">
        <Nav />
        <div className="flex flex-col items-center justify-center min-h-screen w-full py-24 ">
          {isLoading ? (
            <div className="flex items-center justify-center py-8 text-white">
              Loading...
            </div>
          ) : !ownsNFT ? (
            <div className="flex items-center justify-center py-8 text-white">
              You don't own any Tees
            </div>
          ) : formSent ? (
            <div className="flex items-center justify-center py-8 text-white">
              Form submitted!!
            </div>
          ) : (
            <div className="flex py-12 space-y-8 flex-col bg-gray-800 p-4 mt-12">
              <div className="flex flex-col">
                <input
                  className="p-2 border-l-4 border-red-600"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                />
                {formError.name != "" && (
                  <span className="text-red-300 text-xs py-2">
                    {formError.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <textarea
                  className="p-2 border-l-4 border-red-600"
                  // type="text"
                  name="address"
                  placeholder="Address Line 1"
                  value={form.address}
                  onChange={handleChange}
                />
                {formError.address != "" && (
                  <span className="text-red-300 text-xs py-2">
                    {formError.address}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <textarea
                  className="p-2 "
                  name="address2"
                  placeholder="Address Line 2"
                  value={form.address2}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  className="p-2 border-l-4 border-red-600"
                  type="text"
                  name="town"
                  placeholder="City/Region/Country"
                  value={form.town}
                  onChange={handleChange}
                />
                {formError.town != "" && (
                  <span className="text-red-300 text-xs py-2">
                    {formError.town}
                  </span>
                )}
              </div>
              <input
                className="p-2"
                type="tel"
                name="ph"
                placeholder="Phone No"
                value={form.ph}
                onChange={handleChange}
              />
              <div className="flex flex-col">
                <input
                  className="p-2 border-l-4 border-red-600"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                {formError.email != "" && (
                  <span className="text-red-300 text-xs py-2">
                    {formError.email}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center">
                <div
                  className="text-white text-xl p-2 text-center px-4 bg-gray-900 w-60 cursor-pointer  "
                  onClick={airtableSubmit}
                >
                  SUBMIT
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
