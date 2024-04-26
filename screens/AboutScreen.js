
// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.


import { ScrollView, Text } from 'react-native';
import { Avatar, ListItem } from "react-native-elements";
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import * as Animatable from 'react-native-animatable';



const AboutScreen = () => {
    const partners = useSelector((state) => state.partners);

    if (partners.isLoading) {
        return (
            <ScrollView>
                <Animatable.View
                    animation='fadeInDown'
                    duration={2000}
                    delay={1000}
                >
                    <Mission />
                    <Card>
                        <Card.Title>Community Partners</Card.Title>
                        <Card.Divider />
                        <Loading />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
    if (partners.errMess) {
        return (
            <ScrollView>
                <Mission />
                <Card>
                    <Card.Title>Community Partners</Card.Title>
                    <Card.Divider />
                    <Text>{partners.errMess}</Text>
                </Card>
            </ScrollView>
        );
    }

    return (
        <ScrollView scrollIndicatorInsets={{ right: 1 }}>
                <Animatable.View
                    animation='fadeInDown'
                    duration={2000}
                    delay={1000}
                >
                    <Mission />
                    <Card>
                        <Card.Title>Community Partners</Card.Title>
                        <Card.Divider />
                        {partners.partnersArray.map((partner) => (
                            <ListItem key={partner.id}>
                                <Avatar
                                    rounded 
                                    source={{ uri: baseUrl + partner.image }} 
                                />
                                <ListItem.Content>
                                    <ListItem.Title>{partner.name}</ListItem.Title>
                                    <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))}
                    </Card>
            </Animatable.View>
        </ScrollView>
    );
};



const Mission = () => {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text style={{margin: 10}}>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>


        </Card>
    )
}




export default AboutScreen;