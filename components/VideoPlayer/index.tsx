import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import {Episode} from '../../types';


interface VideoPlayerProps {
    episode: Episode;
}



const VideoPlayer = (props: VideoPlayerProps) => {

    const { episode } = props;

    return (
        <View>
            <Text>Video Player  </Text>
        </View>
    );
}

export default VideoPlayer;



const styles = StyleSheet.create({
    video: {
        width: '100%',
        aspectRatio: 16 / 9,

    }
});