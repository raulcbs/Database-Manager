import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ hello: 'Next.js' })
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  console.log(request)

  return NextResponse.json(body)
}
