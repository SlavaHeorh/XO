import { SYMBOL_O, SYMBOL_X } from './constsnts';

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-red-400";
    if (symbol === SYMBOL_X) return "text-green-400";
    return '';
  }
  return <span className={`text-xl ${getSymbolClassName(symbol)}`}>{symbol}</span>
}