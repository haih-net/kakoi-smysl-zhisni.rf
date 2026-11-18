import type * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

export const CallAudio: React.FC<{
  stream: MediaStream | null
  name: string
}> = ({ stream, name }) => {
  const ref = useRef<HTMLAudioElement>(null)
  const [blocked, setBlocked] = useState(false)
  const play = useCallback((): void => {
    void ref.current
      ?.play()
      .then(() => setBlocked(false))
      .catch(() => setBlocked(true))
  }, [])

  useEffect(() => {
    const audio = ref.current
    if (!audio) {
      return
    }
    audio.srcObject = stream
    if (stream) {
      play()
    }
    return () => {
      audio.srcObject = null
    }
  }, [stream, play])
  return (
    <>
      <audio
        ref={ref}
        autoPlay
        controls={blocked}
        aria-label={`Звук: ${name}`}
      />
      {blocked && (
        <button type="button" onClick={play}>
          Включить звук: {name}
        </button>
      )}
    </>
  )
}
