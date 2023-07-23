const { Client } = require('../dist/Index');

const bbrApiClient = new Client();

async function main() {
    const response = await bbrApiClient.getServerList();

    const serverInfoArr = response.servers.map(server => {
        return server
    })

    const onlineServers = serverInfoArr.length;
    const totalPlayers = serverInfoArr.reduce((a, b) => a + b.Players, 0);
    const mostPopularGamemode = serverInfoArr.sort((a, b) => b.Players - a.Players)[0].Gamemode;
    const mostPopularMap = serverInfoArr.sort((a, b) => b.Players - a.Players)[0].Map;
    const officialServers = serverInfoArr.filter(server => server.IsOfficial).length;
    const communityServers = serverInfoArr.filter(server => !server.IsOfficial).length;
    const highestTickRate = serverInfoArr.sort((a, b) => b.Hz - a.Hz)[0];
    const serversWithHighestTickRate = serverInfoArr.filter(server => server.Hz === highestTickRate.Hz);
    const allGamemodes = [...new Set(serverInfoArr.map(server => server.Gamemode))];

    console.log(
        `There are \x1b[32m${onlineServers}\x1b[0m online servers with a total of \x1b[32m${totalPlayers}\x1b[0m players.\n\n` +
        `The most popular gamemode is \x1b[32m${mostPopularGamemode}\x1b[0m and the most popular map is \x1b[32m${mostPopularMap}\x1b[0m.\n\n` +
        `There are \x1b[32m${officialServers}\x1b[0m official servers and \x1b[32m${communityServers}\x1b[0m community servers online.\n\n` +
        `All gamemodes: ${allGamemodes.map(gamemode => '\x1b[32m' + gamemode + '\x1b[0m').join(', ')}\n\n` +
        `The servers with the highest tick rates are:\n${serversWithHighestTickRate.map(server => '\x1b[32m' + server.Hz + 'Hz\x1b[0m - ' + server.Name).join('\n')}`
    );
}

main();