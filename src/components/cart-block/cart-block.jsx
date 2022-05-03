import { BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import './cart-block.scss';

export const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPice = items.reduce((acc, game) => acc += game.price, 0);

  return (
    <div className="cart-block">
      <BiCartAlt size={30} className="cart-block__icon" />
      <span className="cart-block__total-price">{totalPice} грн</span>
    </div>
  )
};
