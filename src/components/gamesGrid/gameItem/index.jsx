import { FlexBox } from '../../ui/common';
import {
  CalendarIcon,
  GameImage,
  GameInfo,
  GameMedia,
  GameNameLink,
  Metacritic,
  Released,
  Wrapper,
} from './components';

const GameItem = ({ game }) => {
  const releasedDateArray = game.released?.split('-');
  const released = releasedDateArray ? `${releasedDateArray[2]}.${releasedDateArray[1]}.${releasedDateArray[0]}` : null;

  return (
    <Wrapper>
      <GameMedia>
        <GameImage src={game.background_image} alt={game.name} />
      </GameMedia>
      <GameInfo>
        <GameNameLink href={`/game/${game.slug}`}>{game.name}</GameNameLink>
        <FlexBox width="100%" justifyContent="space-between" alignItems="center">
          {released ? (
            <Released>
              <CalendarIcon src="/icons/calendarWhite.svg" alt="calendar-icon" />
              {released}
            </Released>
          ) : (
            <div />
          )}

          {game.metacritic ? (
            <Metacritic className={game.metacritic >= 75 ? 'green' : game.metacritic > 50 ? 'yellow' : 'red'}>
              {game.metacritic}
            </Metacritic>
          ) : null}
        </FlexBox>
      </GameInfo>
    </Wrapper>
  );
};

export default GameItem;
