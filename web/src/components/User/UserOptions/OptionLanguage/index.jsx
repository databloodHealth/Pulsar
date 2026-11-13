import style from './style.module.css'
import { ChevronDown } from 'lucide-react'

export default function OptionLanguage() {

    return (
        <div className={style.settingBox}>
            <label htmlFor="idioma">idioma</label>

            <div className={style.selectContainer}>
                <select name="idioma" id='idioma' className={style.idioma}>
                    <option value="">Português BR</option>
                    <option value="">English US</option>
                </select>

                <span><ChevronDown /></span>
            </div>
        </div>
    )
}