(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[99],{362:function(n,e){n.exports={title:"1.5.30 Release",description:"Song of the Elves, and item despawn timers",author:"Adam",__content:'<p>We have been diligently working off the <a href="https://github.com/runelite/runelite/issues/9459">SotE meta\nissue</a> over the last week, as\nit touches a lot of the plugins and features. Much of it is done and included in\nthis release:</p>\n<ul>\n<li>Add divine potion timers to the timers plugin</li>\n<li>Add Zalcano respawn timer to the boss plugin</li>\n<li>Add Prifddinas farming patches to the time tracking plugin</li>\n<li>Add Gauntlet kill count and personal best support to chat commands</li>\n<li>Add Prifddinas agility course &quot;kill count&quot; and personal best to chat commands</li>\n<li>Updates to the world map:<ul>\n<li>Add SotE quest start</li>\n<li>Add rare tree, transportation, and shortcut tooltips</li>\n<li>Fix Elf camp teleport location</li>\n<li>Add farming patch tooltips</li>\n<li>Add teleport crystal locations</li>\n<li>Add minigame icon to the Gauntlet</li>\n</ul>\n</li>\n<li>Add Prifddinas agility course to the agility plugin</li>\n<li>Add Prifddinas mining rocks to the mining plugin</li>\n<li>Add Gauntlet and Prifddinas Crystal Chest to loot tracking plugin</li>\n<li>Add crystal tree and agility course to the skill calculator</li>\n<li>Add Gauntlet consumable information to the item stats plugin, and to potion\ntimers</li>\n<li>Add Prifddinas and surrounding areas to the skybox plugin</li>\n<li>Add Prifddinas and surrounding areas to the possible Discord locations</li>\n<li>Add crystal sapling to the item identification plugin</li>\n<li>Add new crystal tools to the idle notifier</li>\n<li>Add crystal axe to woodcutting plugin and wintertodt plugin</li>\n<li>Add crystal pickaxe to motherlode plugin</li>\n<li>Add crystal implings to the impling plugin</li>\n</ul>\n<p>Item despawn timers have been added to the ground items plugin, which show how\nlong until an item will despawn for items which you drop and receive as loot\nfrom a PvM kill.</p>\n<p><img src="/img/blog/1.5.30-Release/despawntimer.png" alt="despawntimer"/></p>\n<p>The world hopper plugin now has an option to show the current world&#39;s ping</p>\n<p><img src="/img/blog/1.5.30-Release/ping.png" alt="ping"/></p>\n<p>The clue plugin now shows locations for emote clues on the overlay, instead of\njust the world map:</p>\n<p><img src="/img/blog/1.5.30-Release/clueloc.png" alt="clueloc"/></p>\n<p>The bank tags plugin now has an interface for searching items to use for the tab\nicon. This allows you to easily set the tab icon to items you do not have.</p>\n<p><img src="/img/blog/1.5.30-Release/banktags.gif" alt="banktags"/></p>\n<p>The raids scouter plugin now broadcasts scouted raids to your RuneLite party</p>\n<p><img src="/img/blog/1.5.30-Release/partyscout.png" alt="partyscout"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix tracking of Jad and Zuk personal best</li>\n<li>Show grand exchange value when examining items in the seed vault</li>\n<li>The quest list plugin now has an additional filter to show uncompleted quests\nonly</li>\n<li>Add support for Lava Eels to the fishing plugin</li>\n<li>Fix world map quest marker for Depths of Despair</li>\n<li>Add Hespori to the loot tracker</li>\n<li>The item prices plugin can now show HA profit when casting on items</li>\n<li>Change &quot;Mark&quot; to &quot;Unmark&quot; when right clicking already marked tiles, objects, and npcs</li>\n<li>Add option to add skill xptrackers to the canvas on the skill menu tab</li>\n<li>Fix removing teleblock timer when your opponent who cast the teleblock dies</li>\n<li>Add total points and points per hour to the NMZ overlay</li>\n<li>Fix the zoom plugin control reset config value to be properly bounded to\nvalid values</li>\n<li>Add 2005 style sprite override for friend/ignore list toggle icon</li>\n<li>The item charges plugin now supports Rings of Forging</li>\n<li>Add gnome stronghold fishing spots to fishing plugin</li>\n<li>Increase smelting overlay timeout to account for cannonballs</li>\n<li>Fix the XP tracker rounding to not show 100% prior to gaining a level</li>\n<li>Ignore player loot at LMS in the loot tracker</li>\n<li>Change Chaos Elemental respawn timer to 60 seconds</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 29 contributors this release!</p>\n<pre><code>15987632 (3):\n      hot cold clues: center kandarin outpost dig location\n      hot cold clues: center level 38 wilderness dig location\n      hot cold clues: center zeah lovakite furnace dig location\n\nAdam (17):\n      api: mark getItemDefinition as nonnull\n      ovelay renderer: more gracefully handle exceptions\n      tooltip overlay: move tooltip clearing to a finally block\n      tooltip component: fix exception from malformed tags\n      api: rename Item to TileItem and add Item value class\n      client: change item layer item uages to TileItem\n      chatfilter test: remove player bind\n      grounditems: add despawn timers\n      loot tracker: fix HERBIBOAR_EVENT name typo\n      timers: add divine potions\n      chat commands: add gauntlet kc\n      fps plugin: move fps off logout button on bottom line mode\n      world hopper: change ping task to ping one world\n      world hopper: add option to show current world ping\n      chat commands: fix tracking zuk pb\n      chat commands: add gg pb\n      chat commands: add guantlet pb\n\nAdam Witkowski (1):\n      itemstats: Add support for Tai Bwo Wannai food (spiders on stick) (#9485)\n\nAlexsuperfly (19):\n      loot tracker: add Elven Crystal Chest\n      world map: add song of the elves quest location\n      world map: add Prifddinas rare tree icons\n      world map: add Prifddinas tranportation icons\n      world map: add teleport crytal icon\n      world map: elf camp -&gt; Iorwerth camp teleport scroll\n      world map: add Prifddinas farming patch icons\n      world map: add elven overpass shortcuts on Prifddinas map\n      world map: add Iorwerths dungeon agility shortcut icons\n      world map: add gauntlet minigame icon\n      bosstimers: add Zalcano\n      AnimationID: add crystal and new dragon orn tools\n      idle notifier: add ids for crystal and new dragon orn tools\n      woodcutting: add crystal axe to axe enum\n      motherlode: update animation id set with new crystal and dragon tools\n      skill calc: add Prifddinas agility course\n      skill calc: add crystal tree\n      discord: add Prifddinas locations\n      wintertodt: add crystal axe to animation list\n\nAndrew Benson (1):\n      Fix Ardounge -&gt; Ardougne typo in cryptic clue description (#9460)\n\nAttackOfTheMoons (3):\n      Fix casing in shiftClickActionIndex  (#9404)\n      examine: Add support for examining Seed Vault items (#9431)\n      slayer: Fix NPE when getting unsupported task (#9490)\n\nDaniel Serpa (1):\n      quest list plugin: add not completed filter\n\nDavid (6):\n      clue plugin: add locations to emote clues\n      Add GE limit for Drift net (#9411)\n      Add new Jethic medium clue step (#9456)\n      impling plugin: add Crystal implings\n      fishing: Add support for Lava Eeels (#9477)\n      worldmap: Fix quest marker for Depths of Despair (#9506)\n\nDecorth (1):\n      loottracker: Add Hespori loot tracking\n\nGamma91 (1):\n      mining plugin: add Prifddinas rocks\n\nGustavo Rodrigues (1):\n      Added infernal cape and infernal max cape to master clue scroll step\n\nHydrox6 (2):\n      cluescrolls: add dragon pick (or) to master emote clue\n      Add item mappings for crystal equipment\n\nJacky L (1):\n      Show HA profit while casting HA on items (#9070)\n\nJordan Atwood (7):\n      groundmarkerplugin: Use RUNELITE menu action\n      timersplugin: Escape periods in teleblock patterns\n      npcindicators: Use &quot;Un-tag&quot; menu option for tagged NPCs\n      objectindicators: Use &quot;Unmark&quot; menu option for marked objects\n      groundmarkers: Use &quot;Unmark&quot; menu option for marked tiles\n      overlaymanager: Add anyMatch method\n      xptrackerplugin: Add canvas menu options to skill tab\n\nMax Weber (13):\n      runelite-api Remove WidgetPositioned\n      Revert &quot;Shutdown plugins on window close&quot;\n      runelite-client: remove RuneLiteModuleTest\n      runelite-client: Don&#39;t write all images to disk when loading them\n      ChatboxPerformancePlugin: Hook the cs2 to know when to rebuild\n      BankTags: Call scripts with all of their arguments explicitly\n      runelite-client: Start the ClientLoader running before injection starts\n      runelite-client: Preload certain slow classes\n      Update Quest Enum to latest cache\n      timetracking: Support Prifddinas patches\n      agility: Support Prifddinas course\n      Skybox: Add Prifddinas and Iorwerth dungeon\n      itemidentification: Add crystal sapling\n\nQuasindro (1):\n      nmz: Add total and per hour points to NMZ overlay\n\nRon Young (3):\n      api: import itemCount\n      chatbox: add ChatboxItemSearch\n      TabInterface: add item searching for change icon\n\nRyan (1):\n      zoom plugin: fix range bounds for ctrl zoom value config\n\nSander de Groot (2):\n      interface styles: add sprite override for 2005 friend/ignore list toggle\n      chat filter: fix filtering messages containing nbsp\n\nSebastiaanVanspauwen (1):\n      chat commands: add Prifddinas agility course kc and pb\n\nTheStonedTurtle (3):\n      loot tracker: add gauntlet support\n      itemstats: add Guantlet food and potion\n      timer plugin: add stamina timer for Guantlet potion\n\nTomas Slusny (3):\n      Use GL_DYNAMIC_DRAW for ever-changing uniformBuffer\n      party: add party chat messages\n      raids plugin: send raids layout message to party\n\nWilliam Collishaw (2):\n      emoji plugin: support nbsp in messages\n      raids: Switch from Pattern splitting to Text.fromCSV (#9422)\n\nZacharias Tyllstr\xf6m (1):\n      item charges: add ring of forging\n\ndekvall (2):\n      Add gnome stronghold fishing spots to fishing plugin (#9444)\n      Increase timeout for smelting overlay to handle cannonballs (#9448)\n\njdkleuver (1):\n      xp tracker: Change rounding mode so that it rounds down rather than up (#9378)\n\npsikoi (1):\n      loot tracker: ignore player loot in LMS\n\nrlw0014 (1):\n      timer plugin: remove tb timer when opponent dies\n\nxDemoN (1):\n      clue scrolls: Use consistent label for &quot;Location&quot; (#9421)\n</code></pre>'}}}]);
//# sourceMappingURL=99.5f6fcd50.chunk.js.map