'use client'
import { ChevronDown, Smartphone, Tablet, Monitor, ArrowLeft } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useDesignStore } from "@/lib/store"
import type { DeviceType, GridColumns, SpanSize } from "@/lib/types"

export function Header() {
  const {
    activeDevice,
    setActiveDevice,
    gridEnabled,
    setGridEnabled,
    gridColumns,
    setGridColumns,
    spanSize,
    setSpanSize,
    overlayGridEnabled,
    setOverlayGridEnabled
  } = useDesignStore()

  const handleDeviceChange = (device: DeviceType) => {
    setActiveDevice(device)
  }

  const columns: GridColumns[] = ["4 Column", "8 Column", "12 Column"]
  const spans: SpanSize[] = ["Span", "Span 2", "Span 3", "Span 4"]

  return (
    <div className="h-[48px] px-4 flex items-center justify-between border-b border-[#EAEAEA] bg-white">
      <div className="flex items-center space-x-4">
        <button
          className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Atoms Library
        </button>

        <div className="h-4 w-px bg-[#EAEAEA]" />

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 px-2 py-1 rounded border border-[#EAEAEA]">
            <span className="text-sm">{spanSize}</span>
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {spans.map((span) => (
              <DropdownMenuItem key={span} onClick={() => setSpanSize(span)}>
                {span}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 px-2 py-1 rounded border border-[#EAEAEA]">
            <span className="text-sm">{gridColumns}</span>
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {columns.map((col) => (
              <DropdownMenuItem key={col} onClick={() => setGridColumns(col)}>
                {col}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 border rounded-lg p-1">
          <button
            className={`p-1.5 rounded transition-colors ${
              activeDevice === "mobile" ? "bg-[#EEF4FF]" : "hover:bg-gray-100"
            }`}
            onClick={() => handleDeviceChange("mobile")}
          >
            <Smartphone className={`w-4 h-4 ${activeDevice === "mobile" ? "text-[#3B82F6]" : "text-gray-400"}`} />
          </button>

          <button
            className={`p-1.5 rounded transition-colors ${
              activeDevice === "tablet" ? "bg-[#EEF4FF]" : "hover:bg-gray-100"
            }`}
            onClick={() => handleDeviceChange("tablet")}
          >
            <Tablet className={`w-4 h-4 ${activeDevice === "tablet" ? "text-[#3B82F6]" : "text-gray-400"}`} />
          </button>

          <button
            className={`p-1.5 rounded transition-colors ${
              activeDevice === "desktop" ? "bg-[#EEF4FF]" : "hover:bg-gray-100"
            }`}
            onClick={() => handleDeviceChange("desktop")}
          >
            <Monitor className={`w-4 h-4 ${activeDevice === "desktop" ? "text-[#3B82F6]" : "text-gray-400"}`} />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Grid</span>
          <Switch checked={overlayGridEnabled} onCheckedChange={setOverlayGridEnabled} />
        </div>
      </div>
    </div>
  )
}

