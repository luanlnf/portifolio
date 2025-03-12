import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Luan Ferreira</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        luanlnf
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Menino de Programa
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
