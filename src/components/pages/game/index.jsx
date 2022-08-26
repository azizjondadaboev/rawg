import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { Metacritic } from '../../gamesGrid/gameItem/components';
import { Container } from '../../ui/common';
import {
  GameDescription,
  GameImage,
  GameInfoBlock,
  GameInfoItem,
  GameInfoTitle,
  GameInfoValue,
  GameName,
  GameScreenshotsBlock,
  GameScreenshotsTitle,
  Wrapper,
} from './components';

const GameComponents = ({ game, gameScreenshots }) => {
  const releasedDateArray = game.released?.split('-');
  const released = releasedDateArray ? `${releasedDateArray[2]}.${releasedDateArray[1]}.${releasedDateArray[0]}` : null;

  return (
    <Container>
      <Wrapper>
        <GameName>{game.name}</GameName>
        <GameImage src={game.background_image} alt={game.name} />
        <GameDescription dangerouslySetInnerHTML={{ __html: game.description }} />

        <GameInfoBlock>
          <GameInfoItem>
            <GameInfoTitle>Platforms</GameInfoTitle>
            <GameInfoValue>{game.platforms.map(platform => platform.platform.name).join(', ')}</GameInfoValue>
          </GameInfoItem>

          <GameInfoItem>
            <GameInfoTitle>Metascore</GameInfoTitle>
            <GameInfoValue>
              <Metacritic className={game.metacritic >= 75 ? 'green' : game.metacritic > 50 ? 'yellow' : 'red'}>
                {game.metacritic}
              </Metacritic>
            </GameInfoValue>
          </GameInfoItem>

          <GameInfoItem>
            <GameInfoTitle>Genre</GameInfoTitle>
            <GameInfoValue>{game.genres.map(genre => genre.name).join(', ')}</GameInfoValue>
          </GameInfoItem>

          <GameInfoItem>
            <GameInfoTitle>Release date</GameInfoTitle>
            <GameInfoValue>{released || '-'}</GameInfoValue>
          </GameInfoItem>

          <GameInfoItem>
            <GameInfoTitle>Developer</GameInfoTitle>
            <GameInfoValue>{game.developers.map(developer => developer.name).join(', ')}</GameInfoValue>
          </GameInfoItem>

          <GameInfoItem>
            <GameInfoTitle>Publisher</GameInfoTitle>
            <GameInfoValue>{game.publishers.map(publisher => publisher.name).join(', ')}</GameInfoValue>
          </GameInfoItem>

          <GameInfoItem>
            <GameInfoTitle>Website</GameInfoTitle>
            <GameInfoValue>{game.website ? <a href={game.website}>{game.website}</a> : '-'}</GameInfoValue>
          </GameInfoItem>
        </GameInfoBlock>

        <GameScreenshotsBlock>
          <GameScreenshotsTitle>Game screenshots </GameScreenshotsTitle>
          <ImageGallery
            items={gameScreenshots.map(item => ({ original: item.image, thumbnal: item.image }))}
            lazyLoad
            showPlayButton={false}
            useBrowserFullscreen={false}
          />
        </GameScreenshotsBlock>
      </Wrapper>
    </Container>
  );
};

export default GameComponents;
