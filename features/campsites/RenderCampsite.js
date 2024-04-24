
// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.


import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';


const RenderCampsite = (props) => {
    const { campsite } = props;
    if (campsite) {
        return (
            <Card containerStyle={styles.cardContainer}>
                <Card.Image source={{ uri: baseUrl + campsite.image }}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={styles.cardText}
                        >
                            {campsite.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{campsite.description}</Text>
                
                <View style={styles.cardRow}>
                    <Icon
                        name={props.isFavorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                        onPress={() =>
                            props.isFavorite
                                ? console.log('Already set as a favorite')
                                : props.markFavorite()
                        }
                    />
                    <Icon
                        name='pencil'
                        type='font-awesome'
                        color='#5637DD'
                        raised
                        reverse
                        onPress={props.onShowModal}
                    />
                </View>
            
            </Card>
        );
    }
    return <View />;
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    },
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    cardText: {
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});

export default RenderCampsite;