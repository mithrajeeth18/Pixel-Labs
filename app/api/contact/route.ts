import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, budget, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Send an email using a service like Nodemailer, SendGrid, or Resend
    // 2. Save to a database
    // 3. Send to a CRM system

    // For now, we'll just log the data and return success
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      service,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      { message: "Message sent successfully! We'll get back to you within 24 hours." },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
