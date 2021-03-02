import React, { useEffect, useRef } from 'react';
import './data-tooltip.scss';

const DataTooltip = ({title, ...props}) => {
    let ref = useRef();

    useEffect(() => {
        if (ref.current.firstChild.firstChild.scrollWidth > ref.current.firstChild.firstChild.clientWidth) {
            ref.current.setAttribute('data-tooltip', title)
        }
    }, [ref]);

    return (
        <div ref={ref} className={'tooltip'}>
            {
                React.cloneElement(props.children, {ref: ref})
            }
        </div>
    )
}

export default DataTooltip;