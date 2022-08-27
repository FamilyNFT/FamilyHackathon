import Airtable from "airtable";

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

export const airtableLoad = async function (form: Form, setFormSent: Function) {
  var base = new Airtable({ apiKey: "keyndSNDxH7bg1B0l" }).base(
    "approQZb9KLVXYCUv"
  );
  base("Address Dtails").create(
    [
      {
        fields: {
          Name: form.name,
          Address: form.address,
          Email: form.email,
          Phone: form.ph.toString(),
          Color: form.color,
          Size: form.size,
          Wallet: form.addr,
          Town: form.town,
          Address2: form.address2,
        },
      },
    ],
    function (err, records: any) {
      if (err) {
        console.error(err);
        return;
      }
      setFormSent(true);
    }
  );
};
