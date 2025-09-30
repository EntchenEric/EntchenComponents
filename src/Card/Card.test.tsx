import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card, CardProps } from "./Card";
import 'jest-styled-components';

describe("Card Component", () => {
    const defaultTitle = "Card Title";
    const defaultDescription = "This is the card description.";
    const iconText = "Icon";

    const leftImage = {
        url: "https://via.placeholder.com/100",
        alt: "Left Image Alt",
    };

    const rightImage = {
        url: "https://via.placeholder.com/100",
        alt: "Right Image Alt",
    };

    const renderCard = (props?: Partial<CardProps>) =>
        render(
            <Card
                title={defaultTitle}
                description={defaultDescription}
                {...props}
            />
        );

    it("should render the title and description correctly when they are strings", () => {
        renderCard();

        expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
            defaultTitle
        );
        expect(screen.getByText(defaultDescription)).toBeInTheDocument();
    });

    it("should render title and description as nodes when passed as React elements", () => {
        const customTitle = <h2>Custom Title Node</h2>;
        const customDescription = <span>Custom Description Node</span>;

        renderCard({ title: customTitle, description: customDescription });

        expect(screen.getByText("Custom Title Node")).toBeInTheDocument();
        expect(screen.getByText("Custom Description Node")).toBeInTheDocument();
    });

    it("should render an icon if provided", () => {
        renderCard({ icon: <span>{iconText}</span> });

        expect(screen.getByText(iconText)).toBeInTheDocument();
    });

    it("should not elevate on hover if elevateOnHover is false", () => {
        renderCard({ elevateOnHover: false });

    });

    it("should display left image when leftImage prop is passed", () => {
        renderCard({ leftImage });

        const img = screen.getByAltText(leftImage.alt);

        expect(img).toHaveAttribute("src", leftImage.url);

    });

    it("should display right image when rightImage prop is passed", () => {
        renderCard({ rightImage });

        const img = screen.getByAltText(rightImage.alt);

        expect(img).toHaveAttribute("src", rightImage.url);
    });

    it('should use default alt text for images if alt prop is missing', () => {
        render(
            <Card
                title={defaultTitle}
                description={defaultDescription}
                leftImage={{ url: 'https://via.placeholder.com/100' }}
                rightImage={{ url: 'https://via.placeholder.com/100' }}
            />
        );

        expect(screen.getByAltText('Left image')).toBeInTheDocument();
        expect(screen.getByAltText('Right image')).toBeInTheDocument();
    });

    it("should apply gap to ContentWrapper when images are present", () => {
        const { container } = render(
            <Card
                title="title"
                description="desc"
                leftImage={{ url: "https://via.placeholder.com/100", alt: "left" }}
            />
        );

        const contentWrapper = container.firstChild?.firstChild;

        expect(contentWrapper).toHaveStyleRule("gap", "1.5rem");
    });


    it('should not apply gap to ContentWrapper when no images are present', () => {
        const { container } = render(<Card title="title" description="desc" />);

        const contentWrapperDivs = container.querySelectorAll('div');

        contentWrapperDivs.forEach(div => {
            expect(div).not.toHaveStyle(`gap:1.5rem`);
            expect(div).not.toHaveStyle(`gap:2.5rem`);
        });
    });
});