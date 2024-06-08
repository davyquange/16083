var body = $response.body;

body = body.replace(/"is_lock": \w+/g, '"is_lock": false');

$done({ body });