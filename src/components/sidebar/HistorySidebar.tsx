// src/components/sidebar/HistorySidebar.tsx
import { History } from "lucide-react";

export default function HistorySidebar() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
                <History className="mr-2 h-6 w-6"/>
                History
            </h2>
            <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-64 p-8 border-2 border-dashed rounded-lg">
                <History className="h-16 w-16 mb-4" />
                <p>History feature is coming soon!</p>
                <p className="text-xs mt-2">Your past interview sessions and chatbot conversations will appear here.</p>
            </div>
        </div>
    )
}
