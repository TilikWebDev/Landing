import React, { useEffect, lazy, Suspense } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { initializeApp } from './redux/app-reducer';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const IndexContainer = lazy(() => import('./components/index/index-container'));

const App = (props) => {
  useEffect(() => {
      !props.initialized && props.initializeApp();
  }, [props.initialized]);

  return (
    
      <div id={'wrapper'}>
        <Header/>
        
          <Route path={'/'} render={() => { 
                return (
                  <Suspense fallback={<div id={'loading'}/>}>
                    <IndexContainer/>
                  </Suspense>
                );
            }}
          />

        <Footer/>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
      initialized: state.app.initialized
  }
}

export default compose(
  connect(mapStateToProps, { initializeApp })
)(App);
