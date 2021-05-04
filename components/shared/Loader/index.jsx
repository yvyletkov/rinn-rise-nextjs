// import React from 'react';
import s from './styles.module.scss'

export default function Loader() {
    return (
        <div className={s.wrapper}>
            <div className={s.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}