import style from './style.module.css'
import { ChevronDown } from 'lucide-react'

export default function OptionLanguage() {

    return (
        <div className={style.settingBox}>
            <label for="idioma">idioma</label>

            <div className={style.selectContainer}>
                <select name="idioma" id={style.idioma}>
                    <option value="">Português BR</option>
                    <option value="">English US</option>
                </select>

                <span><ChevronDown /></span>
            </div>
        </div>
    )
}