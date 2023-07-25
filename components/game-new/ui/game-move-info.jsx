import {GameSymbol} from "../../game/game-symbol";

export function GameMoveInfo({currentMove, nextMove}) {
    return (
        <>
            <div className="flex gap-1 items-center text-xl leading-tight font-semibold">
                Move: <GameSymbol symbol={currentMove} className="w-5 h-5"/>
            </div>
            <div className="flex gap-1 items-center text-xs leading-tight text-slate-400">
                Next: <GameSymbol symbol={nextMove} className="w-3 h-3"/>
            </div>
        </>
    )
}