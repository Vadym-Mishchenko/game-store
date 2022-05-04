import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';
import { CartMenu } from '../cart-menu/cart-menu';
import { useState } from 'react';
import { ItemsInCart } from '../items-in-cart';
import { calcTotalPrice } from '../utils';

import './cart-block.scss';

export const CartBlock = () => {
  const [isCardMenuVisible, setIsCardMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPice = calcTotalPrice(items);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={30}
        className="cart-block__icon"
        onClick={() => setIsCardMenuVisible(!isCardMenuVisible)}
      />
      {totalPice > 0 ? (
        <span className="cart-block__total-price">{totalPice} грн</span>
      ) : null}
      {isCardMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  )
};
