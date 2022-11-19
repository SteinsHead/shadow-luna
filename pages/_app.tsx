import React from 'react';
import 'antd/dist/antd.css'
import './style.css'
import Router from 'next/router';
import NProgress from 'nprogress';

export default function App({ Component, pageProps }) {
    // return (
    //     <Component {...pageProps} />
    // );

    // Use nprogres to show length of router
    NProgress.configure({ easing: 'ease', speed: 500 });

    Router.events.on("routeChangeStart", () => {
        NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
        NProgress.done();
    })

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(<Component {...pageProps} />)
}