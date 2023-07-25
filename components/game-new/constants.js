import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.png";
import avatarSrc3 from "./ui/images/avatar-3.png";
import avatarSrc4 from "./ui/images/avatar-4.png";

export const GAME_SYMBOLS = {
    CIRCLE: "circle",
    CROSS: "cross",
    TRIANGLE: "triangle",
    SQUARE: "square"
}

export const MOVE_ORDER = [
    GAME_SYMBOLS.CROSS,
    GAME_SYMBOLS.CIRCLE,
    GAME_SYMBOLS.TRIANGLE,
    GAME_SYMBOLS.SQUARE
]

export const PLAYERS = [
    {
        id: 1,
        name: "PlayerOne",
        rating: 1230,
        avatar: avatarSrc1,
        symbol: GAME_SYMBOLS.CROSS
    },
    {
        id: 2,
        name: "PlayerTwo",
        rating: 1050,
        avatar: avatarSrc2,
        symbol: GAME_SYMBOLS.CIRCLE
    },
    {
        id: 3,
        name: "PlayerThree",
        rating: 940,
        avatar: avatarSrc3,
        symbol: GAME_SYMBOLS.TRIANGLE
    },
    {
        id: 4,
        name: "PlayerFour",
        rating: 1130,
        avatar: avatarSrc4,
        symbol: GAME_SYMBOLS.SQUARE
    }
]