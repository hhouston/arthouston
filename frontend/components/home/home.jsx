import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import ProfileModalContainer from '../profile/profile_container';
import LoginFormContainer from '../session/login_form_container';

import { Link } from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props);

      this.onToken = this.onToken.bind(this);
      this.purchase = this.purchase.bind(this);

    }

    onToken (token) {
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
      });
    }

    purchase () {
      if (this.props.currentUser) {
        console.log("current");
      } else {
        console.log("not current");

        return <ProfileModal />;
      }
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
                }, 10000);
            },

            onLeave: function(index, direction) {
                //after leaving section 1 (home) and going anywhere else, whether scrolling down to next section or clicking a nav link, this SHOULD stop the slideshow and allow you to navigate the site...but it does not
                if (index !== '1') {
                    // console.log('on leaving the slideshow/section1');
                    clearInterval(slideTimeout);
                }
            }
        });

    }

    render() {

        return (
            <div className="splash-page">

                <header id="header">
                    <ul id="nav">
                      <div>
                        <li data-menuanchor="home">
                          <a href="/#home">home</a>
                        </li>
                      </div>
                      <div>
                        <li data-menuanchor="art">
                          <a href="/#art">art</a>
                        </li>
                      </div>

                      <div>
                        <li data-menuanchor="bio">
                          <a href="/#bio">bio</a>
                        </li>
                      </div>

                      <div>
                        <li data-menuanchor="contact">
                          <a href="/#contact">more!</a>
                        </li>
                      </div>




                    </ul>
                </header>
                <div id="fullpage">
                    <div className="section" id="section0">
                      <div className="jumbotron">
                        <h1>Katherine Houston Studios</h1>
                        <p className="lead">+ Upcoming: Genesis Valentines Showing: February 14th, Saturday</p>
                        <br />
                        <br />
                        <br />

                        <a data-menuanchor="art" className="arrow-down" href="#art"></a>
                      </div>
                    </div>

                    <div className="section" id="section1">
                        <div className="slide slideOne">
                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486367939/Kathrine_Houston_0156_fixed_uvp15s.png" alt="red trey" />

                          <label>
                            Acrylic Platter
                          </label>
                          <label>
                            45 X 10 X 1.5
                          </label>
                          <label>
                            Price: $975
                          </label>

                          <StripeCheckout
                            token={this.onToken}
                            name="Katherine Houston Art"
                            description="Blue Trey"
                            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                            ComponentClass="div"
                            panelLabel="Give Money"
                            amount={1000}
                            currency="USD"
                            stripeKey="pk_test_dbdeGQDD17bcEdpzDqIVDfEJ"
                            email="house_toncoogs@yahoo.com"
                          >
                            <button className='purchase-btn'>
                              Purchase
                            </button>
                          </StripeCheckout>
                        </div>
                        <div className="slide slideTwo">
                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486367919/Kathrine_Houston_0133_fixed_mso5uk.png" alt="red trey" />

                          <label>
                            Acrylic Platter
                          </label>
                          <label>
                            45 X 10 X 1.5
                          </label>
                          <label>
                            Price: $975
                          </label>

                          <StripeCheckout
                            token={this.onToken}
                            name="Katherine Houston Art"
                            description="Blue Trey"
                            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                            ComponentClass="div"
                            panelLabel="Give Money"
                            amount={1000}
                            currency="USD"
                            stripeKey="pk_test_dbdeGQDD17bcEdpzDqIVDfEJ"
                            email="house_toncoogs@yahoo.com"
                          >
                            <button className='purchase-btn'>
                              Purchase
                            </button>
                          </StripeCheckout>
                        </div>
                        <div className="slide slideThree">
                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486367928/Kathrine_Houston_0145_fixed_srur6c.png" alt="red trey" />

                          <label>
                            Acrylic Platter
                          </label>
                          <label>
                            45 X 10 X 1.5
                          </label>
                          <label>
                            Price: $975
                          </label>

                          <StripeCheckout
                            token={this.onToken}
                            name="Katherine Houston Art"
                            description="Blue Trey"
                            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                            ComponentClass="div"
                            panelLabel="Give Money"
                            amount={1000}
                            currency="USD"
                            stripeKey="pk_test_dbdeGQDD17bcEdpzDqIVDfEJ"
                            email="house_toncoogs@yahoo.com"
                          >
                            <button className='purchase-btn'>
                              Purchase
                            </button>
                          </StripeCheckout>
                        </div>
                        <div className="slide slideFour">
                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486257508/Kathrine_Houston_0140_fixed_ytdgfv.png" alt="red trey" />

                          <label>
                            Acrylic Platter
                          </label>
                          <label>
                            45 X 10 X 1.5
                          </label>
                          <label>
                            Price: $975
                          </label>

                          <StripeCheckout
                            token={this.onToken}
                            name="Katherine Houston Art"
                            description="Blue Trey"
                            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                            ComponentClass="div"
                            panelLabel="Give Money"
                            amount={1000}
                            currency="USD"
                            stripeKey="pk_test_dbdeGQDD17bcEdpzDqIVDfEJ"
                            email="house_toncoogs@yahoo.com"
                          >
                            <button className='purchase-btn'>
                              Purchase
                            </button>
                          </StripeCheckout>
                        </div>
                        <div className="slide slideFive">
                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486367936/Kathrine_Houston_0150_fixed_fv7j8c.png" alt="red trey" />

                          <label>
                            Acrylic Platter
                          </label>
                          <label>
                            45 X 10 X 1.5
                          </label>
                          <label>
                            Price: $975
                          </label>

                          <StripeCheckout
                            token={this.onToken}
                            name="Katherine Houston Art"
                            description="Blue Trey"
                            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                            ComponentClass="div"
                            panelLabel="Give Money"
                            amount={1000}
                            currency="USD"
                            stripeKey="pk_test_dbdeGQDD17bcEdpzDqIVDfEJ"
                            email="house_toncoogs@yahoo.com"
                          >
                            <button className='purchase-btn'>
                              Purchase
                            </button>
                          </StripeCheckout>
                        </div>
                        <div className="slide slideSix">
                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486367947/Kathrine_Houston_0165_fixed_ju2nvj.png" alt="red trey" />

                          <label>
                            Acrylic Platter
                          </label>
                          <label>
                            45 X 10 X 1.5
                          </label>
                          <label>
                            Price: $975
                          </label>

                          <StripeCheckout
                            token={this.onToken}
                            name="Katherine Houston Art"
                            description="Blue Trey"
                            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                            ComponentClass="div"
                            panelLabel="Give Money"
                            amount={1000}
                            currency="USD"
                            stripeKey="pk_test_dbdeGQDD17bcEdpzDqIVDfEJ"
                            email="house_toncoogs@yahoo.com"
                          >
                            <button className='purchase-btn'>
                              Purchase
                            </button>
                          </StripeCheckout>
                        </div>
                        <div className="slide slideSeven">
                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486367951/Kathrine_Houston_0173_fixed_ahv2n8.png" alt="red trey" />

                          <label>
                            Acrylic Platter
                          </label>
                          <label>
                            45 X 10 X 1.5
                          </label>
                          <label>
                            Price: $975
                          </label>

                          <StripeCheckout
                            token={this.onToken}
                            name="Katherine Houston Art"
                            description="Blue Trey"
                            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                            ComponentClass="div"
                            panelLabel="Give Money"
                            amount={1000}
                            currency="USD"
                            stripeKey="pk_test_dbdeGQDD17bcEdpzDqIVDfEJ"
                            email="house_toncoogs@yahoo.com"
                          >
                            <button className='purchase-btn'>
                              Purchase
                            </button>
                          </StripeCheckout>
                        </div>
                        <div className="slide slideEight">
                          <img src="https://res.cloudinary.com/drhenvicq/image/upload/c_scale,w_731/v1486368013/Kathrine_Houston_0161_fixed_wlja8d.png" alt="red trey" />

                          <label>
                            Acrylic Platter
                          </label>
                          <label>
                            45 X 10 X 1.5
                          </label>
                          <label>
                            Price: $975
                          </label>

                          <StripeCheckout
                            token={this.onToken}
                            name="Katherine Houston Art"
                            description="Blue Trey"
                            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                            ComponentClass="div"
                            panelLabel="Give Money"
                            amount={1000}
                            currency="USD"
                            stripeKey="pk_test_dbdeGQDD17bcEdpzDqIVDfEJ"
                            email="house_toncoogs@yahoo.com"
                          >
                            <button className='purchase-btn'>
                              Purchase
                            </button>
                          </StripeCheckout>
                        </div>





                    </div>

                    <div className="section" id="section3">
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

                    <div className="section section2" style={{display:'flex', alignItems:'center'}} id="bio-page">
                        <iframe loop muted data-auto-play
                          id="myVideo"
                          src="https://player.vimeo.com/video/117635175"
                          frameBorder="0">
                        </iframe>

                        <div className="layer">
                          <a href="http://katherinehoustonart.com">See more work!</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
