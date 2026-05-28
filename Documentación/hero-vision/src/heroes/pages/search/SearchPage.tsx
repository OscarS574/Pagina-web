import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJombotron title="Búsqueda De SuperHeroes" description="Descubre, explora y administra superheroes y villanos"/>
      <HeroStats/>
      {/* Filter and Search */}
      <SearchControls/>
    </>
  )
}

export default SearchPage;
