import Imagem from "./../../assets/img/Polish_20230618_220727026.jpg"
import "./Portifolio.css"
function Portifolio(){
    return(
        <div className="Portifolio-content">
            <img className="foto" src={Imagem} alt="" />

            <div className="texto-portifolio">
                <h1> Sobre mim</h1>
                    <p>
     Olá sou a Maria Eduarda tenho 18 anos, sou natural de Naviraí - MS. <br />
     Sou uma pessoa organizada,proativa,dedicada e sempre busco com uma boa comunicação e força de vontade. <br />
     Busco sempre aprender e me cobro muito para que tudo ocorra da maneira correta. 
                    </p>
            </div>
        </div>
    )
}
export default Portifolio