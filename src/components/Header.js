import Head from 'next/head'
import Link from 'next/link'

const Header = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta keywords={'Movies, top100'}></meta>
        <title>{title} | Кино-Поиск</title>
      </Head>
      <div className="header">
        <Link className="header-link" href="/">
          Главная страница
        </Link>
        <Link className="header-link" href="/">
          Фильмы
        </Link>
        <Link className="header-link" href="/">
          Сериалы
        </Link>
      </div>
      <div>{children}</div>
    </>
  )
}

export default Header
