import AvatarComNumero from '@/components/GeradorAvatar';
import { useState } from 'react';
import Select from 'react-select';
import styles from './style.module.css';
import doadoresLista from '@/Data/Doadores';
import { IoIosClose } from 'react-icons/io';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { FaRegCheckCircle } from 'react-icons/fa';



const opcoesDoadores = doadoresLista.map((doador) => ({
    value: doador.value,
    label: doador.nome,
    tipo: 'DOADOR',
    email: doador.email,
    documento: doador.documento,
    tipoSanguineo: doador.tipo,
    status: doador.status,
}));

const unidades = [
    {
        value: '1',
        label: 'Centro de Hematologia Regional - Sul',
    },
    {
        value: '2',
        label: 'Centro de Hematologia Regional - Norte',
    },
    {
        value: '3',
        label: 'Hemocentro Central',
    },
];

export default function ModalEntradaEstoque({ onClose, onConfirm }) {

    const [menuDoadorAberto, setMenuDoadorAberto] = useState(false);

    const [isClosing, setIsClosing] = useState(false);
    const [doador, setDoador] = useState(
        opcoesDoadores[0] ?? null
    );
    const [dataDoacao, setDataDoacao] = useState('2027-01-01');
    const [unidadeDoacao, setUnidadeDoacao] = useState(unidades[0]);

    function handleClose() {
        if (isClosing) return;

        setIsClosing(true);

        setTimeout(() => {
            onClose?.();
        }, 300);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!doador || !dataDoacao || !unidadeDoacao) return;

        const dadosDoacao = {
            doadorId: doador.value,
            doador: doador.label,
            data: dataDoacao,
            unidadeId: unidadeDoacao.value,
            unidade: unidadeDoacao.label,
        };

        if (onConfirm) {
            onConfirm(dadosDoacao);
        }

        handleClose();
    }

    const selectStyles = {
        control: (base, state) => ({
            ...base,
            minHeight: '43px',
            backgroundColor: '#efeded',
            border: state.isFocused
                ? '1px solid #8ba6c3'
                : '1px solid transparent',
            borderRadius: '4px',
            boxShadow: 'none',
            cursor: 'pointer',
            '&:hover': {
                borderColor: '#8ba6c3',
            },
        }),

        valueContainer: (base) => ({
            ...base,
            padding: '4px 12px',
        }),

        singleValue: (base) => ({
            ...base,
            color: '#3f3f3f',
            fontSize: '0.9rem',
        }),

        placeholder: (base) => ({
            ...base,
            fontSize: '0.9rem',
            color: '#777',
        }),

        input: (base) => ({
            ...base,
            fontSize: '0.9rem',
            minHeight: '42px'
        }),

        indicatorSeparator: () => ({
            display: 'none',
        }),

        dropdownIndicator: (base) => ({
            ...base,
            color: '#647b92',
            paddingRight: '12px',
        }),

        menu: (base) => ({
            ...base,
            zIndex: 3000,
            borderRadius: '5px',
            overflow: 'hidden',
        }),

        menuPortal: (base) => ({
            ...base,
            zIndex: 3000,
        }),

        option: (base, state) => ({
            ...base,
            fontSize: '13px',
            padding: '11px 12px',
            color: '#3f3f3f',
            backgroundColor: state.isSelected
                ? '#dce8f3'
                : state.isFocused
                    ? '#f3f6f9'
                    : '#fff',
            cursor: 'pointer',
        }),
    };


    function formatDoador(option) {
        if (!option) return null;

        const nomeCompleto = option.nome || option.label || '';
        const partesNome = nomeCompleto.trim().split(/\s+/);

        const nome = partesNome[0] || '';
        const sobrenome = partesNome.slice(1).join(' ');

        return (
            <div className={styles.doadorOption}>
                <AvatarComNumero
                    nome={nome}
                    sobrenome={sobrenome}
                    numero={option.value}
                    largura='44px'
                    fontSize='1rem'
                />

                <div className={styles.doadorTexto}>
                    <span>{option.tipo || 'DOADOR'}</span>
                    <strong>{nomeCompleto}</strong>
                </div>
            </div>
        );
    }


    return (
        <div
            className={`${styles.fundoModalEstoque} ${isClosing ? styles.closing : ''
                }`}
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) handleClose();
            }}
        >
            <form
                className={styles.modalEstoqueContainer}
                role="dialog"
                aria-modal="true"
                aria-labelledby="campaignTitle"
                onSubmit={handleSubmit}
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className={styles.title}>
                    <div>
                        <h1 id="campaignTitle">
                            Registrar doação realizada
                        </h1>

                        <h2>
                            Confirme os detalhes técnicos da coleta.
                        </h2>
                    </div>

                    <button
                        type="button"
                        className={styles.fecharBotao}
                        onClick={handleClose}
                        aria-label="Fechar modal"
                    >
                        <IoIosClose />
                    </button>
                </div>

                <div className={styles.doador}>

                    <Select
                        inputId="doadorDoacao"
                        aria-label="Selecionar doador"
                        options={opcoesDoadores}
                        value={doador}
                        onChange={setDoador}
                        styles={{
                            ...selectStyles,

                            singleValue: (base) => ({
                                ...base,
                                display: menuDoadorAberto ? 'none' : 'block',
                            }),
                        }}
                        menuIsOpen={menuDoadorAberto}
                        onMenuOpen={() => setMenuDoadorAberto(true)}
                        onMenuClose={() => setMenuDoadorAberto(false)}
                        formatOptionLabel={formatDoador}
                        placeholder="Buscar doador..."
                        noOptionsMessage={() => 'Nenhum doador encontrado'}
                        isSearchable
                        isClearable={false}
                    />

                </div>

                <div className={styles.data}>
                    <label htmlFor="dataDoacao">
                        DATA DA COLETA
                    </label>

                    <input
                        name="dataDoacao"
                        type="date"
                        id="dataDoacao"
                        className={styles.inputDataDoacao}
                        value={dataDoacao}
                        onChange={(e) => setDataDoacao(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.unidade}>
                    <label htmlFor="unidadeDoacao">
                        UNIDADE DE COLETA
                    </label>

                    <Select
                        inputId="unidadeDoacao"
                        options={unidades}
                        value={unidadeDoacao}
                        onChange={setUnidadeDoacao}
                        styles={selectStyles}
                        placeholder="Selecione uma unidade"
                        isSearchable
                        isClearable={false}
                        menuPortalTarget={
                            typeof document !== 'undefined'
                                ? document.body
                                : undefined
                        }
                    />
                </div>

                <div className={styles.confirmacao}>
                    <IoShieldCheckmarkOutline />

                    <p>
                        Ao confirmar, os níveis de estoque do tipo O+
                        serão atualizados automaticamente em tempo
                        real no dashboard operacional.
                    </p>
                </div>

                <div className={styles.botoes}>
                    <button
                        type="button"
                        onClick={handleClose}
                        className={styles.cancelarBotao}
                        disabled={isClosing}
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        className={styles.confirmarBotao}
                        disabled={isClosing}
                    >
                        <FaRegCheckCircle />
                        Confirmar doação
                    </button>
                </div>
            </form>
        </div>
    );
}
