import React, { useEffect, lazy, Suspense } from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';

import { initializeApp } from './redux/app-reducer';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import store from './redux/redux-store';

import IndexContainer from './components/index/index-container';

const App = (props) => {
  useEffect(() => {
      !props.initialized && props.initializeApp();
  }, [props.initialized]);

  return (
    
      <div id={'wrapper'}>
        <Header/>
        <IndexContainer/>
        <Footer/>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
      initialized: state.app.initialized
  }
}

const AppContainer = compose(
  connect(mapStateToProps, { initializeApp })
)(App);

const AppLanding = () => {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  )
}

export default AppLanding;