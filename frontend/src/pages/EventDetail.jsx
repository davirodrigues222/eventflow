import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    api.get(`/events/${id}`).then(res => setEvent(res.data.event));
  }, [id]);

  const handleRegister = async () => {
    await api.post('/registrations', { eventId: id });
    alert('Inscrição confirmada! Verifique seu e-mail.');
  };

  if (!event) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Data: {event.date}</p>
      <p>Local: {event.location}</p>
      <p>Vagas disponíveis: {event.capacity}</p>
      <p>Valor: R$ {event.price}</p>
      <button onClick={handleRegister}>Comprar ingresso</button>
    </div>
  );
}
