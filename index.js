const fs = require('fs')


fs.readFile('file.txt', (err, data) => {
  console.log(data);
  const hex = data.toString('hex')

  fs.writeFile('file.dat', hex, { encoding: 'utf-8' }, () => {
    console.log('file.dat stored ')

    fs.readFile('file.dat', (err, datah) => {
      
      const buff = Buffer.from(datah.toString('utf-8'),'hex')
      console.log(buff)

      fs.writeFile('file-new.txt', buff, null, () => {
        console.log('file-new.txt stored')
      })
    })
  })
})