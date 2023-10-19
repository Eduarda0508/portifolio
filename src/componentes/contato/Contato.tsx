import './Contato.css'
function Contato(){
    return(
        <form>
            <fieldset>
                <div>
                    <h1>Envie uma mensagem!</h1>
                    <label>Nome:</label>
                    <input type="text" name="nome" id="nome"/>
                </div>
                <div>
                <label>E-mail:</label>
                <input type="text" name="e-mail" id="e-mail" />
            </div>

            <div>
                <label>Telefone:</label>
                <input type="text" name="telefone" id="telefone" />
            </div>
            <div>
                <label>Mensagem</label>
                <textarea placeholder=''></textarea>
            </div>
            </fieldset>
            
        </form>
    )
   
}
export default Contato
