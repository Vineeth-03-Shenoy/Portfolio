export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { Name, email, Message, website } = req.body || {};

  // Honeypot: real users never fill this hidden field, bots often do
  if (website) {
    return res.status(200).json({ success: true });
  }

  if (!Name || !email || !Message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const scriptURL = process.env.GAS_CONTACT_URL;
  if (!scriptURL) {
    console.error('GAS_CONTACT_URL env var is not set');
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  try {
    const form = new URLSearchParams();
    form.append('Name', Name);
    form.append('email', email);
    form.append('Message', Message);

    const gasRes = await fetch(scriptURL, {
      method: 'POST',
      body: form,
    });

    if (!gasRes.ok) {
      const text = await gasRes.text();
      console.error('Apps Script error:', gasRes.status, text);
      return res.status(502).json({ error: 'Upstream error' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact proxy error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
