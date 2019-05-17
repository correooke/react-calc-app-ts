import React from 'react'
import { cleanup, 
        render, 
        fireEvent, 
    waitForElement 
} from 'react-testing-library'
import Button from './Button'

describe("Testing de Button", () => {
    afterEach(cleanup)

    test("Carga de botón", async () => {
        const clickAction = () => {}
        const text = "aceptar"
        const { getByText } = render(<Button text={text} clickHandler={clickAction} />)
        const button = await waitForElement(() => getByText(text))
    
        expect(button).toBeTruthy()
    })
    
    test("Click en botón una vez", async () => {
        const clickAction = jest.fn()
        const text = "aceptar"
        const { getByText } = render(<Button text={text} clickHandler={clickAction} />)
        const button = await waitForElement(() => getByText(text))
        
        fireEvent.click(button)
    
        expect(clickAction).toHaveBeenCalledTimes(1);  
    })

    test("Click en botón una vez con find", async () => {
        const clickAction = jest.fn()
        const text = "aceptar"
        const { findByText } = render(<Button text={text} clickHandler={clickAction} />)
        const button = await findByText(text)
        
        fireEvent.click(button)
    
        expect(clickAction).toHaveBeenCalledTimes(1);  
    })    

    test("Click en botón una vez", async () => {
        const clickAction = jest.fn()
        const text = "aceptar"
        const { getByText } = render(<Button text={text} clickHandler={clickAction} />)
        const button = await waitForElement(() => getByText(text))
        
        fireEvent.click(button)
    
        expect(clickAction).toHaveBeenCalledTimes(1);  
    })    
})
