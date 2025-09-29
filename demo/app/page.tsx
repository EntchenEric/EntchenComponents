import Image from "next/image";
import { Popover } from "entchen-components/src/Popover"
import { HeroSection } from "entchen-components/src/HeroSection"

/**
 * Renders the demo home page showcasing Entchen components.
 *
 * @returns The JSX element for the demo page containing a HeroSection (with title and description) and a Popover.
 */
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
