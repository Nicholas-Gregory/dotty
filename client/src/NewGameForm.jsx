import { useState } from "react"

export default function NewGameForm({ onSubmit }) {
    const [boardWidthInput, setBoardWidthInput] = useState('');
    const [boardHeightInput, setBoardHeightInput] = useState('');
    const [playersInput, setPlayersInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        onSubmit({
            boardWidth: Number(boardWidthInput),
            boardHeight: Number(boardHeightInput),
            players: playersInput.split(',').map(p => p.trim())
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="board-width">Board width?</label>
            <input 
                type="text" 
                name="board-width"
                value={boardWidthInput}
                onChange={e => setBoardWidthInput(e.target.value)}
            />
            <label htmlFor="board-height">Board height?</label>
            <input 
                type="text"
                name="board-height"
                value={boardHeightInput}
                onChange={e => setBoardHeightInput(e.target.value)}
            />
            <label htmlFor="players">Players? (comma-separated names)</label>
            <input
                type="text"
                name="players"
                value={playersInput}
                onChange={e => setPlayersInput(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
}