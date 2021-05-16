import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar, Dimensions, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Appbar } from 'react-native-paper';
import SearchBar from "react-native-dynamic-search-bar";
import ImageView from "./ImageView";
import { useScreenDimensions, HeaderBarTheme } from '../../consts/consts'

const ImageLogic = () => {

    const [imageView, setImageView] = useState([]);

    const pickImage = async () => {
        const pickedImage = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1
        });

        if (pickedImage.cancelled) {
           console.log('Warn: cancelled')
        } else {
            setImageView(prevState => [...prevState, { uri: pickedImage.uri }])
        }
    };

    const screenData = useScreenDimensions();

    const galleryComponent = arraySubSplitter(imageView).map(
        image => (
            <ImageView
                key={image[0].uri}
                imagesArray={image}
                width={screenData.width / 5}
                height={
                    screenData.isLandscape ?
                        screenData.height / 2.5 :
                        screenData.height / 8
                }
            />
        )
    );

    return (
        <>
            <View>
                <Appbar.Header theme={HeaderBarTheme}>
                    <Appbar.Action icon="home"/>
                    <SearchBar
                        placeholder='Search'
                        style={{flex: 1}}
                    />
                    <Appbar.Action
                        icon="plus"
                        onPress={pickImage}
                    />
                </Appbar.Header>
            </View>
            <View style={orientation().galleryContainer}>
                {
                    imageView.length !== 0 && (
                        <ScrollView style={orientation().imgContainer}>
                            { galleryComponent }
                        </ScrollView>
                    )}
                {
                    imageView.length === 0 &&
                    <View style={orientation().emptyView}>
                        <Text
                            style={{ fontStyle: "italic", fontSize: 20}}
                        >
                            No one
                        </Text>
                    </View>
                }
            </View>
        </>
    );
};

const arraySubSplitter = (arr = [], maxArrSize = 7) => {

    const result = [];

    for (let i = 0; i < Math.ceil(arr.length / maxArrSize); i++) {
        result[i] = arr.slice(i * maxArrSize, (i * maxArrSize) + maxArrSize);
    }

    return result;
};

const portrait_styles = StyleSheet.create({
    imgContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 10,
    },
    galleryContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    picker: {
        alignSelf: "center",
        width: "100%"
    },
    emptyView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
})


const landscape_styles = StyleSheet.create({
    imgContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 10,
    },
    galleryContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    picker: {
        alignSelf: "center",
        width: "100%"
    },
    emptyView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
})

const orientation = () => {
    const dimension = Dimensions.get('screen');
    if (dimension.height >= dimension.width) {
        return portrait_styles
    } else {
        return landscape_styles
    }
}

export default ImageLogic
