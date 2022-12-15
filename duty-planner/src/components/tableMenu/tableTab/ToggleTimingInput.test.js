import { render, fireEvent, screen } from "@testing-library/react";
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { renderWithProviders } from "../../../utils/renderWithProviders";
import ToggleTimingInput from "./ToggleTimingInput";


describe('toggle timing input method working', () => {
    test('switch to manual input working', () => {
        const { store, container } = renderWithProviders(<ToggleTimingInput />)

        //Act
        const toggleButton = container.querySelector('.toggle-button');
        fireEvent.click(toggleButton);
        console.log(store.getState().menuStatus.timingInputMethod);

        //Compare
        let timingInputMethod = store.getState().menuStatus.timingInputMethod;
        expect(timingInputMethod).toMatch('manual');
    });
});

