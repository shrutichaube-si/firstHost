import { useDesignStore } from "@/lib/store"
import { Circle } from "lucide-react"
import { cn } from "@/lib/utils"

export function Save() {
  const { badgeProperties } = useDesignStore()

  const sizeClasses = {
    Small: "text-xs px-2 py-0.5",
    Medium: "text-sm px-2.5 py-1",
    Large: "text-base px-3 py-1.5",
  }

  const shapeClasses = {
    Rounded: "rounded",
    Square: "rounded-none",
    Pill: "rounded-full",
  }

  const getIconComponent = () => {
    // You can add more icons based on the icon property
    return <Circle className="w-3 h-3" />
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5",
        sizeClasses[badgeProperties.size],
        shapeClasses[badgeProperties.shape],
        badgeProperties.padding ? "p-2" : "",
        "border transition-all",
        "text-black fixed bottom-0 left-1/2",
        "bg-yellow-200"
      )}
     
    >
      {badgeProperties.subVariant === "Leading_icon" && getIconComponent()}
      <span>Save</span>
      {badgeProperties.subVariant === "Trailing_icon" && getIconComponent()}
    </div>
  )
}

