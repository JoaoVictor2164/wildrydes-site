window._config = { 
    cognito: {
        userPoolId: 'us-east-1_Ae2qkZpWG', // ID do User Pool
        userPoolClientId: '13v9qh3fgdkcdtfm2ruoh8isga', // Client ID
        clientSecret: '1ea60bafpueoq5t2u6ipbrb4806l4q1ajdmh60k78c88pmcp87is', // Secret do Cliente
        region: 'us-east-1' // Região do User Pool
    },
    api: {
        invokeUrl: '' // URL da API, caso haja
    }
};

// Função para calcular o SECRET_HASH
function calculateSecretHash(username) {
    const clientId = window._config.cognito.userPoolClientId;
    const clientSecret = window._config.cognito.clientSecret;

    const crypto = window.crypto || window.msCrypto; // para compatibilidade entre navegadores
    const hmac = crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(clientSecret),
        { name: 'HMAC', hash: { name: 'SHA-256' } },
        false,
        ['sign']
    ).then(function (key) {
        return crypto.subtle.sign(
            'HMAC',
            key,
            new TextEncoder().encode(username + clientId)
        );
    }).then(function (signature) {
        const hash = Array.from(new Uint8Array(signature)).map(b => String.fromCharCode(b)).join('');
        return btoa(hash); // Base64 encode do resultado
    });

    return hmac;
}

// Exemplo de como usar o cálculo do SECRET_HASH com o nome de usuário
calculateSecretHash('user@example.com').then(function(secretHash) {
    console.log('SECRET_HASH calculado:', secretHash);

    // Agora você pode usar secretHash ao enviar a solicitação de autenticação com Cognito
    // Exemplo de chamada para API de autenticação, onde o secretHash seria passado
    // exemploAuthFunction(secretHash);
});
