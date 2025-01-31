'use client'
import type React from "react"
import {
  LayoutGrid,
  Boxes,
  Layers,
  Square,
  SplitSquareVertical,
  Users,
  Sparkles,
  Settings,
  Bell,
  ChevronDown,
  Grid,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Switch } from "@/components/ui/switch"
import { useDesignStore } from "@/lib/store"

export function Sidebar() {
  const { overlayGridEnabled, setOverlayGridEnabled } = useDesignStore()

  return (
    <div className="flex">
      <div>
        <nav className="p-2">
        <div className="space-y-2">
          <SidebarButton icon={<LayoutGrid size={20} />} label="Dashboard" />
          <SidebarButton icon={<Boxes size={20} />} label="Projects" />
          <SidebarButton icon={<Layers size={20} />} label="Layers" />
          <SidebarButton icon={<Square size={20} />} label="Templates" />
          <SidebarButton icon={<SplitSquareVertical size={20} />} label="Components" />
          <SidebarButton icon={<Users size={20} />} label="Team" />
          <SidebarButton icon={<Sparkles size={20} />} label="AI" />
        </div>
      </nav>

      <div className="p-2 space-y-2 border-t border-[#2A2A2D]">
        <SidebarButton icon={<Settings size={20} />} label="Settings" />
        <SidebarButton icon={<Bell size={20} />} label="Notifications" />
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#2A2A2D]">
          <div className="flex items-center">
            <Grid size={20} className="mr-3" />
            {/* <span className="text-sm">Overlay Grid</span> */}
          </div>
          {/* <Switch checked={overlayGridEnabled} onCheckedChange={setOverlayGridEnabled} /> */}
        </div>
        <div className="flex items-center p-2 rounded-lg hover:bg-[#2A2A2D]">
          <Avatar className="w-8 h-8 mr-3">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          {/* <span className="text-sm">User Name</span> */}
          {/* <ChevronDown className="ml-auto w-4 h-4" /> */}
        </div>
      </div>
    </div>
    <div className="flex flex-col h-screen w-[240px] bg-[#1C1C1F] border-r border-[#2A2A2D] text-white">
      <div className="p-4 flex items-center">
        <div className="w-8 h-8 rounded-lg bg-[#FFB802] flex items-center justify-center mr-3">
          <span className="text-black font-bold text-lg">G</span>
        </div>
        <span className="font-semibold">Atoms Library</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-4 py-2 text-sm">Drafts</AccordionTrigger>
            <AccordionContent>
              <div className="px-4 py-2 text-sm">badge_style_4</div>
            </AccordionContent>
          </AccordionItem>
          {/* Add more AccordionItems for other categories */}
        </Accordion>
      </div>

      </div>
    </div>
  )
}

function SidebarButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full p-2 flex items-center rounded-lg text-[#6B6B6B] hover:bg-[#2A2A2D] hover:text-white transition-colors">
      {icon}
      {/* <span className="ml-3 text-sm">{label}</span> */}
    </button>
  )
}

