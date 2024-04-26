
// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.


import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';




const ContactScreen = () => {

    return (
        <ScrollView>
            <Animatable.View
                animation='fadeInUp'
                duration={2000}
                delay={1000}
            >
                <Card wrapperStyle={{ margin: 20 }}>
                    <Card.Title>Contact Information</Card.Title>
                    <Card.Divider />
                    <Text>1 Nucamp Way</Text>
                    <Text>Seattle, WA 98001</Text>
                    <Text style={{ marginBottom: 10 }}>USA</Text>
                    <Text>Phone: 1-206-555-1234</Text>
                    <Text>Email: campsites@nucamp.co</Text>
                </Card>
            </Animatable.View>
        </ScrollView>
    );
};


export default ContactScreen;