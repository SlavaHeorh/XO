import {Game} from "../components/game-new";
import {Header} from "../components/header";


export default function HomePage() {

    return (
        <HomePageLayOut header={<Header/>}>
            <Game />
        </HomePageLayOut>
    )
}

function HomePageLayOut({header, children}) {
    return (
        <div className="bg-slate-50 min-h-screen">
            {header}
            <main className="pt-6 mx-auto w-max">
                {children}
            </main>
        </div>
    )
}
