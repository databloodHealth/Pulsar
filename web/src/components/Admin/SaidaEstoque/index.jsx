
import { useState } from 'react';
import Select from 'react-select';

import styles from './style.module.css';
import doadores from '@/data/doadores';

import { IoIosClose } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';

const tiposSanguineos = [
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' },
];

const opcoesDoadores = doadores.map((doador) => ({
    value: doador.value,
    label: doador.nome,
    documento: doador.documento,
    email: doador.email,
    tipoSanguineo: doador.tipo,
}));

export default function ModalSaidaEstoque({ onClose, onConfirm }) {
    const [isClosing, setIsClosing] = useState(false);
    const [tipoSanguineo, setTipoSanguineo] = useState(null);
    const [quantidade, setQuantidade] = useState('');
    const [doadorOrigem, setDoadorOrigem] = useState(null);
    const [dataUtilizacao, setDataUtilizacao] = useState('');

    function handleClose() {
        if (isClosing) return;

        setIsClosing(true);

        setTimeout(() => {
            onClose?.();
        }, 300);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (
            !tipoSanguineo ||
            !quantidade ||
            Number(quantidade) < 1 ||
            !dataUtilizacao
        ) {
            return;
        }

        const dadosUtilizacao = {
            tipoSanguineo: tipoSanguineo.value,
            quantidade: Number(quantidade),
            doadorId: doadorOrigem?.value ?? null,
            doador: doadorOrigem?.label ?? null,
            data: dataUtilizacao,
        };

        onConfirm?.(dadosUtilizacao);
        handleClose();
    }

    const selectStyles = {
        control: (base, state) => ({
            ...base,
            minHeight: '3rem',
            backgroundColor: '#efeded',
            border: state.isFocused
                ? '1px solid #8ba6c3'
                : '1px solid transparent',
            borderRadius: '6px',
            boxShadow: 'none',
            cursor: 'pointer',
            '&:hover': {
                borderColor: '#8ba6c3',
            },
        }),

        valueContainer: (base) => ({
            ...base,
            padding: '0.4rem 0.8rem',
        }),

        singleValue: (base) => ({
            ...base,
            color: '#3f3f3f',
            fontSize: '0.9rem',
        }),

        placeholder: (base) => ({
            ...base,
            color: '#7b8490',
            fontSize: '0.9rem',
        }),

        input: (base) => ({
            ...base,
            color: '#3f3f3f',
            fontSize: '0.9rem',
        }),

        indicatorSeparator: () => ({
            display: 'none',
        }),

        dropdownIndicator: (base) => ({
            ...base,
            color: '#8a7773',
            paddingRight: '0.8rem',
        }),

        menu: (base) => ({
            ...base,
            zIndex: 3000,
            overflow: 'hidden',
            borderRadius: '6px',
        }),

        menuPortal: (base) => ({
            ...base,
            zIndex: 3000,
        }),

        option: (base, state) => ({
            ...base,
            padding: '0.7rem 0.8rem',
            fontSize: '0.9rem',
            color: '#3f3f3f',
            backgroundColor: state.isSelected
                ? '#dce8f3'
                : state.isFocused
                    ? '#f3f6f9'
                    : '#fff',
            cursor: 'pointer',
        }),
    };

    const filtroDoador = (opcao, textoBusca) => {
        const busca = textoBusca.toLowerCase();

        return (
            opcao.label.toLowerCase().includes(busca) ||
            (opcao.data.documento || '').toLowerCase().includes(busca)
        );
    };

    return (
        <div
            className={`${styles.fundoModalEstoque} ${isClosing ? styles.closing : ''
                }`}
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                    handleClose();
                }
            }}
        >
            <form
                className={styles.modalSaidaEstoque}
                role="dialog"
                aria-modal="true"
                aria-labelledby="tituloSaidaEstoque"
                onSubmit={handleSubmit}
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className={styles.title}>
                    <div>
                        <h1 id="tituloSaidaEstoque">
                            Registrar utilização de bolsa
                        </h1>

                        <h2>
                            Informe os dados da saída de sangue do estoque.
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

                <div className={styles.topInputs}>
                    <div className={styles.tipoSanguineo}>
                        <label htmlFor="tipoSanguineo">
                            TIPO SANGUÍNEO
                        </label>

                        <Select
                            inputId="tipoSanguineo"
                            aria-label="Tipo sanguíneo"
                            options={tiposSanguineos}
                            value={tipoSanguineo}
                            onChange={setTipoSanguineo}
                            styles={selectStyles}
                            placeholder="Selecionar"
                            noOptionsMessage={() => 'Nenhum tipo encontrado'}
                            isSearchable={false}
                            isClearable={false}
                        />
                    </div>

                    <div className={styles.quantidade}>
                        <label htmlFor="quantidadeBolsas">
                            QUANTIDADE (BOLSAS)
                        </label>

                        <input
                            type="number"
                            name="quantidadeBolsas"
                            id="quantidadeBolsas"
                            min="1"
                            step="1"
                            placeholder="Ex: 1"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={styles.doadorOrigem}>
                    <label htmlFor="doadorOrigem">
                        DOADOR DE ORIGEM (OPCIONAL)
                    </label>

                    <div className={styles.buscaDoador}>
                        <IoSearchOutline />

                        <Select
                            inputId="doadorOrigem"
                            aria-label="Buscar doador por nome ou CPF"
                            options={opcoesDoadores}
                            value={doadorOrigem}
                            onChange={setDoadorOrigem}
                            styles={{
                                ...selectStyles,
                                control: (base, state) => ({
                                    ...selectStyles.control(base, state),
                                    minHeight: '3rem',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                }),
                                dropdownIndicator: () => ({
                                    display: 'none',
                                }),
                                menu: (base) => ({
                                    ...base,
                                    zIndex: 3000,
                                }),
                            }}
                            placeholder="Buscar por nome ou CPF..."
                            noOptionsMessage={() => 'Nenhum doador encontrado'}
                            filterOption={filtroDoador}
                            isSearchable
                            isClearable
                            menuPortalTarget={
                                typeof document !== 'undefined'
                                    ? document.body
                                    : undefined
                            }
                        />
                    </div>
                </div>

                <div className={styles.dataUtilizacao}>
                    <label htmlFor="dataUtilizacao">
                        DATA DA UTILIZAÇÃO
                    </label>

                    <input
                        type="date"
                        name="dataUtilizacao"
                        id="dataUtilizacao"
                        value={dataUtilizacao}
                        onChange={(e) => setDataUtilizacao(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.botoes}>
                    <button
                        type="submit"
                        className={styles.confirmarUtilizacao}
                        disabled={isClosing}
                    >
                        Confirmar Utilização
                    </button>

                    <button
                        type="button"
                        className={styles.cancelar}
                        onClick={handleClose}
                        disabled={isClosing}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}
