import React from 'react'
import './cupom.css'

const Cupom = () => {
    return (
        <div>
                <div class="header">
        <a href="home.html"><img src="logo.png" alt="logo" class="logo" /></a>
        <nav>
            <ul>
                <li><a href="vagas.html"><strong>Vagas</strong></a></li>
                <li><a href="notificações.html"><strong>Notificações</strong></a></li>
                <li><a href="login.html"><strong>Meu Perfil</strong></a></li>
            </ul>
        </nav>
    </div>
    <div class="cupom-fundo">
        <div class="cupom-dica">
            O cupom abaixo são os dados oficiais dos andamento do seu bico, 
            use-o como comprovante para apresentá-lo
            ao seu contratado:
        </div>
        <div class="cupom-cupom">
            <div class="cupom-titulo">
                <strong>Cupom FUB</strong>
            </div>
            <div class="cupom-status">
                Status: Pendente
            </div>
            <div class="cupom-sobre">
                <div class="cupom-detalhes">
                    Bico: Reforço de Português
                </div>
                <div class="cupom-detalhes">
                    Contratante: Luís Oliveira
                </div>
                <div class="cupom-detalhes">
                    Contratado: Maria Siqueira
                </div>
                <div class="cupom-detalhes">
                    Preço: R$ 30,00
                </div>
                <div class="cupom-detalhes">
                    Prazo: 1 dia
                </div>
            </div>
        </div>
        <div class="cupom-espaco">
            
        </div>
        <a href="" class="cupom-botao">
            <strong>EXCLUIR CUPOM</strong>
        </a>
        <a href="" class="cupom-botao">
            <strong>FINALIZAR CUPOM</strong>
        </a>
    </div>
        </div>
    )
}

export default Cupom
