// pages/api/analytics.js
export default function handler(req, res) {
  const { gaId } = req.query

  if (!gaId) {
    return res.status(400).json({ error: "Missing GA ID" })
  }

  res.status(200).json({
    pageViews: 1200,
    users: 450,
    bounceRate: 52.7,
  })
}
