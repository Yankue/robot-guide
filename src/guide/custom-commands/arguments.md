# Arguments
Next, RoBot will ask how many arguments you want to have. **What is an argument?** An argument is data that the user inputs. For example, if you had a `/say <text>` command, text would be an argument. Simply enter the number of arguments you want to have. The command `/say <text>` has 1 argument (text), but you can have anywhere between 0 and 24 arguments.

If you wanted 0 arguments, move on to the next stage! If you wanted 1 or more arguments, RoBot will now ask you for the name, type and description of your arguments. The name of the argument is what users see, the type is what they are allowed to input (e.g. text or number or channel), and the description helps users along the way.

Enter it in the format `name:type`, for example `person:member` or `hours:int`. A list of all valid types are below:
| Type Name | Description |
| -- | -- |
| text | Standard text input, using any character on the keyboard |
| int | An integer (a whole number) |
| member | A member/user that is in your server |
| channel | A channel in your server |
| role | A role in your server |

It will then ask you to describe the argument. This is just a friendly description shown to the user, telling them what to put. It will then repeat this process for all the arguments you wanted.



**Follow this guide through to the next section, [Listeners](./listeners.md), by clicking here or using the navigation at the bottom.**