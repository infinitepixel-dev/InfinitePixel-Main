// app/api/analytics/route.js (App Router) or pages/api/analytics.js (Pages Router)

import { google } from "googleapis"
import { NextResponse } from "next/server" // for App Router
// import { NextApiRequest, NextApiResponse } from "next" // for Pages Router

const SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"]
const propertyId = "YOUR_GA4_PROPERTY_ID"

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: SCOPES,
})

export async function GET(req) {
  const analyticsData = google.analyticsdata({
    version: "v1beta",
    auth: await auth.getClient(),
  })

  try {
    const [startDate, endDate] = ["7daysAgo", "today"]
    const response = await analyticsData.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        metrics: [{ name: "screenPageViews" }],
        dimensions: [{ name: "date" }],
      },
    })

    const rows = response.data.rows || []
    const pageViewsByDay = rows.map((row) => ({
      date: row.dimensionValues[0].value,
      views: parseInt(row.metricValues[0].value),
    }))

    return NextResponse.json({ pageViewsByDay })
  } catch (error) {
    console.error("GA API error:", error)
    return NextResponse.json(
      { error: "Analytics fetch failed" },
      { status: 500 }
    )
  }
}
