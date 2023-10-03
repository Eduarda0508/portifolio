import './Header.css'
import Logo from './../../assets/img/letra-m.png'
import LinkNav from '../linknav/LinkNav'
function Header(){
    return(
        <header>
             <div><img className='logo' src={Logo} alt="" /></div>
             
            <nav>
                <ul>
                    <li>
                        <LinkNav url="/" texto='Início'/>
                    </li>
                    <li>
                        <LinkNav url="/noticias" texto= 'Tecnologias' />
                    </li>
                    <li>
                        <LinkNav url="/sobre" texto='Sobre mim'/>
                    </li>
                    <li>
                        <LinkNav url="/serviços"texto='Serviços'/>
                    </li>
                    <li>
                        <LinkNav url="/contato"texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header