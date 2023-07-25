import {MOVE_ORDER} from "../constants";

export function getNextMove(currentMove, playersCount, playersTimeOver) {

    const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
        (symbol) => !playersTimeOver.includes(symbol)
    )
    const nexMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1
    return slicedMoveOrder[nexMoveIndex] ?? slicedMoveOrder[0]
}