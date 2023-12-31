import {CrossIcon} from "../game-new/ui/icons/cross-icon"
import {CircleIcon} from "../game-new/ui/icons/circle-icon"
import {TriangleIcon} from "../game-new/ui/icons/triangle-icon"
import {SquareIcon} from "../game-new/ui/icons/square-icon"
import {GAME_SYMBOLS} from "./constants";

export function GameSymbol({symbol, className}) {
    const Icon =
        {
            [GAME_SYMBOLS.CROSS]: CrossIcon,
            [GAME_SYMBOLS.CIRCLE]: CircleIcon,
            [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
            [GAME_SYMBOLS.SQUARE]: SquareIcon
        }[symbol] ?? CrossIcon

    return <Icon className={className}/>
}