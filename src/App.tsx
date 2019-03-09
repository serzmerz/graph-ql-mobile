import React, {Component} from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { Text, SafeAreaView } from 'react-native'

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text>Hello</Text>
        </SafeAreaView>
      </ApolloProvider>
    );
  }
}
