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
        const { getByText } = render(<Button text="aceptar" clickHandler={clickAction} />)
        const button = await waitForElement(() => getByText("aceptar"))
    
        expect(button).toBeTruthy()
    })
    
    test("Click en botón una vez", async () => {
        const clickAction = jest.fn()
        const { getByText } = render(<Button text="aceptar" clickHandler={clickAction} />)
        const button = await waitForElement(() => getByText("aceptar"))
        
        fireEvent.click(button)
    
        expect(clickAction).toHaveBeenCalledTimes(1);  
    })
})
