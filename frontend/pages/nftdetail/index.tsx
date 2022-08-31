import React, { useState, useEffect } from "react";
import BuyForm from "../../components/BuyForm";
import { useRouter } from "next/router";
import { Popup, Popup2 } from "../../components/Popup";
import Airtable from "airtable";
import validateInfo from "../../utils/functions/validate";
import { airtableLoad } from "../../utils/functions/airtable";

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

const Index = () => {
  const { query } = useRouter();
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

  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState<Form>(initForm);
  const [formError, setFormError] = useState<FormError>(initFormError);
  const submitHandler = () => {
    alert("submitted");
  };
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
      console.log(form);
    }
    // setFormSent(status);
  }
  const descriptions = [
    "Brushed French Terry Fabric",
    "Peached Finishing For Extra Softness",
    "Made with 460GSM 100% Cotton",
    "Made in Australia",
  ];

  const [toggle, setToggle] = useState(false);
  console.log("data", query.nftId);
  // var cardData = data.find((obj) => obj.id == nftId);
  return (
    <div className="w-100 flex">
      <div className="max-w-[450px] rounded-lg border-4 border-white pl-5 mt-5">
        <div className="min-h-[80vh] block ">
          <div className="py-2 md:grid-cols-4 gap-5">
            <video
              src={"/assets/tees/Brown Choco.mp4"}
              autoPlay
              loop
              muted
              className="w-100"
            ></video>
            <p style={{ display: "none" }}>{query.nftId}</p>
          </div>
          <div className="flex flex-col py-5">
            {descriptions.map((desc, index) => (
              <div className="flex items-center" key={index}>
                <div className="w-2 h-2 rounded-full bg-red-600 mr-2"></div>
                <span className="text-white font-lato text-md">{desc}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between py-4 w-full">
            <span
              className="text-blue-600 text-lg tracking-[-0.1em] cursor-pointer hover:text-blue-400"
              onClick={() => setToggle(true)}
            >
              Size Chart
            </span>
          </div>
          <Popup2 toggle={toggle} setToggle={setToggle}>
            <div className="flex items-center justify-center p-8 text-white bg-red-300 w-[95vw] max-w-2xl">
              <img src="/assets/images/sizechart.png" alt="" />
            </div>
          </Popup2>
        </div>
      </div>
      <div className="max-w-[800px] pl-10 pt-5">
        <div className="flex py-5 pl-10 pr-10 space-y-8 flex-col bg-gray-800 p-4 mt-2">
          <h3 className="text-white text-xl">Add NFT Reciver Detail</h3>
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
      </div>
    </div>
  );
};

export default Index;
