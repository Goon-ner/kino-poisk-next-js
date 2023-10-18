import axios from 'axios'
import Header from '@/components/Header'
import MoviesList from '@/components/MoviesList'

const index = ({ data }) => {
  return (
    <Header title={'Фильмы'}>
      <MoviesList data={data} />
    </Header>
  )
}

export default index

export async function getStaticProps() {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/api/movies-api',
  }
  const response = await axios.request(options)
  const data = await response.data
  return { props: { data } }
}
