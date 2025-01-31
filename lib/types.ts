export type DeviceType = "mobile" | "tablet" | "desktop"
export type GridColumns = "4 Column" | "8 Column" | "12 Column"
export type SpanSize = "Span" | "Span 2" | "Span 3" | "Span 4"

export interface BadgeProperties {
  previewText: string
  size: "Small" | "Medium" | "Large"
  subVariant: "Leading_icon" | "Trailing_icon" | "No_icon"
  icon: "live1" | "live2" | "status1" | "status2"
  shape: "Rounded" | "Square" | "Pill"
  padding: boolean
  backgroundColor: string
  textColor: string
  borderColor: string
  borderWidth: number
}

