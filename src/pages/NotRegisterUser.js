import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm/";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context);

  return (
    <>
      <RegisterMutation>
        {(register, { loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
          };

          const errorMsg = error && "El usuario ya existe";
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title="Registrarse"
            ></UserForm>
          );
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { loading, error, data }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };
          const errorMsg = error && "Credenciales invalidas";
          return (
            <UserForm
              error={errorMsg}
              disabled={loading}
              onSubmit={onSubmit}
              title="Iniciar Sesion"
            ></UserForm>
          );
        }}
      </LoginMutation>
    </>
  );
};
