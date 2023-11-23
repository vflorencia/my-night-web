import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUsuario, registroUsuario } from "../../redux/actions";
import Loader from "../Loader/Loader";
import { useEffect } from "react";

export default function RedirectPage() {
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();


    const handleUserRegistrationOrLogin = async () => {
      if (!isLoading && user) {
        // Verificar si el usuario ya está autenticado en la aplicación
        // if (isAuthenticated) {
        //   navigate("/eventos");
        // } else {
          try {
            const registroResponse = await dispatch(
              registroUsuario({
                firstName: user.given_name,
                lastName: user.family_name,
                userName: user.nickname,
                email: user.email,
                password: user.sub, 
                img: user.picture,
              })
            );

            if (registroResponse.status === 200) {
              navigate("/eventos");
             
            } else {
            
                const loginResponse = await dispatch(
                  loginUsuario({
                    email: user.email,
                    password: user.sub, 
                  })
                );

                if (loginResponse) {
                  navigate("/eventos");
  
              } else {
                console.error(registroResponse.error);
                // Puedes agregar aquí una notificación al usuario
              }
            }
          } catch (error) {
            console.error("Error al iniciar sesión o registrar usuario:", error);
            // Puedes agregar aquí una notificación al usuario
          }
      
      }
    };

    handleUserRegistrationOrLogin();


  return <Loader />;
}
