// src/Tags.jsx
import React from 'react';

export default function Tags({ texto }) {
    const estilo = {
        backgroundColor: '#2e2e2e',
        color: '#ffd700',
        padding: '5px 10px',
        borderRadius: '4px',
        marginRight: '5px',
        fontSize: '12px',
        border: '1px solid #ffd700'
    };

    return (
        <span style={estilo}>
            {texto}
        </span>
    );
}