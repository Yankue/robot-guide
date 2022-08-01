# Listeners
Listeners are actions that the bot performs when a user runs the custom command. You can add up to 10 listeners to a custom command.

## Adding a Listener
It will first ask you for a type of listener. There are 2 types: `textual_message` (which sends a normal discord message) or `role_manager` (which can add/remove/toggle roles from any user). You can add multiple of different types, but just do 1 to start with. Follow the section below for your type of listener.

### Textual Messages
Textual message listeners will ask for the content of the message. Simply send the contents of the message you want to reply with! To embed variables, put the variable in curly brackets {} and check out the [variable reference](./variables.md).

### Role Manager
Role manager will first ask for the action: add (to add the role), remove (to remove the role) or toggle (to add if they don't have it, or remove if they do have it). It will then ask for the role ID. Send the role's ID, or use an argument, but remember not to include curly brackets, for example `args(1)`. Check out the [variable reference](./variables.md) for more info about using arguments in listeners. It will then ask for the user to add/remove/toggle the role to/from. Send a user ID, reference an argument, or say `author` to target the user that ran the command. And that's it!

### Finishing Up
After you add a listener, it will ask again for a listener. You can now add another listener. Simply say `end` after you've added all the listeners you want! Remember you cannot have more than 10 listeners.

:::tip
If you add a role manager listener, also add a textual message listener with a success message, such as `"Successfully added role"`. Otherwise it will reply with the unfriendly message of `"This command yielded no response message."`!
:::



**And RoBot will now register the command to discord, and members can start using it straight away!**