import { BrowserRouter } from "react-router-dom"
import HomePage from "../../../pages/HomePage"
import {screen,render} from "@testing-library/react"

const MockHome = () => {
    return(
        <BrowserRouter>
           <HomePage/>
        </BrowserRouter>
    )
}


test("should display the heading Home",()=>{
    render(<MockHome/>)
    const headingElement = screen.getByRole("heading" , {name:"Home"})
    expect(headingElement).toBeVisible();
})

test("should display Link to AboutPage",()=>{
    render(<MockHome/>)
    const linkElement = screen.getByTestId("about-link")
    expect(linkElement.innerHTML).toBe("About")
})

test("should display Link to DataPage",()=>{
    render(<MockHome/>)
    const linkElement = screen.getByTestId("data-link")
    expect(linkElement.innerHTML).toBe("Data")
})