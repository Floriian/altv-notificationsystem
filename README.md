### Alt:V Notification System based on NotyJS
Hi, I write this system 2 months ago for a server, but this project has been ended. I will maybe publish some system from this server, if I think it's usefull.

Inspired by an RageMP resource. 
## Install
First, add "notify" folder into your client folder.
Second, add a this following line to your clientside main js file:
```javascript
import "/notify/client.mjs";
```

## Using in CSharp
Add this function to your C# project. 
DONT FORGET: Replace PlayerSystem to your player system class name, or use the default Alt:V player system class name.
```C#
        public static void SendNotificationToPlayer(PlayerSystem player, string message, string notytype, int time = 5000, string layout = "topRight")
        {
            player.Emit("xpert:notification:send", message,notytype ,time, layout);
        }
	public static void SendNotificationMessageToAll(string message, string notytype, int time = 5000, string layout = "topRight")
        {
            foreach (PlayerSystem target in Alt.GetAllPlayers())
            {
                target.Emit("xpert:notification:send", message, notytype, time, layout);
            }
        }
```
Arguments: text, type, time, layout. 

Text: Notification text. Like: Wrong username/password, You dont have permission etc.

Type: Type of alert. See NotyJS documentation.

Time: Time in ms

Layout: Position of alert. See NotyJS documentation.

Don't worry, it's easy to replace to Javascript. 

## Some tipps:
1st: If you want to use sound, I really recommended Howler.js, it's very easy to use.
2st: If you want to change the theme, open index.html file, and change link src to your theme. NotyJS comes with many many theme, but you can create your theme easily.


### Bugs:
I don't know. But easy to fix it. 

"It's a feature, not a bug."
