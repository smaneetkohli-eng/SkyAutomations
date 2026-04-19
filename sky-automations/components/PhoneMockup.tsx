'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PhoneMockupProps {
  imageSrc?: string
  tilt?: number
  shadow?: boolean
  float?: boolean
  className?: string
}

export default function PhoneMockup({
  imageSrc,
  tilt = -8,
  shadow = true,
  float = false,
  className = '',
}: PhoneMockupProps) {
  const phoneContent = (
    <div
      className={`relative ${className}`}
      style={{
        width: 220,
        height: 477,
        borderRadius: 40,
        background: '#0d1117',
        border: '6px solid #1e2430',
        outline: '2px solid #0a0d14',
        transform: `rotate(${tilt}deg)`,
        filter: shadow ? 'drop-shadow(0 40px 60px rgba(0,0,0,0.4))' : undefined,
        flexShrink: 0,
      }}
    >
      {/* Side buttons */}
      <div
        style={{
          position: 'absolute',
          left: -8,
          top: 100,
          width: 4,
          height: 36,
          background: '#1e2430',
          borderRadius: 4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: -8,
          top: 148,
          width: 4,
          height: 36,
          background: '#1e2430',
          borderRadius: 4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: -8,
          top: 120,
          width: 4,
          height: 56,
          background: '#1e2430',
          borderRadius: 4,
        }}
      />

      {/* Notch */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 72,
          height: 18,
          background: '#0a0d14',
          borderRadius: 12,
          zIndex: 10,
        }}
      />

      {/* Screen */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 34,
          overflow: 'hidden',
          background: imageSrc
            ? undefined
            : 'linear-gradient(160deg, #4A9FFF 0%, #1A3A6B 50%, #070B14 100%)',
        }}
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Phone screen"
            fill
            style={{ objectFit: 'cover' }}
          />
        )}

        {/* Screen content placeholder when no image */}
        {!imageSrc && (
          <div style={{ padding: '48px 16px 16px', height: '100%' }}>
            {/* Status bar mock */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ width: 32, height: 6, background: 'rgba(255,255,255,0.4)', borderRadius: 3 }} />
              <div style={{ display: 'flex', gap: 4 }}>
                {[1,2,3].map(i => (
                  <div key={i} style={{ width: 6, height: 6, background: 'rgba(255,255,255,0.4)', borderRadius: '50%' }} />
                ))}
              </div>
            </div>
            {/* Fake website blocks */}
            <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 8, padding: 10, marginBottom: 8 }}>
              <div style={{ width: '60%', height: 8, background: 'rgba(255,255,255,0.5)', borderRadius: 4, marginBottom: 6 }} />
              <div style={{ width: '90%', height: 5, background: 'rgba(255,255,255,0.25)', borderRadius: 3, marginBottom: 4 }} />
              <div style={{ width: '75%', height: 5, background: 'rgba(255,255,255,0.25)', borderRadius: 3 }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 8 }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 6, height: 48 }} />
              ))}
            </div>
            <div style={{ background: 'rgba(74,159,255,0.35)', borderRadius: 8, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '50%', height: 6, background: 'rgba(255,255,255,0.7)', borderRadius: 3 }} />
            </div>
            <div style={{ marginTop: 8 }}>
              {[1,2,3].map(i => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(74,159,255,0.3)', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ width: '70%', height: 5, background: 'rgba(255,255,255,0.3)', borderRadius: 3, marginBottom: 3 }} />
                    <div style={{ width: '50%', height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Screen glare */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40%',
          borderRadius: '34px 34px 0 0',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />
    </div>
  )

  if (float) {
    return (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
        style={{ display: 'inline-block' }}
      >
        {phoneContent}
      </motion.div>
    )
  }

  return phoneContent
}
