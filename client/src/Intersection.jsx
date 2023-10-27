import { useState } from "react";

export default function Intersection({ length, dot, connected }) {
    function quadrantMarkup(key) {
        return <div 
            key={key}
            style={{
                width: `${length / 2}px`,
                height: `${length / 2}px`,
                border: 'thin solid black'
        }}></div>
    }

    return (
        <div style={{ 
            width: {length}, 
            height: {length},
            display: 'grid',
            gridTemplateColumns: `${length / 2}px ${length / 2}px`
        }}>
            {[1, 2, 3, 4].map(n => quadrantMarkup(n))}
        </div>  
    )
}