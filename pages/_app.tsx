import React from 'react';
import 'antd/dist/antd.css'
import './style.css'

export default function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    );
}