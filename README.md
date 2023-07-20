# bbr-api

An API wrapper for the BattleBit Remastered public API.

[![License](https://img.shields.io/github/license/DasIschBims/bbr-api)](https://github.com/DasIschBims/bbr-api/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/bbr-api)](https://www.npmjs.com/package/bbr-api)

## Installation

You can install the package using npm:

```shell
npm install bbr-api
```

## Usage

After installation, you can import the Client class from the package and create a new instance of the API client. Here's an example:

```js
const { Client } = require('bbr-api');

const bbrApiClient = new Client();
```

Once you have the API client instantiated, you can make API requests. For example, you can use the getServerList() method to retrieve the list of servers. Here's an example that logs a few details about each server:

```js
async function main() {
  const response = await bbrApiClient.getServerList();

  response.servers.forEach(server => {
    console.log({
      name: server.Name,
      map: server.Map,
      players: server.Players,
      isOfficial: server.IsOfficial,
    });
  });
}

main();
```

This example fetches the server list and iterates over each server, logging the server name, map, number of players, and whether it is an official server.

Please note that there are currently no other endpoints available. More endpoints will be added in the future as soon as they are available within the BattleBit Remastered API.