import React, { useState } from 'react';

export default function GuitarTutorial() {
  const [language, setLanguage] = useState('hu');

  const content = {
    hu: {
      welcome: 'Üdvözöllek a Gitártanulás Világában!',
      description: 'Tanulj meg gitározni az alapoktól egyszerű videók segítségével!',
      modules: [
        {
          title: '1. Modul – Bevezetés a gitározásba',
          video: 'https://www.youtube.com/embed/2L-Kv6tA2j0'
        },
        {
          title: '2. Modul – Alap akkordok',
          video: 'https://www.youtube.com/embed/9FtfD1dlXzU'
        },
        {
          title: '3. Modul – Pengetés és ritmus',
          video: 'https://www.youtube.com/embed/Hz0FiOBz-m8'
        },
        {
          title: '4. Modul – Első dalod',
          video: 'https://www.youtube.com/embed/C3mU6rwT9P8'
        }
      ]
    },
    en: {
      welcome: 'Welcome to the World of Guitar Learning!',
      description: 'Learn to play guitar from scratch with simple videos!',
      modules: [
        {
          title: 'Module 1 – Introduction to Guitar',
          video: 'https://www.youtube.com/embed/2L-Kv6tA2j0'
        },
        {
          title: 'Module 2 – Basic Chords',
          video: 'https://www.youtube.com/embed/9FtfD1dlXzU'
        },
        {
          title: 'Module 3 – Strumming and Rhythm',
          video: 'https://www.youtube.com/embed/Hz0FiOBz-m8'
        },
        {
          title: 'Module 4 – Your First Song',
          video: 'https://www.youtube.com/embed/C3mU6rwT9P8'
        }
      ]
    },
    de: {
      welcome: 'Willkommen in der Welt des Gitarrenlernens!',
      description: 'Lerne Gitarre von Grund auf mit einfachen Videos!',
      modules: [
        {
          title: 'Modul 1 – Einführung in die Gitarre',
          video: 'https://www.youtube.com/embed/2L-Kv6tA2j0'
        },
        {
          title: 'Modul 2 – Grundakkorde',
          video: 'https://www.youtube.com/embed/9FtfD1dlXzU'
        },
        {
          title: 'Modul 3 – Anschlag und Rhythmus',
          video: 'https://www.youtube.com/embed/Hz0FiOBz-m8'
        },
        {
          title: 'Modul 4 – Dein erstes Lied',
          video: 'https://www.youtube.com/embed/C3mU6rwT9P8'
        }
      ]
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setLanguage('hu')}>Magyar</button>{' '}
        <button onClick={() => setLanguage('en')}>English</button>{' '}
        <button onClick={() => setLanguage('de')}>Deutsch</button>
      </div>
      <h1>{content[language].welcome}</h1>
      <p>{content[language].description}</p>
      {content[language].modules.map((module, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h2>{module.title}</h2>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src={module.video}
              title={module.title}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}