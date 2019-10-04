import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    // source: ["Headlines", "BBC NEWS", "CCN NEWS", "AS NEWS"],
    fruit: [
      {
        name: "apple",
        image: "https://i.ibb.co/sybhNWD/pexels-photo-39803.jpg",
      },
      {
        name: "Banana",
        image: "https://i.ibb.co/yFGH6q1/Bananas-5c6a36a346e0fb0001f0e4a3.jpg",
      },
      {
        name: "orange",
        image: "https://i.ibb.co/j5LXZ03/gettyimages-185284489-612x612.jpg"
      },

      {
        name: "grape",
        image: "https://i.ibb.co/ZVWCScP/power-fruit-grapes-0.jpg"
      },
      {
        name: "strawberry",
        image: "https://cdn.corecanvas.com/encorefruit-a64331d7/media/500/5a67a5bdb3d9f0_AdobeStock_140773619.jpeg"
      }],


    cars: [
      {
        name: "Rolls Royce",
        image: "",
      },
      {
        name: "G-wagon",
        image: "",
      },
      {
        name: "Benz",
        image: ""
      },

      {
        name: "Range Rover",
        image: ""
      },
      {
        name: "Ford",
        image: ""
      }],
    places: [
      {
        name: "tabora",
        image: "",
      },
      {
        name: "accra",
        image: "",
      },
      {
        name: "kasoa",
        image: ""
      },

      {
        name: "bortianor",
        image: ""
      },
      {
        name: "lapaz",
        image: ""
      }],
  }

  render() {
    return (
      <section className="section">
        <div className="container">

          {/* 
          {this.state.source.map(s => (
            <span className="tag">{s}</span>
          ))} */}
          <div className="columns">



            <div className="column">
              <p className="title">Fruits</p>

              <ul>
                {this.state.fruit.map(w => (
                  <li>{}</li>
                ))}
              </ul>

            </div>

            <div className="column">
              <p className="title">Cars</p>


              <ul>
                {this.state.cars.map(i => (
                  <li>{}</li>
                ))}
              </ul>

            </div>

            <div className="column">
              <p className="title">Places</p>

              <ul>
                {this.state.places.map(j => (
                  <li>{}</li>
                ))}
              </ul>

            </div>


          </div>




        </div>
      </section>
    )
  }
}


export default App;
