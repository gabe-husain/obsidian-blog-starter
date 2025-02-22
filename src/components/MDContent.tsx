'use client'

import { useEffect, useRef } from 'react'

export function MDContent({ content }: { content: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add any client-side enhancements here
    // For example, syntax highlighting, copy buttons, etc.
  }, [content])

  return (
    <div
      ref={containerRef}
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}