import React, {useEffect, useState} from 'react';
import {Dimensions, View} from "react-native";
import {Appbar} from "react-native-paper";
import SearchBar from "react-native-dynamic-search-bar";

export const MainBtmBarTheme = {
    dark: false,
    colors: {
        primary: '#675649',
        background: 'rgb(242, 242, 242)',
        card: '#675649',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const HeaderBarTheme = {
    dark: false,
    colors: {
        primary: '#675649',
        background: 'rgb(242, 242, 242)',
        card: '#675649',
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

// <View>
//     <Appbar.Header theme={ HeaderBarTheme }>
//         <Appbar.Action
//             icon="home"
//         />
//         <SearchBar
//             style={{ backgroundColor: '#f8ecdd', flex: 1}}
//             placeholder="Coming soon"
//         />
//         <Appbar.Action
//             icon="plus"
//         />
//     </Appbar.Header>
// </View>
// import { Appbar } from 'react-native-paper';
// import SearchBar from "react-native-dynamic-search-bar";
