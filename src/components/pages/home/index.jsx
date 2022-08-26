import { useRouter } from 'next/router';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getGamesListByFilters } from '../../../api';
import GamesGrid from '../../gamesGrid';
import { ContainerWide } from '../../ui/common';
import LoadingCircle from '../../ui/loadingCircle';
import { FiltersBlock, GamesBlock, LoadMoreBlock } from './components';
import OrderingDropdown from './orderingDropdown';
import PlatformsDropdown from './platformsDropdown';
import SearchInput from './searchInput';

const HomeComponents = ({ games, platforms }) => {
  const router = useRouter();
  const queries = router.query;

  const [gamesArray, setGamesArray] = useState(games.results);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(queries.search || '');
  const [ordering, setOrdering] = useState(queries.ordering || '-added');
  const [platform, setPlatform] = useState(queries.platform || '');
  const [loading, setLoading] = useState(false);

  const loadNextPage = newPage => {
    setPage(newPage);
    getGamesListByFilters({ page: newPage, ordering }).then(response => {
      setGamesArray(prev => [...prev, ...response.results]);
    });
  };

  const handleSubmitSearch = () => {
    setPage(1);
    setLoading(true);

    const params = new URLSearchParams({
      ...queries,
      search,
    }).toString();

    router.push(`${router.pathname}?${params}`, `${router.pathname}?${params}`, { shallow: true });

    const filters = platform
      ? {
          page: 1,
          ordering,
          search,
          parent_platforms: platform,
        }
      : { page: 1, ordering, search };

    getGamesListByFilters(filters).then(response => {
      setGamesArray(response.results);
      setLoading(false);
    });
  };

  const handleChangeOrdering = order => {
    setOrdering(order);
    setPage(1);
    setLoading(true);

    const params = new URLSearchParams({
      ...queries,
      ordering: order,
    }).toString();

    router.push(`${router.pathname}?${params}`, `${router.pathname}?${params}`, { shallow: true });

    const filters = platform
      ? {
          page: 1,
          ordering: order,
          search,
          parent_platforms: platform,
        }
      : { page: 1, ordering: order, search };

    getGamesListByFilters(filters).then(response => {
      setGamesArray(response.results);
      setLoading(false);
    });
  };

  const handleChangePlatform = platform => {
    setPlatform(platform);
    setPage(1);
    setLoading(true);

    const query = queries;
    delete query['platform'];

    const queryParams = platform
      ? {
          ...query,
          platform,
        }
      : query;
    const params = new URLSearchParams(queryParams).toString();

    router.push(`${router.pathname}?${params}`, `${router.pathname}?${params}`, { shallow: true });

    const filters = platform
      ? {
          page: 1,
          ordering,
          search,
          parent_platforms: platform,
        }
      : { page: 1, ordering, search };

    getGamesListByFilters(filters).then(response => {
      setGamesArray(response.results);
      setLoading(false);
    });
  };

  return (
    <ContainerWide className="wrap">
      <FiltersBlock>
        <SearchInput value={search} onChange={setSearch} onSubmit={handleSubmitSearch} />
        <OrderingDropdown ordering={ordering} changeOrdering={handleChangeOrdering} />
        <PlatformsDropdown platforms={platforms} selectedPlatform={platform} changePlatform={handleChangePlatform} />
      </FiltersBlock>
      <GamesBlock>
        {loading ? (
          <LoadMoreBlock>
            <LoadingCircle size={32} />
          </LoadMoreBlock>
        ) : (
          <InfiniteScroll
            next={() => loadNextPage(page + 1)}
            dataLength={gamesArray.length}
            hasMore={gamesArray.length < games.count}
            className="infinite-scroll"
            loader={
              <LoadMoreBlock>
                <LoadingCircle size={32} />
              </LoadMoreBlock>
            }
          >
            <GamesGrid games={gamesArray} />
          </InfiniteScroll>
        )}
      </GamesBlock>
    </ContainerWide>
  );
};

export default HomeComponents;
