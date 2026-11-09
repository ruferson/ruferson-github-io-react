interface RichTextProps {
  /** Text with **bold** as the only markdown formatting. */
  children: string
}

export function RichText({ children }: RichTextProps) {
  const parts = children.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
    </>
  )
}
