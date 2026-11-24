// TODO: replace stubs with real DB queries using pg pool

exports.getEvents = async (req, res) => {
  res.json({ events: [] });
};

exports.getEventById = async (req, res) => {
  res.json({ event: { id: req.params.id } });
};

exports.createEvent = async (req, res) => {
  const { title, description, date, location, price, capacity } = req.body;
  res.status(201).json({ message: 'Event created', event: { title, date } });
};

exports.updateEvent = async (req, res) => {
  res.json({ message: `Event ${req.params.id} updated` });
};

exports.deleteEvent = async (req, res) => {
  res.json({ message: `Event ${req.params.id} deleted` });
};
