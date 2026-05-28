
interface Props {
    title: string;
    description?: string;
}

export const CustomJombotron = ({title,description}: Props) => {
  return (
    <div>{title} {description}</div>
  )
}
