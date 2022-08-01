# Variable Reference

To embed a variable in a textual message listener's content, surround it in {curly brackets}.

## Referencing Arguments
To reference an argument, simply do `args(n)` with n being the argument number. Argument numbers start from 1. For example, in the command `/say <text>`, text would be referred to as `args(1)`. Text and integer arguments are simply inserted, whereas members, roles and channels are all mentioned in the message - but if a role is mentioned, it will not ping all users with the role.

## Functions
`rand(x,y)` Selects a random number between x and y. Make sure not to put a space after the comma.

## Prefixes
Only for textual message listeners. Before the content, put `prefix:rest of message`. To add multiple prefixes, do it as follows `prefix1:prefix2:prefix3:rest of message`, etc.

| Prefix | Description |
| -- | -- |
| ephemeral | Tries to make the message a "hidden" message that only the user that ran the command can see. Be aware it might not always be ephemeral, because if there are multiple textual message listeners, only one of them can be ephemeral. |
| mentions | Allows mentions in the message. For example, if the message content contains `@everyone`, it would not usually ping all members, but with the `mentions:` prefix it will ping all members. |