// src/components/layout/Sidebar.tsx
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  description: string;
}

export function Sidebar({ isOpen, onClose, children, title, description }: SidebarProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-full pr-4 mt-4">
          {children}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
