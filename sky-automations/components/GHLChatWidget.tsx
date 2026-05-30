'use client'

import { useEffect } from 'react'

const SCRIPT_ID = 'ghl-chat-widget-loader'
const WIDGET_ID = '6a1b5195b2d4c061bcf203ae'

export default function GHLChatWidget() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = 'https://widgets.leadconnectorhq.com/loader.js'
    script.async = true
    script.setAttribute(
      'data-resources-url',
      'https://widgets.leadconnectorhq.com/chat-widget/loader.js'
    )
    script.setAttribute('data-widget-id', WIDGET_ID)
    script.setAttribute('data-source', 'WEB_USER')
    document.body.appendChild(script)
  }, [])

  return (
    <div
      data-chat-widget=""
      data-widget-id={WIDGET_ID}
      aria-hidden="true"
      style={{ display: 'none' }}
    />
  )
}
