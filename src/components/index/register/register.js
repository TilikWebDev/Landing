import React from 'react';

import { Formik, Field } from 'formik';
import * as Validators from '../../utils/validators/validators';

import {Input, Radio, File} from '../../../components/common/form-controls/form-controls';

const Register = ({register_button_status, register, positions}) => {

    const initialValues = {
        name: '', 
        email: '',
        phone: '',
        position_id: '',
        photo: ''
    }

    return (
        <section className={'register container'}>
            <h1 className={'h1'}>
                Register to get a work
            </h1>

            <div className={'register__min_container'}>
                <p className={'p1 register__title'}>
                    Attention! After successful registration and alert, update the list of users in the block from the top
                </p>

                <Formik className={'register__form'} initialValues={{...initialValues}}  onSubmit={register}>
                    {
                        ({handleSubmit, form}) => (
                            <form onSubmit={handleSubmit} className={'form'}> 
                                <Field title={'Name'} name={'name'} placeholder={'Your name'} component={Input} validate={Validators.validateName}/>
                                <Field title={'Email'} name={'email'} placeholder={'Your email'} component={Input} validate={Validators.validateEmail}/>
                                <Field title={'Phone number'} name={'phone'} placeholder={'+380 XX XXX XX XX'} inputMode={'tel'} assistive={'Enter a phone number in international format'} component={Input} validate={Validators.validatePhone}/>
                                <Field title={'Select your position'} name={'position_id'} component={Radio} radio_controls={positions} validate={Validators.validatePositionId}/>
                                <Field title={'Photo'} placeholder={'Upload your photo'} name={'photo'} component={File} validate={Validators.validatePhoto}/>

                                <button className={`form__send button_primary ${register_button_status}`}>
                                    Sigh up Now
                                </button>
                            </form> 
                        )
                    }
                </Formik>
            </div>
        </section>
    )
}

export default React.memo(Register);