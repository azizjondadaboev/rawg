import { getGameBySlug, getGameScreenshots } from '../../src/api';
import Layout from '../../src/components/layout';
import GameComponents from '../../src/components/pages/game';

const GamePage = ({ game, gameScreenshots }) => {
  return (
    <Layout title={`${game.name} - Video Game Discovery Service`}>
      <GameComponents game={game} gameScreenshots={gameScreenshots} />
    </Layout>
  );
};

export const getServerSideProps = async context => {
  const query = context.query;
  const game = await getGameBySlug(query?.slug);
  const gameScreenshots = await getGameScreenshots(query?.slug);

  return {
    props: {
      game,
      gameScreenshots: gameScreenshots.results,
    },
  };
};

export default GamePage;
