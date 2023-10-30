import { useEffect, useState } from "react";
import Grid from "./Grid";

export default function Game({ game }) {
    return (
        <>
            <Grid 
                boardState={game.state}
                width={game.boardWidth}
                height={game.boardHeight}
                intersectionLength={15}
            />
        </>
    )
}