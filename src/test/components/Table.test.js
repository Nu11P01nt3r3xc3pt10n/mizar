import React from "react";
import Table from "../../components/Table.js";
import makeData,{columnsValue} from "../../utils";
import {render} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';

const numberOfEntries = 40
const data = makeData(numberOfEntries)

let buttons  = null

function getIndex(firstName) {
  return data.findIndex(obj => obj.firstName === firstName);
}

describe("Tests basic functionalities of table",()=>{
  test("It renders all the checkboxes",()=>{
    let { container } = render(
      <Table columns={columnsValue} data={data}/>
    )
    let rawButtons = container.querySelectorAll('input');    

    //the plus 1 is meant to be the checkbox for selecting/deselecting all the checkboxes at once
    expect(rawButtons.length).toBe(numberOfEntries +1);

  })
  test("Selecting all components at once",()=>{
    let { container } = render(
      <Table columns={columnsValue} data={data}/>
    )
    let rawButtons = container.querySelectorAll('input');    

    act(() => {
      userEvent.click(rawButtons[0])
    })
    let selections = container.querySelector('[data-testid="selections"]')
    
    expect(selections.textContent).toContain(data[Math.floor(Math.random() * (numberOfEntries -1))].firstName);
    expect(selections.textContent).toContain(data[Math.floor(Math.random() * (numberOfEntries -1))].firstName);
    expect(selections.textContent).toContain(data[Math.floor(Math.random() * (numberOfEntries -1))].firstName);
    expect(selections.textContent).toContain(data[Math.floor(Math.random() * (numberOfEntries -1))].firstName);
    expect(selections.textContent).toContain(data[Math.floor(Math.random() * (numberOfEntries -1))].firstName);
    expect(selections.textContent).toContain(data[Math.floor(Math.random() * (numberOfEntries -1))].firstName);
  })

  test.each(data)("selection of %j is propagated to selections area",function (user){

    let elementIndex = getIndex(user.firstName)
    
    let { container } = render(
      <Table columns={columnsValue} data={data}/>
    )
    let rawButtons = container.querySelectorAll('input');     
    buttons = [].slice.call(rawButtons); 
    buttons.shift();


    act(() => {
      userEvent.click(buttons[elementIndex])
    })
    let selections = container.querySelector('[data-testid="selections"]')
    
    expect(selections.textContent).toContain(user.firstName);
  })
 
})