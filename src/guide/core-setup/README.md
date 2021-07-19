# Core setup

Now we are into the exciting parts of the guide! The following instructions should help you setup the core settings required for RoBot to maximise RoBot's potential.

::: tip
Please make sure RoBot has `ADMINISTRATOR` permissions in your server, problems may arise if you do not have it enabled!
:::

## Configuration

### Prefix

RoBot's default prefix is `>`, it is an easy-to-use prefix which famous bots normally don't use. However in case you have another bot in your server with the same prefix and if you want to change Robot's prefix to something else, send:

```
>prefixes add <prefix>
```

... replacing `<prefix>` with the prefix you want to add. Keep in mind prefixes cannot have a space in between them.

You can then remove the old prefix by doing:

```
>prefixes remove >
```

::: tip
If you ever forget the prefix you have set for RoBot, mention the bot in a TextChannel and it will reply with the list of prefixes.
:::

### Mute Role

RoBot's muting system works a bit differently than other bots, giving you the flexibility to customize Muted users' permission the way you want. 
* Create a role dedicated for muting users from talking (you can name it whatever you like).
* Setup the permissions and overwrites for the 'Muted' role.

Afterwards, send this to set the mute role for your server, while replacing `<role>` with the role you set up.


```
>set_mute_role <role>
```

::: tip
We recommend you disable the `SEND_MESSAGES`, `ADD_REACTIONS`, `CONNECT` and `SPEAK` permissions for the Muted role in all channels
:::

### Command toggling

If you want to disable a command for your server due to specific reasons, you may use the `toggle` command to do so:

```
>toggle <command-name>
```

::: warning
There are a few core commands which you cannot disable, such as the `help` or `ping` commands.
:::