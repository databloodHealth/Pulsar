import style from './style.module.css'


export default function ButtonSystem ({type = 'primary', action, value, icon: Icon}) {
    
    return (
        <button onClick={action} className={`${style.buttonSystem} ${style[type]}`} >{Icon && <Icon size={20} />} {value}</button>
    )

}