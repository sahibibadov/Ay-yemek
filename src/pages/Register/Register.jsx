import { AuthImage } from "../../components/AuthImage/AuthImage";
import {
  ReturnButton,
  Headline,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
} from "../../components";
import "./register.scss";
import resolverValidator from "../../validation/authvalidation";
import { useForm } from "react-hook-form";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: resolverValidator, //yup scheamlari yaziriq
    shouldUseNativeValidation: false, //html default validatorunu baglamaq(default:false)
  });

  const onSubmint = (e) => {
    console.log(e);
  };
  return (
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
            onSubmit={handleSubmit(onSubmint)}
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
              <Label errors={errors.date}>Doğum tarixi</Label>
              <Input
                placeholder="Doğum tarixi"
                errors={errors.date}
                {...register("date")}
                type="date"
              />
              {errors.date && (
                <ErrorMessage>{errors.date?.message}</ErrorMessage>
              )}
              <Label errors={errors.password}>Parol</Label>
              <Input
                placeholder="Parol"
                errors={errors.password}
                {...register("password")}
                type="password"
              />
              {errors.password && (
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              )}
              <Label errors={errors.email}>E-poçt </Label>
              <Input
                placeholder="E-poçt"
                errors={errors.email}
                {...register("email")}
                type="email"
              />
              {errors.email && (
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              )}
              <Label errors={errors.phoneNumber}>Telefon </Label>
              <Input
                placeholder="Telefon"
                errors={errors.phoneNumber}
                {...register("phoneNumber")}
                type="text"
              />
              {errors.phoneNumber && (
                <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
              )}
              <Label errors={errors.location}>Ünvan </Label>
              <Input
                placeholder="Ünvan"
                errors={errors.location}
                {...register("location")}
                type="text"
              />
              {errors.location && (
                <ErrorMessage>{errors.location?.message}</ErrorMessage>
              )}
            </div>
            <SubmitButton type="submit">Göndər</SubmitButton>
          </form>
        </div>
      </div>
      {/* right image */}
      <AuthImage />
    </div>
  );
};
