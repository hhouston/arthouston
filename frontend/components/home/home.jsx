
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="splash-page">

          <section className="splash-img">
            <div className="splash-title">

                <h2 className="scarebnb-title">
                  <span>ScareBnB </span>
                  <p>a mobile friendly site to book spooky adventures.</p>
                </h2>
              </div>
          </section>

          <section className="home-content">
          </section>

          <section className="home-search-container">
          </section>

      </div>
    );
  }
}

export default Home;