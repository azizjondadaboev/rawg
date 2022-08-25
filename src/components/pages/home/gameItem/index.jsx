import { GameImage, GameInfo, GameMedia, Wrapper } from './components';

const GameItem = ({ game }) => {
  return (
    <Wrapper>
      <GameMedia>
        <GameImage src={game.background_image} alt={game.name} />
      </GameMedia>
      <GameInfo>{game.name}</GameInfo>
    </Wrapper>
  );
};

export default GameItem;
