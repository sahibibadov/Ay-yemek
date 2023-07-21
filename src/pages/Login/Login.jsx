import { AuthImage } from "../../components/AuthImage/AuthImage";
import {
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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.scss";
import { Helmet } from "react-helmet";

export const Login = () => {
  const navigate = useNavigate();
  const [pasError, setPasError] = useState("");
  const [mailError, setMailError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: resolverValidator, //yup scheamlari yaziriq
    shouldUseNativeValidation: false, //html default validatorunu baglamaq(default:false)
  });

  const onHandleLogin = async (data) => {
    if (!data.email || !data.password) {
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      navigate("/", { replace: true });
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
        <title> Login</title>
      </Helmet>
      <div className="login__page">
        <div className="login__wrapper">
          <div className="login__content">
            <div className="login__content__img">
              <img src="logo.png" alt="logo" />
            </div>
            <ReturnButton />

            {/* form */}
            <Headline level={1} color="primary">
              QEYDİYYAT
            </Headline>
            <Paragraf size="lg" color="secondary">
              Lorem ipsum dolor sit amet
            </Paragraf>
            <form
              className="contact__form"
              onSubmit={handleSubmit(onHandleLogin)}
              noValidate
            >
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
          </div>
        </div>
        {/* right image */}
        <AuthImage />
      </div>
    </>
  );
};
