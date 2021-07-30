# Handling Posts

In this section, you will learn how to handle the posts sent by a member, having a post category setup is essential for this, if you don't know how to setup a post category, please read [this](./README).

## Approving Posts

Approving a post will makes RoBot send the post in the final channel specified when setting up the post category, RoBot will also DM the post author letting them know it has been approved(along with reason, if any). If you want to approve a post, you must use the `approve` command:

```
>approve <post-id> <reason [optional]>
```

::: tip
You can find Post ID towards the bottom-right of the specific post 
:::

## Denying Posts

You may choose to deny a post, denying a post makes the bot delete the post(in the approval channel) and will not send the post to the final channel. Additionally, RoBot will DM the post author letting them know their post has been denied(along with reason, if any).

```
>deny <post-id> <reason [optional]>
```

## Deleting posts

A post appover has the ability to delete posts regardless of the post's approval status, however RoBot will not DM the post author.

```
>delete <post-id> <reason [optional]>
```