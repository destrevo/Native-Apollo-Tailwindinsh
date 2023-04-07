
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

 function ApolloClientProvider ({children}) {
    const client = new ApolloClient({
        uri: 'https://graphql.contentful.com/content/v1/spaces/uqc7pcypi89w',
        headers: {
            authorization:"Bearer yhXbILxafWv4IJnL5B9IQ9DVqHTVJzIfxTzNS3n4kls",
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