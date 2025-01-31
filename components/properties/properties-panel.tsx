'use client'
import { Grid } from "lucide-react"
import { useDesignStore } from "@/lib/store"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function PropertiesPanel() {
  const { badgeProperties, updateBadgeProperty, overlayGridEnabled, setOverlayGridEnabled } = useDesignStore()

  const sizes = ["Small", "Medium", "Large"]
  const subVariants = ["Leading_icon", "Trailing_icon", "No_icon"]
  const icons = ["live1", "live2", "status1", "status2"]
  const shapes = ["Rounded", "Square", "Pill"]
  const colors = ["colour_primary_500", "colour_secondary_500", "colour_neutral_100", "badge_outline_tertiary"]

  return (
    <div className="w-[280px] border-l border-[#EAEAEA] bg-white h-screen overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-medium">Properties</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">badge_style_4</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Preview Text</span>
              <input
                type="text"
                value={badgeProperties.previewText}
                onChange={(e) => updateBadgeProperty("previewText", e.target.value)}
                className="text-sm border-none bg-transparent text-right focus:outline-none"
              />
            </div>
          </div>

          <PropertySelect
            label="Size"
            value={badgeProperties.size}
            options={sizes}
            onChange={(value) => updateBadgeProperty("size", value)}
          />

          <PropertySelect
            label="Sub variant"
            value={badgeProperties.subVariant}
            options={subVariants}
            onChange={(value) => updateBadgeProperty("subVariant", value)}
          />

          <PropertySelect
            label="Icon"
            value={badgeProperties.icon}
            options={icons}
            onChange={(value) => updateBadgeProperty("icon", value)}
          />

          <PropertySelect
            label="Shape"
            value={badgeProperties.shape}
            options={shapes}
            onChange={(value) => updateBadgeProperty("shape", value)}
          />

          <div className="space-y-1.5">
            <label className="text-sm text-gray-600">Padding</label>
            <div className="flex items-center justify-between">
              <span className="text-sm">Enable padding</span>
              <Switch
                checked={badgeProperties.padding}
                onCheckedChange={(checked) => updateBadgeProperty("padding", checked)}
              />
            </div>
          </div>

          <PropertySelect
            label="Background Colour"
            value={badgeProperties.backgroundColor}
            options={colors}
            onChange={(value) => updateBadgeProperty("backgroundColor", value)}
          />

          <PropertySelect
            label="Text Color"
            value={badgeProperties.textColor}
            options={colors}
            onChange={(value) => updateBadgeProperty("textColor", value)}
          />

          <PropertySelect
            label="Border Color"
            value={badgeProperties.borderColor}
            options={colors}
            onChange={(value) => updateBadgeProperty("borderColor", value)}
          />

          <div className="space-y-1.5">
            <label className="text-sm text-gray-600">Border Width</label>
            <input
              type="number"
              value={badgeProperties.borderWidth}
              onChange={(e) => updateBadgeProperty("borderWidth", Number(e.target.value))}
              min={0}
              max={4}
              className="w-full px-3 py-2 text-sm bg-[#F9FAFB] rounded-lg border border-[#EAEAEA] focus:border-gray-300 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-gray-600">Overlay Grid</label>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Grid size={16} className="mr-2" />
                <span className="text-sm">Show overlay grid</span>
              </div>
              <Switch checked={overlayGridEnabled} onCheckedChange={setOverlayGridEnabled} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PropertySelectProps {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

function PropertySelect({ label, value, options, onChange }: PropertySelectProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm text-gray-600">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue>{value}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

