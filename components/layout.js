import '../styles/styles.scss'
import Head from 'next/head'

export default ({ children, title = 'Jech' }) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width, initial-scale=1' />
      <meta name='Description' content='Web Developer' />
      <link rel="icon" type="image/png" href="images/favicon.png" />
      <meta property='og:title' content='Jech - Web Developer' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.jerecho.com' />
      <meta property='og:image' content='https://www.jerecho.com/images/og-logo.png' />
      <meta property='og:image:alt' content='Jerecho' />
      <meta property='og:description' content="I'm a web developer focused on UI development" />
      <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TV8NVWT');`,
        }}>
      </script>
    </Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TV8NVWT"
      height="0" width="0"></iframe></noscript>
    {children}

  </div>
)