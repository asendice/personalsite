# Portfolio Site

This is my personal portfolio that showcases my best projects.

## Parallax Effect

This effect was created using a landscape SVG image I found on Shutterstock.com. In photo shop I parsed
the image into layers. Then created <div> tags for every layer and set CSS properties:

```
 background-url(/pathToImage);
 height: 100%;
 width: 100%;
 position: absolute;
 z-index: 2;
 background-size: 100% 100%;
```

Utilizing react and an event listener "scroll", I was able to set state equal to the number of pixels the document is
currently scrolled along the vertical axis.

```
 const [offSetY, setOffSetY] = useState(0);

  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
```

Finally using CSS property transform to move the layers accordingly.

```
<div
  className="fourth"
  style={{ transform: `translateY(${offSetY * 0.5}px)` }}
  ></div>
```

## Installation

Live Demo:
https://dylantravisportfolio.herokuapp.com/

```
# Clone this repository
$ git clone https://github.com/asendice/personalsite

# Go into the repository
$ cd personalsite

# Install backend dependencies
$ npm install

# Install frontend dependencies
$ cd client
$ npm install

# Go to Root File personalsite/
$ cd ..

# Run the server
$ npm run dev

# Open new terminal and go to client folder
$ cd client

# Run the app
$ npm start
```

## Technologies

```Project is Created with
React version: 17.0.2
React Scroll: 1.8.2
Semantic Ui version: 2.0.3
mongoose version: 5.12.3
express version: 4.17.1
```

## Links

https://github.com/asendice https://www.linkedin.com/in/dylan-travis-2716a4205/ https://dylantravisportfolio.herokuapp.com/
