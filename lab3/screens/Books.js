import React from "react";
import { View, Text, ScrollView, Image } from 'react-native'
import BooksList from '../assets/BooksList.json'
import { useScreenDimensions, getImageFromLocalData} from '../consts/consts'

const Books = () => {

    let books = [];
    const screenData = useScreenDimensions();
    const chk = screenData.isLandscape
    BooksList.books.map( item => (books.push(item)) )

    return (
        <ScrollView style={{ backgroundColor: '#f8ecdd' }}>
            <View>
                {
                    books.map(( item, i) => {
                        return(
                            <View key={i}>
                                <View style={{
                                    backgroundColor: '#488962',
                                    borderRadius: 30,
                                    flexDirection: 'row',
                                    margin: 10,
                                }}>
                                    <View>
                                        <Image
                                            resizeMode="cover"
                                            source={
                                                getImageFromLocalData(item.image)
                                            }
                                            style={{
                                                borderRadius: 30,
                                                height: 200,
                                                width: 150
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        marginLeft: '5%'
                                    }}>
                                        <Text style={{
                                            flex: 0,
                                            width: chk ? '100%' : '45%',
                                            fontSize: 18,
                                            marginBottom: 10,
                                            marginTop: 10,
                                            textAlign: 'left',
                                        }}>
                                            {
                                                item.title.length >= 43 ?
                                                    item.title.slice(0, 43 - 1) + '…' :
                                                    item.title
                                            }
                                        </Text>
                                        <Text style={{
                                            flex: 0,
                                            width: chk ? '100%' : '45%',
                                            fontSize: 15,
                                            marginBottom: 10,
                                            marginTop: 10,
                                            textAlign: 'left',
                                        }}>
                                            {
                                                item.subtitle.length === 0 ?
                                                    'Programming skills' :
                                                    item.subtitle.length >= 40 ?
                                                        item.subtitle.slice(0, 40 - 1) + '…' :
                                                        item.subtitle
                                            }
                                        </Text>
                                        <Text style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            marginBottom: '5%'
                                        }}>
                                            Price: {
                                            item.price.length === 0 ?
                                                'Priceless' :
                                                item.price
                                        }
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Books
