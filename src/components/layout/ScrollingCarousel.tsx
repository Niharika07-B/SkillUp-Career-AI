import { cn } from "@/lib/utils";

interface Item {
    icon: React.ReactNode;
    name: string;
}

interface ScrollingCarouselProps {
    items: Item[];
    className?: string;
}

export function ScrollingCarousel({ items, className }: ScrollingCarouselProps) {
    const duplicatedItems = [...items, ...items];

    return (
        <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll">
                {duplicatedItems.map((item, index) => (
                    <li key={index}
                        className="flex flex-col items-center justify-center p-6 bg-card rounded-lg aspect-square w-[150px] h-[150px] shadow-md">
                        {item.icon}
                        <span className="text-sm font-medium mt-2 text-muted-foreground">{item.name}</span>
                    </li>
                ))}
            </ul>
             <ul
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {duplicatedItems.map((item, index) => (
                    <li key={index}
                        className="flex flex-col items-center justify-center p-6 bg-card rounded-lg aspect-square w-[150px] h-[150px] shadow-md">
                        {item.icon}
                        <span className="text-sm font-medium mt-2 text-muted-foreground">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
