(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[76],{339:function(e,n){e.exports={title:"1.5.7 Release",description:"Skybox plugin and GPU fog",author:"Jordan",__content:'<p>A skybox plugin has been added to draw colors beyond the edge of the game&#39;s rendered tiles based on\nthe player&#39;s location. Thanks to <a href="https://github.com/Abextm">@Abextm</a>,\n<a href="https://github.com/raiyni/">@raiyni</a>, and <a href="https://github.com/psikoi">@psikoi</a> for this feature!</p>\n<p><img src="/img/blog/1.5.7-Release/skybox.png" alt="Skybox"/></p>\n<p>The GPU plugin now supports an option to draw fog, fading the edge of the scene by the configured\namount. Thanks to <a href="https://github.com/logarrhythmic">@logarrhythmic</a> for this contribution.</p>\n<p><img src="/img/blog/1.5.7-Release/fog.jpg" alt="Fog"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Add karambwans and wine to cooking plugin</li>\n<li>Added a !qp command to the chat commands plugin</li>\n<li>The world hopper plugin now changes the header color to yellow with active filter</li>\n<li>The report button plugin now has a date time format matching that of the screenshot plugin</li>\n<li>Added quest requirements support to the achievement diary plugin</li>\n<li>Added Kebos and Kourend diary to the achievement diary plugin</li>\n<li>Looking up hiscores will now automatically select the correct game mode based on current world</li>\n<li>Split Valuable and Untradeable screenshot options</li>\n<li>Fix artic pine log exp in skill calc</li>\n<li>Change Caviar healing value from 3 to 5</li>\n<li>Add puzzle solver for monkey madness 1 puzzle box</li>\n<li>Fixed a bug with the inventory tags plugin causing tooltips to stay active indefinitely</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 12 contributors this release!</p>\n<pre><code>Adam (17):\n      object markers: determine tile from menu parameters\n      client: copy screenshot image in draw manager callback\n      cml: set runelite user agent header\n      cml: only send update if at least 1k exp has been gained\n      xptracker: only send update if at least 1k exp has been gained\n      xp tracker: try to not look up the same user too frequently\n      xp tracker: reduce hiscore lookup delay to 1 second\n      timers plugin: change vengeance timers to use varbits\n      Add karambwans and wine to cooking plugin\n      http service: use jedis connection pool\n      client: add chat command manager\n      kc: change to use redis for storage\n      http service: rename kc to chat\n      Add qp to chat service\n      chat commands: add !qp command\n      scene mixin: disable clickbox checks when detatched camera is enabled\n      gpu plugin: add fog\n\nJake Wilson (1):\n      worldhopper: change header color to yellow with active filter (#7035)\n\nJordan Atwood (5):\n      itemprices: Add &quot;tooltips&quot; plugin tag\n      reportbutton: Make time formatting methods static where possible\n      reportbutton: Add date time format\n      experiencedrop: Highlight only correct exp drops for prayer\n      dev tools: Fix overlay layer\n\nMax Weber (12):\n      Add BeforeRender event\n      runelite-api: Add Quest enum\n      achievementdiary: Split requirements into multiple classes\n      diaries: Use new api\n      achievementdiary: Add Quest support\n      achievementdiary: Layout text properly\n      Add Skybox plugin\n      ScriptVM: Bump execution time limit\n      Skybox: Do bounds check on the localPlayer&#39;s location, not the camera&#39;s\n      fairyring: Add CIR\n      Update Quests\n      achievementdiary: Don&#39;t duplicate requirements with many requriements\n\nMonster Sync (1):\n      Add Kourend &amp; Kebos diary requirements\n\nReasel (1):\n      Add Moonlight Mead to ItemStatsPlugin (#7172)\n\nRichard (1):\n      Return hiscores based on current world\n\nRon Young (1):\n      Skybox: add Kebos Mainland\n\nSpedwards (4):\n      Split Valuable and Untradeable screenshot options (#7167)\n      Fix artic pine log exp in skill calc (40xp/log) (#7199)\n      Change Caviar healing value from 3 to 5 (#7206)\n      diaries: Add Quest requirements\n\nTrevor Guidry (3):\n      Add range annotation to gpu draw distance\n      Make the default min value of ranges 0\n      Add the lvl 20 ardy guards to the npc_health.json\n\nsteffenhauge (1):\n      Add puzzle solver for monkey madness 1 puzzle box (#6545)\n\ntrimbe (3):\n      inventory tags: preserve &#39;cancel&#39; when creating custom menu\n      bank value: use ItemContainer instead of WidgetItemQuery\n      bank value: add script callback for setting title\n</code></pre>'}}}]);
//# sourceMappingURL=76.443b6862.chunk.js.map