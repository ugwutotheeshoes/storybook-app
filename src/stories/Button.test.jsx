import { Button } from "../components/Button";
import { render, screen } from "@testing-library/react";
import initStoryshots from '@storybook/addon-storyshots';


test("should render", () => {
    render(<Button label="click me!" />);
});

initStoryshots();