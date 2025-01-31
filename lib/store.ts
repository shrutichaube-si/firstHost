import { create } from "zustand"
import type { DeviceType, GridColumns, SpanSize, BadgeProperties } from "./types"

interface DesignState {
  activeDevice: DeviceType
  setActiveDevice: (device: DeviceType) => void

  gridEnabled: boolean
  setGridEnabled: (enabled: boolean) => void

  overlayGridEnabled: boolean
  setOverlayGridEnabled: (enabled: boolean) => void

  gridColumns: GridColumns
  setGridColumns: (columns: GridColumns) => void

  spanSize: SpanSize
  setSpanSize: (span: SpanSize) => void

  badgeProperties: BadgeProperties
  updateBadgeProperty: <K extends keyof BadgeProperties>(key: K, value: BadgeProperties[K]) => void
}

export const useDesignStore = create<DesignState>((set) => ({
  activeDevice: "desktop",
  setActiveDevice: (device) => set({ activeDevice: device }),

  gridEnabled: true,
  setGridEnabled: (enabled) => set({ gridEnabled: enabled }),

  overlayGridEnabled: false,
  setOverlayGridEnabled: (enabled) => set({ overlayGridEnabled: enabled }),

  gridColumns: "4 Column",
  setGridColumns: (columns) => set({ gridColumns: columns }),

  spanSize: "Span",
  setSpanSize: (span) => set({ spanSize: span }),

  badgeProperties: {
    previewText: "Badge",
    size: "Small",
    subVariant: "Leading_icon",
    icon: "live1",
    shape: "Rounded",
    padding: true,
    backgroundColor: "colour_primary_500",
    textColor: "colour_neutral_100",
    borderColor: "badge_outline_tertiary",
    borderWidth: 2,
  },
  updateBadgeProperty: (key, value) =>
    set((state) => ({
      badgeProperties: {
        ...state.badgeProperties,
        [key]: value,
      },
    })),
}))

