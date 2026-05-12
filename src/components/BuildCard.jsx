// src/components/BuildCard.jsx
// Tauma: Refatorando o cartão de build para aceitar tags, autor e versão
import React from 'react';
import { Link } from 'react-router-dom';
import Tags from './Tag';

// Tauma: Importando todas as imagens de ascendência (assim fica tudo pronto para uso)
import imgAssassin from '../assets/ascendancies/assassin.png';
import imgBerserker from '../assets/ascendancies/berserker.png';
import imgGuardian from '../assets/ascendancies/guardian.png';
import imgChampion from '../assets/ascendancies/champion.png';
import imgChieftain from '../assets/ascendancies/chieftain.png';
import imgDeadeye from '../assets/ascendancies/deadeye.png';
import imgElementalist from '../assets/ascendancies/elementalist.png';
import imgGladiator from '../assets/ascendancies/gladiator.png';
import imgHierophant from '../assets/ascendancies/hierophant.png';
import imgInquisitor from '../assets/ascendancies/inquisitor.png';
import imgJuggernaut from '../assets/ascendancies/juggernaut.png';
import imgNecromancer from '../assets/ascendancies/necromancer.png';
import imgOccultist from '../assets/ascendancies/occultist.png';
import imgPathfinder from '../assets/ascendancies/pathfinder.png';
import imgSaboteur from '../assets/ascendancies/saboteur.png';
import imgSlayer from '../assets/ascendancies/slayer.png';
import imgTrickster from '../assets/ascendancies/trickster.png';
import imgWarden from '../assets/ascendancies/warden.png';

const imagensAscendancia = {
    assassin: imgAssassin,
    berserker: imgBerserker,
    guardian: imgGuardian,
    champion: imgChampion,
    chieftain: imgChieftain,
    deadeye: imgDeadeye,
    elementalist: imgElementalist,
    gladiator: imgGladiator,
    hierophant: imgHierophant,
    inquisitor: imgInquisitor,
    juggernaut: imgJuggernaut,
    necromancer: imgNecromancer,
    occultist: imgOccultist,
    pathfinder: imgPathfinder,
    saboteur: imgSaboteur,
    slayer: imgSlayer,
    trickster: imgTrickster,
    warden: imgWarden,
};

export default function BuildCards({ build }) {
    // Pegando as informações de dentro do objeto build
    const { id, versao, titulo, comentario, autor, autorSocial, data, tags, linkPob, ascendencia } = build;

    // Se não tiver imagem da ascendência, usa uma preta padrão ou fica sem fundo
    const imgFundo = imagensAscendancia[ascendencia.toLowerCase()] || '';

    const backgroundStyle = {
        background: `linear-gradient(to right, rgba(29, 29, 44, 1) 45%, rgba(29, 29, 44, 0.4) 100%), url(${imgFundo})`,
        backgroundPosition: 'right center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        border: '1px solid #36364a',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '15px',
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '160px',
        backgroundColor: '#1d1d2c',
        transition: 'transform 0.2s', // Pequena animação ao passar o mouse
    };

    return (
        <Link 
            to={`/build/${id}`} 
            style={backgroundStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            {/* Versão e Título */}
            <h2 style={{ fontSize: '1.15rem', margin: '0 0 5px 0', fontWeight: 'bold', maxWidth: '80%' }}>
                <span style={{ color: '#fff', marginRight: '5px' }}>[{versao}]</span>
                {titulo}
            </h2>

            {/* Autor e Data */}
            <div style={{ fontSize: '0.85rem', color: '#b0b0b0', marginBottom: '8px' }}>
                By 
                <a 
                    href={autorSocial} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: '#ffc107', marginLeft: '5px', textDecoration: 'none', fontWeight: 'bold' }}
                    onClick={(e) => e.stopPropagation()} 
                >
                    {autor}
                </a>
                <span style={{ margin: '0 8px' }}>·</span>
                {data}
            </div>

            {/* Comentário Breve */}
            <p style={{ fontSize: '0.85rem', color: '#d1d1d1', margin: '0 0 12px 0', fontStyle: 'italic', maxWidth: '70%' }}>
                {comentario}
            </p>

            {/* Tags (Mapper, Bosser, etc) */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {tags && tags.map((tag, index) => (
                    <Tags key={index} texto={tag} />
                ))}
            </div>

            {/* Link do PoB (botãozinho discreto) */}
            <div style={{ marginTop: '12px' }}>
                <span 
                    style={{ 
                        color: '#00D1FF', 
                        fontSize: '0.75rem', 
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(linkPob, '_blank');
                    }}
                >
                    Path of Building (PoB)
                </span>
            </div>
        </Link>
    );
}