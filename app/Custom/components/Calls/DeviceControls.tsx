import { Select } from '../controls/Select'
import { useCallback } from 'react'
import { VideoOff, Video, Mic, MicOff, Volume2 } from 'lucide-react'
import type * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import type { CallMedia } from './hooks/useCallMedia'
import { MediaView } from './MediaView'
import { MicrophoneLevel } from './MicrophoneLevel'
export const DeviceControls: React.FC<{
  media: CallMedia
  cameraPreview?: React.ReactNode
  compact?: boolean
}> = ({ media, cameraPreview, compact = false }) => {
  const [tab, setTab] = useState<'camera' | 'microphone' | 'sound'>('camera')
  const selectTab = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      const next = event.currentTarget.dataset.tab
      if (next === 'camera' || next === 'microphone' || next === 'sound') {
        setTab(next)
      }
    },
    [],
  )

  const [microphone, setMicrophone] = useState('')
  const [camera, setCamera] = useState('')
  const [soundError, setSoundError] = useState('')
  const sound = useRef<AudioContext | null>(null)
  useEffect(
    () => () => {
      if (sound.current?.state !== 'closed') {
        void sound.current?.close()
      }
    },
    [],
  )
  const testSound = useCallback(async (): Promise<void> => {
    setSoundError('')
    try {
      if (sound.current?.state !== 'closed') {
        await sound.current?.close()
      }
      const context = new AudioContext()
      sound.current = context
      await context.resume()
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.frequency.value = 440
      gain.gain.value = 0.08
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start()
      oscillator.stop(context.currentTime + 0.7)
      oscillator.onended = () => {
        if (context.state !== 'closed') {
          void context.close()
        }
      }
    } catch {
      setSoundError(
        'Не удалось воспроизвести тестовый звук. Проверьте настройки браузера.',
      )
    }
  }, [])

  const changeCamera = useCallback(
    (value: string | null): void => {
      const deviceId = value ?? ''
      setCamera(deviceId)
      if (media.streams.camera) {
        void media.start('camera', deviceId)
      }
    },
    [media],
  )

  const changeMicrophone = useCallback(
    (value: string | null): void => {
      const deviceId = value ?? ''
      setMicrophone(deviceId)
      if (media.streams.microphone) {
        void media.start('microphone', deviceId)
      }
    },
    [media],
  )

  const toggleCamera = useCallback((): void => {
    if (media.streams.camera) {
      media.stop('camera')
    } else {
      void media.start('camera', camera)
    }
  }, [media, camera])

  const toggleMicrophone = useCallback((): void => {
    if (media.streams.microphone) {
      media.stop('microphone')
    } else {
      void media.start('microphone', microphone)
    }
  }, [media, microphone])

  return (
    <div className="panel device-controls">
      <h2>Камера и микрофон</h2>
      {compact && (
        <div className="device-tabs" role="group" aria-label="Устройство">
          <button
            type="button"
            data-tab="camera"
            onClick={selectTab}
            aria-pressed={tab === 'camera'}
          >
            Камера
          </button>
          <button
            type="button"
            data-tab="microphone"
            onClick={selectTab}
            aria-pressed={tab === 'microphone'}
          >
            Микрофон
          </button>
          <button
            type="button"
            data-tab="sound"
            onClick={selectTab}
            aria-pressed={tab === 'sound'}
          >
            Динамики
          </button>
        </div>
      )}
      {!compact && (
        <div className="device-preview">
          {cameraPreview ?? (
            <MediaView
              stream={media.streams.camera}
              muted
              label="Изображение с вашей камеры"
            />
          )}
          {!media.streams.camera && !cameraPreview && (
            <div className="preview-off">
              <VideoOff size={36} aria-hidden="true" />
              <p>Камера выключена</p>
            </div>
          )}
        </div>
      )}
      <div className="actions device-toggles">
        {(!compact || tab === 'camera') && (
          <Button
            disabled={media.busy.camera}
            onClick={toggleCamera}
            aria-pressed={Boolean(media.streams.camera)}
          >
            {media.streams.camera ? (
              <Video size={18} />
            ) : (
              <VideoOff size={18} />
            )}
            {media.busy.camera
              ? 'Подключение камеры…'
              : media.streams.camera
                ? 'Выключить камеру'
                : 'Включить камеру'}
          </Button>
        )}
        {(!compact || tab === 'microphone') && (
          <Button
            disabled={media.busy.microphone}
            onClick={toggleMicrophone}
            aria-pressed={Boolean(media.streams.microphone)}
          >
            {media.streams.microphone ? (
              <Mic size={18} />
            ) : (
              <MicOff size={18} />
            )}
            {media.busy.microphone
              ? 'Подключение микрофона…'
              : media.streams.microphone
                ? 'Выключить микрофон'
                : 'Включить микрофон'}
          </Button>
        )}
      </div>
      <div className="device-selects">
        {(!compact || tab === 'camera') && (
          <Select
            label="Камера"
            value={camera}
            onChange={changeCamera}
            disabled={media.busy.camera}
            options={[
              { id: '', text: 'По умолчанию' },
              ...media.devices
                .filter(
                  (device) => device.kind === 'videoinput' && device.deviceId,
                )
                .map((device, index) => ({
                  id: device.deviceId,
                  text: device.label || `Камера ${index + 1}`,
                })),
            ]}
          />
        )}
        {(!compact || tab === 'microphone') && (
          <Select
            label="Микрофон"
            value={microphone}
            onChange={changeMicrophone}
            disabled={media.busy.microphone}
            options={[
              { id: '', text: 'По умолчанию' },
              ...media.devices
                .filter(
                  (device) => device.kind === 'audioinput' && device.deviceId,
                )
                .map((device, index) => ({
                  id: device.deviceId,
                  text: device.label || `Микрофон ${index + 1}`,
                })),
            ]}
          />
        )}
      </div>
      {(!compact || tab === 'microphone') && (
        <MicrophoneLevel stream={media.streams.microphone} />
      )}
      {(!compact || tab === 'sound') && (
        <>
          <Button variant="secondary" onClick={testSound}>
            <Volume2 size={18} />
            Проверить динамики
          </Button>
          <p className="hint">
            Должен прозвучать короткий сигнал. Устройство вывода выбирается в
            настройках системы. Звук микрофона не воспроизводится в динамиках,
            чтобы избежать эха.
          </p>
          {soundError && <p role="alert">{soundError}</p>}
        </>
      )}
      {media.error && <p role="alert">{media.error}</p>}
    </div>
  )
}
