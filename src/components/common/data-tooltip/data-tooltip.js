import React, { useEffect } from 'react';
import '../common.scss';

const DataTooltip = ({title, ...props}) => {
    let ref;

    useEffect(() => {
        if (ref.children[0].offsetWidth < ref.children[0].scrollWidth) {
            ref.setAttribute('data-tooltip', title)
        }
    });

    return (
        <div ref={(d) => ref = d} className={'tooltip'}>
            {props.children}
        </div>
    )
}

export default DataTooltip;