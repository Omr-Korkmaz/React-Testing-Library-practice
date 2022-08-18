import { render, screen } from '@testing-library/react';
import Header from '../Header';



describe("Header", () => {
    it(' getByText method -  should render same text passed into title prop', () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Element = screen.getByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
    });
    it(' getByRole method - should render same tesxt passed into title prop', () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Element = screen.getByRole("heading", { name: /todo/i });
        expect(h1Element).toBeInTheDocument();
    });

    it('findByText method - should render same text passed into title prop', async () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Element = await screen.findByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
    });
    it('queryByText method -  should render same text passed into title prop', () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Element = screen.queryByText(/dogs/i);
        expect(h1Element).not.toBeInTheDocument()
    });

    //GetAllBy Methods - return array 
    it(' getAllByText should render same text passed into title prop', () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Elements = screen.getAllByText(/todo/i);
        expect(h1Elements.length).toBe(1);
    });
    
    it(' getAllByRole should render same text passed into title prop', () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Elements = screen.getAllByRole("heading");
        expect(h1Elements.length).toBe(2);
    });
})
