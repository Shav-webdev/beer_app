import { useDispatch, useSelector } from 'react-redux';
import './styles.scss'
import { AppDispatch } from 'store';
import { FC, useCallback, useContext, useEffect, useState } from 'react';
import BeerListItem from './BeerListItem';
import { IBeerItem } from 'helpers/global.types';
import { getBeersAsync } from 'store/beer/beerThunks';
import { beersListSelector } from 'store/beer/beerSlice';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../Loader';

const BeersList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const beersList: IBeerItem[] = useSelector(beersListSelector);

  useEffect(() => {
    dispatch(getBeersAsync({
      page,
      per_page: 10
    }))
  }, []);


  const nextPage = useCallback(() => {
    setPage(prevState => prevState + 1)
    dispatch(getBeersAsync({
      page: page + 1,
      per_page: 10
    }))
  }, [page])

  return (
    <div >
      <InfiniteScroll className={'cards-wrapper'} next={nextPage} hasMore={true} loader={<Loader />} dataLength={beersList?.length} >
        {
          beersList?.map((beer: IBeerItem) => {
            return <BeerListItem beer={beer} key={beer.id} />
          })
        }
      </InfiniteScroll>

    </div>

  )
}

export default BeersList;