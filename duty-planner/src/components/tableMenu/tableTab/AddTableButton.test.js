import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { renderWithProviders } from "../../../utils/renderWithProviders";
import AddTableButton from "./AddTableButton";
import Table from "../../table/Table";


describe('toggle timing input method working', () => {
    test('switch to manual input working', () => {
        const { store, container } = renderWithProviders(
            <>
                <AddTableButton callPopup={() => console.log('call popup')} />
                <Table />
            </>
        )

        //Act
        const addButton = screen.getByTestId('add-table-button');
        userEvent.click(addButton);


        //Compare
        //Check if there are tables in the store
        const tableTitlesArr = Object.keys(store.getState().tableSpecs.tables);
        expect(tableTitlesArr).toHaveLength(1);
    });

});