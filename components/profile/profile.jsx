import Image from "next/image";
import avatarSrc from "../header/avatar.png";
import clsx from "clsx";

export function Profile({className}) {
    return (
        <div className={clsx("flex gap-2 text-start items-center text-teal-600" ,className)}>
            <Image
                src={avatarSrc} alt="avatar"
                width={48}
                height={48}
                unoptimized/>
            <div>
                <div className="text-lg leading-tight">Viachaslau</div>
                <div className="text-slate-400 text-xs leading-tight">Rating: 1230</div>
            </div>
        </div>
    )
}