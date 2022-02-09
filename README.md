## Getting Started

First, install node_modules with yarn

```bash
yarn
```

then, run the development server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.

---

# React Exercise Instructions

Your task is to implement the included mockup (`public/mockup.png`) using React, with the stock and clock updating in real time.
Below, you will find an API endpoint and other resources needed to complete the app. A few helpful functions and interfaces are provided for
your convinience within `src/App.tsx`, you do not have to use them if you do not want to. The background image is located in `public/city.jpg`.

### Suggested steps:

1. The layout and general appearance. Ignore the small details and the digital clock squares.
2. Making the date and clock use the current time and date
3. Integrating the API to use actual stock prices
4. Updating the page every minute
5. The smaller details in the mockup
6. The appearance of the clock (the squares)
7. The functionality of the clock (digital clock using squares that change with the current time)

## Resources

- [React Documentation](https://reactwithhooks.netlify.app/docs/getting-started.html)
- Feel free to use any libraries for CSS, but be sure to make your implementation look as much like the mockup as possible.
- Feel free to implement the weather icons using [React Icons](https://react-icons.github.io/react-icons) or another library.
- API for stock data (using our already registered API key and symbol=MSFT):
  https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=HAG13KIF0X10H6C0
  Should you need more documentation, it is found [here](https://www.alphavantage.co/documentation/)

- These color codes may be helpful to you as well:
  - Coral Tree: #a4656e
  - Platinum: #e8e6e3
  - Silver Chalice: #adb3a8
  - Gunsmoke: #787e72
  - Rock: #5b563e
  - Can Can: #d89ca0
  - Tapestry: #b35b75
  - Toledo: #392835

## Tips

Part of being an effective developer and working on deadlines is prioritizing different parts of the work. In this case, you may want to leave the clock part until the end. There is not a font available for the clock, so do not count on that as your solution. It is unlikely you will complete the entire project—it is a good idea to have an idea about how you would implement the things you didn't get to. Please document these ideas if you have them in comments.

Do not worry about browser compatibility. However, you should be aware of what features will and will not work in different browsers.

You do not have to have every part of the mockup componentized if you feel it will slow you down.

There is not a responsive design. Don't worry about making it responsive, but your solution should not be dependent on statically/absolutely placing elements. It should be at least somewhat responsive. We generally prefer using layout tools like grid/flexbox.

Feel free to install any packages you feel are necessary to complete the work, but please provide reasons why you included them, what the tradeoffs are, and what alternatives exist in the comments.

Good luck!
