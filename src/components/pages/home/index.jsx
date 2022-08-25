import { useLayoutEffect, useState } from 'react';
import { ContainerWide } from '../../ui/common';
import { Column, Wrapper } from './components';
import GameItem from './gameItem';

const HomeComponents = ({ games, platforms }) => {
  const [gamesArray, setGamesArray] = useState(games);
  const [screenWidth, setScreenWidth] = useState(0);

  useLayoutEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const renderGames = () => {
    let columns = 1;
    switch (true) {
      case screenWidth >= 1500:
        columns = 5;
        break;
      case screenWidth >= 1200 && screenWidth < 1500:
        columns = 4;
        break;
      case screenWidth >= 900 && screenWidth < 1200:
        columns = 3;
        break;
      case screenWidth >= 600 && screenWidth < 900:
        columns = 2;
        break;
    }

    let columnsGames = [];

    for (let i = 0; i < gamesArray.length; i += columns) {
      for (let j = 0; j < columns; j++) {
        columnsGames[j] = columnsGames[j] ? [...columnsGames[j], games[i + j]] : [games[i + j]];
      }
    }

    return columnsGames.map((column, index) => (
      <Column key={index}>{column.map(game => (game ? <GameItem key={game.id} game={game} /> : null))}</Column>
    ));
  };

  return (
    <ContainerWide>
      <Wrapper>{renderGames()}</Wrapper>
    </ContainerWide>
  );
};

export default HomeComponents;
