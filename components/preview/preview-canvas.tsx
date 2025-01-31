'use client'
import { useDesignStore } from "@/lib/store"
import { Badge } from "./badge"
import { Save } from "./save"
import { OverlayGrid } from "../overlay-grid"
import { Header } from "../header/header"

export function PreviewCanvas() {
  const { activeDevice, gridEnabled, gridColumns } = useDesignStore()

  const deviceSizes = {
    mobile: "max-w-[320px]",
    tablet: "max-w-[768px]",
    desktop: "max-w-full",
  }

  const gridConfig = {
    "4 Column": "grid-cols-4",
    "8 Column": "grid-cols-8",
    "12 Column": "grid-cols-12",
  }

  return (
    <div className="flex-1 p-8 bg-[#F9FAFB] overflow-auto relative">
      
      <div className={`mx-auto ${deviceSizes[activeDevice]}`}>
     
        <div className="bg-white p-8 rounded-lg shadow-sm relative">
        
        <OverlayGrid />
          {/* {gridEnabled && (
            <div className={`absolute inset-0 ${gridConfig[gridColumns]} gap-4`}>
              {Array.from({ length: Number.parseInt(gridColumns.split(" ")[0]) }).map((_, index) => (
                <div key={index} className="h-full border-x border-blue-200">
                  <div className="h-full bg-blue-100/20"></div>
                </div>
              ))}
            </div>
          )} */}
          <div className={`relative ${gridEnabled ? `grid ${gridConfig[gridColumns]} gap-4` : ""}`}>
            <div className={`${gridEnabled ? "col-span-full" : ""} flex items-center justify-center min-h-[600px]`}>
              {/* <Badge /> */}
              
            </div>
          </div>
        </div>
       
      </div>
      <Save/>
    </div>
  )
}

