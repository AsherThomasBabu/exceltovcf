import React from 'react';

const BuyMeCoffeeButton = () => {
  return (
    <div className="fixed bottom-4 right-2 z-50 md:bottom-6 md:right-4">
      <a href="https://www.buymeacoffee.com/asherthomas">
        <img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=asherthomas&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
          alt="Buy me a coffee"
          className="h-10 md:h-[54px] w-auto max-w-[180px] md:max-w-[250px]"
        />
      </a>
    </div>
  );
};

export default BuyMeCoffeeButton; 