import { useState } from "react";

export default function Intersection({ length, dot, connected }) {
    const quadrantString = connected.split(' ')[1];

    function quadrantMarkup(key) {
        return <div 
            key={key}
            style={{
                width: `${length / 2}px`,
                height: `${length / 2}px`,
                border: 'thin solid black'
        }}></div>
    }

    function linePositionAdjustments() {
        if (connected !== 'none') {
            switch (quadrantString) {
                case 'tl':
                    return { top: 8, left: 4 };
                case 't':
                    return { top: 4, left: 4 };
                case 'tr':
                    return { top: 3, left: 7 };
                case 'r':
                    return { top: 5, left: 8 };
                case 'br':
                    return { top: 6, left: 9 };
                case 'b':
                    return { top: 8, left: 9 };
                case 'bl':
                    return { top: 11, left: 7 };
                case 'l':
                    return { top: 10, left: 4 };
            }
        }
        return { top: 0, left: 0 };
    }

    function lineLengthAdjustments() {
        if (connected !== 'none') {
            switch(quadrantString) {
                case 't':
                case 'r':
                case 'b':
                case 'l':
                    return length / 2;
                case 'tl':
                case 'tr':
                case 'br':
                case 'bl':
                    return Math.sqrt(Math.pow(length / 2, 2) + Math.pow(length / 2, 2));
            }
        }
        return 0;
    }

    function lineAngle() {
        switch (quadrantString) {
            case 'tl':
                return 'rotate(-135deg)';
            case 't':
                return 'rotate(-90deg)';
            case 'tr':
                return 'rotate(-45deg)';
            case 'r':
                return 'none';
            case 'br':
                return 'rotate(45deg)';
            case 'b':
                return 'rotate(90deg)';
            case 'bl':
                return 'rotate(135deg)';
            case 'l':
                return 'rotate(180deg)';
            case 'none':
                return 'none';
        }
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
                <div
                    style={{
                        width: `${lineLengthAdjustments()}px`,
                        height: `${lineLengthAdjustments()}px`,
                        borderTop: `${connected !== 'none' ? `thick solid ${connected.split(' ')[0]}` : 'none'}`,
                        position: 'absolute',
                        top: `${length / 2 - (length / 5) / 2 + linePositionAdjustments().top}px`,
                        left: `${length / 2 - (length / 5) / 2 + linePositionAdjustments().left}px`,
                        transformOrigin: 'top left',
                        transform: `${lineAngle()}`,
                        zIndex: '9'
                    }}
                ></div>
            </div>  
        </>
    )
}