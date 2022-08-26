import { getGamesList, getPlatforms } from '../src/api';
import Layout from '../src/components/layout';
import HomeComponents from '../src/components/pages/home';

const Home = ({ games, platforms }) => {
  return (
    <Layout title="The Biggest Video Game Database on RAWG - Video Game Discovery Service">
      <HomeComponents games={games} platforms={platforms} />
    </Layout>
  );
};

export const getServerSideProps = async context => {
  const query = context.query;
  const games = await getGamesList({
    ordering: query?.ordering || '-added',
    search: query?.search || '',
  });
  const platforms = await getPlatforms();

  return {
    props: {
      games: games,
      platforms: platforms.results,
    },
  };
};

export default Home;
