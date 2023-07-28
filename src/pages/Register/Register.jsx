import { useCallback, useState } from "react";
import {
  ReturnButton,
  Headline,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
  AuthImage,
} from "../../components";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import resolverValidator from "../../validation/register";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import "./register.scss";

export const Register = () => {

  const [pasError, setPasError] = useState("");
  const [mailError, setMailError] = useState("");
  const [allError, setAllError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // dorm validation
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: resolverValidator, //yup scheamlari yaziriq
  });


  // register funksiyasi
  const onRegister = useCallback(
    async (data) => {
      if (!isValid) {
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        );
        const user = userCredential.user;
        await updateProfile(user, { displayName: `${data.name} ${data.surname}` });

        await navigate("/login");
        toast.success("success register", {
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
    [
      auth,
      dispatch,
      navigate,
      isValid,
      pasError,
      mailError,
      allError,
      setAllError,
      setMailError,
      setPasError,
    ],
  );

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="register__page"
      >
        <div className="register__wrapper">
          <div className="register__content">
            <div className="register__content__img">
              <img src="logo.png" alt="logo" />
            </div>
            <ReturnButton to="/" />

            {/* form */}
            <Headline level={1} color="primary">
              QEYDİYYAT
            </Headline>
            <form
              onSubmit={handleSubmit(onRegister)}
              className="register__form"
              noValidate
            >
              <div>
                {allError && <ErrorMessage>{allError}</ErrorMessage>}

                <div className="register__form__username">

                  <div>
                    <Label errors={errors.name}>Ad </Label>
                    <Input
                      errors={errors.name}
                      {...register("name")}
                      type="text"
                      placeholder="Ad"
                    />
                    {errors.name && (
                      <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    )}
                  </div>

                  <div>
                    <Label errors={errors.surname}>Soyad</Label>
                    <Input
                      errors={errors.surname}
                      {...register("surname")}
                      type="text"
                      placeholder="Soyad"
                    />
                    {errors.surname && (
                      <ErrorMessage>{errors.surname?.message}</ErrorMessage>
                    )}
                  </div>

                </div>

                <Label errors={errors.email}>E-poçt </Label>
                <Input
                  placeholder="E-poçt"
                  errors={errors.email}
                  {...register("email")}
                  type="email"
                />
                {mailError && <ErrorMessage>{mailError}</ErrorMessage>}
                {errors.email && (
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
                )}

                <Label errors={errors.password}>Parol</Label>
                <Input
                  placeholder="Parol"
                  errors={errors.password}
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
              Hesabınız varsa <Link to="/login"> Buradan daxil olun</Link>

            </p>
          </div>
        </div>

        {/* right image */}
        <AuthImage />
      </motion.div>
    </>
  );
};
