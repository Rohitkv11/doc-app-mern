import Contact from "../model/contact.js";

const contact = async (req, res) => {
  const { name, email, phone_number, message } = req.body;
  try {
    const newContact = await new Contact({
      name: name,
      email: email,
      phone_number: phone_number,
      message: message,
    });
    const contact = await newContact.save();
    res.status(200).json({ msg: "Contact form submitted", submitted: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default contact;
