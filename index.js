const express = require('express');
const { engine } = require('express-handlebars');
const mongoosse = require ('mongoose')


const app = express();
const hbs = engine( {
  extname:'hbs',
  defaultLayout: 'layout',
  runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true
  }

});

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const port = normalizePort(process.env.port || 3000)
const host = 'localhost'

try {
    app.listen(port, host, () => {
        console.log(`Listening on port${host}:${port}` );
    })
} catch (error) {
    console.log(error);
}

function normalizePort(port) {
    const num = parseInt(port)
    if (isNaN(num)) {
        return port
    } else if (num >= 0) {
        return num
    }
    return false
}
