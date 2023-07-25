import {
  Container,
  Headline,
  Paragraf,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
} from "../../components";
import { useForm } from "react-hook-form";
import resolverValidator from "../../validation/contactValitation";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import "./contact.scss";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export const Contact = () => {
  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: resolverValidator, //yup scheamlari yaziriq
    shouldUseNativeValidation: false, //html default validatorunu baglamaq(default:false)
  });

  const onSubmint = (e) => {};
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="contact__background"
      >
        <div className="contact">
          <Headline level={1} color="primary">
            Əlaqə
          </Headline>
          <Paragraf size="lg" color="secondary">
            Bizimlə aşağıdakı məlumatlar vasitəsilə əlaqə saxlaya bilərsiniz
          </Paragraf>
          <div className="contact__main">
            <div className="contact__info">
              <div className="contact__info__item">
                <div className="contact__info__item__left">
                  <div>
                    <TfiEmail size={24} color="white" />
                  </div>
                  <span>e-poçt</span>
                </div>
                <div className="contact__info__item__right">
                  <p>info@ay-yemek.az</p>
                </div>
              </div>
              {/* --- */}
              <div className="contact__info__item">
                <div className="contact__info__item__left">
                  <div>
                    <BsTelephone size={24} color="white" />
                  </div>
                  <span>Telefon</span>
                </div>
                <div className="contact__info__item__right">
                  <p>+99412 409 40 94</p>
                  <p>+99412 409 40 94</p>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmint)}
              className="contact__form"
              noValidate
            >
              <div className="form__grid">
                <div>
                  <Label errors={errors.username}>ad soyad</Label>
                  <Input
                    errors={errors.username}
                    {...register("username")}
                    type="text"
                    placeholder="Ad Soyad"
                  />
                  {errors.username && (
                    <ErrorMessage>{errors.username?.message}</ErrorMessage>
                  )}
                </div>
                <div>
                  <Label errors={errors.email}>e-poçt</Label>
                  <Input
                    errors={errors.email}
                    {...register("email")}
                    type="email"
                    placeholder="e-poçt"
                  />
                  {errors.email && (
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                  )}
                </div>
                <div>
                  <Label>Mesajınız</Label>
                  <textarea
                    {...register("textarea")}
                    placeholder="Mesajınız"
                  ></textarea>
                </div>
              </div>
              <SubmitButton type="submit">Göndər</SubmitButton>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};
