import './Contato.css'
import { useState } from 'react';

function Contato(){
    const [contatoTexto, setContatoTexto]=useState("")
    function TrataContatoTexto(e:React.ChangeEvent<HTMLInputElement>){
        setContatoTexto(e.target.value)
    }

    return(
        <div className='contatosM'>
        <form>
        <div className="dados">
            <h1>Envie uma mensagem para mim!</h1>

          
            <label>Nome:</label>
            <input className='input' type="text" placeholder='Nome' onChange={TrataContatoTexto}/>
         
            <label>E-mail:</label>
            <input className='input' type='email' placeholder='E-mail' onChange={TrataContatoTexto}/>

            <label>Telefone:</label>
            <input className='input' type='fone' placeholder='Telefone' onChange={TrataContatoTexto}/>
            </div>
            
          <button>Enviar</button>
        
            <div className="contatoTexto">
             {contatoTexto && <p>{contatoTexto}</p>}
            </div>

            </form>
      </div>
    )
}

export default Contato