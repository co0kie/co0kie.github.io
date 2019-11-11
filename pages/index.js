import Layout from '../components/layout'
import Header from '../components/header'
import Aside from '../components/aside'
import Footer from '../components/footer'
import Link from 'next/link'

export default () => (
  <Layout title='Jech - Web Developer'>
    <main className='🐸_ Wrapper _🐱'>
      <Header />
      <section className="_ Section _">
        <div className="_ Hero _">
          <header className="_ Section-Heading _">
            <h1>💻 Hi I'm <strong>Jech</strong>, Web Developer </h1>
          </header>
        </div>
        <div className="_ Col _">
          <p>Currently working at <strong>Arcanys</strong> as a Web developer since 2012. Focused on UI/UX development and CSS, with semantic approach, best practices, accessibility, and mobile friendly web application.</p>
          <Link href="/about">
            <a title="About Me" className="_ Link-medium withArrow _">About me</a>
          </Link>
        </div>
        <div className="_ Col mt _">
          <h2 className="_ Heading-medium _">Work experience</h2>
          <div className="_ List _">
            <div className="_ List-item _">
              <strong>Arcanys</strong>
              <p>Frontend developer</p>
              <p>2012 - Present</p>
            </div>
            <div className="_ List-item _">
              <strong>Techforge</strong>
              <p>Web Designer / Wordpress developer</p>
              <p>2010 - 2012</p>
            </div>
          </div>
          {/* <a href="portfolio.html" className="_ Link-medium mt withArrow _">Visit my portfolio</a> */}
        </div>
      </section>
      <Aside />
      <Footer />
    </main>
  </Layout>
)