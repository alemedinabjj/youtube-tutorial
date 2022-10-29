import "./styles/app.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().min(6, "No mínimo 6 caracteres").required("Senha obrigatória"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <div>
      <div>
        <form className="form" onSubmit={handleSubmit(submitForm)}>
          <h1>Meu formulário.</h1>

          <div className="wrapper">
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div className="wrapper">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="wrapper">
            <label htmlFor="password">Senha</label>
            <input id="password" type="password" {...register("password")} />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
