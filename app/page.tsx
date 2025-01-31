import { Sidebar } from "@/components/sidebar/sidebar"
import { Header } from "@/components/header/header"
import { PropertiesPanel } from "@/components/properties/properties-panel"
import { PreviewCanvas } from "@/components/preview/preview-canvas"

export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <PreviewCanvas />
      </div>
      <PropertiesPanel />
    </div>
  )
}

