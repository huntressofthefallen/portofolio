import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    // --- IMPORTANT ---
    // Replace this with your actual Discord Webhook URL
    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
    if (!DISCORD_WEBHOOK_URL) {
      res.status(500).json({ error: 'Discord webhook URL is not configured.' });
      return;
    }

    // Extract the data from the request body
    const { name, email, subject, message } = req.body;
      const payload = {
        embeds: [
          {
            title: "Contact Form Submission",
            color: 0x0099ff, // Hex color code
            description: `**Subject:** ${subject}\n\n**Message:** ${message}`,
            fields: [
              { name: "Name", value: name, inline: true },
              { name: "Email", value: email, inline: true },
            ],
            timestamp: new Date().toISOString(),
            footer: { text: "Form submitted via website" }
          }
        ]
      };

    try {
      // Send the payload to the Discord webhook using the fetch API
      // The fetch API is used to make HTTP requests in JavaScript
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), // Convert the JavaScript object to a JSON string
      });
      if (response.ok) {
        // If the response is OK, send a success response with more context
        res.status(200).json({
          message: `Message sent successfully!`,
          subject: subject,
          timestamp: new Date().toISOString()
        });
        // If the response is not OK, send an error response
        const errorBody = await response.text();
        res.status(response.status).json({ error: 'Failed to send message to Discord' });
        // Log the error for debugging with more context
        console.error('Failed to send message to Discord:', response.status, errorBody);
        // Log the error for debugging
        console.error('Failed to send message to Discord:', response.status);
      }
        console.error('Failed to send message to Discord:', response.status);
      }
    catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Error sending message to Discord:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method ' + req.method + ' Not Allowed');
  }
};