import React from 'react';
import {Text, TextInput, View, StyleSheet, Button, Dimensions} from 'react-native';

class Form extends React.Component{

    constructor() {
    super();
    this.state = {
        title: '',
        text: ''
    }
    }

    submit() {
    fetch('https://web-app-diary.herokuapp.com/post', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'title=' + this.state.title + '&text=' + this.state.text
    });
    this.setState({text:'', title:''});
    }

    render() {
    return (
        <View style={styles.container}>
            <Text>Title:</Text>
            <TextInput style={styles.textField} value={this.state.title} onChangeText={(val) => this.setState({title: val})}/>
            <Text>Text:</Text>
            <TextInput style={styles.textArea} value={this.state.text} onChangeText={(val) => this.setState({text: val})}/>
            <Button title="submit" onPress={() => this.submit()}/>
        </View>
    );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: Dimensions.get('window').height * 0.2
    },
    textArea: {
        height: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').width * 0.8,
        borderWidth: 2
    },
    textField: {
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.8,
        borderWidth: 2
    },
    submission: {
        borderWidth: 2
    }
});

export default Form;