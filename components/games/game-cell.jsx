import { GameSymbol } from './game-symbol'
import styles from '../games/game.module.css'

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={`${styles['cell']} ${isWinner ? styles['cell--win'] : ''}`}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  )
}