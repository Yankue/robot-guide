# RoBot Wiki

This is the official wiki for RoBot, the Discord Bot, maintained by the RoBot Staff Team to help users with configuring RoBot for their servers

## RoBot

RoBot is a powerful bot which offers a wide variety of features, from posts to tags, from moderation to music.

## Contributing

If you're interested in contributing to the guide, you should check out [open issues](https://github.com/SinisterDeveloper/robot-wiki/issues), take a good look in the guide and make sure what you are wanting to add isn't already there. **We use Yarn for the project instead of NPM so make sure you have it installed**.

### Contribution Setup

Clone the repository into your desired folder, `cd` into it, and install the dependencies.

```bash
git clone https://github.com/SinisterDeveloper/robot-wiki.git
cd robot-wiki
yarn install
```

Run `yarn dev` to run the local server at http://localhost:8080.

### Adding Pages

To add a new page to the guide, create a `file-name.md` file inside the folder of your choice. If you want to link to `/dir/some-tutorial.html`, you would create a `some-tutorial.md` file inside a `dir` folder. VuePress will pick up on it and set up the routing appropriately.

With that being said, you will still need to add the link to the sidebar manually. Go to the `/src/.vuepress/sidebar.js` file and insert a new item with the path to your newly created page.

### Spelling, grammar, and wording

Improper grammar, strange wording, and incorrect spelling are all things that may lead to confusion when a user reads a guide page. It's important to attempt to keep the content clear and consistent. Re-read what you've written and place yourself in the shoes of someone else for a moment to see if you can fully understand everything without any confusion.

Don't worry if you aren't super confident with your grammar/spelling/wording skills; all pull requests get thoroughly reviewed, and comments are left in areas that need to be fixed or could be done better/differently.

### Paragraph structure

Tied in with the section above, try to keep things as neatly formatted as possible. If a paragraph gets long, split it up into multiple paragraphs so that it adds some spacing and is easier on the eyes.

### Tips, warnings, and danger messages

```
In this section, we'll be doing some stuff!

::: tip
You can do this stuff even faster if you do this cool thing listed in this tip!
:::

::: warning
Make sure you're on version 2.0.0 or above before trying this.
:::

::: danger
Be careful; this action is irreversible!
:::
```

Which will render:

![Rendered image](https://camo.githubusercontent.com/cce3538b741f93027ad07298962d26706241ef2b2209393605ececcc1da24824/68747470733a2f2f692e696d6775722e636f6d2f436e7a56426d722e706e67)

### Headers and sidebar links

Section headers and sidebar links should generally be short and right to the point. In terms of casing, it should be cased as if it were a regular sentence.

```diff
# Assuming the page is titled "Ban Command"
- ## How to ban members from your server
+ ## Banning members

# Assuming the page is titled "Posts"
- ## Setting up Posting for your server
+ ## Setup Posting
```


