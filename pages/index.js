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

export const getServerSideProps = async () => {
  const games = await getGamesList();
  const platformsPage1 = await getPlatforms(1);
  const platformsPage2 = await getPlatforms(2);

  return {
    props: {
      games: games.results,
      platforms: [...platformsPage1.results, ...platformsPage2.results],
    },
  };
};

export default Home;
