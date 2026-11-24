import { useEffect, useState } from 'react';
import api from '../services/api';

export default function MyTickets() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    api.get('/registrations/me').then(res => setRegistrations(res.data.registrations));
  }, []);

  return (
    <div>
      <h1>Meus ingressos</h1>
      {registrations.length === 0 && <p>Nenhuma inscrição ainda.</p>}
      {registrations.map(r => (
        <div key={r.id}>
          <h3>{r.event?.title}</h3>
          <p>{r.event?.date} — {r.event?.location}</p>
        </div>
      ))}
    </div>
  );
}
