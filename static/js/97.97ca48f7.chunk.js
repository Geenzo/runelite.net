(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[97],{360:function(e,n){e.exports={title:"1.5.28 Release",description:"BA gamble count and duels chat commands, beginner hot cold clues, and 2010 cross sprites",author:"Adam",__content:'<p>The chat commands plugin now includes the <code>!gc</code> and <code>!duels</code> commands which\nshows your BA high gamble count and duel arena wins and losses with streak,\nrespectively. You must first win or lose a duel for the client to begin tracking\nthe counts after the update, however the gamble count will work immediately.</p>\n<p><img src="/img/blog/1.5.28-Release/gc.png" alt="gc"/><br/><img src="/img/blog/1.5.28-Release/duels.png" alt="duels"/></p>\n<p>The clue plugin now supports beginner hot cold clues (this is the last of the\nupdates from the clue update from April)</p>\n<p><img src="/img/blog/1.5.28-Release/bhotcold.png" alt="bhotcold"/></p>\n<p>The interface styles plugin now has an option to replace the left click cross\nsprites with the ones from RuneScape</p>\n<p><img src="/img/blog/1.5.28-Release/cross.gif" alt="crosss"/></p>\n<p>The grand exchange plugin now has an option to show the total amount of the\noffers in the grand exchange:</p>\n<p><img src="/img/blog/1.5.28-Release/ge.png" alt="ge"/></p>\n<p>The prayer plugin now can draw a &quot;HD&quot; prayer bar which looks more consistent\nwith the HD health bar option of the interface styles plugin.</p>\n<p><img src="/img/blog/1.5.28-Release/prayerbar.png" alt="prayerbar"/></p>\n<p>The metronome plugin now works even when game sounds are muted. If you had the\nmetronome plugin on with the game sounds muted prior to the update, you probably\nwill want to turn it off now.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix the Shield of Arrav, MEP2, and Shadow of the Storm quest start points on the world map</li>\n<li>Add snakeskin gear to the skill calculator</li>\n<li>Add Larran&#39;s chest to the loot tracker</li>\n<li>Fix world map Hosidius rare tree icons and Kourend agility obstacle placement</li>\n<li>Add fishing spots south of the farming guild to the fishing plugin</li>\n<li>The Wintertodt plugin now has an option to send a notification before the\nround start</li>\n<li>Fix Father Jean&#39;s location for the easy cryptic clue</li>\n<li>Fix the alignment of some of the icons on the 2005 interface style to more\nclosely resemble the 2005 gameframe</li>\n<li>The cooking plugin now tracks burning stew</li>\n<li>Add option to the world hopper plugin to hide the Hop-to menu option on\nfriends and clan members</li>\n<li>The cursor plugin now has a dragon dagger (p) cursor</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 28 contributors this release!</p>\n<pre><code>Adam (4):\n      api: rename unknownSoundValues1 -&gt; queuedSoundEffectLoops\n      config manager: treat null and empty string equally in setDefaultConfiguration\n      client: fix behavior of walking where there are no tiles\n      timers plugin: fix teleblock timers\n\nDamen (1):\n      worldmap: fix shield of arrav start points\n\nDaniel (2):\n      Add snakeskin gear to skill calculator (#9172)\n      Added Larran&#39;s chest to loot tracker (#9209)\n\nDaniel Serpa (1):\n      ge plugin: add grand exchange total value\n\nEvaldas Lavrinovi\u010dius (2):\n      Fix location of Kourend Agility obstacle on world map (#9203)\n      Fix WC world map icons around Hosidius area (#9205)\n\nHermetism (1):\n      npchighlight: Do not render &#39;null&#39; names (#9093)\n\nHydrox6 (2):\n      fishing: add missing spots near farming guild\n      prayer: add HD prayer bar\n\nJacob McElroy (1):\n      chat commands: add ba high gamble command\n\nJavaBlah (1):\n      cursors plugin: add dragon dagger (p) cursor\n\nJordan Atwood (8):\n      EmoteClue: Add null checks for stashUnit\n      npc indicators: Fix long respawn timer bug\n      HotColdClue: Refactor to use enums for temperatures\n      HotColdClue: Add hot-cold solver class\n      cluescrolls: Add beginner hot-cold clues\n      HotColdTemperature: Fix warm-but-colder temperature bug\n      HotColdClue: Improve behavior on visibly shaking location\n      HotColdClue: Clear final location on clue reset\n\nKusha Gharahi (1):\n      wintertodt plugin: add round start notification\n\nLotto (1):\n      interface styles: add RuneScape cross sprites option\n\nMax Weber (1):\n      cache/FrameDumperTest: Don&#39;t get the wrong framemaps for a frame\n\nRice Boxer (1):\n      Fix Father Jean&#39;s coordinates in easy cryptic clue\n\nRobert Alexander (1):\n      chat commands: add duel arena chat command\n\nSander de Groot (2):\n      Adjust alignment of icons in fixed 2005 interface style and fix inventory icon\n      Add Barbarian Assault quick-start option to menu entry swapper\n\nScapeRune (1):\n      worldmap: Fix MEP2 and Shadows of the Storm quest tooltips (#9166)\n\nTwiglet1022 (1):\n      mining plugin: only show timers on same level in motherlode mine\n\nWilliam Collishaw (2):\n      Replace use of deprecated Guava Files write method\n      Clean up some instances of double white space\n\nWooxSolo (1):\n      Add sounds to devtools\n\nitscalvinwang (1):\n      Add support for burning stews to Cooking plugin (#9196) (#9202)\n\nkristo naeris (1):\n      world hopper: add option to disable Hop-to menu option\n\nltvill (1):\n      Change default examine chat color to green\n\npsikoi (2):\n      Add ENTER/ESC key events for screenmarker saving\n      Add hover preview to screen markers\n\ntanlines (1):\n      Add item charges for baskets and sacks (#9212)\n\ntrimbe (2):\n      api: add method to play sound effects while volume is muted\n      metronome: play sounds while volume is muted\n\nwinterdaze (1):\n      Add tooltips to DevTools buttons (#9224)\n\nxdesr (1):\n      Fix typos in Falo the Bard clues (comma, favourite) (#9185)\n</code></pre>'}}}]);
//# sourceMappingURL=97.97ca48f7.chunk.js.map