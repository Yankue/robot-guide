# Additional Features

## Logging

RoBot can log information in your specified channel regarding a post when an event has been fired. The log contains information like Post Author, Post ID and relevant information regarding the event. The logging feature is on a per-server basis and does not change per-category.

Here is the list of events:
* `Create` - Emits when a post has been created
* `Delete` - Emits when a post gets deleted(Emits only if the `delete` command is used)
* `Approved` - Emits when a post gets approved - Not applicable if post category does not have approval plugin enabled
* `Denied` - Emits when a post gets denied - Not applicable if post category does not have approval plugin enabled

If you want to enable logging for your post categories, run the following command in a Text Channel where RoBot has access to, replacing `<channel>` with the channel where posts should be logged:

```
>post_config logging_channel <channel>
```

## Settings

### Permissions

If you want to reset or change permissions for a post category, run the following command, replacing `<category>` with the name of the category for which you want to change permissions for:

```
>post_config permissions <category>
```

Follow the instructions regarding blacklist, whitelist or greylist. If you are not familiar with this, please read the [permission section](/guide/posting/plugins).

### Toggling Category

If you want to enable a previously disabled post category, or vice versa, you would want to use the following command:

```
>post_config toggle <category>
```

### Toggle Anonymous

If your post category's configurations makes the post author anonymous, or if you want to make it anonymous, run the following command:

```
>post_config toggle_anonymous <category>
```

## Moving on

With this being said, you have finally finished setting up your post category 🎉 Make good use of the Posting feature, if you want to request more features regarding posting, or anything else, please join our support server and we will do our best to implement it. Good luck!