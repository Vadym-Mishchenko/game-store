import { Button } from '../button/button';
import './game-buy.scss';

export const GameBuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} грн.</span>
      <Button
        type='primary'
        onClick ={() => null}
      >
        В Корзину
      </Button>
    </div>
  )
};
