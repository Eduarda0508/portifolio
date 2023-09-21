import './Footer.css'
import Telegram from './../../assets/img/logotipo-do-telegram.png'
import Facebook from './../../assets/img/facebook.png'
import Instagram from './../../assets/img/instagram.png'
import Twitter from './../../assets/img/twitter.png'
function Footer(){
    return(
        <footer>
          
          <div className='imagens'>
            <img className='icones-img' src={Telegram} alt="" />
            <img className='icones-img' src={Facebook} alt="" />
            <img className='icones-img' src={Instagram} alt="" />
            <img className='icones-img' src={Twitter} alt="" />
         
          </div>

            <nav>
          <ul>
                    <li><h1> Início</h1></li>
                   <li><a href="#">Home</a></li>
                     <li><a href="#">Serviços</a></li>
                     <li><a href="#">Blog</a></li>

                </ul>
                  <ul>
                    <li><h1>Informações</h1></li>
                     <li><a href="#">Contato</a></li>
                     <li><a href="#">Linkedin</a></li>
                     <li><a href="#">Email</a></li>
                
                </ul>
                <ul>
                <li><h1>Institucional</h1></li>
                <li><a href="#">Formação</a></li>
                  <li><a href="#">Cursos</a></li>
                </ul>
                <ul>
                    <li><h1>Cursos</h1></li>
                    <li><a href="#">Conceitos Básicos de Quimíca</a></li>
                    <li><a href="#">Espanhol: Língua e Cultura</a></li>
                    <li><a href="#">Desenvolvimento de Jogos 2D com Unity</a></li>
                    <li><a href="#">Técnico em Informática para Internet</a></li>
                </ul>
              
                </nav>
        </footer>
       
    )
}

export default Footer