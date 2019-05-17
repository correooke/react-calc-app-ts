import React from 'react'
import {render, waitForElement } from 'react-testing-library'
import Functions from './Functions';

describe("Testing Functions Component", () => {
    test("Carga de botones", async () => {
        const onContentClear = jest.fn();
        const onDelete = jest.fn();
        const { queryAllByRole } = render(
            <Functions onContentClear={onContentClear} onDelete={onDelete} />
        )

        const functions = await waitForElement(() => queryAllByRole('button'))

        expect(functions).toHaveLength(2);
    })


    test("Carga de botones sin waitw", async () => {
        const onContentClear = jest.fn();
        const onDelete = jest.fn();
        const { queryAllByRole } = render(
            <Functions onContentClear={onContentClear} onDelete={onDelete} />
        )

        expect(queryAllByRole('button')).toHaveLength(2);
    })    

    test("Carga de botones (con find)", async () => {
        const onContentClear = jest.fn();
        const onDelete = jest.fn();
        const { findAllByRole } = render(
            <Functions onContentClear={onContentClear} onDelete={onDelete} />
        )

        const functions = await findAllByRole('button')

        expect(functions).toHaveLength(2);
    })    
})