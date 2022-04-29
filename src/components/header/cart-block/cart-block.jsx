import { BiCartAlt } from 'react-icons/bi';
import './cart-block.scss';

export const CardBlock = () => {
  return (
    <div className="cart-block">
      <BiCartAlt size={30} className="cart-block__icon"/>
      <span className="cart-block__total-price">994 грн</span>
    </div>
  )
}
