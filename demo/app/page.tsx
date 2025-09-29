import { Popover } from "entchen-components/src/Popover"
import { HeroSection } from "entchen-components/src/HeroSection"
import {DatePicker} from "entchen-components/src/DatePicker"

/**
 * Render the demo home page that showcases Entchen UI components.
 *
 * @returns The JSX element for the demo page containing a HeroSection (with title and description), a Popover, and three DatePicker examples (default, "de-DE", "en-US").
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
      <DatePicker />
      <DatePicker locale="de-DE"/>
      <DatePicker locale="en-US"/>
    </div>
  );
}
