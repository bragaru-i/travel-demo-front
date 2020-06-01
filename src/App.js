import React, { Fragment } from 'react';

import './App.css';
import NavigationTop from './components/Navigation/NavigationTop';
import Herobox from './components/Herobox/Herobox';
import Features from './components/Features/Features';
import FavPlaces from './components/FavPlaces/FavPlaces';
import Cities from './components/Cities/Cities';
import Testimonials from './components/Testimonials/Testimonials';
import FeedbackForm from './components/Feedback/FeedbackForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <header>
        <NavigationTop />
        <Herobox />
      </header>
      <section className="section-features" id="features">
        <Features />
      </section>
      <section className="section-favplaces">
        <FavPlaces />
      </section>
      <section className="section-cities" id="cities">
        <Cities />
      </section>
      <section className="section-guest-testimonials">
        <Testimonials />
      </section>
      <section className="section-feedback">
        <FeedbackForm />
      </section>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
