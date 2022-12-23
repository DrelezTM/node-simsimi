# Node-SimSimi
<p align="center">
  <img alt="@node-simsimi" style="width: 150px;" src="https://cdn.discordapp.com/attachments/858321432178196490/1055677997694320700/ei_1671763615054-removebg-preview.png">
</p>
<div align="center">
  <h3>Node-SimSimi</h3>
  <p>Unofficial <a href="https://simsimi.com">SimSimi</a> API <a href="https://nodejs.org">NodeJS</a><br>It's Free!</p>
</div>
<div align="center">
  <a href="https://www.npmjs.com/package/node-simsimi">NPM</a> | <a href="https://dsc.gg/DrelezTM">Report Bug</a> | <a href="https://github.com/DrelezTM/StickerWhatsAppBOT/issues">Issues</a>
</div>

## Installation 📑
* Install Modules
  ```sh
  npm i node-simsimi
  ```
 
 ## How to Use 🔭
 * With Asynchronous
   ```js
   const simSimi = require('node-simsimi');
   
   async function main(message, language) {
     const response = await simSimi(message, language);
     console.log(response);
   }
   
   main("Hii Simi!", "en");
   ```
  
 * Without Asynchronous
   ```js
   const simSimi = require('node-simsimi');
   
   function main(message, language) {
     simSimi(message, language).then((response) => {
       console.log(response);
     });
   }
   
   main("Hii Simi!", "en");
   ```

## Response 📨
* Example Response
  ```js
  {
    message: 'Hi',
    response: 'Hallo',
    language: 'id',
    status: {
      code: 200,
      text: 'OK'
    }
  }
  ```

## Built With 🛠
* [Node-Fetch](https://www.npmjs.com/package/node-fetch)

## Error or Bug 🐞
* [Discord](https://dsc.gg/DrelezTM)
* [YouTube](https://www.youtube.com/p/DrelezTM)
* [Instagram](https://www.instagram.com/DrelezTM)
* [Issues](https://github.com/DrelezTM/StickerWhatsAppBOT/issues)

## License 📜
* [License](https://github.com/DrelezTM/node-simsimi/blob/main/LICENSE)
