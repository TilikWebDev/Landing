import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Register from './register';
import {register} from '../../../redux/register-reducer';

const RegisterContainer = ({register_button_status, register, positions}) => {
  return (
    <Register register_button_status={register_button_status} register={register} positions={positions}/>
  );
}

const mapStateToProps = (state) => {
    return {
        register_button_status: state.register.register_button_status,
        positions: state.register.positions
    }
}

export default compose(
    connect(mapStateToProps, {
        register
    })
)(RegisterContainer);