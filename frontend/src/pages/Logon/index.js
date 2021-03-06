import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import "./styles.css"

export default function Logon() {
  const history = useHistory();

  const [id, setId] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try{
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile')

    } catch (err){
      alert('Falha no login. Tente novamente.')
    }
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Heroes"/>
          <form onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>

            <input 
              placeholder="Sua ID"
              value={id}
              onChange={e => setId(e.target.value)}
            />
            <button type="submit" className="button">Entrar</button>

            <Link to="/cadastro" className="back-link">
              <FiLogIn size={16} color="#E02041"/>
              Não tenho cadastro
            </Link>
          </form>
      </section>
      <img src={heroesImg} alt="Be the Hero"/>
    </div>
  )
}