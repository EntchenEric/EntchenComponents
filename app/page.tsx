import { Button } from "@/components/Button";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection
        mainContent={{
          title: "EntchenComponents",
          description: "Components made by a duck!"
        }}
        title="EntchenComponents"
        menuItems={[
          {
            link: "/heroSection",
            title: "HeroSection"
          }
        ]}
      />
      <div className="mx-auto p-20">
        <Button
          title="Primary"
        />
        <Button
          variant="secondary"
          title="Secondary"
        />
        <Button
          variant="danger"
          title="Danger!"
        />
        <Button
          variant="warning"
          title="Warning!"
        />

        <Button
          disabled
          title="Primary"
        />
        <Button
          disabled

          variant="secondary"
          title="Secondary"
        />
        <Button
          disabled

          variant="danger"
          title="Danger!"
        />
        <Button
          disabled

          variant="warning"
          title="Warning!"
        />

        <Button
          loading
          title="Primary"
        />
        <Button
          loading
          variant="secondary"
          title="Secondary"
        />
        <Button
          loading
          variant="danger"
          title="Danger!"
        />
        <Button
          loading
          variant="warning"
          title="Warning!"
        />
      </div>
    </div>
  );
}
