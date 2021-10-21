import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

// require('dotenv').config()
const client = new ApolloClient({
	uri: 'https://ibm-server-a.herokuapp.com/',
	cache: new InMemoryCache()
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <NotificationContainer/> 
      <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


