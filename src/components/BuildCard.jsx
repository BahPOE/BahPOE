// src/components/BuildCard.jsx
import React from 'react';
// FIZ AQUI: Importei o componente Link nativo do React Router Dom
import { Link } from 'react-router-dom';
import Tags from './Tag';

import imgAscendancia from '../assets/ascendancies/assassin.png';

export default function BuildCards({ titulo, linkPob, ascendencia, id }) {

    // FIZ AQUI: Construí o CSS do Background Dinâmico!
    // Usamos um rgba escuro na esquerda (x% = 30%) cobrindo até desaparecer (rgba com opacidade 0 na direita).
    const backgroundStyle = {
        background: `linear-gradient(to right, rgba(29, 29, 44, 1) 35%, rgba(29, 29, 44, 0) 100%), url(${imgAscendancia})`,
        backgroundPosition: 'right 5% center', // Empurra a imagem um pouco pra direita e centraliza
        backgroundSize: '45%', // Deixa a imagem pegando metade direita do card
        backgroundRepeat: 'no-repeat',
        border: '1px solid #36364a',
        padding: '24px',
        borderRadius: '10px',
        marginBottom: '20px',
        color: 'white',
        textDecoration: 'none', // Remove os sublinhados azuis horríveis de link
        display: 'block' // Diz pro navegador que o Link tem forma de bloco e abraça tudo
    };

    return (
        /* FIZ AQUI: A div de fora se transformou em um Link. 
           Quando você clicar no card, ele vai pra /build/ALGUM_ID (Coloquei '1' se não tiver ID pra teste) */
        <Link to={`/build/${id || 1}`} style={backgroundStyle}>

            <h2 style={{ fontSize: '1.3rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                {titulo}
            </h2>

            <div style={{ marginBottom: '15px' }}>
                {/* O botão do PoB. 
                    e.stopPropagation() IMPEDE que um clique NESSE botão ative o clique do <Link> maior do card! */}
                <a
                    href={linkPob}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#00D1FF', fontSize: '0.9rem' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    Link do Path of Building
                </a>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
                <Tags texto="Tank" />
                <Tags texto="Assassin" />
                <Tags texto="Poison" />
            </div>

        </Link>
    );
}