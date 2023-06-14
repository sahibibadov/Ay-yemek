import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// phone regex
const phoneRegExp = `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`;

const schema = yup
  .object()
  .shape({
    name: yup.string().required("name is required"),
    surname: yup.string().required("surname is required"),
    date: yup.date("date is required").required("date is required"),
    /*  firstName: yup.string().notRequired(), //notRequired yerine nullable(),optional() yazila biler.eyni seydiler */
    password: yup.string().min(6).required("password is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Mail is required"),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    location: yup.string().required("location is required"),
  })
  .required();

export default yupResolver(schema);
