import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';



export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favColor: '',
            me:'',
            items: [
                {
                    label: 'Red',
                    value: 'red',
                    job:'good'
                },
                {
                    label: 'Orange',
                    value: 'orange',
                    job:'good'
                },
                {
                    label: 'Blue',
                    value: 'blue',
                    job:'good'
                },
            ],
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <RNPickerSelect
                    items={this.state.items}
                    placeholder={{}}
                    onValueChange={(items) => {
                        this.setState({
                            favColor: items,
                            me:items

                        });
                    }}
                >

                </RNPickerSelect>

                <View><Text>{this.state.favColor}</Text></View>
                <View><Text>{this.state.me}</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        paddingHorizontal: 10,
    },
});
