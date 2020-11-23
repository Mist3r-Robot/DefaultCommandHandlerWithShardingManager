[![Discord](https://img.shields.io/discord/367753345575944221?color=%237289DA&label=Join%20us&logo=Discord&logoColor=white&style=for-the-badge)](https://thomasbnt.fr/discord) [![Support me on BMC](https://img.shields.io/badge/Support%20me-☕-orange.svg?style=for-the-badge)](https://www.buymeacoffee.com/thomasbnt) [![Twitter Follow](https://img.shields.io/twitter/follow/Thomasbnt_?color=%231DA1F2&label=Follow%20me&logo=Twitter&style=for-the-badge)](https://twitter.com/Thomasbnt_)

# Default CommandHandler With Sharding Manager

## Install
Type the following commands into Terminal.

```bash
git clone https://github.com/lahype/DefaultCommandHandlerWithShardingManager.git
cd DefaultCommandHandlerWithShardingManager
npm install
```

`npm install` or `yarn install` to go faster.

---

## Understand projects folders

```bash
.
├── app.js (Sharding manager - Launch your script by here)
├── commands (Folder with all commands, you can triage by following any category)
│   ├── Miscellaneous
│   │   └── avatar.js
│   └── System
│       └── uptime.js
├── config.example.json (A example of the configuration of this bot)
├── core.js (Command handler)
├── events
│   ├── guildMemberAdd.js (When a member join the server)
│   ├── guildMemberRemove.js (When a member leave the server)
│   ├── message.js (Check messages like commands and other stuffs)
│   └── ready.js 
```

### License
This project is licensed under the GNU GENERAL PUBLIC v3 LICENSE - see the [LICENSE](LICENSE) file for details.
