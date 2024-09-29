// import { Image, ScrollView, StyleSheet, Text } from 'react-native';
// import { user } from '../data';

// export default function HomeScreen() {

//     return (
//         <ScrollView style={styles.container}>
//             <Text>Fullname: {user.fullname}</Text>
//             <Text>Age: {user.age}</Text>
//             <Text>Weight:{user.weight} cm</Text>
//             <Text>Height: {user.height} cm</Text>
//             <Text>Water Intake: {user.waterintakes} Liters</Text>
//             <Text>Atitude: {user.atitudes}</Text>
//             <Text>Daily Steps: {user.dailySteps} steps</Text>
//             <Text>Workout: {user.workouts}</Text>
//             <Image
//                 style={styles.image}
//                 source={{ uri: user.images[0] }}
//                 defaultSource={require('../selfies/OIP.jpg')}
//                 onError={(error) => console.log("Image Load Error:", error.nativeEvent.error)} />
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         // backgroundColor: '#fff',
//         padding: 7
//     },
//     image: {
//         width: "10%",
//         height: "10%",
//     }
// });

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { user } from '../data';
import WaterIntake from '../lib/WaterIntake';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.headline}>Personal Information</Text>
                <Text style={styles.label}>Fullname:</Text>
                <Text style={styles.value}>{user.fullname}</Text>
                <Text style={styles.label}>Age:</Text>
                <Text style={styles.value}>{user.age}</Text>
                <Text style={styles.label}>Weight:</Text>
                <Text style={styles.value}>{user.weight} cm</Text>
                <Text style={styles.label}>Height:</Text>
                <Text style={styles.value}>{user.height} cm</Text>
            </View>
            <View style={styles.infoContainer}>
                {/* <Text style={{ color: "white" }}>Water Intake: {user.waterintakes} Liters</Text> */}
                <WaterIntake />
            </View>
            <View style={styles.infoContainer}>
                <Text style={{ color: "white" }}>Daily Steps: {user.dailySteps} steps</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={{ color: "white" }}>Atitude: {user.atitudes}</Text>
                <Text style={{ color: "white" }}>Workout: {user.workouts}</Text>
            </View>
            {/* <Image
                style={styles.image}
                source={{ uri: user.images[0] }}
                defaultSource={require('../selfies/OIP.jpg')}
                onError={(error) => console.log("Image Load Error:", error.nativeEvent.error)} /> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 7,
        backgroundColor: 'black'
    },
    headline: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 9
    },
    infoContainer: {
        backgroundColor: '#333333',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 7,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    value: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5,
    },
    image: {
        width: "10%",
        height: "10%",
    }
});
