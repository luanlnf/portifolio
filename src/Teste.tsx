import styled from 'styled-components'

type BotaoProps = {
  Principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.Principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
  }
`
function Teste() {
  return (
    <>
      <Botao Principal={false}>CANCELAR</Botao>
      <Botao fontSize="10px" Principal>
        enviar
      </Botao>
      <BotaoPerigo as="a" Principal>
        <span> Excluir</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
