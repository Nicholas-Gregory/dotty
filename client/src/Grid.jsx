import Intersection from "./Intersection";

export default function Grid({ boardState, width, height, intersectionLength }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `${`${intersectionLength / 2}px `.repeat(width)}`.trim(),
            gridTemplateRows: `${`${intersectionLength / 2}px `.repeat(height)}`.trim()
        }}>
            {
                boardState?.map((intersection, i) => 
                    <Intersection 
                        key={i}
                        length={intersectionLength}
                        dot={intersection.dot}
                        connected={intersection.connected}
                    />
                )
            }
        </div>
    )
}