import React, { useRef, useState } from 'react';
import { scroller } from 'react-scroll';
import { Formik, Field } from 'formik';

import * as Validators from '../../../utils/validators/validators';
import {Input, Radio, File} from '../../../components/common/form-controls/form-controls';
import {ModalCongratulations} from '../../modal/modal';


const Register = ({register_button_status, register, positions}) => {

    const [congratulations, setCongratulations] = useState(false);
    const photoRef = useRef();

    const initialValues = {
        name: '', 
        email: '',
        phone: '',
        position_id: '',
        photo: ''
    }

    const onSubmit = (data, {resetForm}) => {
        const forceUpdate = () => {
            photoRef.current.value = null;
            resetForm();
            setCongratulations(true);
        }

        register(data, forceUpdate);
    }

    return (
        <section id={'register_container'} className={'register container'}>
            <h1 className={'h1'}>
                Register to get a work
            </h1>

            <div className={'register__min_container'}>
                <p className={'p1 register__title'}>
                    Attention! After successful registration and alert, update the list of users in the block from the top
                </p>

                <Formik className={'register__form'} enableReinitialize initialValues={{...initialValues}}  onSubmit={onSubmit}>
                    {
                        ({handleSubmit, ...props}) => (
                            <form onSubmit={handleSubmit} name={'register'} className={'form'}> 
                                <Field title={'Name'} name={'name'} placeholder={'Your name'} component={Input} validate={Validators.validateName}/>
                                <Field title={'Email'} name={'email'} placeholder={'Your email'} component={Input} validate={Validators.validateEmail}/>
                                <Field title={'Phone number'} name={'phone'} placeholder={'+380 XX XXX XX XX'} inputMode={'tel'} assistive={'Enter a phone number in international format'} component={Input} validate={Validators.validatePhone}/>
                                <Field value={props.values.position_id} title={'Select your position'} name={'position_id'} component={Radio} radio_controls={positions} validate={Validators.validatePositionId}/>
                                <Field childref={photoRef} title={'Photo'} placeholder={'Upload your photo'} name={'photo'} component={File} validate={Validators.validatePhoto}/>

                                <button type={'submit'} className={`form__send button_primary ${register_button_status}`}>
                                    Sigh up Now
                                </button>
                            </form> 
                        )
                    }
                </Formik>
            </div>

            {
                congratulations &&
                <ModalCongratulations 
                    closeCallback={() => {
                        scroller.scrollTo('users_container', {
                            duration: 500,
                            spy: true,
                            smooth: true
                        });
                    }}
                />
            }
        </section>
    )
}

export default React.memo(Register);