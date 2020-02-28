(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[18],{281:function(e,n){e.exports={title:"1.2.10 Release",description:"New 1.2.10 release of RuneLite is out. We added many new features, like native UI, notifications and few plugin improvements.",author:"Tomas",__content:'<p>This release adds lots of new functionality to RuneLite to make the end-user\nexperience even better, and to compete with well established third-party\nclients.</p>\n<p>The most notable new feature is the <strong>new UI design</strong>. I tried to make it look as\nclose to the native OSRS interfaces as possible. Here is the end result:</p>\n<p><img src="/img/blog/1.2.10-Release/native-ui.png" alt="native ui"/></p>\n<p>The UI was updated for all of the current RuneLite plugins, and the new API for\nit is really easy to use, so it can be used in future plugins too. An example\nof plugin using the new UI api is the new <strong>Team Capes</strong> plugin.</p>\n<p>The plugin is showing the amount of players wearing specific team capes\ncurrently visible on the map, which is very useful for pking clans. Here is how\nit looks in game:</p>\n<p><img src="/img/blog/1.2.10-Release/team-cape.png" alt="team capes plugin"/></p>\n<p>Till now it was hard to check the price of item you just got as a drop\nfrom monster, or just simply to check price of stack of your precious magic\nlogs in bank. That is why there were quite a few improvements to examine plugin\nin the client. Now you are able to examine items and item stacks in you bank,\ninventory, equipment screen or even in the Miscellania screen and it shows\nGrand Exchange and High Alchemy price of that item in the game chat. Here is\nsmall example:</p>\n<p><img src="/img/blog/1.2.10-Release/examine-plugin.png" alt="examine plugin"/></p>\n<p>To make talking to your clan mates easier, there is new clan chat plugin\nthat shows current ranks of every clan chat member next to his/her name.\nExample:</p>\n<p><img src="/img/blog/1.2.10-Release/clan-chat.png" alt="clan chat plugin"/></p>\n<p>There were also some background changes in the client to make it work better,\nfix some bugs and possibly make it faster. One of the background improvements\nthat is also visible to end users is the use of the native notification system,\nso it now supports every Linux distribution with working notification system\nand even Mac OS (with same notification support for Windows as before). Example\nof the notification system in action on Arch Linux with Dunst notification\ndaemon:</p>\n<p><img src="/img/blog/1.2.10-Release/native-notifications.png" alt="native notifications"/></p>\n<p>Well, hopefully you like new release, and as usual, enjoy!</p>\n<p>~ Tomas</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 9 contributors this release! Special thanks to <a href="https://github.com/deathbeam">@deathbeam</a> for his hard work.</p>\n<pre><code>Adam (26):\n      runelite-client: use lombok for slf4j logger creation\n      runelite-client: lombok events\n      runelite-client: change AnimationChanged event to have an Actor\n      executor: optimize processExceptions()\n      deobfuscator: do not cfg deob methods with exceptions in them\n      runescape-client: redump\n      runelite-client: fix infoboxes\n      injector: cast object references to the field type in setters\n      injector: add construct injector to create new instances of classes\n      injector: ignore synthetic methods in InjectConstruct\n      runescape-api: fix javadoc error\n      injector: support hooking to ends of methods\n      Move setMessage hook to end of method\n      clanchat: don&#39;t load icons more than once\n      runelite-client: fix scheduler for concurrent modifications\n      chat message manager: avoid adding chat messages on threads\n      cache: remove whirlpool as it is not in osrs\n      cache: improve xtea test\n      cache: use own Xtea implmentation instead of bouncycastle&#39;s\n      cache: test scope slf4j-simple\n      cache server: never send appended archive revision\n      cache: remove tree storage\n      cache: fix compression with encryption\n      cache: split loading archive files from archive loading\n      injector: skip over dups when recursively copying array index instructions\n      deobfuscator: remove apache commons dependency\n\nDevin (5):\n      Add ImagePanelComponent overlay component\n      Add getTeam method for Player\n      Add setter for background color of overlay components\n      Fix padding for bottom right overlays\n      Add team capes plugin\n\nRunelite auto updater (1):\n      [maven-release-plugin] prepare for next development iteration\n\nSomeoneWithAnInternetConnection (2):\n      Fix IllegalArgumentExceptions from XPGlobes&#39; tooltips for level 1 stats\n      Fix example plugin to use the new overlay API\n\nTomas Slusny (16):\n      Add hide items under value to GroundItems plugin\n      Make native notifications lightweight\n      Add clan ranks to clan chat\n      Improve item caching\n      Add chat message recolouring API\n      Show item price when examining item\n      Show full price for stackable items when examined\n      runelite-client: add plugin changed event\n      runelite-client: Make overlay UI reuseable and look native\n      Cleanup overlay logic after native-ui changes\n      Fix displaying of examine price without GE value\n      Add support for examining bank and eq items price\n      Fix overlay renderer cache\n      Isolate graphics for each overlay (#267)\n      Remove unused app property from RSStub\n      runelite-client: Add app name to RuneliteProperties\n\nToocanzs (3):\n      Move common game state and interface checks to overlay\n      Change game tick hook to npc update\n      Dispose of BufferedImage graphics in overlay util\n\nTyler Hardy (4):\n      Add Karambwan fishing to animation and idle plugin\n      Add crazy arch to aoe plugin\n      Remove FPS plugin (deprecated by base osrs ::displayfps)\n      Fix default config for dynamic plugins\n\n\nUniquePassive (1):\n      Make special attack orb look a little nicer\n\nVagrant User (1):\n      Add support for native notifications\n\nXrioBtw (1):\n      Fix tooltips rendering behind the game\n\nrbbi (1):\n      Guice : RuneliteProperties inj (#212)\n</code></pre>'}}}]);
//# sourceMappingURL=18.b992f799.chunk.js.map