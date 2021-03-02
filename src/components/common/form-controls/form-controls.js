import React from 'react';
require('./form-controls.scss');

const FormControl = ({form, field, title, assistive, ...props}) => {
    let errors = form.errors[field.name];
    let touched = form.touched[field.name];
    
    return (
        <div className={['form__field', ((errors && touched) && 'field__error')].join(' ')}>
            <p className={'field__title p1'}>
                {title}
            </p>

            {
                props.children
            }

            { 
                ((errors && touched) || assistive) &&
                    <span className={'field__assistive'}>
                        {
                            (errors && touched) ?
                                errors :
                                assistive    
                        }
                    </span>
            }
        </div>
    );
}

export const Input = (props) => {
    return (
        <FormControl {...props}>
            <input className={'field__input'} {...props.field} type={props.type} placeholder={props.placeholder} inputMode={(props.inputMode || null)} />
        </FormControl>
    )
}

export const File = (props) => {
    return (
        <FormControl {...props}>
            <label className={['field__file', props.field.value && (props.field.value.name) && 'text'].join(' ')}>
                <input ref={props.childref} type={'file'} className={'field__input'} {...props} onChange={(event) => {
                    props.form.setFieldValue(props.field.name, event.currentTarget.files[0]);
                }} />

                <span value={props.field.value && (props.field.value.name) ? props.field.value.name : props.placeholder}  className={'field__file_browser'}>
                </span>
            </label>
        </FormControl>
    )
}

export const Radio = (props) => {
    return (
        <FormControl {...props}>
            {
                props.radio_controls.map((c, index) => {
                    return (
                        <label className={'field__radio'} key={index}>
                            <input checked={props.value == c.id} {...props.field} type={'radio'} name={props.field.name} value={c.id}/>
                            
                            <p className={'p1'}>
                                {c.name}
                            </p>
                        </label>
                    )
                })
            }
        </FormControl>
    )
}