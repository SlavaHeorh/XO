import Image from "next/image";
import avatarSrc from "../header/avatar.png";
import clsx from "clsx";



export function Profile({className, name, rating, avatar = avatarSrc }) {
    return (
        <div className={clsx("flex gap-2 text-start items-center text-teal-600" ,className)}>
            <Image
                src={avatar} alt="avatar"
                width={48}
                height={48}
                unoptimized/>
            <div className="overflow-hidden">
                <div className="text-lg leading-tight truncate">{name}</div>
                <div className="text-slate-400 text-xs leading-tight">Rating: {rating}</div>
            </div>
        </div>
    )
}