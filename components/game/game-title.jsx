import Link from "next/link";
import {ArrowLeftIcon} from "../game-new/ui/icons/arrow-left-icon";
import {StarIcon} from "../game-new/ui/icons/star-icon";
import {PersonIcon} from "../game-new/ui/icons/person-icon";
import {TimeIcon} from "../game-new/ui/icons/time-icon";

export function GameTitle({playersCount}) {
    return (
        <div className="pl-2">
            <Link href="#" className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5">
                <ArrowLeftIcon/>
                To main
            </Link>
            <h1 className='text-4xl leading-tight'>Tic-Tac-Toe</h1>
            <div className="flex items-center gap-3 text-xs text-slate-400">
                <StarIcon/>
                <div className="flex items-center gap-1">
                    <PersonIcon/>
                    {playersCount}
                </div>
                <div className="flex items-center gap-1">
                    <TimeIcon/>
                    1 minute per turn
                </div>
            </div>
        </div>
    )
}