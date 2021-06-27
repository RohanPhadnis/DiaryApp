import React from 'react';
import { StyleSheet, Dimensions, Text, View, Button, FlatList } from 'react-native';
import { NavigationEvents } from 'react-navigation';

class Display extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        entries: [],
    }
    }

    componentDidMount() {
    this.getFeed();
    }

    getFeed() {
    fetch('https://web-app-diary.herokuapp.com/json')
        .then(response => response.json())
        .then(jsonResponse => this.setState({ entries: jsonResponse }));
    }

    render() {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.border}>
                    <Text style={styles.mainHeader}>Web-App-Diary</Text>
                </View>
            </View>
            <NavigationEvents
                onWillFocus={payload => this.getFeed()}
            />
            <FlatList
            data={this.state.entries}
            renderItem={({item}) => <Log item={item} container={this} />}
            keyExtractor={item => item['_id']}
            />
        </View>
    );
    }
}


class Log extends React.Component {

    constructor(props) {
    super(props);
    }

    delEntry() {
    fetch('https://web-app-diary.herokuapp.com/delete/' + this.props.item._id);
    this.props.container.getFeed();
    }

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.border}>
                <Text style={styles.header}>{this.props.item.title}</Text>
                <Text>{this.props.item.text}</Text>
                <Button
                title="x"
                onPress={() => this.delEntry()}
                />
            </View>
        </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('window').height * 0.1,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  delButton: {
    borderWidth: 2,
    color: "red",
  },
  mainHeader: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default Display;
