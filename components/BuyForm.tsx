import React, { useState } from "react";
import Home from "../pages/form";
import Airtable from "airtable";
import validateInfo from "../utils/functions/validate";
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
const BuyForm = () => {
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
    }
    // setFormSent(status);
  }
  return (
    <div>
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
            <span className="text-red-300 text-xs py-2">{formError.name}</span>
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
            <span className="text-red-300 text-xs py-2">{formError.town}</span>
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
            <span className="text-red-300 text-xs py-2">{formError.email}</span>
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
  );
};

export default BuyForm;
