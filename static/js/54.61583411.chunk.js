(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[54],{317:function(e,n){e.exports={title:"1.4.12 Release",description:"World hopper and WASD camera plugins",author:"Adam",__content:'<p>A world hopper plugin has been added to ease hopping. You can use the key\ncombination ctrl+shift+left/right, or right click a friend or clanmates name in\ngame and click Hop-to. There is also a plugin panel with the worlds listed which\ncan be double clicked.</p>\n<p><img src="/img/blog/1.4.12-Release/whop1.png" alt="whop1"/>\n<img src="/img/blog/1.4.12-Release/whop2.png" alt="whop2"/></p>\n<p>A WASD camera plugin was added which lets you use the WASD keys (or, any other\nkeys) instead of the arrow keys to control the camera. It is off by default and\nneeds to be enabled in the configuration panel. You must press Enter to chat\nwhen the plugin is enabled.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix puzzle box solver showing solution arrows</li>\n<li>Fix player indicators plugin coloring entire menu option of other players</li>\n<li>Add Wintertodt to Discord plugin activity</li>\n<li>Add Woodcutting guild to Discord plugin activity</li>\n<li>Fix SDMM normal spellbook freeze timers</li>\n<li>Fix ancient freeze timers resetting on each animation</li>\n<li>Fix Grotesque Guardian loot tracker</li>\n<li>Fix seaweed patch times in the timer plugin</li>\n<li>Fix Chambers of Xeric plugin to not add multiple timers</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<pre><code>Adam (9):\n      mixins: simplify acquiring client thread reference\n      world service: split controller from service and add cache\n      world controller: fix caching, move to scheduled method\n      runescape-api: GameEngine doesn&#39;t extend KeyFocusListener\n      timers plugin: don&#39;t reset freeze timers each animation\n      Revert &quot;player indicators plugin: Use ColorUtil functions&quot;\n      Add world load event\n      cache: fix outputstream writeString to not write unicode strings\n      runelite-client: add wasd camera plugin\n\nHeikki Jetsonen (2):\n      DiscordPlugin: Add wintertodt Activity\n      Cluescrolls: Added fairy ring to Kalphite Lair Entrance clue\n\nJordan Atwood (2):\n      time tracking plugin: Fix timers header color\n      timers plugin: Fix SDMM normal spellbook freezes\n\nKamiel (1):\n      Update npc_health.json\n\nLotto (12):\n      runelite-api: add world switcher widget info\n      mixins: add world hopping mixin\n      runelite-api: expose ChatPlayer.world\n      runelite-api: make ClanMember extend ChatPlayer\n      runelite-api: add total level api\n      runelite-client: add world hopper plugin\n      runescape-api: add Protect annotation\n      clues: allow any imbued crystal bow for emote clue\n      clues: add fairy ring to sinclair mansion clue solution\n      fpsindicator: fix overlay disappearing when using stretched fixed mode\n      fpsindicator: fix overlay being cut off outside the canvas\n      fpsindicator: remove caching of fps strings\n\nMagic fTail (2):\n      Fix Grotesque Guardian loot tracker\n      Actually add special case for Grotesque Guardians\n\nMax Weber (2):\n      Make the second argument of SpriteManager::getSprite work\n      runelite-client: Don&#39;t consume keyReleased events\n\nSean Dewar (1):\n      Fix Entangle timer description typo\n\nSoyChai (1):\n      UI: Add a clear button (\xd7) to IconTextField (#3451)\n\nSquirrelHub (2):\n      DiscordPlugin: Add Woodcutting Guild to Activities (#4813)\n      Add Lumber Yard Fence to Agility Plugin (#4878)\n\nTomas Slusny (2):\n      Fix adding of raid timer multiple times in Raids\n      Fix FlatTextField unsafe swing access\n\npsikoi (1):\n      Fix exp tracker UI margin incosistency\n\ntakuyakanbr (2):\n      time tracking: add empty case to overview tab\n      time tracking: fix detection of state for seaweed patches\n</code></pre>'}}}]);
//# sourceMappingURL=54.61583411.chunk.js.map