import style from '@/styles/System/estoque.module.css'
import ButtonSystem from "@/components/ui/Button";
import PageTitle from "@/components/ui/PageTitle";
import SystemLayout from "@/layouts/SystemLayout";
import { FiFilter } from "react-icons/fi";
import { RiExportLine } from "react-icons/ri";
import StockCard from '@/components/ui/StorageCard';


export default function EstoqueAdmin (){
    return (
        <SystemLayout>
            <main>
            <PageTitle title={'Estoque de Hemocomponentes'} subtitle={'Monitoramento em tempo real dos níveis de suprimento sanguíneo.'}/>
            <div className={style.headerButtons}>
                <ButtonSystem type={'secondary'} icon={FiFilter} value={'Filtrar Unidade'} />
                <ButtonSystem type={'primary'} icon={RiExportLine} value={'Registrar Saiída'} />
            </div>

            <div className={style.gridTypes}>
                <StockCard type={'A+'} quantity={'42'} badge={'Normal'} min={12}/>
                <StockCard type={'A-'} quantity={'23'} badge={'Normal'} min={10}/>
                <StockCard type={'B+'} quantity={'31'} badge={'Normal'} min={10}/>
                <StockCard type={'B-'} quantity={'3'} badge={'Normal'} min={10}/>
                <StockCard type={'AB+'} quantity={'19'} badge={'Normal'} min={10}/>
                <StockCard type={'AB-'} quantity={'4'} badge={'Normal'} min={10}/>
                <StockCard type={'O+'} quantity={'88'} badge={'Normal'} min={10}/>
                <StockCard type={'O-'} quantity={'22'} badge={'Normal'} min={10}/>
            </div>
            </main>
        </SystemLayout>
    )
}