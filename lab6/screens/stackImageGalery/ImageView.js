import React from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';

const ImageView = ({ imagesArray, width, height}) => {
    const normalImageSize = {
        width: width,
        height: height
    }
    const tripleImageSize = {
        width: width * 3,
        height: height * 3
    };
    const ImageOf = (uri, optionsStyles = normalImageSize) => (
        <Image
            style={optionsStyles}
            source={uri}
            threshold={150}
        />
    );
    return (
        <View style={styles.imageBlockContainer}>
            <View style={styles.smallImageContainer}>
                {imagesArray[0] && ImageOf(imagesArray[0])}
                {imagesArray[3] && ImageOf(imagesArray[1])}
                {imagesArray[5] && ImageOf(imagesArray[2])}
            </View>
            {imagesArray[1] && ImageOf(imagesArray[0], tripleImageSize)}
            <View style={styles.smallImageContainer}>
                {imagesArray[2] && ImageOf(imagesArray[3])}
                {imagesArray[4] && ImageOf(imagesArray[4])}
                {imagesArray[6] && ImageOf(imagesArray[5])}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageBlockContainer: {
        display: "flex",
        flexDirection: "row",
    },
    smallImageContainer: {
        display: "flex",
        flexDirection: "column"
    }
})

export default ImageView
