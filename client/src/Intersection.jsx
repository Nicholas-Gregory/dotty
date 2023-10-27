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
        <>            
            <div style={{ 
                width: {length}, 
                height: {length},
                display: 'grid',
                gridTemplateColumns: `${length / 2}px ${length / 2}px`,
                position: 'relative'
            }}>
                {[...Array(4)].map((_, i) => quadrantMarkup(i))}
                <div
                    style={{
                        width: `${length / 5}px`,
                        height: `${length / 5}px`,
                        backgroundColor: `${dot !== 'none' ? dot : 'transparent'}`,
                        borderRadius: '50%',
                        position: 'absolute',
                        top: `${length / 2 - (length / 5) / 2 + 1}px`,
                        left: `${length / 2 - (length / 5) / 2 + 1}px`,
                        zIndex: '10'
                    }}
                ></div>
            </div>  
        </>
    )
}