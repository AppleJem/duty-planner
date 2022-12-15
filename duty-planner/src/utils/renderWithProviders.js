import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { setupStore } from '../store';
import { Provider } from 'react-redux'
//import reducers

export function renderWithProviders(
    ui,
    { //destructuring from the 2nd argument
        preloadedState = {},
        store = setupStore(preloadedState), 
        ...renderOptions
    } = {}
) {
    function Wrapper(props) {
        return <Provider store={store}>{props.children}</Provider>
    }
    return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
}