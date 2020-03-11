import * as React from 'react';

import { ParamContext } from '../../context';
import StripMTR from '../strip-mtr';
import Main from './main';
import DefsMTR from './defs-mtr';

const RailMap = () => {
    const { param } = React.useContext(ParamContext);
    return (
        <svg id="destination"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
                width: 'var(--rmg-svg-width)',
                height: 'var(--rmg-svg-height)',
                ['--rmg-svg-width' as any]: param.svg_width + 'px',
                ['--rmg-svg-height' as any]: param.svg_height + 'px',
                ['--rmg-theme-colour' as any]: param.theme[2],
            }} >
            <DefsMTR />
            <rect id="outer" x={0} y={0} />
            <StripMTR stripPc={param.strip_pc} />
            <Main />
        </svg>
    );
};

export default RailMap;
