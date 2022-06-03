import * as React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Switch.css';
import pt from '../../assets/img/portugues.jpg'
import en from '../../assets/img/ingles.jpg'

const Switch = () => {
    const [isToggled, setIsToggled] = useState(false);
    const { i18n } = useTranslation()

    const onToggle = () => {
        i18n.changeLanguage(isToggled ? 'en' : 'pt')
        setIsToggled(!isToggled)
    }

    return (
        <label className="toggle-switch cursor-pointer">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="switch" />
            {/* {isToggled ?
                <span className='absolute  left-[6px] bottom-[5px] text-[12px] '>pt</span> :
                <span className='absolute  right-[7px] bottom-[5px] text-[12px]'>en</span>
            } */}
            <img
                className={`${isToggled ? 'animate-fade-in' : 'hidden'} rounded-sm absolute h-[11px] bottom-[4px] left-[5px] sm:h-[13px] sm:bottom-[4px] sm:left-[9px] z-10`}
                src={pt}
                alt=''
            />
            <img
                className={`${!isToggled ? 'animate-fade-in' : 'hidden'} rounded-sm absolute h-[11px] bottom-[4px] right-[5px] sm:h-[13px] sm:bottom-[4px] sm:right-[9px] z-10`}
                src={en}
                alt=''
            />
        </label>
    );
};

export default Switch