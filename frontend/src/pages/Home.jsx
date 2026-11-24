import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get('/events').then(res => setEvents(res.data.events));
  }, []);

  return (
    <div>
      <h1>Eventos e Shows</h1>
      <div className="events-grid">
        {events.map(event => (
          <Link key={event.id} to={`/events/${event.id}`}>
            <div className="event-card">
              <h2>{event.title}</h2>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <span>R$ {event.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
