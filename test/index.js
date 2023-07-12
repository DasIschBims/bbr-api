const { Client } = require('bbr-api');

const bbrApiClient = new Client();

async function main() {
    const response = await bbrApiClient.getServerList();

    // log a few things about each server
    response.servers.forEach(server => {
        console.log({
            name: server.Name,
            map: server.Map,
            players: server.Players,
            isOfficial: server.IsOfficial,
        })
    });
}

main();