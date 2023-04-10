
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

 function ApolloClientProvider ({children}) {
    const client = new ApolloClient({
        uri: 'https://graphql.contentful.com/content/v1/spaces/uqc7pcypi89w',
        headers: {
            authorization:"Bearer .....",
        },
        cache: new InMemoryCache(),
    });

    return (
            <ApolloProvider client={client}>
                {children}
            </ApolloProvider>
    );

}
export default ApolloClientProvider;
