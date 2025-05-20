import axios from 'axios';
import { useEffect, useState } from 'react';
import type { Characters } from '../util/characters';
import Card from '../components/card';

const Home = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime')
      .then(res => {
        setCharacters(res.data.data);
      })
      .catch(err => {
        console.error('Erro ao encontrar os Animes:', err);
      });
  }, []);

  return (
    <main style={{
      backgroundColor: "#040714",
      color: "white",
      padding: "2rem",
    }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        justifyContent: "center",
        
      }}>
        {characters.map((i) => (
          <Card
                key={i.mal_id}
                mal_id={i.mal_id}
                url={i.url}
                name={i.title}
                images={i.images} title={''}/>
        ))}
      </div>
    </main>
  );
};

export default Home;
