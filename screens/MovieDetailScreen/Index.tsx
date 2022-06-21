import React, { useState, useEffect } from 'react'
import { Image, ScrollView, FlatList, Text, Pressable, StyleSheet, View, TouchableOpacity } from 'react-native';
import movie from '../../assets/movie';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import EpisodeList from '../../components/EpisodeItem/index';
import { Picker } from '@react-native-picker/picker';
import VideoPlayer from '../../components/VideoPlayer';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailScreen = () => {
    // console.log(firstEpisode);

    const [currentSeason, setCurrentSeason] = useState(firstEpisode);
    // const [currentEpisode, setCurrentEpisode] = useState(firstEpisode.episodes.items[0]);


    const seasonNames = movie.seasons.items.map(season => season.name);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
            {/* <VideoPlayer episode={currentEpisode} /> */}
            <FlatList
                //  data={firstSeason.episodes.items}
                data={currentSeason.episodes.items}
                renderItem={({ item }) => <EpisodeList episode={item} />}
                style={{ marginBottom: 'auto' }}
                ListHeaderComponent={(
                    <View style={{ padding: 12 }}>
                        {/* <EpisodeList episode={firstEpisode} /> */}

                        <ScrollView >
                            <Text style={styles.title}>{movie.title}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.match}>98% match</Text>
                                <Text style={styles.year}>{movie.year}</Text>
                                <View style={styles.ageContainer}>
                                    <Text style={styles.age}>+12</Text>
                                </View>
                                <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                                <MaterialIcons name="hd" size={24} color="black" />
                            </View>

                            {/* Play Button */}
                            <TouchableOpacity onPress={() => { console.warn('play clicked') }} style={styles.playButton}>
                                <Text style={styles.playButtonText}>
                                    <Entypo name="controller-play" size={16} color="black" />
                                    Play
                                </Text>
                            </TouchableOpacity>

                            {/* Download Button */}
                            <TouchableOpacity onPress={() => { console.warn('Download clicked') }} style={styles.downloadButton}>
                                <Text style={styles.downloadButtonText}>
                                    <AntDesign name="download" size={16} color="white" />
                                    Download
                                </Text>
                            </TouchableOpacity>

                            <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
                            <Text style={styles.year}>Cast: {movie.cast}</Text>
                            <Text style={styles.year}>Creator: {movie.creator}</Text>

                            {/* Row with icon buttons */}
                            <View style={{ flexDirection: 'row', marginTop: 20, }}>
                                <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                    <AntDesign name="plus" size={24} color={'grey'} />
                                    <Text style={{ color: 'darkgrey', marginTop: 5 }}>My List</Text>
                                </View>

                                <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                    <Feather name="thumbs-up" size={24} color="grey" />
                                    <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
                                </View>

                                <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                    <FontAwesome name="send-o" size={24} color="grey" />
                                    <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: 'white' }}>

                            </View>
                        </ScrollView>

                        <Picker
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) => {
                                setCurrentSeason(seasons[itemIndex])

                                // setCurrentSeason(movie.seasons.items[itemIndex])
                            }}
                            style={{ color: 'white', width: 130 }}
                            itemStyle={{ backgroundColor: 'white' }}
                            dropdownIconColor={'white'}
                        >
                            {seasonNames.map(seasonName => (
                                <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                            ))}
                        </Picker>
                    </View>
                )}
            />
        </View>
    );
}

export default MovieDetailScreen;



const styles = StyleSheet.create({
    container: { backgroundColor: '#ffdddd' },
    //pink    
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    match: {
        color: '#59d467',
        fontWeight: 'bold',
        marginRight: 5,
    },
    year: {
        color: '#757575',
        marginRight: 5,
    },
    ageContainer: {
        backgroundColor: '#e6e229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        paddingHorizontal: 3,
        marginRight: 5,
    },
    age: {
        color: 'black',
        fontWeight: 'bold'
    },

    // Button
    playButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5,
    },
    playButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    downloadButton: {
        backgroundColor: '#2b2b2b',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5,
    },
    downloadButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});