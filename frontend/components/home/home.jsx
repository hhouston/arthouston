
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function() {
        $('#fullpage').fullpage({
          sectionsColor: ['red', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000']
        });
    });
  }

  render() {
    return(
      <div className="splash-page">

          <section className="home-content">
              <div id="fullpage">
                  <div className="section">
                    <section className="splash-img">
                      <div className="splash-title">
                          <h2 className="scarebnb-title">
                            <span>ArtHouston</span>
                            <p>portfolio page for katherine houston</p>
                          </h2>
                        </div>
                    </section>
                  </div>

                  <div id="firstPage" className="section">Some section</div>
                  <div className="section">Some section</div>
                  <div className="section">Some section</div>
              </div>
          </section>

          <section className="home-search-container">
          </section>

      </div>
    );
  }
}

export default Home;
