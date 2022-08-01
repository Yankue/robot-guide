# Setting up Tickets
Tickets are an easy way for members to communicate problems to your server staff. Tickets make users answer a set of pre-defined questions, 
then create a channel that can only be seen by roles you choose to be able to see them. They are highly customisable and can be used in many 
different contexts.

## Creating a Category
To begin the process of creating a post category, please run:
```
/config tickets
```
whilst making sure your DMs are open, and RoBot will DM you to begin a prompt to create the category!

You will then be asked for the name of the category; it's self-explanatory, that's the name of the ticket category that users will use to create a ticket. You will then be asked for a description of the category, which can be up to 600 characters, and is shown when a user creates a ticket and in the channel after the ticket is created. Then, it'll ask for the category ID you want tickets to be made under. Create a category (permissions don't really matter, but maybe have @everyone unable to see it so they can't see an empty category) or find an existing category, and then [copy its ID](/guide/#copying-ids). You'll then be asked for permissions, which is slightly complex to new users, so scroll down to learn all about it!

## Permissions
Tickets have an advanced permission system, similar to that of post categories. There are 3 levels of permission:
* **Greylist** - Users can't post with only greylisted roles, but if they have a whitelisted role they will be able to post.
* **Whitelist** - Users can post! This overrides greylist, but does not override blacklist.
* **Blacklist** - Users with a blacklisted role cannot create a ticket, no matter what.

RoBot will ask you for all the permissions you want to provide. You can send a list of roles by [copying their ID](/guide/#copying-ids) separated by a space, or you can say `none` to add none. If you say `none` for greylist, whitelist and blacklist nobody will be able to post!
:::tip
Send the server's ID when you wish to reference the @everyone role!
:::

### Permissions Examples
#### Letting everyone post
To let all users create tickets, you would say `none` for blacklist, your server's ID for whitelist, and `none` for greylist.
#### Posting mute role
To let everyone create tickets unless they have a muted role, you would say the ID of your muted role for blacklist, your server's ID for whitelist, and `none` for greylist.
#### Requiring a role to create tickets
To let everyone with a specific role but not those without the role create tickets, you would say `none` for blacklist, the ID of your role you wish to grant permission to for whitelist, and your server's ID for greylist.
#### Requiring a role to create tickets + ticket mute role
You would do the same as above, but you would say your muted role's ID as the blacklist, as this will override the whitelist and greylist.

## Questions
A feature RoBot has that many ticketing bots don't is to ask users questions before they create their ticket, similar to the posting module. You will be asked how many questions you wish to add after you have set the permissions.
:::warning
Think ahead of what questions you want to add, as there's no way to change it (yet)! You will have to delete the category and re-add it to change it.
:::
Tell RoBot the number of questions you want to add, then you will be asked for the question and question description of each of the questions you wished to add.