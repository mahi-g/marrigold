/**
 * @type {Object.<string, string>}
 * @property {string} fontsize returns px value
 */
const fontSize = {
    micro: '10px',
    xsmall: '12px',
    tiny: '14px',
    small: '16px',
    default: '18px',
    medium: '20px',
    large: '24px',
    xlarge: '30px',
    xxlarge: '36px',
    jumbo: '42px',
};
/**
 * @type {Object.<string, string>}
 * @property {string} lineHeight
 */
const lineHeight = {
    micro: '16px',
    xsmall: '18px',
    tiny: '20px',
    small: '24px',
    default: '28px',
    medium: '32px',
    large: '36px',
    xlarge: '42px',
    xxlarge: '48px',
    jumbo: '54px',
};
/**
 * @type {Object}
 * @property {string} size returns px value
 */
const size = {
    tiny: '5px',
    xsmall: '8px',
    small: '10px',
    default: '16px',
    medium: '20px',
    mediumLarge: '24px',
    articleContent: '30px',
    large: '32px',
    xlarge: '64px',
    xxlarge: '120px',
    maxContentWidth: '780px',
    maxWidth: '1440px',
    /** @type {function(string): number} */
    stripUnit(unit) {
        return parseInt(unit, 10);
    },
};
const colorMap = {
    cream: '#FFF6C8',
    darkGrey: '#464541',
    darkGrey2: '#333333', /* for inner text*/
    lightGrey: '#9E9898',
    mustardYellow: '#EAC85E',
    orange: '#FEA91D',
    white: '#FFFFFF',

};

/**
 * store common responsive sizes
 * @type {Object.<string, string>}
 */
const screenSize = {
    upToXSmall: 'only screen and (max-width: 374px)',
    xSmallAndUp: 'not all and (max-width: 374px)',
    upToSmall: 'only screen and (max-width: 420px)',
    smallAndUp: 'not all and (max-width: 420px)',
    upToMedium: 'only screen and (max-width: 767px)',
    mediumAndUp: 'not all and (max-width: 767px)',
    upToLarge: 'only screen and (max-width: 1023px)',
    largeAndUp: 'not all and (max-width: 1023px)',
    xlargeAndUp: `not all and (max-width: ${size.maxWidth})`,
};

/**
 * z-index values in ranges of 10. This should give enough leeway to incremement in components as needed.
 * @type {Object.<string, number>}
 * @property {string} position returns a z-index value
 */
const layer = {
    superBack: -1,
    back: 1,
    middle: 11,
    front: 21,
    superFront: 22,
};

/**
 * store reusable font families (outside of the default)
 * @type {Object.<string, string>}
 */
const fontFamily = {
    header: `Paytone One`,
    body: `Raleway`,
    logo: `Arya`,
};

export const theme = {
    colorMap,
    fontFamily,
    fontSize,
    layer,
    lineHeight,
    screenSize,
    size
};
