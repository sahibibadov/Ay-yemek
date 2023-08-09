import { useCallback, useState } from "react";
import {
  AuthImage,
  ReturnButton,
  Headline,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
  Paragraf,
} from "../../components";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import resolverValidator from "../../validation/login";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { setUsers } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "./login.scss";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pasError, setPasError] = useState("");
  const [mailError, setMailError] = useState("");
  const [allError, setAllError] = useState("");

  //form validation
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: resolverValidator, //yup scheamlari yaziriq
  });

  // login funcsiyasi
  const onHandleLogin = useCallback(
    async (data) => {
      // isvalid ile inputlarin bow olmadigin yoxlayiriq
      if (!isValid) {
        return;
      }
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        );
        await dispatch(setUsers(userCredential.user));
        await navigate("/", { replace: true });
        toast.success("success login", {
          position: "top-right",
          duration: 3000,
        });
      } catch (error) {
        const errorCode = error?.code;
        if (errorCode === "auth/wrong-password") {
          setPasError("yanlis parola");
        } else if (errorCode === "auth/user-not-found") {
          setMailError("yanlis e-posta");
        } else {
          setAllError(error.message);
        }
      }
    },
    [auth, dispatch, navigate, isValid, setMailError, setPasError, setAllError],
  );

  return (
    <>
      <Helmet>
        <title> Login</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="login__page"
      >
        <div className="login__wrapper">
          <div className="login__content">
            <div className="login__content__img">
              <img src="logo.png" alt="logo" />
            </div>

            <ReturnButton />

            {/* form */}
            <Headline level={1} color="primary">
              Daxİl olun
            </Headline>
            <Paragraf size="lg" color="secondary">
              Buradan daxil ola bilərsiniz!
            </Paragraf>

            <form
              className="login__form"
              onSubmit={handleSubmit(onHandleLogin)}
              noValidate
            >
              {allError && <ErrorMessage>{allError}</ErrorMessage>}

              <div>
                <Label errors={errors?.email}>E-poçt </Label>
                <Input
                  placeholder="E-poçt"
                  errors={errors?.email}
                  {...register("email")}
                  type="email"
                />
                {mailError && <ErrorMessage>{mailError}</ErrorMessage>}
                {errors.email && (
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
                )}
              </div>

              <div>
                <Label errors={errors?.password}>Parol</Label>
                <Input
                  placeholder="Parol"
                  errors={errors?.password}
                  {...register("password")}
                  type="password"
                />
                {pasError && <ErrorMessage>{pasError}</ErrorMessage>}
                {errors.password && (
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
                )}
              </div>

              <SubmitButton type="submit">Göndər</SubmitButton>
            </form>

            <p className="login__register">
              Hesabınız yoxdur? <Link to="/register"> Qeydiyyatdan keçin</Link>
            </p>
          </div>
        </div>

        {/* right image */}
        <AuthImage />
      </motion.div>
    </>
  );
};
