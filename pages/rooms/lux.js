import Head from 'next/head'
import React from 'react'
import SingleRoomPageBanner from '../../components/pageBanners/SingleRoomPageBanner'
import DescriptionRoomBlock from '../../components/shared/DescriptionRoomBlock';
import ServicesSlider from '../../components/sliders/ServicesSlider';

export default function SingleRoomPage() {
    return (<>
        <Head>
            <title>Rinn Rise – Номер категории Люкс – Анапа, Джемете</title>
        </Head>
        <main>
            <SingleRoomPageBanner />
            <section className='section first'>
                <DescriptionRoomBlock title='Описание номера'/>
            </section>
        </main>
        </>
    )}
