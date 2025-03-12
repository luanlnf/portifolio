import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quisquam
      velit cupiditate totam sequi soluta. Ducimus, voluptates! Iusto sint
      debitis quos cum nulla quae tenetur voluptatum error dicta, impedit
      voluptas!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=luanlnf&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />

      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=luanlnf&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)
export default Sobre
