import React from 'react';
import {TouchableOpacity,StyleSheet,Image ,Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface EpisodeListProps {
    episode: {
        id: String,
        title: String,
        poster: String,
        duration: String,
        plot: String,
        video: String
    }
}

const EpisodeList = (props:EpisodeListProps)=> {
    const { episode } = props;

    return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => onPress(episode)}>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: episode.poster }} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                </View>

                <AntDesign name="download" size={24} color={'white'} />
            </View>

            <Text style={styles.plot}>{episode.plot}</Text>
        </TouchableOpacity>
    );
}

export default EpisodeList;


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 5,
    },
    image: {
        height: 75,
        aspectRatio: 16/9,
        resizeMode: 'cover',
        borderRadius: 3,
    },
    titleContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
    },
    title: {

    },
    duration: {
        color: 'darkgrey',
        fontSize: 10,
    },
    plot: {
        color: 'darkgrey'
    }
})