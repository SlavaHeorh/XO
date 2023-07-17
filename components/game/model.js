import {MOVE_ORDER} from "./constants";

export function getNextMove(currentMove, playersCount) {

    const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount)
    const nexMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1
    return slicedMoveOrder[nexMoveIndex] ?? slicedMoveOrder[0]
}
export function computerWinner(cells,sequenceSize = 5, fieldsSize = 19) {

    const gap = Math.floor(sequenceSize / 2)

    function compareElements(indexes) {
        let result = true

        for(let i = 1; i < indexes.length; i++){
            result &&= !!cells[indexes[i]]
            result &&= cells[indexes[i]] === cells[indexes[i - 1]]
        }
        return result
    }

    function getSequenceIndexes(i) {
        const res = [
            [], // -
            [], // \
            [], // /
            [] // |
        ]

        for(let j = 0; j < sequenceSize; j++) {
            res[0].push(j - gap + i)
            res[1].push(fieldsSize * (j - gap) + (j - gap) + i)
            res[2].push(-fieldsSize * (j - gap) + (j - gap) + i)
            res[3].push(fieldsSize * (j - gap) + i)
        }

        const  x = i % fieldsSize
        if(x < gap || x >= fieldsSize - gap)  {
            res.shift();
            res.shift();
            res.shift();
        }

        return res
    }

    for(let i = 0; i < cells.length; i++) {

        if(cells[i]) {
            const indexRows = getSequenceIndexes(i)
            const winnerIndexes = indexRows.find(row => compareElements(row))

            if(winnerIndexes) {
                return winnerIndexes
            }
        }
    }
    return undefined
}