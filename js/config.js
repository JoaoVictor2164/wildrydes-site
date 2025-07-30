window._config = { 
    cognito: {
        userPoolId: 'us-east-1_Ae2qkZpWG', // ID do User Pool
        userPoolClientId: '13v9qh3fgdkcdtfm2ruoh8isga', // Client ID do User Pool
        region: 'us-east-1' // Região do User Pool
    },
    api: {
        invokeUrl: '' // URL da API, caso haja
    }
};

    // Agora você pode usar secretHash ao enviar a solicitação de autenticação com Cognito
    // Exemplo de chamada para API de autenticação, onde o secretHash seria passado
    // exemploAuthFunction(secretHash);
});
