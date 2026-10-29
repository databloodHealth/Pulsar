import style from '@/styles/System/estoque.module.css'
import ButtonSystem from "@/components/ui/Button";
import PageTitle from "@/components/ui/PageTitle";
import SystemLayout from "@/layouts/SystemLayout";
import { FiFilter } from "react-icons/fi";
import { RiExportLine } from "react-icons/ri";
import StockCard from '@/components/ui/StorageCard';
import Graphic from '@/components/ui/Graphic';
import { Link } from 'react-router-dom';


const transactions = [
  {
    id: 1,
    date: 'Hoje, 14:20',
    type: 'O-',
    action: 'Saída de Emergência',
    actionType: 'emergency',
    units: '04',
    destination: 'UTI Geral - Ala Norte',
  },
  {
    id: 2,
    date: 'Hoje, 09:15',
    type: 'A+',
    action: 'Entrada Processada',
    actionType: 'entry',
    units: '12',
    destination: 'Laboratório Central',
  },
  {
    id: 3,
    date: 'Ontem, 18:45',
    type: 'B-',
    action: 'Saída Programada',
    actionType: 'scheduled',
    units: '02',
    destination: 'Centro Cirúrgico B',
  },
];



export default function EstoqueAdmin (){
    return (
        <SystemLayout>
            <PageTitle title={'Estoque de Hemocomponentes'} subtitle={'Monitoramento em tempo real dos níveis de suprimento sanguíneo.'}/>
            <main className={style.mainIndex}>
            <div className={style.headerButtons}>
                <ButtonSystem type={'secondary'} icon={FiFilter} value={'Filtrar Unidade'} />
                <ButtonSystem type={'primary'} icon={RiExportLine} value={'Registrar Saiída'} />
            </div>

            <div className={style.gridTypes}>
                <StockCard type={'A+'} quantity={'42'} badge={'Normal'} min={12} variant={'normal'}/>
                <StockCard type={'A-'} quantity={'13'} badge={'Normal'} min={10} variant={'warning'}/>
                <StockCard type={'B+'} quantity={'31'} badge={'Normal'} min={10} variant={'normal'}/>
                <StockCard type={'B-'} quantity={'3'} badge={'Normal'} min={10} variant={'critical'}/>
                <StockCard type={'AB+'} quantity={'13'} badge={'Normal'} min={10} variant={'warning'}/>
                <StockCard type={'AB-'} quantity={'4'} badge={'Normal'} min={10} variant={'critical'}/>
                <StockCard type={'O+'} quantity={'88'} badge={'Normal'} min={10} variant={'normal'}/>
                <StockCard type={'O-'} quantity={'14'} badge={'Normal'} min={10} variant={'warning'}/>
            </div>

            <div className={style.dataArea}>
                <Graphic/>
            </div>

            <div className={style.tableArea}>
                <div className={style.tableHeader}>
                    <h2>Últimas movimentações</h2>

                    <Link>Ver Tudo</Link>
                </div>
                <div className={style.tableContent}>
               <table className={style.transactionsTable}>
        <thead className={style.tableHead}>
          <tr>
            <th>Data/Hora</th>
            <th>Tipo</th>
            <th>Ação</th>
            <th>Unidades</th>
            <th>Destino</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item.id} className={style.tableRow}>
              <td className={style.date}>{item.date}</td>

              <td className={style.bloodType}>{item.type}</td>

              <td>
                <span
                  className={`${style.action} ${style[item.actionType]}`}
                >
                  {item.action}
                </span>
              </td>

              <td className={style.units}>{item.units}</td>

              <td className={style.destination}>
                {item.destination}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
            </div>
            </main>
        </SystemLayout>
    )
}