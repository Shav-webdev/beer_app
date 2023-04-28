import { IBeerItem } from 'helpers/global.types';
import './styles.scss';

interface IBeerProps {
  beer: IBeerItem;
}

const BeerListItem = ({ beer }: IBeerProps) => {
  return (
    <div className={'card'}>
      <div className={'card-header'}>
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className={'card-body'}>
        <h2><strong>{beer.name}</strong></h2>
        <div className={'desc'}>
          <i>
            {beer?.description.length > 400
              ? `${beer?.description.slice(0, 200)}...`
              : beer?.description}
          </i>
        </div>
        <div className={'food-pairing'}>
          <h4><u>Food pairing: </u></h4>
          {beer?.food_pairing?.length
            ? beer.food_pairing.map((el: string) => <i key={el}>{el}, </i>)
            : null}
        </div>
      </div>
    </div>
  );
};

export default BeerListItem;
