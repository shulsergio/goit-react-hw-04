// import React from 'react';

const Grid = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No photos found.</p>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <img src={item.urls.small} alt={item.alt_description || 'Unsplash image'} />
        </li>
      ))}
    </ul>
  );
};

export default Grid;
