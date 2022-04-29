import { Link } from 'react-router-dom';
import { CardBlock } from './cart-block/cart-block';
import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__store-title">Game Store</Link>
      </div>
      <div className="header__wrapper header__cart-btn-wrapper">
        <CardBlock />
      </div>
    </div>
  )
}
