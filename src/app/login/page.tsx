import { LoginForm } from "./LoginForm";

const LoginPage = () => {


    return(
        <>
            <div className="hero min-h-screen bg-cover bg-opacity-50" style={{ backgroundImage: "url('https://img.freepik.com/vector-premium/plantilla-banner-servicio-tienda-herramientas-construccion_38901-507.jpg?w=996')" }}>
     <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl text-black font-bold">Ferreteria</h1>
                <p className="py-6  w-[500px] text-black font-semibold" >"En nuestra ferretería, mantenemos un sistema de inventario preciso y actualizado para garantizar que siempre encuentres lo que necesitas. Tu tiempo es valioso, y nos esforzamos por brindarte una experiencia de compra eficiente y sin contratiempos."</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <LoginForm/>
                </div>
                </div>
            </div>
            </div>            
        </>
    )

}

export default LoginPage;