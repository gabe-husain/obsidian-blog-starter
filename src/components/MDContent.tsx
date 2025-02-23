'use client'

import { useEffect, useRef, useState } from 'react'

export function MDContent({ content }: { content: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="markdown-content" />
  }

  return (
    <div
      ref={containerRef}
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}