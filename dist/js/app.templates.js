angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("app/partials/error/404.html",
    "<h3><em>404</em> - This page could not be found</h3>\n" +
    "\n" +
    "<p>\n" +
    "  The URL <code>{{ url }}</code> could not be loaded.\n" +
    "</p>\n"
  );

  $templateCache.put("app/partials/error/500.html",
    "<h3><em>500</em> - This page encountered an error</h3>\n" +
    "\n" +
    "<p>\n" +
    "  The URL <code>{{ url }}</code> encountered an error and could not be loaded.\n" +
    "</p>\n"
  );

  $templateCache.put("app/partials/error/index.html",
    "<section id=\"error\">\n" +
    "  <div class=\"container-narrow\" ng-include src=\"'partials/error/' + error + '.html'\">\n" +
    "    <h3>Sorry, there was an error.</h3>\n" +
    "\n" +
    "    <p>\n" +
    "      Please go back and try your request again.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</section>\n"
  );

  $templateCache.put("app/partials/guide.html",
    "<section id=\"guide\">\n" +
    "  <div class=\"container-narrow\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "      <div class=\"well well-small span3\">\n" +
    "\n" +
    "        <div ng-repeat=\"section in toc()\" ng-include=\"'app/partials/guide/toc.html'\"></div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"span9\">\n" +
    "\n" +
    "        <h2>Guide</h2>\n" +
    "\n" +
    "        <p>\n" +
    "          This guide will take you throw the logical steps of how to install\n" +
    "          Genesis Skeleton, the folder structure &amp; conventions, how to\n" +
    "          manage both client &amp; server-side dependencies, and more.\n" +
    "        </p>\n" +
    "\n" +
    "        <section ng-repeat=\"section in toc()\" ng-include=\"'app/partials/guide/section.html'\"></section>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>"
  );

  $templateCache.put("app/partials/guide/installation.html",
    "<h3>Installation</h3>\n" +
    "\n" +
    "<p>\n" +
    "  Because this project is a Skeleton, it is meant to be the <em>beginning</em>\n" +
    "  of your app.  If you'd like to utlize it within an existing project, you should\n" +
    "  follow the <a href=\"#/guide#installation-upgrading\">Upgrading</a> instructions.\n" +
    "</p>\n"
  );

  $templateCache.put("app/partials/guide/installation/download.html",
    "<h4>Download <small>(Preferred)</small></h4>\n" +
    "\n" +
    "<p>\n" +
    "  <small>This method is preferred as it doesn't clutter your project's history with that of Genesis Skeleton.</small>\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "  <a href=\"https://github.com/ericclemmons/genesis-skeleton/archive/master.zip\" class=\"btn btn-small\"><strong>Download</strong> (.zip)</a>\n" +
    "  the latest release, unzip it, &amp; rename the folder to match your own project's name, such as:\n" +
    "  <code>~/Sites/my-project</code>.\n" +
    "</p>\n"
  );

  $templateCache.put("app/partials/guide/installation/git.html",
    "<h4>Git</h4>\n" +
    "\n" +
    "<p>\n" +
    "  <small>If you intend to constantly stay up-to-date with this project, then this method may be best.</small>\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "  Rather than using <code>git clone</code>, it is recommended to create a project\n" +
    "  on Github, follow their instructions, and already have a repository created &amp;\n" +
    "  cloned.\n" +
    "\n" +
    "</p>\n" +
    "\n" +
    "<pre class=\"pre-scrollable\">\n" +
    "$ cd ~/Sites/my-project\n" +
    "<br>\n" +
    "$ git remote add genesis git://github.com/ericclemmons/genesis-skeleton.git\n" +
    "<br>\n" +
    "$ git fetch && git merge genesis/master\n" +
    "</pre>\n"
  );

  $templateCache.put("app/partials/guide/installation/upgrading.html",
    "<h4>Upgrading</h4>\n" +
    "\n" +
    "<strong>TODO</strong>\n"
  );

  $templateCache.put("app/partials/guide/requirements.html",
    "<h3>Requirements</h3>\n" +
    "\n" +
    "<ol>\n" +
    "  <li><a href=\"http://nodejs.org/\">NodeJS</a> with NPM.</li>\n" +
    "  <li><a href=\"http://gruntjs.com/\">GruntJS</a> <code>npm install -g grunt-cli</code>.</li>\n" +
    "  <li><a href=\"http://twitter.github.com/bower/\">Bower</a> <code>npm install -g bower</code>.</li>\n" +
    "</ol>\n" +
    "\n" +
    "<p>\n" +
    "  <small>GruntJS &amp; Bower both recommend being <strong>globally</strong> installed.</small>\n" +
    "</p>\n"
  );

  $templateCache.put("app/partials/guide/section.html",
    "<div id=\"{{ id() }}\" ng-include=\"template()\"></div>\n" +
    "\n" +
    "<section ng-repeat=\"section in toc(section)\" ng-include=\"'app/partials/guide/section.html'\"></section>\n"
  );

  $templateCache.put("app/partials/guide/toc.html",
    "<ul class=\"nav nav-list\">\n" +
    "  <li>\n" +
    "    <a ng-href=\"#/guide/#{{ id() }}\">{{ label() }}</a>\n" +
    "    <li ng-repeat=\"section in toc(section)\" ng-include=\"'app/partials/guide/toc.html'\" />\n" +
    "  </li>\n" +
    "</ul>"
  );

  $templateCache.put("app/partials/header.html",
    "<div class=\"container-narrow\">\n" +
    "  <div class=\"row-fluid\">\n" +
    "\n" +
    "    <div class=\"span6\">\n" +
    "      <h2>Zero to Live in <em>minutes</em>.</h2>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"span6\">\n" +
    "      <img src=\"http://placehold.it/300x225\" />\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("app/partials/home.html",
    "<header ng-include=\"'app/partials/header.html'\"></header>\n" +
    "\n" +
    "<section id=\"about\">\n" +
    "  <div class=\"container-narrow\" ng-include=\"'app/partials/home/about.html'\" autoscroll></div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"get-started\">\n" +
    "  <div class=\"container-narrow\" ng-include=\"'app/partials/home/get-started.html'\" autoscroll></div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"features\">\n" +
    "  <div class=\"container-narrow\" ng-include=\"'app/partials/home/features.html'\" autoscroll></div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"technology\">\n" +
    "  <div class=\"container-narrow\" ng-include=\"'app/partials/home/technology.html'\" autoscroll></div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"faq\">\n" +
    "  <div class=\"container-narrow\" ng-include=\"'app/partials/home/faq.html'\" autoscroll></div>\n" +
    "</section>\n"
  );

  $templateCache.put("app/partials/home/about.html",
    "<h3>About</h3>\n" +
    "\n" +
    "<p>\n" +
    "  An opinionated modern application starter kit with a robust set of\n" +
    "  <a href=\"#features\">features</a>\n" +
    "  using the latest\n" +
    "  <a href=\"#technology\">technology</a>\n" +
    "  to help you quickly build your next great app.\n" +
    "</p>\n"
  );

  $templateCache.put("app/partials/home/faq.html",
    "<h3>Frequently Asked Questions</h3>\n" +
    "\n" +
    "<h4>Why <a href=\"http://angularjs.org/\">AngularJS</a> <small>instead of a different framework</small>?</h4>\n" +
    "\n" +
    "<p>\n" +
    "  For robust applications with a lot of moving parts,\n" +
    "  AngularJS has shown to support both rapid prototypes and complex applications requiring well-structured architecture.\n" +
    "</p>\n" +
    "\n" +
    "<p>\n" +
    "  Don't fret, though!\n" +
    "\n" +
    "  You're only a simple <code>bower install</code> away from having your favorite framework.\n" +
    "</p>\n" +
    "\n" +
    "<h4>How is this different from <a href=\"http://yeoman.io/\">Yeoman</a> <small>and other generators</small>?</h4>\n" +
    "\n" +
    "<p>\n" +
    "  Yeoman is a fantastic generator project.\n" +
    "\n" +
    "  This project is, however, *not* a generator.\n" +
    "\n" +
    "  Genesis Skeleton is an opinionated starter application meant for you to fork,\n" +
    "  modify, and start each project with a well-organized and flexible foundation.\n" +
    "</p>\n" +
    "\n" +
    "<h4>I have more questions! What do I do?</h4>\n" +
    "\n" +
    "<p>\n" +
    "  Create an <a href=\"https://github.com/ericclemmons/genesis-skeleton/issues\">issue</a> on Github\n" +
    "  or contact <a href=\"https://twitter.com/ericclemmons\">@ericclemmons</a> on Twitter.\n" +
    "</p>\n"
  );

  $templateCache.put("app/partials/home/features.html",
    "<h3>Features</h3>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span6\">\n" +
    "    <h4><i class=\"icon-folder-open\" />&nbsp;Structured</h4>\n" +
    "    <p>\n" +
    "      Based on both client &amp; server-side convention, every part of your application has a place, no matter how big it gets.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "  <div class=\"span6\">\n" +
    "    <h4><i class=\"icon-refresh\" />&nbsp;Automated build process</h4>\n" +
    "    <p>\n" +
    "      Leveraging Grunt, everything from linting your scripts to pre-processing your CSS and images is done for you.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span6\">\n" +
    "    <h4><i class=\"icon-eye-open\" />&nbsp;WYSIWYG</h4>\n" +
    "    <p>\n" +
    "      Simply run <code>grunt server</code> and watch your changes instantly via <a href=\"http://livereload.com/\">LiveReload</a>.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "  <div class=\"span6\">\n" +
    "    <h4><i class=\"icon-filter\" />Optimized for Angular</h4>\n" +
    "    <p>\n" +
    "      Angular templates are automatically pre-loaded so your app loads instantly without any unecessary requests.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span6\">\n" +
    "    <h4><i class=\"icon-tasks\" />&nbsp;Optimized</h4>\n" +
    "    <p>\n" +
    "      From CSS pre-processing to image optimization, everything is ready for production with a simple <code>grunt build</code>.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "  <div class=\"span6\">\n" +
    "    <h4><i class=\"icon-globe\" />&nbsp;Heroku-ready</h4>\n" +
    "    <p>\n" +
    "      You're only a <code>git push heroku master</code> away from showing off your latest project.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<p class=\"muted center\">\n" +
    "  <small>Learn more about these features in the <a href=\"/guide\">guide</a>.</small>\n" +
    "</p>\n" +
    "\n"
  );

  $templateCache.put("app/partials/home/get-started.html",
    "<h3>Get Started in <em>5 Easy Steps</em></h3>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span6\">\n" +
    "\n" +
    "    <ol>\n" +
    "      <li>\n" +
    "        <a href=\"https://github.com/ericclemmons/genesis-skeleton/archive/master.zip\" class=\"btn btn-small\"><strong>Download</strong></a>\n" +
    "        or\n" +
    "        <a href=\"https://github.com/ericclemmons/genesis-skeleton\"><code>git clone</code></a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <strong>Install</strong> dependencies: <code>npm install</code>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <strong>Preview</strong> your changes <em>live</em>: <code>grunt server</code>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <strong>Create</strong> a Heroku server: <code>heroku create</code>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <strong>Launch</strong> your app! <code>git push heroku master</code>\n" +
    "      </li>\n" +
    "    </ol>\n" +
    "\n" +
    "  </div>\n" +
    "  <div class=\"span6\">\n" +
    "\n" +
    "    <aside class=\"alert info\">\n" +
    "      <small>\n" +
    "        You should already have <a href=\"http://nodejs.org/\">NodeJS</a> installed,\n" +
    "        as well as <a href=\"http://gruntjs.com/\">Grunt</a> and <a href=\"http://twitter.github.com/bower/\">Bower</a>\n" +
    "        <strong>globally</strong>:\n" +
    "      </small>\n" +
    "\n" +
    "      <pre><code>npm install -g grunt-cli bower</code></pre>\n" +
    "    </aside>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<p>\n" +
    "  <strong class=\"label label-info\"><i class=\"icon-white icon-info-sign\" />&nbsp;Want to learn more?</strong>\n" +
    "\n" +
    "  Check out the <a href=\"/guide\">guide</a>!\n" +
    "</p>"
  );

  $templateCache.put("app/partials/home/technology.html",
    "<h3>Technology</h3>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span2\">\n" +
    "    <h4 class=\"muted pull-right\">Front End</h4>\n" +
    "  </div>\n" +
    "  <div class=\"span10\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "      <div class=\"span4\">\n" +
    "        <h4><a href=\"http://html5boilerplate.com/\">HTML5 Boilerplate</a></h4>\n" +
    "        <p>\n" +
    "          Lean, mobile-friendly HTML template with Google Analytics &amp;\n" +
    "          <a href=\"http://modernizr.com/\" title=\"Modernizr\">Modernizr</a>.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"span4\">\n" +
    "        <h4><a href=\"http://twitter.github.com/bootstrap/\">Bootstrap</a></h4>\n" +
    "        <p>Use as much or as little as you'd like to kickstart your app's design.</p>\n" +
    "      </div>\n" +
    "      <div class=\"span4\">\n" +
    "        <h4><a href=\"http://angularjs.org/\">AngularJS</a></h4>\n" +
    "        <p>Enhance HTML with data-binding, new functionality, and a service-oriented MVC architecture.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span2\">\n" +
    "    <h4 class=\"muted pull-right\">Back End</h4>\n" +
    "  </div>\n" +
    "  <div class=\"span10\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "      <div class=\"span4\">\n" +
    "        <h4><a href=\"http://expressjs.com/\">Express</a></h4>\n" +
    "        <p>Powered by the de-facto node application framework with a sensible folder structure.</p>\n" +
    "      </div>\n" +
    "      <div class=\"span4\">\n" +
    "        <h4><a href=\"https://toolbelt.heroku.com/\">Heroku</a></h4>\n" +
    "        <p>See your app live in minutes with a simple <code>git push</code>.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span2\">\n" +
    "    <h4 class=\"muted pull-right\">Tools</h4>\n" +
    "  </div>\n" +
    "  <div class=\"span10\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "      <div class=\"span4\">\n" +
    "        <h4><a href=\"http://gruntjs.com/\">Grunt</a></h4>\n" +
    "        <p>Serve, watch, reload, &amp; compile your app's resources by running <code>grunt server</code>.</p>\n" +
    "      </div>\n" +
    "      <div class=\"span4\">\n" +
    "        <h4><a href=\"http://twitter.github.com/bower/\">Bower</a></h4>\n" +
    "        <p>Simplify management of browser dependencies.  Compiled &amp; minified.</p>\n" +
    "      </div>\n" +
    "      <div class=\"span4\">\n" +
    "        <h4><a href=\"http://livereload.com/\">LiveReload</a></h4>\n" +
    "        <p>Your changes are refreshed in the browser with each save. No extension required.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<p class=\"muted center\">\n" +
    "  <small>How to use &amp; modify these are available in the <a href=\"/guide\">guide</a>.</small>\n" +
    "</p>\n"
  );

  $templateCache.put("app/partials/issues.html",
    "<span ng-transclude />&nbsp;<span class=\"badge\" ng-bind=\"issues.data.length\" />\n"
  );

  $templateCache.put("app/partials/nav.html",
    "<div class=\"navbar navbar-fixed-top\" bs-navbar>\n" +
    "  <div class=\"navbar-inner\">\n" +
    "    <div class=\"container-narrow\">\n" +
    "\n" +
    "      <ul class=\"nav\">\n" +
    "        <li data-match-route=\"/home\"><a href=\"#/home\"><h1>Genesis Skeleton</h1></a></li>\n" +
    "        <li data-match-route=\"/guide\"><a href=\"#/guide\">Guide</a></li>\n" +
    "        <li><a app-issues href=\"https://github.com/ericclemmons/genesis-skeleton/issues\" class=\"hidden-phone\">Issues</a></li>\n" +
    "        <li><a href=\"https://github.com/ericclemmons/genesis-skeleton/\">Source</a></li>\n" +
    "      </ul>\n" +
    "\n" +
    "      <div class=\"btn-toolbar btn-group pull-right hidden-phone\">\n" +
    "        <a class=\"btn btn-small travis-btn\" href=\"//travis-ci.org/#!/ericclemmons/genesis-skeleton\" target=\"_blank\">\n" +
    "          <img src=\"https://api.travis-ci.org/ericclemmons/genesis-skeleton.png?branch=master\" />\n" +
    "        </a>\n" +
    "\n" +
    "        <a class=\"btn btn-small btn-info\" href=\"https://github.com/ericclemmons/genesis-skeleton/archive/master.zip\"><i class=\"icon-download-alt icon-white\"></i>&nbsp;Download</a>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
