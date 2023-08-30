import './Footer.css'
import Telegram from './../../assets/img/logotipo-do-telegram.png'
import Facebook from './../../assets/img/facebook.png'
import Instagram from './../../assets/img/instagram.png'
import Twitter from './../../assets/img/twitter.png'
function Footer(){
    return(
        <footer>
          <div className="">
          <div><img className='img' src="" alt="" /></div>

          <div className='imagens'>
          <div><img className='icones-img' src={Telegram} alt="" /></div>
          <div><img className='icones-img' src={Facebook} alt="" /></div>
          <div><img className='icones-img' src={Instagram} alt="" /></div>
          <div><img className='icones-img' src={Twitter} alt="" /></div>

          </div>

           </div>
            <nav>
          <ul>
                    <li><h1> Início</h1></li>
                   <li><a href="#">Home</a></li>
                     <li><a href="#">Serviços</a></li>
                </ul>
           <ul>
                    <li><h1>Informações</h1></li>
                   <li><a href="#">Cursos</a></li>
                     <li><a href="#">Contato</a></li>
                     <li><a href="#">Email</a></li>
                
                </ul>
                <ul>
                <li><h1>Institucional</h1></li>
                <li><a href="#">Formação</a></li>
                  <li><a href="#">Cursos</a></li>
                </ul>
              
                </nav>
        </footer>
       
    )
}

export default Footer