
import { useState } from 'react';
import { FaMapMarkerAlt, FaChevronDown, FaChevronRight, FaTint, FaHospital, FaClock } from 'react-icons/fa';

import style from '@/styles/ondeDoar.module.css';
import Header from '@/components/ui/LandingPage/Header';
import FooterLanding from '@/components/ui/LandingPage/FooterLanding';


const locais = [
    {
        id: 1,
        nome: 'Hemocentro regional de Taquaritinga',
        categoria: 'Hemocentro',
        tipo: 'hemocentro',
        distancia: '1,2 km',
        endereco: 'Av. Dr. Adail Nascimento, 1200',
        horario: 'seg a sex - 7h às 13h',
        posicao: { top: '35%', left: '42%' }
    },
    {
        id: 2,
        nome: 'Hospital São Lucas',
        categoria: 'Hospital',
        tipo: 'hospital',
        distancia: '2,8 km',
        endereco: 'R. Prudente de Moraes, 345',
        horario: 'seg a sáb - 8h às 16h',
        posicao: { top: '58%', left: '67%' }
    },
    {
        id: 3,
        nome: 'Unidade de coleta - Jaboticabal',
        categoria: 'Hemocentro',
        tipo: 'hemocentro',
        distancia: '15,6 km',
        endereco: 'Av. Carlos Berchieri, 100',
        horario: 'seg a sex - 7h às 12h',
        posicao: { top: '73%', left: '30%' }
    }
];


export default function OndeDoar() {

    const [filtroAtivo, setFiltroAtivo] = useState('todos');

    const [localizacao, setLocalizacao] = useState('taquaritinga');

    const locaisFiltrados = locais.filter((local) => {
        return filtroAtivo === 'todos' || local.tipo === filtroAtivo;
    });

    return (
        <>
            <Header />

            <main className={style.ondeDoarMain}>

                <section className={style.introducao}>

                    <div className={style.title}>
                        <h1>Onde doar?</h1>
                    </div>

                    <p>Encontre locais próximos onde você pode doar sangue.</p>

                </section>

                <div className={style.conteudoContainer}>

                    <aside className={style.painelLocais}>


                        <div className={style.localizacaoWrapper}>

                            <FaMapMarkerAlt className={style.localizacaoIcon} />

                            <select
                                value={localizacao}
                                onChange={(e) => setLocalizacao(e.target.value)}
                            >
                                <option value="null">
                                    Selecione sua localização
                                </option>

                                <option value="taquaritinga">
                                    Taquaritinga - Centro, nº 120
                                </option>

                                <option value="jaboticabal">
                                    Jaboticabal - Centro, nº 345
                                </option>

                                <option value="araraquara">
                                    Araraquara - Centro, nº 100
                                </option>

                                <option value="ribeirao">
                                    Ribeirão Preto - Centro, nº 50
                                </option>
                            </select>

                            <FaChevronDown className={style.selectArrow} />

                        </div>

                        <section className={style.filtrosContainer}>

                            <h2>Filtros</h2>

                            <div className={style.filtros}>

                                <button
                                    type="button"
                                    className={filtroAtivo === 'todos' ? style.filtroAtivo : ''}
                                    onClick={() => setFiltroAtivo('todos')}
                                >
                                    Todos
                                </button>

                                <button
                                    type="button"
                                    className={filtroAtivo === 'hemocentro' ? style.filtroAtivo : ''}
                                    onClick={() => setFiltroAtivo('hemocentro')}
                                >
                                    Hemocentros
                                </button>

                                <button
                                    type="button"
                                    className={filtroAtivo === 'hospital' ? style.filtroAtivo : ''}
                                    onClick={() => setFiltroAtivo('hospital')}
                                >
                                    Hospitais
                                </button>

                            </div>

                        </section>

                        <section className={style.locaisContainer}>

                            <h2>Locais próximos de você</h2>

                            <div className={style.listaLocais}>

                                {locaisFiltrados.map((local) => (

                                    <article
                                        className={style.localItem}
                                        key={local.id}
                                    >

                                        <div className={style.localIcon}>
                                            {local.tipo === 'hospital'
                                                ? <FaHospital />
                                                : <FaTint />
                                            }
                                        </div>

                                        <div className={style.localInfo}>

                                            <h3>{local.nome}</h3>

                                            <span className={style.categoriaLocal}>
                                                {local.categoria}
                                            </span>

                                            <p>
                                                <FaMapMarkerAlt />
                                                {local.distancia} - {local.endereco}
                                            </p>

                                            <p>
                                                <FaClock />
                                                {local.horario}
                                            </p>

                                        </div>

                                        <FaChevronRight className={style.localArrow} />

                                    </article>

                                ))}

                            </div>

                        </section>

                    </aside>

                    <section className={style.mapaContainer}>

                        <div className={style.mapa}>

                            <div className={`${style.rua} ${style.ruaHorizontal}`} />
                            <div className={`${style.rua} ${style.ruaVertical}`} />
                            <div className={`${style.rua} ${style.ruaDiagonal}`} />
                            <div className={`${style.rua} ${style.ruaSecundaria}`} />

                            {locaisFiltrados.map((local) => (

                                <div
                                    key={local.id}
                                    className={style.marcadorMapa}
                                    style={{
                                        top: local.posicao.top,
                                        left: local.posicao.left
                                    }}
                                    title={local.nome}
                                >
                                    {local.tipo === 'hospital'
                                        ? <FaHospital />
                                        : <FaTint />
                                    }

                                </div>

                            ))}

                            <span className={style.mapaLegenda}>
                                Taquaritinga - SP
                            </span>

                        </div>

                    </section>

                </div>

            </main>

            <FooterLanding />
        </>
    )
}
