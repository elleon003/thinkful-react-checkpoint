import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import STORE from './store';
import renderer from 'react-test-renderer';

describe('List component', () => {
  it('renders without crashing', () =>{
    const div = document.createElement('div');
    const cards = STORE.allCards;
    ReactDOM.render(<List cards={[cards]} />, div)
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const cards = STORE.allCards;
    const tree = renderer
      .create(<List header='This Header' cards={[cards]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});