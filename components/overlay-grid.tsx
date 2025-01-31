'use client'
import { useDesignStore } from "@/lib/store"

export function OverlayGrid() {
  const { overlayGridEnabled, gridColumns } = useDesignStore()

  if (!overlayGridEnabled) return null

  const columnCount = Number.parseInt(gridColumns.split(" ")[0])

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      <div className="h-full max-w-screen-2xl mx-auto px-4">
        <div
          className={`h-full grid gap-4 ${
            gridColumns === "4 Column" ? "grid-cols-4" : gridColumns === "8 Column" ? "grid-cols-8" : "grid-cols-12"
          }`}
        >
          {Array.from({ length: columnCount }).map((_, index) => (
            <div key={index} className="h-full bg-red-500/10 border-x border-red-500/20" />
          ))}
        </div>
      </div>
    </div>
  )
}

