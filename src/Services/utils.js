export const getColorByCategory =(category ) => {
    let colorToReturn = 'black';
    switch(category) {
        case 'alkali metal' :
            colorToReturn = '#DD4124';
            break;
        case 'alkaline earth metal' :
            colorToReturn = '#EFC050';
            break;
        case 'lanthanide' :
            colorToReturn = '#DFCFBE';
            break;
        case 'actinide' :
            colorToReturn = '#F7CAC9';
            break;
        case 'transition metal' :
            colorToReturn = '#9B2335';
            break;
        case 'post-transition metal' :
            colorToReturn = '#55B4B0';
            break;
        case 'metalloid' :
            colorToReturn = '#009B77';
            break;
        case 'diatomic nonmetal' :
            colorToReturn = '#88B04B';
            break;
        case 'noble gas' :
            colorToReturn = '#7FCDCD';
            break;
        default:
            colorToReturn = 'black';
    }
    return colorToReturn;
}