/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';

function createEventFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}
const formatMoney = Intl.NumberFormat('en-in', {
  style: 'currency',
  currency: 'INR',
}).format;

const PriceComponent = ({ type, value, inputComponent, onChange }) => (
  <div>
    <p>
      {type.title}- {value ? formatMoney(value / 100) : ''}
    </p>
    <p>{type.description}</p>
    <input
      type={type.name}
      value={value}
      onChange={(e) => onChange(createEventFrom(e.target.value))}
      ref={inputComponent}
    />
  </div>
);

export default PriceComponent;
