import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Home extends React.Component {
    constructor(props) {
        super(props);

      this.onToken = this.onToken.bind(this);
    }

    onToken (token) {
      console.log(token);
      token.amount = 500;
      fetch('charges', {
        method: 'POST',
        body: JSON.stringify(token),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers':'X-Requested-With'
        },
      }).then(innerToken => {
        alert(`Purchasd complete!, we will email you a receipt shortly!`);
      });
    }

    componentDidMount() {
        let slideTimeout;

        $('#fullpage').fullpage({
            anchors: [
                'home', 'art', 'bio', 'contact'
            ],
            animateAnchor: true,
            menu: '.nav',
            verticalCentered: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            css3: true,
            afterRender: function() {
                //on page load, start the slideshow
                slideTimeout = setInterval(function() {
                    // $.fn.fullpage.moveSlideRight();
                }, 5000);
            },

            onLeave: function(index, direction) {
                //after leaving section 1 (home) and going anywhere else, whether scrolling down to next section or clicking a nav link, this SHOULD stop the slideshow and allow you to navigate the site...but it does not
                if (index !== '1') {
                    console.log('on leaving the slideshow/section1');
                    // clearInterval(slideTimeout);
                }
            }
        });

    }

    render() {
        return (
            <div className="splash-page">

                <header id="header">
                    <ul id="nav">
                        <li data-menuanchor="home">
                            <a href="#home">home</a>

                        </li>
                        <li data-menuanchor="art">
                            <a href="#art">art</a>

                        </li>
                        <li data-menuanchor="bio">
                            <a href="#bio">bio</a>

                        </li>
                        <li data-menuanchor="contact">
                            <a href="#contact">contact</a>

                        </li>
                    </ul>
                </header>
                <div id="fullpage">
                    <div className="section" id="section0">
                      <div className="jumbotron">
                        <h1>Katherine Houston Studios</h1>
                        <p className="lead">+ Upcoming: Genesis Valentines Showing: February 14th, Saturday</p>
                      </div>
                      <button data-menuanchor="art">
                        <a href="#art">art</a>
                      </button>
                    </div>

                    <div className="section" id="section1">
                        <div className="slide slideOne">

                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486151559/Kathrine_Houston_0173_frzajo.jpg" alt="blue trey"/>
                          <StripeCheckout
                            token={this.onToken}
                            name="Three Comma Co."
                            description="Big Data Stuff"
                            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                            ComponentClass="div"
                            panelLabel="Give Money"
                            amount={1000}
                            currency="USD"
                            stripeKey="pk_test_dbdeGQDD17bcEdpzDqIVDfEJ"
                            email="house_toncoogs@yahoo.com"
                          />
                        </div>
                        <div className="slide slideTwo">
                          <img src="http://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486151363/Kathrine_Houston_0156_i2sk7a.jpg" alt="red trey" />
                        </div>

                        <div className="slide slideThree">
                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486151535/Kathrine_Houston_0161_yy6xg0.jpg" alt="purple trey" />
                        </div>
                        <div className="slide slideFour">
                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486151347/Kathrine_Houston_0133_ho06ey.jpg" alt="yellow trey" />
                        </div>
                    </div>
                    <div className="section" id="bio-page">

                      <div className="img-container">
                        <img id="bio-img" src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,q_80,w_1520/v1486063290/galv-water-painting_ebrwzg.jpg" alt="katherine houston profile" />
                      </div>
                      <div id="bio-text">
                        <p>Much like trying to hold on to sand in your hand, control is the surprising outcome of letting go. It is this push-and-pull that drives me to make my art. By fully relenting to my work, I somehow gain control.</p>
                        <br />
                        <p>As with any work of art, I start with a blank canvas – or, often in my case, a piece of Plexiglas. I use the technique of "reverse painting," where I apply acrylic paint to the back of a piece of Plexiglas. On the other side, beneath the layers of paint, lies the fruit of my labor.</p>
                        <br />
                        <p>While my method of painting lends itself to the creation of abstract imagery, I still find inspiration in places grounded in reality such as a city or landscape. I choose beautiful colors that fuel my brush strokes and pull me into the painting – a serene, happy place of my own making.</p>
                        <br />
                        <p>Like a blind contour drawing, "reverse painting" is about having control over something that cannot fully be controlled. When I turn the plexiglass over I see the totality of what I have created: a beautiful, aesthetic interpretation of how the colors speak to me.</p>
                      </div>
                    </div>
                    <div className="section" id="section3">
                      <form style={{width: "100%", height: "100%"}} action="/your-server-side-code" method="POST">

                      </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
