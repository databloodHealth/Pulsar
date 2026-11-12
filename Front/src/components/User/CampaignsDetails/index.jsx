import styles from './style.module.css';
import { useState } from 'react';
import { IoMdCalendar } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { MdPeopleOutline } from 'react-icons/md';
import { FiClock } from 'react-icons/fi';

export default function CampaignDetailsModal({ data, publico, nome, local, duracao, imageSource, onClose, }) {

    const [isClosing, setIsClosing] = useState(false);

    //adiciona um delay antes de executar o onClose para poder fazer a animação
    function handleClose() {
        if (isClosing) return;

        setIsClosing(true);

        setTimeout(() => {
            onClose();
        }, 300);
    }

    return (
        <div className={`${styles.fundoTransModal} ${isClosing ? styles.closing : ''}`} onClick={handleClose}>
            
            <div
                className={styles.CampaignMcontainer}
                role="dialog"
                aria-modal="true"
                aria-labelledby="campaignTitle"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.topContainer}>
                    <img
                        src={imageSource}
                        alt={`Imagem de fundo da campanha ${nome}`}
                    />

                    <div className={styles.text}>
                        <h2>Campanha em destaque</h2>
                        <h1 id="campaignTitle">{nome}</h1>
                        <h3>{local}</h3>
                    </div>
                </div>

                <div className={styles.detalhes}>
                    <h2>Detalhes importantes</h2>

                    <div>
                        <span><IoMdCalendar /></span>
                        <div>
                            <span>Data e horário</span>
                            <p>{data}</p>
                        </div>
                    </div>

                    <div>
                        <span><IoLocationOutline /></span>
                        <div>
                            <span>Local</span>
                            <p>{local}</p>
                        </div>
                    </div>

                    <div>
                        <span><MdPeopleOutline /></span>
                        <div>
                            <span>Público</span>
                            <p>{publico}</p>
                        </div>
                    </div>

                    <div>
                        <span><FiClock /></span>
                        <div>
                            <span>Duração</span>
                            <p>{duracao}</p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className={styles.scheduleButton}
                    >
                        Agendar doação
                        <IoMdCalendar />
                    </button>
                </div>
            </div>
        </div>
    );
}