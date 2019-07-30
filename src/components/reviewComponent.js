import React from "react";
import { Text, View, TouchableOpacity, Linking } from "react-native"
import styles from "../styles/reviewComponent";

class ReviewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            collapsed: true
        }
    }

    onClick = () => {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    render() {
        let { author, content, url } = this.props;
        const { collapsed } = this.state;
        content = content.replace(/(?:\r\n|\r|\n)/g, '');
        const numberOfLines= collapsed ? 5 : 15;
        return (
            <View style={styles.container}>
                <Text style={styles.author}>{author}</Text>
                <TouchableOpacity onPress={() => this.onClick()}>
                    <Text style={styles.content} numberOfLines={numberOfLines}>{content}</Text>
                    {
                        !collapsed && 
                        <View>
                            <Text style={styles.content}> To see the full review go to: </Text>
                            <Text style={styles.link} onPress={()=> Linking.openURL(url)}>{url}</Text>
                        </View>
                    }
                    <Text style={styles.seeMore}>see {collapsed ? 'more' : 'less'}...</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ReviewComponent;