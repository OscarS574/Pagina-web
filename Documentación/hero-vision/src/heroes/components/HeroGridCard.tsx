
import { Card} from "@/components/ui/card"

interface Props {
    alias: string;
    nombre: string;
}

export const HeroGridCard = ({alias,nombre}: Props) => {
  return (
    <Card>
        Card Hero {alias} {nombre}
    </Card>
  )
}
