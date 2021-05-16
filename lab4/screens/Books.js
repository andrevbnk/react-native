import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableHighlight, Dimensions} from 'react-native'
import BooksList from '../assets/BooksList.json'
import {
    useScreenDimensions, getImageFromLocalData,
    HeaderBarTheme, getInfoFromLocalData
} from '../consts/consts'
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchBar from "react-native-dynamic-search-bar";


export let books = [];
BooksList.books.map( item => (books.push(item)) )

const Books = ({ navigation }) => {
    const dim = Dimensions.get('screen')
    const [searchBarText, setSearchBarText] = useState('')
    const [booksData, setBooksData] = useState(books)
    const screenData = useScreenDimensions();
    const chk = screenData.isLandscape

    const filterBooks = (Data, text) => {
        if(text.trim().length === 0 || text.length === 0) {
            return Data
        } else {
            return Data.filter((item) => {
                if( item.title.replace(/[^a-zA-Z ]/g, "").toLowerCase().indexOf(text)> -1 ){
                    return (item)
                }
            })
        }
    }

    const currentData = filterBooks(booksData, searchBarText)

    const delFromArray = (id) => {
        const idx = booksData.findIndex((el) => el.isbn13 === id)
        const newBooksData = [...booksData.slice(0, idx),...booksData.slice(idx + 1)]
        setBooksData(newBooksData)
    };

    return (
        <ScrollView style={{ backgroundColor: '#f8ecdd' }}>
            <View>
                <Appbar.Header theme={ HeaderBarTheme }>
                    <Appbar.Action
                        icon="home"
                    />
                    <SearchBar
                        style={{ backgroundColor: '#f8ecdd', flex: 1}}
                        placeholder="Search"
                        onClearPress={() => {setSearchBarText('')}}
                        onChangeText={(text) => setSearchBarText(text.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, ' ').trim().replace(/,/g, ''))}
                    />
                    <Appbar.Action
                        icon="plus"
                        onPress={() => {
                            navigation.navigate('BkAdd', {
                                booksData: booksData,
                                setBooksData: setBooksData
                            });
                        }}
                    />
                </Appbar.Header>
            </View>
            <View>
                {
                    currentData.length === 0 ?
                        <View style={{
                            height: dim.height,
                            paddingTop: screenData.isLandscape ? '15%' : '65%',
                            flexDirection:'column',
                            alignItems:'center'
                        }}>
                            <Text style={{fontSize: 20}}>
                                There are no such books
                            </Text>
                        </View> :
                    currentData.map((item, i) => {
                        return(
                            <View key={i}>
                                <TouchableHighlight
                                    onPress={() => {
                                        navigation.navigate('BkInfo', {
                                            Id: item.isbn13,
                                        });
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: '#488962',
                                        borderRadius: 30,
                                        flexDirection: 'row',
                                        margin: 10
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
                                            marginLeft: '5%',
                                            width: '76%'
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
                                                bottom: -15,
                                                marginBottom: '5%'
                                            }}>
                                                Price: {
                                                item.price.length === 0 ?
                                                    '$100' :
                                                    item.price
                                            }
                                            </Text>
                                        </View>
                                        <TouchableHighlight
                                            style={{
                                                position: "absolute",
                                                right: 0,
                                                width: chk ? '8%' : '12%',
                                                height: '100%',
                                                borderRadius: chk ? 25 : 30,
                                                backgroundColor: '#A0C265'
                                            }}
                                            onPress={() => { delFromArray(item.isbn13) }}>
                                            <View>
                                                <Icon
                                                    onPress={() => { delFromArray(item.isbn13) }}
                                                    style={[{
                                                        color: '#675649',
                                                        flex: 0,
                                                        marginTop: chk ? '145%' : '180%',
                                                        alignSelf: 'center',
                                                    }]}
                                                    size={25}
                                                    name={'arrow-down'}
                                                />
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Books
