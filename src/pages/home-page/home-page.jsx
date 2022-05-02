import { GameItem } from '../../components/game-item/game-item';
import { games } from '../../api/api-games';

import './home-page.scss';

export const HomePage = () => {
  return (
    <div className="home-page">
      {games.map(game => <GameItem game={game} key={game.id} />)}
    </div>
  )
};
