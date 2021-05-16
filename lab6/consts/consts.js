import React, {useEffect, useState} from 'react';
import { Dimensions } from "react-native";

export const MainBtmBarTheme = {
    dark: false,
    colors: {
        primary: '#675649',
        background: 'rgb(242, 242, 242)',
        card: '#7EB3C5',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const HeaderBarTheme = {
    dark: false,
    colors: {
        primary: '#7EB3C5',
        background: 'rgb(242, 242, 242)',
        card: '#7EB3C5',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const BtnMainTheme = {
    dark: false,
    colors: {
        primary: '#488962',
        background: 'rgb(242, 242, 242)',
        card: '#488962',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const getImageFromLocalData = (imgName) => {
    switch (imgName) {
        case 'Image_01.png':
            return require('../assets/bkImages/Image_01.png');
        case 'Image_02.png':
            return require('../assets/bkImages/Image_02.png');
        case 'Image_03.png':
            return require('../assets/bkImages/Image_03.png');
        case 'Image_05.png':
            return require('../assets/bkImages/Image_05.png');
        case 'Image_06.png':
            return require('../assets/bkImages/Image_06.png');
        case 'Image_07.png':
            return require('../assets/bkImages/Image_07.png');
        case 'Image_08.png':
            return require('../assets/bkImages/Image_08.png');
        case 'Image_10.png':
            return require('../assets/bkImages/Image_10.png');
        default:
            return require('../assets/coming_soon.jpeg');
    }
};

export const getInfoFromLocalData = (idx) => {
    switch (idx) {
        case '9780321856715':
            return require('../assets/bkInfo/9780321856715.json');
        case '9780321862969':
            return require('../assets/bkInfo/9780321862969.json');
        case '9781118841471':
            return require('../assets/bkInfo/9781118841471.json');
        case '9781430236054':
            return require('../assets/bkInfo/9781430236054.json');
        case '9781430237105':
            return require('../assets/bkInfo/9781430237105.json');
        case '9781430238072':
            return require('../assets/bkInfo/9781430238072.json');
        case '9781430245124':
            return require('../assets/bkInfo/9781430245124.json');
        case '9781430260226':
            return require('../assets/bkInfo/9781430260226.json');
        case '9781449308360':
            return require('../assets/bkInfo/9781449308360.json');
        case '9781449342753':
            return require('../assets/bkInfo/9781449342753.json');
        default:
            return require('../assets/bkInfo/forEmptyItems.json');
    }
};

export const data = [0, 1, 0, 1, 0, 1, 0, 1, 0];
export const labels =
    [
        '-2п', '', "", "", "", "-п", "", "", "", "", "", 0, "", "", "", "", "", 'п', "", "", "", "", '2п'
    ];

export const useScreenDimensions = () => {
    const [screenData, setScreenData] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenData(result.screen);
        };

        Dimensions.addEventListener('change', onChange);

        return () => Dimensions.removeEventListener('change', onChange);
    });

    return {
        ...screenData,
        isLandscape: screenData.width > screenData.height,
    };
};

