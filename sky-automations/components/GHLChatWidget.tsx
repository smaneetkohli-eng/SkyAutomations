'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SCRIPT_ID = 'ghl-chat-widget-loader'
const WIDGET_ROOT_ID = 'ghl-chat-widget-root'
const HIDE_STYLE_ID = 'ghl-chat-widget-hide-style'
const WIDGET_ID = '6a1b5b2d96c166bea6f27b1b'
const LOCATION_ID = 'uPklpYk6pdVYoelpM6hv'

const HIDDEN_PATHS = ['/book-call']

function removeWidget() {
  document.getElementById(SCRIPT_ID)?.remove()
  document.getElementById(WIDGET_ROOT_ID)?.remove()
  document.querySelectorAll('chat-widget').forEach((node) => node.remove())

  if (!document.getElementById(HIDE_STYLE_ID)) {
    const style = document.createElement('style')
    style.id = HIDE_STYLE_ID
    style.textContent =
      'chat-widget, [data-widget-id="6a1b5b2d96c166bea6f27b1b"] { display: none !important; visibility: hidden !important; pointer-events: none !important; }'
    document.head.appendChild(style)
  }

  const leadConnector = (window as Window & { leadConnector?: { chatWidget?: { closeWidget?: () => void } } })
    .leadConnector
  leadConnector?.chatWidget?.closeWidget?.()
}

function mountWidget() {
  document.getElementById(HIDE_STYLE_ID)?.remove()
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
}

export default function GHLChatWidget() {
  const pathname = usePathname()

  useEffect(() => {
    if (HIDDEN_PATHS.includes(pathname)) {
      removeWidget()
      return
    }

    mountWidget()
  }, [pathname])

  return null
}
