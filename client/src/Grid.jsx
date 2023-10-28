import Intersection from "./Intersection";

export default function Grid({ width, height, intersectionLength }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `${`${intersectionLength / 2}px `.repeat(width)}`.trim(),
            gridTemplateRows: `${`${intersectionLength / 2}px `.repeat(height)}`.trim()
        }}>
            {
                [...Array(width * height)].map((_, i) => 
                    <Intersection 
                        key={i}
                        length={intersectionLength}
                        dot={'blue'}
                        connected={'blue tl'}
                    />
                )
            }
        </div>
    )
}