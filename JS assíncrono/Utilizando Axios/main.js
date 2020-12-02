axios.get('https://api.github.com/users/FilipeAndre-Silva')
    .then(function(response) {
        console.log(response.data.avatar_url);
    })
    .catch(function(erro) {
        console.log(error);
    });