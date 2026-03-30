import { View, Text } from 'react-native'
import {Link} from "expo-router";

const signUp = () => {
    return (
        <View>
            <Text>signUp</Text>
            <Link href="/(auth)/sign-up">Sign In</Link>
        </View>
    )
}

export default signUp