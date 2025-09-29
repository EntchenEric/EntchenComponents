import Image from "next/image";
import { Popover } from "entchen-components/src/Popover"
import { HeroSection } from "entchen-components/src/HeroSection"

export default function Home() {
  return (
    <div>
      <HeroSection 
        mainContent={{
          title: "Entchen Components",
          description: "Components made by a duck"
        }}
        title="entchen-components"
      />
      <Popover
        trigger="click me!"
        popoverContent="Hallo!"
      />
    </div>
  );
}
