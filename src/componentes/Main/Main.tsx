import {useState} from 'react'
import Projeto from './../Projeto/Projeto'
import './Main.css'

type ProjetoType = {
    id:number,
    titulo:string,
   descricao:string,
    imagem:string
}

export default function Main(){
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Conceitos Básicos de Quimíca',
            descricao: 'Oportunidade de explorar os fundamentos da matéria, compreendendo as interações entre átomos, moléculas e compostos. Aprendem a realizar experimentos em laboratórios, a utilizar equipamentos e técnicas analíticas e a interpretar os resultados obtidos.',
            imagem :'/quimica.jpg'
            
        },
        {
            id:2,
            titulo: 'Espanhol: Língua e Cultura',
            descricao: 'Saludos y despedidas; datos personales: nombre, Apellido, Apodo; Nacionalidades; Alfabeto; Pronombres Personales y Verbo ser/estar; Número cardinal (0-100); Días de la semana; Meses y estaciones del año; Profesiones; Artículos; Reglas de eufonía; Tratamiento formal e informal; Números Cardinales; Verbos ser y estar.',
            imagem:'/espanhol.jpg'
    
        },
        {
            id:3,
            titulo: 'Desenvolvimento de Jogos 2D com Unity',
            descricao: 'História e Conceitos de Jogos Eletrônicos; Download e Instalação do Unity; Acesso e uso da Unity Asset Store; Controle de jogos com componentes Físicos; Codificação com Scripts em C#; Animações; Projeto de jogo estilo Shoot UP.',
            imagem:'/jogo.jpg'    
        },
        {
            id:4,
            titulo: 'Técnico em Informática para Internet',
            descricao: 'Desenvolve programas de computador e aplicativos para dispositivos móveis, utiliza ferramentas de desenvolvimento de sistemas para construir soluções que auxiliam o processo de criação de interfaces e aplicativos empregados no comércio e marketing eletrônicos.',
            imagem:'/tecnico.jpg'   
        }
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
       setTexto(e.target.value)
    }
    return(
        <>
        <div className="campo_pesquisa">
            <p>Busque um projeto</p>
            <input type="text" className='botao_pesquisa' placeholder='Pesquise' onChange={TrataTexto} />
            {!texto && <p>Resultados Para:{texto} </p>}
        </div>
        
        <main className="content-main">
             {/* 
                    Use algo do vetor para tentar criar os projetos 
                */}
                {
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto 
                                key={projeto.id}
                                descricao={projeto.descricao}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }
            
        </main>
        </>
    )
}