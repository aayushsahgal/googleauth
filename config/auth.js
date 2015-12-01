// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '417150041829045', // your App ID
        'clientSecret'  : '7268b95d9190522a7ad86a2d36613b54', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '354372808502-2u38crq8riakorhn9inqnthg0llq40k5.apps.googleusercontent.com',
        'clientSecret'  : '2Uu-_wWVaG9uhbissVBmCGp9',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};