import React from 'react';
import Grocery from './Grocery';

const GroceryList = ({
  groceries,
  onPurchaseGrocery,
  onStarGrocery,
  onDeleteGrocery,
  onClearGroceries
}) => {
  return (
    <section className="GroceryList">
      <button
        onClick={onClearGroceries}
        disabled={!groceries.length}
      >
        Clear Groceries
      </button>
      <div className="GroceryList-groceries">
        {groceries.map(item =>
          <Grocery
            key={item.id}
            {...item}
            onPurchase={() => onPurchaseGrocery(item.id)}
            onStar={() => onStarGrocery(item.id)}
            onDelete={() => onDeleteGrocery(item.id)}
          />
        )}
      </div>
    </section>
  );
};

export default GroceryList;