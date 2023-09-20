import Imagem from "./../../assets/img/Polish_20230618_220727026.jpg"
import "./Portifolio.css"
function Portifolio(){
    return(
        <div className="Portifolio-content">
            <img className="foto" src={Imagem} alt="" />

            <div className="texto-portifolio">
                <h1>Olá <br />
                    Eu sou a Maria Eduarda!</h1>
                     <p>
                    <h1>Venha saber um pouco sobre mim.</h1> 
                      Atualmente tenho 18 anos, sou natural de Naviraí - MS. <br />
                     Sou uma pessoa organizada, proativa, dedicada e sempre busco fazer as coisas com uma boa comunicação e força de vontade. Busco sempre aprender e me cobro muito para que tudo ocorra da maneira correta. 
                    </p>  
            </div>
            
        </div>
        
    )
}
export default Portifolio