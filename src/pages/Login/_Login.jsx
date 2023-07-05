// import { AuthImage } from "../../components/AuthImage/AuthImage";
// import {
//   ReturnButton,
//   Headline,
//   Label,
//   Input,
//   ErrorMessage,
//   SubmitButton,
//   Paragraf,
// } from "../../components";
// import "./login.scss";
// import resolverValidator from "../../validation/authvalidation";
// import { useForm } from "react-hook-form";

// export const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: resolverValidator, //yup scheamlari yaziriq
//     shouldUseNativeValidation: false, //html default validatorunu baglamaq(default:false)
//   });

//   const onSubmint = (e) => {
//     console.log(e);
//   };
//   return (
//     <div className="login__page">
//       <div className="login__wrapper">
//         <div className="login__content">
//           <div className="login__content__img">
//             <img src="logo.png" alt="logo" />
//           </div>
//           <ReturnButton to="/" />

//           {/* form */}
//           <Headline level={1} color="primary">
//             QEYDİYYAT
//           </Headline>
//           <Paragraf size="lg" color="secondary">
//             Lorem ipsum dolor sit amet
//           </Paragraf>
//           <form
//             className="contact__form"
//             onSubmit={handleSubmit(onSubmint)}
//             noValidate
//           >
//             <div>
//               <Label errors={errors.email}>E-poçt </Label>
//               <Input
//                 placeholder="E-poçt"
//                 errors={errors.email}
//                 {...register("email")}
//                 type="email"
//               />
//               {errors.email && (
//                 <ErrorMessage>{errors.email?.message}</ErrorMessage>
//               )}
//             </div>
//             <div>
//               <Label errors={errors.password}>Parol</Label>
//               <Input
//                 placeholder="Parol"
//                 errors={errors.password}
//                 {...register("password")}
//                 type="password"
//               />
//               {errors.password && (
//                 <ErrorMessage>{errors.password?.message}</ErrorMessage>
//               )}
//             </div>
//             <SubmitButton type="submit">Göndər</SubmitButton>
//           </form>
//         </div>
//       </div>
//       {/* right image */}
//       <AuthImage />
//     </div>
//   );
// };
