import { useEffect, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Images,
  X,
} from 'lucide-react'

const PHOTO_COUNT = 56

const PHOTOS = Array.from({ length: PHOTO_COUNT }, (_, index) => ({
  id: index + 1,
  src: `/event_photos/ethack_${index + 1}.jpg`,
  alt: `ETHack 2026 event photo ${index + 1}`,
}))

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = src
  })
}

export default function EventPhotos() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [downloading, setDownloading] = useState(false)

  const selectedPhoto =
    selectedIndex !== null ? PHOTOS[selectedIndex] : null

  function openPhoto(index) {
    setSelectedIndex(index)
  }

  function closePhoto() {
    setSelectedIndex(null)
  }

  function showPrevious() {
    setSelectedIndex((current) => {
      if (current === null) return 0
      return current === 0 ? PHOTOS.length - 1 : current - 1
    })
  }

  function showNext() {
    setSelectedIndex((current) => {
      if (current === null) return 0
      return current === PHOTOS.length - 1 ? 0 : current + 1
    })
  }

  useEffect(() => {
    if (selectedIndex === null) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closePhoto()
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex])

  async function downloadPhoto() {
    if (!selectedPhoto || downloading) return

    setDownloading(true)

    try {
      const [photo, logo] = await Promise.all([
        loadImage(selectedPhoto.src),
        loadImage('/logo_white.png'),
      ])

      const canvas = document.createElement('canvas')
      canvas.width = photo.naturalWidth
      canvas.height = photo.naturalHeight

      const context = canvas.getContext('2d')

      if (!context) {
        throw new Error('Could not create download canvas.')
      }

      // Draw the original event photo.
      context.drawImage(photo, 0, 0, canvas.width, canvas.height)

      // Watermark should be approximately 15% of the photo width.
      const logoWidth = canvas.width * 0.15
      const logoHeight =
        logoWidth * (logo.naturalHeight / logo.naturalWidth)

      // Keep the watermark slightly inset from the bottom-right edge.
      const margin = canvas.width * 0.02

      const logoX = canvas.width - logoWidth - margin
      const logoY = canvas.height - logoHeight - margin

      // A subtle shadow helps the white logo remain visible against
      // light areas of a photograph.
      context.save()
      context.shadowColor = 'rgba(0, 0, 0, 0.65)'
      context.shadowBlur = Math.max(8, canvas.width * 0.004)
      context.shadowOffsetX = 0
      context.shadowOffsetY = Math.max(2, canvas.width * 0.0015)

      context.drawImage(
        logo,
        logoX,
        logoY,
        logoWidth,
        logoHeight,
      )

      context.restore()

      canvas.toBlob((blob) => {
        if (!blob) {
          setDownloading(false)
          return
        }

        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')

        link.href = url
        link.download = `ethack_${selectedPhoto.id}_watermarked.jpg`

        document.body.appendChild(link)
        link.click()
        link.remove()

        URL.revokeObjectURL(url)
        setDownloading(false)
      }, 'image/jpeg')
    } catch (error) {
      console.error('Unable to download photo:', error)
      setDownloading(false)
    }
  }

  return (
    <>
      <section
        id="event-photos"
        className="relative border-b border-line bg-ink py-24"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-xs text-sky">
              Event Photos
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
              Relive ETHack 2026.
            </h2>

            <p className="mt-4 text-paper-dim">
              Browse photos from the weekend. Select any photo to open the
              gallery, then download a high-resolution copy.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {PHOTOS.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => openPhoto(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-ink-soft text-left focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 focus:ring-offset-ink"
                aria-label={`Open event photo ${photo.id}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04] group-hover:opacity-90"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />

                <div className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/80 text-paper opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Images size={15} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Event photo ${selectedPhoto.id} gallery`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePhoto()
            }
          }}
        >
          {/* Top controls */}
          <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
            <div className="rounded-full bg-ink/80 px-4 py-2 font-mono text-xs text-paper-dim backdrop-blur-md">
              {selectedPhoto.id} / {PHOTOS.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={downloadPhoto}
                disabled={downloading}
                className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2.5 font-display text-sm font-semibold text-ink transition-transform hover:scale-[1.02] disabled:cursor-wait disabled:opacity-60"
              >
                <Download size={16} />
                {downloading ? 'Preparing...' : 'Download'}
              </button>

              <button
                type="button"
                onClick={closePhoto}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-paper backdrop-blur-md transition-colors hover:bg-ink-soft"
                aria-label="Close gallery"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Previous photo */}
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-paper backdrop-blur-md transition-colors hover:bg-ink-soft sm:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Photo + visible watermark */}
          <div className="relative inline-block max-h-[80vh] max-w-[90vw]">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="block max-h-[80vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />

            <img
              src="/logo_white.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[2%] right-[2%] h-auto w-[15%] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Next photo */}
          <button
            type="button"
            onClick={showNext}
            className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-paper backdrop-blur-md transition-colors hover:bg-ink-soft sm:right-6"
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-wide text-paper-dim sm:bottom-6 sm:text-xs">
            Use ← → to browse · Esc to close
          </p>
        </div>
      )}
    </>
  )
}