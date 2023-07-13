import clsx from "clsx";
import {CircleIcon} from "./icons/circle-icon";
import {CrossIcon} from "./icons/cross-icon";
import {UiButton} from "../uikit/ui-button";

const cells = new Array(19 * 19).fill(null)

export function GameField({clasName}) {

    return (
        <div className={clsx(clasName, "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7")}>
            <div className="flex gap-3 items-center">
                <div className="mr-auto">
                    <div className="flex gap-1 items-center text-xl leading-tight font-semibold">
                        Move: <CircleIcon className="w-5 h-5"/>
                    </div>
                    <div className="flex gap-1 items-center text-xs leading-tight text-slate-400">
                        Next: <CrossIcon/>
                    </div>
                </div>
                <UiButton size="md" variant="primary">Draw</UiButton>
                <UiButton size="md" variant="outline">Pass</UiButton>
            </div>
            <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3">
                {cells.map((_, i) =>
                    <button key={i} className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">

                    </button>)
                }
            </div>
        </div>
    )
}