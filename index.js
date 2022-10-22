var axios = require('axios');
var url = "https://jsonplaceholder.typicode.com/posts/1";
axios.get(url).then(function (response) {
    var data = response.data;
    var title = data.title;
    var id = data.id;
    var body = data.body;
    logpost(id, title, body);
});
var logpost = function (id, title, body) {
    console.log(title);
    console.log(id);
    console.log(body);
};
