import express from 'express';

const app = express();

app.get('/', (resquest, response) => {
  return response.json({
    message: 'rodou mesmo'
  })
})

app.listen(3333, () => {
  console.log('Servidor deu bom')
})
