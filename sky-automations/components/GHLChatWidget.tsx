'use client'

import { useEffect } from 'react'

const SCRIPT_ID = 'ghl-chat-widget-loader'
const WIDGET_ROOT_ID = 'ghl-chat-widget-root'
const WIDGET_ID = '6a1b5b2d96c166bea6f27b1b'
const LOCATION_ID = 'uPklpYk6pdVYoelpM6hv'

export default function GHLChatWidget() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return

    const widget = document.createElement('chat-widget')
    widget.id = WIDGET_ROOT_ID
    widget.setAttribute('location-id', LOCATION_ID)
    widget.setAttribute('data-widget-id', WIDGET_ID)
    widget.style.setProperty('--chat-widget-primary-color', '#4A9FFF')
    widget.style.setProperty('--chat-widget-active-color', '#4A9FFF')
    document.body.appendChild(widget)

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = 'https://widgets.leadconnectorhq.com/loader.js'
    script.setAttribute(
      'data-resources-url',
      'https://widgets.leadconnectorhq.com/chat-widget/loader.js'
    )
    script.setAttribute('data-widget-id', WIDGET_ID)
    script.setAttribute('data-source', 'WEB_USER')
    document.body.appendChild(script)
  }, [])

  return null
}
