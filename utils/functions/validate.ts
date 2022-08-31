type Form = {
  name: string;
  address: string;
  address2: string;
  email: string;
  town: string;
  zip: number;
  ph: number;
};

type FormError = {
  name: string;
  address: string;
  email: string;
  town: string;
};

export default function validateInfo(values: Form) {
  let isError = false;
  let errors: FormError = {
    name: "",
    address: "",
    email: "",
    town: "",
  };

  if (!values.name.trim()) {
    errors.name = "Username required";
    isError = true;
  }
  if (!values.email) {
    errors.email = "Email required";
    isError = true;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
    isError = true;
  }
  if (!values.address) {
    errors.address = "Address required";
    isError = true;
  }

  if (!values.town) {
    errors.town = "City/Region/Country required";
    isError = true;
  }

  return { errors, isError };
}
