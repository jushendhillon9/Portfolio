import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const EMAIL = process.env.EMAIL_ADDRESS
    const PASS = process.env.APP_PASSWORD

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: EMAIL, pass: PASS },
    })

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const { fullname, sender, message, honeypot } = body || {}
    if (honeypot) return res.status(200).json({ ok: true })
    if (!fullname || !sender || !message) return res.status(400).json({ error: 'Missing fields' })

    await transporter.sendMail({
      from: EMAIL,
      to: EMAIL,
      replyTo: sender,
      subject: `New Contact: ${fullname} (${sender})`,
      text: message,
    })

    return res.status(200).json({ success: true })
  } catch (err: any) {
    console.error('[contact] error:', err?.message || err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
