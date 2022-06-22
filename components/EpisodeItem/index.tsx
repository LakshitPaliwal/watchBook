import React from 'react';
import { TouchableOpacity, Pressable, StyleSheet, Image, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Episode } from '../../types';


interface EpisodeItemProps {
    episode: Episode;

}

const EpisodeItem = (props: EpisodeItemProps) => {
    const { episode } = props;

    return (
        // <Pressable style={{ margin: 10 }} onPress={() => onPress(episode)}>
        //     <View style={styles.row}>
        //         <Image style={styles.image} source={{ uri: episode.poster }} />

        //         <View style={styles.titleContainer}>
        //             <Text style={styles.title}>{episode.title}</Text>
        //             <Text style={styles.duration}>{episode.duration}</Text>
        //         </View>

        //         <AntDesign name="download" size={24} color={'white'} />
        //     </View>

        //     <Text style={styles.plot}>{episode.plot}</Text>
        // </Pressable>
        <View style={{ marginVertical: 10 }}>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: episode.poster }} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                </View>

                <AntDesign name="download" size={24} color={'white'} />
            </View>

            <Text style={styles.plot}>{episode.plot}</Text>
        </View>
    )
};

export default EpisodeItem;


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    image: {
        height: 75,
        aspectRatio: 16 / 9,
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