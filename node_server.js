const http = require('http');
//надо вынести в отдельный файл
const html = `
<!doctype>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Basics</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"> 
    </head>
    <body>
    <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="/features" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="/pricing" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="/faq" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>
  <script src = "app.js"></script>
    </body>
</html>
`;

//надо вынести в отдельный файл
const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Node.js in doing'));
`;


//создаем сервер и обрабатываем события
http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(html);
            break;

        case '/app.js':
            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            });
            res.end(js);
            break;
        default:
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end('404 Not Found');
            break;
    }
    
}).listen(3000, () => console.log('Server is working')); //запуск сервера
