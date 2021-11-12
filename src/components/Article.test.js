import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
const cred = {
    username: "Lambda",
    password: "School"
  }
  const nameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");

test('renders component without errors', ()=> {
    userEvent.type(nameInput, cred.username);
    userEvent.type(passwordInput, cred.password);
    wait = await screen.findAllByRole("button");
    await waitFor(()=> {
        render(<Article/>);
      });
   
});

test('renders headline, author from the article when passed in through props', ()=> {userEvent.type(nameInput, cred.username);
    userEvent.type(passwordInput, cred.password);
    wait = await screen.findAllByRole("button");
    await waitFor(()=> {
        const line = await screen.findByTestId('headline');
        expect(line).toBeInTheDocument();
        const author = await screen.findByTestId('author');
        expect(author).toBeInTheDocument();
       
      });
 });

 test('renders "Associated Press" when no author is given', ()=> {
    userEvent.type(nameInput, cred.username);
    userEvent.type(passwordInput, cred.password);
    wait = await screen.findAllByRole("button");
    await waitFor(()=> {
        const  author = await screen.findByTestId('author');
        expect(author).toBeInTheDocument();
       
       
      });
 });

 test('executes handleDelete when the delete button is pressed', ()=> {
    userEvent.type(nameInput, cred.username);
    userEvent.type(passwordInput, cred.password);
    wait = await screen.findAllByRole("button");
    await waitFor(()=> {
        const  button = await screen.findByTestId('deleteButton');
        userEvent.click(button);
        expect( handleDelete ).toHaveBeenCalled();
       
      });
 });

//Task List:
//1. Complete all above tests. Create test article data when needed.