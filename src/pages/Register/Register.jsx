import {
  ReturnButton,
  Headline,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
  AuthImage,
} from "../../components";
import { setUsers } from "../../redux/userSlice";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import resolverValidator from "../../validation/register";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import { Helmet } from "react-helmet";

export const Register = () => {
  const [pasError, setPasError] = useState("");
  const [mailError, setMailError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: resolverValidator, //yup scheamlari yaziriq
  });

  const onRegister = async (data) => {
    if (!data.email || !data.password) {
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const user = userCredential.user;
      updateProfile(user, { displayName: `${data.name} ${data.surname}` });
      navigate("/login");
      dispatch(setUsers(user));
    } catch (error) {
      console.log(error);
      const errorCode = error?.code;

      if (errorCode === "auth/wrong-password") {
        setPasError("yanlis parola");
      } else if (errorCode === "auth/user-not-found") {
        setMailError("yanlis e-posta");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="register__page">
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
              className="contact__form"
              noValidate
            >
              <div>
                <div className="contact__form__username">
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
          </div>
        </div>
        {/* right image */}
        <AuthImage />
      </div>
    </>
  );
};
