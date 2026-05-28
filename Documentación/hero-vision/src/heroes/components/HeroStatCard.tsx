import { Card} from "@/components/ui/card"
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren{
    title: string;
    icon: React.ReactNode;
}

export const HeroStatCard = ({title,icon,children}:Props) => {
  return (
    <Card>
       Hero Stat Card {title} {icon} {children}
    </Card>
  )
}
