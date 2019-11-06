import Layout from '../components/layout'
import Header from '../components/header'
import Aside from '../components/aside'

export default () => (
  <Layout title='Jech - Web Developer | About me'>
    <main className='🐸_ Wrapper _🐱'>
      <Header />
      <section className="_ Section Inner _">
        <article className="_ Row _">
          <header className="_ Heading _">
            <h1 className="_ Italic _">About me</h1>
          </header>
          <p>
            I’m Jech, a seasoned web developer with agile methodology background and with over 10 years industry experience. I first worked at Techforge as a web designer and developer for local business in the Philippines. In 2012, I joined Arcanys, a Swiss owned IT company based in Cebu where I developed my expertise in front end development and have supported clients from the Europe, Australia, and Hong Kong.
          </p>
        </article>
        <div className="_ Skills _">
          <strong>Skills</strong>
          <ul>
            <li className="Skill">
              <strong>HTML / CSS</strong>
              CSS pre-processor (sass, less, stylus etc)
            </li>
            <li className="Skill">
              <strong>Javascript</strong>
              jQuery, Angular, VueJS and ReactJS
            </li>
            <li className="Skill">
              <strong>CMS</strong>
              Wordpress, GravCMS
            </li>
            <li className="Skill">
              <strong>Design Tools</strong>
              Photoshop, Illustrator, XD and Figma
            </li>
          </ul>
        </div>
      </section>
      <Aside />
    </main>
  </Layout>
)