import clsx from "clsx";
import {GameSymbol} from "../../game/game-symbol";
import Image from "next/image";

export function PlayerInfo({
                               isRight,
                               name, rating,
                               avatar, symbol,
                               isTimerRunning,
                               seconds
                           }) {

    const minuteString = String(Math.floor(seconds / 60)).padStart(2, "0")
    const secondsString = String(seconds % 60).padStart(2, "0")

    const isDanger = seconds < 10

    const getTimerColor = () => {
        if (isTimerRunning) {
            return isDanger ? "text-orange-600" : "text-slate-900"
        }
        return "text-slate-200"
    }
    return (
        <div className="flex gap-3 items-center">
            <div className={clsx("relative", isRight && "order-3")}>
                <div className={"flex gap-2 text-start items-center text-teal-600 w-44"}>
                    <Image src={avatar} alt="avatar" width={48} height={48} unoptimized/>
                    <div className="overflow-hidden">
                        <div className="text-lg leading-tight truncate">{name}</div>
                        <div className="text-slate-400 text-xs leading-tight">Rating: {rating}</div>
                    </div>
                </div>
                <div
                    className="flex w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center">
                    <GameSymbol symbol={symbol}/>
                </div>
            </div>
            <div className={clsx("h-6 w-px bg-sky-200", isRight && "order-2")}/>
            <div className={clsx(
                "text-lg font-semibold w-[60px]",
                isRight && "order-1",
                getTimerColor()
            )}
            >
                {minuteString}:{secondsString}
            </div>
        </div>
    )
}