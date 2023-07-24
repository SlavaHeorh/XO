import {Header} from "../components/header";
import {GameInfo, GameTitle, GameField, useGameState} from "../components/game";
import {useState} from "react";
import {GameSymbol} from "../components/game/game-symbol";
import {UiModal} from "../components/uikit/ui-modal";
import {UiButton} from "../components/uikit/ui-button";


export default function HomePage() {
    const [playersCount] = useState(4)

    const {cells, currentMove, nextMove, handleCellClick, winnerSequence, handlePlayerTimeOver, winnerSymbol} = useGameState(playersCount)

    return (
        <div className="bg-slate-50 min-h-screen">
            <Header/>
            <main className="pt-6 mx-auto w-max">
                <GameTitle playersCount={playersCount}/>
                <GameInfo
                    playersCount={playersCount}
                    currentMove={currentMove}
                    className="mt-4"
                    isWinner={!!winnerSymbol}
                    onPlayerTimeOver={handlePlayerTimeOver}
                />
                {winnerSymbol && (
                    <div className="my-4">
                        <GameSymbol symbol={winnerSymbol}/>
                    </div>
                )}
                <UiModal width="md" isOpen={winnerSymbol} onClose={() => console.log("close")}>
                    <UiModal.Header>Game over</UiModal.Header>
                    <UiModal.Body>
                        <div className="text-sm  ">Winner: <span className="text-teal-600">Player One</span></div>
                    </UiModal.Body>
                    <UiModal.Footer>
                        <UiButton size="md" variant="outline">Back</UiButton>
                        <UiButton size="md" variant="primary">Play again</UiButton>
                    </UiModal.Footer>
                </UiModal>
                <GameField
                    className="mt-6"
                    cells={cells}
                    currentMove={currentMove}
                    nextMove={nextMove}
                    handleCellClick={handleCellClick}
                    winnerSequence={winnerSequence}
                    winnerSymbol={winnerSymbol}/>
            </main>
        </div>
    )
}
