import React from 'react';
import { render } from '@testing-library/react';
import Card from '../services/Card.js';
import CardView from './CardView.jsx';

describe("Card view images", () => {
  const card = new Card('heart', 'queen');
  const render_cardview = render(<CardView card={card} />);
  const imgs = render_cardview.getAllByRole("img");

  test('card view contains correct number of image elements', () => {
    expect(imgs.length).toEqual(2);
  });

  test('card view contains correct image files', () => {
    expect(imgs.length).toEqual(2);
    expect(imgs[0].src).toMatch(/queen_heart.png$/);
    expect(imgs[1].src).toMatch(/back-blue.png$/);
  });
});


