const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.register = async (req, res) => {
  const { eventId } = req.body;
  const userId = req.user.id;

  // TODO: save registration to DB and check available seats

  // Send confirmation email via Resend API
  await resend.emails.send({
    from: 'EventFlow <noreply@eventflow.com>',
    to: req.user.email,
    subject: 'Inscrição confirmada!',
    html: `<p>Sua inscrição no evento foi confirmada. Aproveite!</p>`,
  });

  res.status(201).json({ message: 'Registration confirmed, email sent', eventId, userId });
};

exports.cancelRegistration = async (req, res) => {
  res.json({ message: `Registration ${req.params.id} cancelled` });
};

exports.getMyRegistrations = async (req, res) => {
  res.json({ registrations: [] });
};
