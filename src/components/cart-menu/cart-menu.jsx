import { calcTotalPrice } from '../utils';
import { Button } from '../button';
import { useSelector } from 'react-redux';
import { CartItem } from '../cart-item';

import './cart-menu.scss';

export const CartMenu = ({ onClick }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div className="cart-menu">
      <div className="cart-menu__game-list">
        {items.length > 0
          ? items.map(game => (
            <CartItem
              key={game.image}
              title={game.title}
              price={game.price}
              id={game.id}
            />
          ))
          : 'Корзина пуста'}
      </div>
      {
        items.length > 0 ? (
          <div className="cart-menu__arrange">
            <div className="cart-menu__total-price">
              <span>Итого:</span>
              <span>{calcTotalPrice(items)} грн</span>
            </div>
            <Button type="primary" size="m" onClick={onClick}>
              Оформить заказ
            </Button>
          </div>
        ) : null
      }
    </div>
  )
};
