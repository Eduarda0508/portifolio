import './Header.css'
import Logo from './../../assets/img/letra-m.png'
import Link from '../link/Link'
function Header(){
    return(
        <header>
             <div><img className='logo' src={Logo} alt="" /></div>
             
            <nav>
                <ul>
                    <li>
                        <Link texto='Início'/>
                    </li>
                    <li>
                        <Link texto= 'Tecnologias' />
                    </li>
                    <li>
                        <Link texto='Sobre mim'/>
                    </li>
                    <li>
                        <Link texto='Serviços'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header