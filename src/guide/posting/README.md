# Setting up post system

Posting is the most widely used feature of RoBot, a feature that makes it stand out. With this guide, you will learn to setup posting, and learn about all posting features offered by RoBot. Posting can be used in form of application forms, or posting an advertisement, suggesting ideas, and much more! It isn't hard to setup at all, and we are here to guide you through it.

## Post Configuration

The first step to create a post category/option is to run the command:

```
>post_config add
```

Make sure you have your DMs open, or else RoBot will not be able to DM you.

### Name
  
Once you run the above command, RoBot will DM you asking the name for the post category you are creating. The name is what users identify it by when they run the `>post` command, so make it simple and descriptive.

### Cooldown

Next it will ask you to enter a time. This is how often a member is allowed to post in this category. Pick whatever you like, a fairly normal time would be `6h` (6 hours). You can also enter perm, so each member can only post in that category once.

<div is="discord-messages">
	<discord-message profile="robot">
		What should be the title of this post category?
	</discord-message>
	<discord-message profile="sinister">
		Suggestions
	</discord-message>
    <discord-message profile="robot">
        Please enter a time for this action. You can type as many time units you need seperated by a space. For example 1d, 1d 2h, 3d 3m 2s, 1s. The prompt times out in 900 seconds. You can also type permanent/perm to provide permanent time for this action.
    </discord-message>
	<discord-message profile="sinister">
		6h
	</discord-message>
</div>

### Channel

RoBot will then ask which channel the post should be published to(where the post will go). You need to enter the Channel-Id of that specific channel.

::: tip
How to copy a Channel ID: Go into Discord settings > Advanced, turn on Developer Mode. Then right-click or press and hold the channel, and you should have the option to `Copy ID`
:::

### Anonymous Mode

RoBot then asks if the Post Author's name should be anonymous and if it should be enabled. Anonymous mode will prevent the Post-Author's name from showing up in the post, it can be used for votes and polls, but generally we wouldn't really recommend anonymous mode. Answer with `y` if you want it enabled.

RoBot will then ask if the Post Category should be enabled, reply with `y` unless you want to create a Post Category but not actually let users post in it. You can always change this setting later.

### Moving on

Congratulations, you are halfway done in creating your first Post Category! Move on to the Plugins page where you finish creating the Post Category 🎉

::: tip
If you want to delete a post category, run `>post_config delete <category>` to do so!
:::