import React, { useState } from 'react';
import './App.css';

function App() {
    const [lang, setLang] = useState('ar');
    const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');
    return (
        <div className='App'>
            <button onClick={toggleLang} style={{position:'absolute', top:10, right:10}}>
                {lang === 'ar' ? 'English' : 'العربية'}
            </button>
            <h1>{lang==='ar' ? 'مرحبا بك في GEOVIA!' : 'Welcome to GEOVIA!'}</h1>
            <p>{lang==='ar' ? 'Dashboard و 3D Map جاهزة' : 'Dashboard & 3D Map ready'}</p>
        </div>
    );
}

export default App;