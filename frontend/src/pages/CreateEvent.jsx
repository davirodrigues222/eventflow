import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function CreateEvent() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '', description: '', date: '', location: '', price: '', capacity: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/events', form);
    navigate('/');
  };

  return (
    <div>
      <h1>Criar meu evento</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome do evento" value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })} />
        <textarea placeholder="Descrição" value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })} />
        <input type="date" value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })} />
        <input placeholder="Local" value={form.location}
          onChange={e => setForm({ ...form, location: e.target.value })} />
        <input type="number" placeholder="Preço (R$)" value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })} />
        <input type="number" placeholder="Número de vagas" value={form.capacity}
          onChange={e => setForm({ ...form, capacity: e.target.value })} />
        <button type="submit">Publicar evento</button>
      </form>
    </div>
  );
}
