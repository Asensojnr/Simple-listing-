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
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png?crop=1.00xw:1.00xh;0,0&resize=480:*",
            },
            {
                name: "G-wagon",
                image: "https://leasecar.uk/images/main/cars/1/3/22257/xmercedes_benz_g_class_amg_station_wagon_special_edition_2018_front_three_quarter.jpeg.pagespeed.ic.xGHJKldgWY.jpg",
            },
            {
                name: "Benz",
                image: "https://pictures.dealer.com/m/mercedesbenzoffresnocamb/0791/bd30d591621dfa78f4743ee442686e0bx.jpg"
            },

            {
                name: "Range Rover",
                image: "https://avisassets.abgemea.com/.imaging/flexibleIntroSmall/dam/DMS/local/ZA/luxury/car-pages/range-rover-velar-feature.jpg"
            },
            {
                name: "Ford",
                image: "https://www.varsityford.com/assets/shared/CustomHTMLFiles/Responsive/Ford/images/collisionTruck.jpg"
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
                    <div className="columns">
                        <div className="column">
                            <p className="title">Fruits</p>
                            <ul>
                                {this.state.fruit.map(t => (
                                    <div>
                                        <img className="image is-128x128" src={t.image} alt="" />
                                        <li>{t.name}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <div className="column">
                            <p className="title">Cars</p>
                            <ul>
                                {this.state.cars.map(v => (
                                    <div>
                                        <img className="image is-128x128" src={v.image} alt="" />
                                        <li>{v.name}</li>
                                    </div>
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