import Intersection from "./Intersection";

export default function Grid({ width, height, intersectionLength }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `${`${intersectionLength}px `.repeat(width)}`.trim()
        }}>
            {
                [...Array(width * height)].map((_, i) => 
                    <Intersection 
                        length={intersectionLength}
                        dot={'none'}
                        connected={'none'}
                    />
                )
            }
        </div>
    )
}