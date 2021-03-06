var Model = require('./model'),
  Collection = require('./collection');

var User = {};

User.Data = [
  {
    "name": "TJ Holowaychuk",
    "login": "visionmedia",
    "location": "Victoria, BC, Canada",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f1e3ab214a976a39cfd713bc93deb10f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 4,
    "organizations": [
      "zeromq",
      "LearnBoost",
      "senchalabs",
      "geeklist",
      "luna",
      "component"
    ],
    "contributions": 7460,
    "contributionsStreak": 55,
    "contributionsCurrentStreak": 24
  },
  {
    "name": "Fabien Potencier",
    "login": "fabpot",
    "location": "Paris, France",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/f1a2c5905e121d09feba5ad73898ffca?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [
      "swiftmailer",
      "sensio",
      "symfony",
      "doctrine",
      "sensiolabs"
    ],
    "contributions": 6992,
    "contributionsStreak": 56,
    "contributionsCurrentStreak": 28
  },
  {
    "name": "Yo-An Lin",
    "login": "c9s",
    "location": "Taipei, Taiwan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/7490b4e3e9cb85a1f7dc0c8ea01a86e5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 434,
    "organizations": [
      "perltaiwan"
    ],
    "contributions": 6762,
    "contributionsStreak": 28,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Matthew Weier O'Phinney",
    "login": "weierophinney",
    "location": "Sioux Falls, SD, USA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/bda768a042bd034f3f8090401aa77935?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 912,
    "organizations": [
      "zendframework",
      "php-fig",
      "ZF-Commons"
    ],
    "contributions": 5157,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "David Cramer",
    "login": "dcramer",
    "location": "San Francisco, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/51567a4f786cd8a2c41c513b592de9f9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 668,
    "organizations": [
      "disqus",
      "django-debug-toolbar",
      "coffin",
      "getsentry"
    ],
    "contributions": 4245,
    "contributionsStreak": 26,
    "contributionsCurrentStreak": 18
  },
  {
    "name": "Dane Springmeyer",
    "login": "springmeyer",
    "location": "Seattle",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/edd0be6c7c035b58bb2712284da41f1f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 209,
    "organizations": [
      "developmentseed",
      "mapnik",
      "oam",
      "hotosm",
      "nodegis",
      "mapbox"
    ],
    "contributions": 4049,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Postmodern",
    "login": "postmodern",
    "location": "",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/66f5d5b64b951b3eeb8b6c34fcb69237?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 203,
    "organizations": [
      "sophsec",
      "datamapper",
      "ronin-ruby",
      "ruby",
      "ruby-ore",
      "trailofbits"
    ],
    "contributions": 4023,
    "contributionsStreak": 42,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Tom MacWright",
    "login": "tmcw",
    "location": "Washington, DC",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/69a180136f3c237769452a4af0bbb9a1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 218,
    "organizations": [
      "developmentseed",
      "mapnik",
      "nodegis",
      "mapbox",
      "modestmaps"
    ],
    "contributions": 3930,
    "contributionsStreak": 39,
    "contributionsCurrentStreak": 10
  },
  {
    "name": "Thibault Duplessis",
    "login": "ornicar",
    "location": "South America",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/197652601405656c383fc505dc185759?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 337,
    "organizations": [],
    "contributions": 3887,
    "contributionsStreak": 72,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Dav Glass",
    "login": "davglass",
    "location": "Marion, IL",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/05243ae612fb4dcfb151e08489f334b0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 511,
    "organizations": [
      "yahoo",
      "yui",
      "yql"
    ],
    "contributions": 3884,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James Halliday",
    "login": "substack",
    "location": "Oakland, California, USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/d4a2f12ceae3b7f211b661576d22bfb9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "nko",
      "nko2",
      "browserling",
      "codeforoakland"
    ],
    "contributions": 3750,
    "contributionsStreak": 30,
    "contributionsCurrentStreak": 6
  },
  {
    "name": "Francisco Souza",
    "login": "fsouza",
    "location": "Rio de Janeiro, Brazil",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/a5e001826b5112a5c02f706569b93a3c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 210,
    "organizations": [
      "globocom",
      "cobrateam",
      "djangobrasil",
      "pythonbrasil",
      "devincachu",
      "Tux-ES"
    ],
    "contributions": 3746,
    "contributionsStreak": 29,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Isaac Z. Schlueter",
    "login": "isaacs",
    "location": "Oakland CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/73a2b24daecb976af81e010b7a3ce3c6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "joyent",
      "thenodefirm"
    ],
    "contributions": 3726,
    "contributionsStreak": 32,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Jerome Etienne",
    "login": "jeromeetienne",
    "location": "Paris, france",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b381880f9f81065247ba9a0b7ff68358?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 271,
    "organizations": [
      "DemoJS",
      "tQueryUI"
    ],
    "contributions": 3677,
    "contributionsStreak": 40,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Edward A. Kmett",
    "login": "ekmett",
    "location": "Cambridge, MA",
    "language": "Haskell",
    "gravatar": "https://secure.gravatar.com/avatar/9c51a8b8afa2366a2ef4650c411f187a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 212,
    "organizations": [
      "lens"
    ],
    "contributions": 3610,
    "contributionsStreak": 81,
    "contributionsCurrentStreak": 81
  },
  {
    "name": "Taylor Otwell",
    "login": "taylorotwell",
    "location": "Arkansas",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/f30ff8ad2367afd407a1678e7d8d851f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 410,
    "organizations": [
      "laravel",
      "UserScape",
      "illuminate"
    ],
    "contributions": 3595,
    "contributionsStreak": 27,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yihui Xie",
    "login": "yihui",
    "location": "Ames, IA",
    "language": "R",
    "gravatar": "https://secure.gravatar.com/avatar/fd6964ed425d626628bd057abbe6a85b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 391,
    "organizations": [
      "ggobi",
      "rstudio",
      "cosname",
      "r-cn"
    ],
    "contributions": 3298,
    "contributionsStreak": 36,
    "contributionsCurrentStreak": 34
  },
  {
    "name": "Alon Zakai",
    "login": "kripken",
    "location": "",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/cb9f8cd8da97fa3a92e46ebe576e8050?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 281,
    "organizations": [
      "Unity-Technologies"
    ],
    "contributions": 3289,
    "contributionsStreak": 69,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "José Valim",
    "login": "josevalim",
    "location": "Kraków, Poland",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/e837f6b7fd146ab16ed3d663476c063e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "rails",
      "rack",
      "plataformatec",
      "elixir-lang"
    ],
    "contributions": 3282,
    "contributionsStreak": 62,
    "contributionsCurrentStreak": 14
  },
  {
    "name": "Dominic Tarr",
    "login": "dominictarr",
    "location": "New Zealand",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/8225d7ca5e83a3f9f0bb89a61d5df72c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 267,
    "organizations": [
      "nodedocs",
      "oqulr"
    ],
    "contributions": 3281,
    "contributionsStreak": 41,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Raynos",
    "login": "Raynos",
    "location": "San Francisco",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/d840cb1fb7e828284011cc08f40a1015?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 206,
    "organizations": [
      "h5bp",
      "Colingo"
    ],
    "contributions": 3263,
    "contributionsStreak": 36,
    "contributionsCurrentStreak": 11
  },
  {
    "name": "Jordan Sissel",
    "login": "jordansissel",
    "location": "Silicon Valley",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/75fdd336ae5f818276f1cf79e0468b2d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 341,
    "organizations": [
      "logstash",
      "monitoringsucks"
    ],
    "contributions": 3249,
    "contributionsStreak": 41,
    "contributionsCurrentStreak": 32
  },
  {
    "name": "Erik Michaels-Ober",
    "login": "sferik",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/1f74b13f1e5c6c69cb5d7fbaabb1e2cb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 555,
    "organizations": [
      "carlhuda",
      "rubygems",
      "codeforamerica",
      "travis-ci",
      "hackforchange",
      "erikhuda",
      "lostisland"
    ],
    "contributions": 3220,
    "contributionsStreak": 48,
    "contributionsCurrentStreak": 13
  },
  {
    "name": "Kevin Sawicki",
    "login": "kevinsawicki",
    "location": "Redwood City, CA",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/4e3f068bcac207404306e790c0d662ed?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 318,
    "organizations": [
      "github",
      "eclipse",
      "jenkinsci",
      "libgit2",
      "play"
    ],
    "contributions": 3214,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dr Nic Williams",
    "login": "drnic",
    "location": "Palo Alto, CA, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/cb2b768a5e546b24052ea03334e43676?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "engineyard",
      "mocra",
      "rubinius",
      "railsinstaller",
      "svruby",
      "puma",
      "StarkAndWayne"
    ],
    "contributions": 3181,
    "contributionsStreak": 36,
    "contributionsCurrentStreak": 36
  },
  {
    "name": "Shougo",
    "login": "Shougo",
    "location": "Japan",
    "language": "VimL",
    "gravatar": "https://secure.gravatar.com/avatar/7f5a1bfaf8b64cbcdfaf82a7de92506b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 508,
    "organizations": [
      "vimjolts",
      "vim-jp"
    ],
    "contributions": 3131,
    "contributionsStreak": 33,
    "contributionsCurrentStreak": 12
  },
  {
    "name": "lifesinger",
    "login": "lifesinger",
    "location": "Hangzhou, China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/db33090541526c03c798f82aa0a5dbaa?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 614,
    "organizations": [
      "kissyteam",
      "seajs",
      "snail-dream",
      "alipay",
      "aralejs"
    ],
    "contributions": 3111,
    "contributionsStreak": 26,
    "contributionsCurrentStreak": 10
  },
  {
    "name": "David Fowler",
    "login": "davidfowl",
    "location": "Bellevue, WA",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/1fe64ebb176498be5f73ab51986c6b7b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 410,
    "organizations": [
      "projectkudu",
      "SignalR",
      "NuGet",
      "WindowsAzure"
    ],
    "contributions": 3099,
    "contributionsStreak": 51,
    "contributionsCurrentStreak": 25
  },
  {
    "name": "Sven Fuchs",
    "login": "svenfuchs",
    "location": "Germany/Berlin",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/2f042f300d1249917adf6f13d3f698b2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 363,
    "organizations": [
      "travis-ci",
      "travis-repos",
      "travis-pro",
      "rubymonsters"
    ],
    "contributions": 3098,
    "contributionsStreak": 88,
    "contributionsCurrentStreak": 19
  },
  {
    "name": "Ryan Bigg",
    "login": "radar",
    "location": "Melbourne, Australia",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/9a2a53db8e9b4476038c94a64b32833f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 612,
    "organizations": [
      "spree",
      "twist-books"
    ],
    "contributions": 3052,
    "contributionsStreak": 24,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Nathan Rajlich",
    "login": "TooTallNate",
    "location": "San Rafael, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/693307b4e0cb9366f34862c9dfacd7fc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 456,
    "organizations": [
      "LearnBoost",
      "component"
    ],
    "contributions": 3052,
    "contributionsStreak": 52,
    "contributionsCurrentStreak": 7
  },
  {
    "name": "Yichun Zhang",
    "login": "agentzh",
    "location": "San Francisco, CA, USA",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/37f3ea777f96500b332a1a89d6027897?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 983,
    "organizations": [
      "cloudflare"
    ],
    "contributions": 2941,
    "contributionsStreak": 41,
    "contributionsCurrentStreak": 12
  },
  {
    "name": "Paul Miller",
    "login": "paulmillr",
    "location": "Ukraine",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/d342e4ef045c54a6a6f41d070d8a0406?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 238,
    "organizations": [
      "brunch",
      "chaplinjs"
    ],
    "contributions": 2930,
    "contributionsStreak": 38,
    "contributionsCurrentStreak": 26
  },
  {
    "name": "Kohsuke Kawaguchi",
    "login": "kohsuke",
    "location": "San Jose, California",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/0cb9832a01c22c083390f3c5dcb64105?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 383,
    "organizations": [
      "jenkinsci",
      "cloudbees",
      "infradna",
      "stapler",
      "java-schema-utilities",
      "CloudBees-community"
    ],
    "contributions": 2909,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tokuhiro Matsuno",
    "login": "tokuhirom",
    "location": "Tokyo, Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/36a17db871aaa3267948cf3a557a2575?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 387,
    "organizations": [
      "msgpack",
      "xslate",
      "Perl-Toolchain-Gang",
      "CPAN-API",
      "perldoc-jp",
      "ukigumo",
      "plack"
    ],
    "contributions": 2904,
    "contributionsStreak": 53,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "William Durand",
    "login": "willdurand",
    "location": "France",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/c44ab7aed2bd14539fafb9175fcf2085?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 226,
    "organizations": [
      "sonata-project",
      "nelmio",
      "FriendsOfSymfony",
      "Bazinga",
      "propelorm"
    ],
    "contributions": 2876,
    "contributionsStreak": 36,
    "contributionsCurrentStreak": 28
  },
  {
    "name": "Hsiaoming Yang",
    "login": "lepture",
    "location": "Hangzhou, China",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/83a5c46f52b4835e6048159bfa85478e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 266,
    "organizations": [
      "seajs",
      "alipay",
      "aralejs"
    ],
    "contributions": 2837,
    "contributionsStreak": 39,
    "contributionsCurrentStreak": 30
  },
  {
    "name": "Michael Snoyman",
    "login": "snoyberg",
    "location": "Israel",
    "language": "Haskell",
    "gravatar": "https://secure.gravatar.com/avatar/71596bb1ca3ba3aa4400c3f407baec9f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 203,
    "organizations": [
      "yesodweb",
      "mezzohaskell",
      "fpco"
    ],
    "contributions": 2818,
    "contributionsStreak": 38,
    "contributionsCurrentStreak": 9
  },
  {
    "name": "Aaron Heckmann",
    "login": "aheckmann",
    "location": "San Jose, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/e2e776d3d6fbc6a6b7e4c692bd080595?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 316,
    "organizations": [
      "10gen",
      "mongodb",
      "nko"
    ],
    "contributions": 2809,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Lukas Kahwe Smith",
    "login": "lsmith77",
    "location": "Zurich, Switzerland",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/54787afbd0e7c30936101c2fa84bd89b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 329,
    "organizations": [
      "jackalope",
      "liip",
      "doctrine",
      "symfony-cmf",
      "FriendsOfSymfony",
      "travis-ci",
      "phpcr",
      "Cilex"
    ],
    "contributions": 2776,
    "contributionsStreak": 29,
    "contributionsCurrentStreak": 29
  },
  {
    "name": "Igor Wiedler",
    "login": "igorw",
    "location": "",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/eb42ff31986f5ed1d97580819134d702?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 348,
    "organizations": [
      "phpbb",
      "flintstones",
      "reactphp",
      "lisphp",
      "PunchoutPHP"
    ],
    "contributions": 2775,
    "contributionsStreak": 29,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Zeno Rocha",
    "login": "zenorocha",
    "location": "Rio de Janeiro",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/e190023b66e2b8aa73a842b106920c93?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 480,
    "organizations": [
      "liferay",
      "html5-pro",
      "globoesportecom",
      "braziljs",
      "jquery-boilerplate"
    ],
    "contributions": 2751,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Ayende Rahien",
    "login": "ayende",
    "location": "Israel",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/730a9f9186e14b8da5a4e453aca2adfe?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 963,
    "organizations": [
      "castleproject",
      "hibernating-rhinos"
    ],
    "contributions": 2741,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Benjamin Eberlei",
    "login": "beberlei",
    "location": "Germany",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/75f5fb3ddda052e46f1daed314ae69ab?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 366,
    "organizations": [
      "jackalope",
      "symfony",
      "doctrine",
      "phpcr",
      "simplethings",
      "zetacomponents"
    ],
    "contributions": 2710,
    "contributionsStreak": 27,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Irakli Gozalishvili",
    "login": "Gozala",
    "location": "San Francisco, USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/9289db62d5c34afb4f277a5215e05c83?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 169,
    "organizations": [
      "mozilla",
      "swank-js"
    ],
    "contributions": 2661,
    "contributionsStreak": 26,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Cristi Burcă",
    "login": "scribu",
    "location": "Cluj-Napoca, Romania",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/128c2cfc3632a7d1afea1ab16db2cb79?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 285,
    "organizations": [
      "AppThemes",
      "wp-cli"
    ],
    "contributions": 2626,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 13
  },
  {
    "name": "Jordi Boggiano",
    "login": "Seldaek",
    "location": "Zürich, Zurich, Switzerland",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/48b79d17cd8a911327cbd88c122b1efb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 436,
    "organizations": [
      "jackalope",
      "symfony",
      "doctrine",
      "symfony-cmf",
      "nelmio",
      "composer"
    ],
    "contributions": 2615,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Rico Sta. Cruz",
    "login": "rstacruz",
    "location": "Manila, Philippines",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/f8ec7f90daf8b1defb8e318d663c0f17?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 323,
    "organizations": [
      "nadarei"
    ],
    "contributions": 2579,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ask Solem Hoel",
    "login": "ask",
    "location": "London, UK",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/7e8b501f7f579c66ddac7e65cb7962b4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 389,
    "organizations": [
      "celery"
    ],
    "contributions": 2574,
    "contributionsStreak": 31,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "司徒正美",
    "login": "RubyLouvre",
    "location": "China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/801c5352beffc62cf91473a920fcd620?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 185,
    "organizations": [],
    "contributions": 2541,
    "contributionsStreak": 62,
    "contributionsCurrentStreak": 27
  },
  {
    "name": "Fedor Indutny",
    "login": "indutny",
    "location": "Russia",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2e93f6a5438c2187cabafde2dd91f07f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 389,
    "organizations": [
      "bem",
      "RebelVox",
      "flatiron",
      "Voxer"
    ],
    "contributions": 2527,
    "contributionsStreak": 74,
    "contributionsCurrentStreak": 7
  },
  {
    "name": "Joshua Timberman",
    "login": "jtimberman",
    "location": "Denver, CO",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/4eb6098fc8de5a5f37199c3668b11590?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 162,
    "organizations": [
      "opscode",
      "opscode-cookbooks"
    ],
    "contributions": 2517,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 10
  },
  {
    "name": "Kenneth Reitz",
    "login": "kennethreitz",
    "location": "Winchester, VA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/2eccc4005572c1e2b12a9c00580bc86f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [
      "heroku",
      "thechangelog",
      "DCPython",
      "epio",
      "diveintomark",
      "core",
      "kennethreitz-archive",
      "chaos-labs"
    ],
    "contributions": 2508,
    "contributionsStreak": 34,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "mattn",
    "login": "mattn",
    "location": "Osaka, Japan",
    "language": "VimL",
    "gravatar": "https://secure.gravatar.com/avatar/1ba93fd9e39ebf48777f217c38e768fd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 652,
    "organizations": [
      "vimjolts",
      "vimpr",
      "perl-users-jp",
      "termtter",
      "vim-jp",
      "blosxom-fanatics"
    ],
    "contributions": 2484,
    "contributionsStreak": 42,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Benjamin Arthur Lupton",
    "login": "balupton",
    "location": "Sydney, Australia",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/9400cb5aeb155ccec614652542fd274d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 288,
    "organizations": [
      "bevry",
      "docpad"
    ],
    "contributions": 2436,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Daniel Greenfeld",
    "login": "pydanny",
    "location": "Los Angeles, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/67e05420d4dd3492097aeb77f44f7867?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 397,
    "organizations": [
      "cartwheelweb",
      "cartwheel",
      "opencomparison",
      "consumerio",
      "scrnland"
    ],
    "contributions": 2383,
    "contributionsStreak": 80,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Derick Bailey",
    "login": "derickbailey",
    "location": "Waco, TX",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/e592bd1326b1e80188ed4c0bf26b9f75?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 432,
    "organizations": [
      "telerik",
      "balderdashy",
      "Albacore",
      "marionettejs",
      "kendo-labs"
    ],
    "contributions": 2376,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Durran Jordan",
    "login": "durran",
    "location": "Berlin, Deutschland",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/6f09262a13427532461b0b618d445b1e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 223,
    "organizations": [
      "soundcloud",
      "mongoid"
    ],
    "contributions": 2376,
    "contributionsStreak": 42,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Linus Torvalds",
    "login": "torvalds",
    "location": "Portland, OR",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/fb47627bc8c0bcdb36321edfbf02e916?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 9,
    "organizations": [],
    "contributions": 2361,
    "contributionsStreak": 29,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Will Bond",
    "login": "wbond",
    "location": "Newbury, MA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/47a9b062c664549d66905cdd10eade49?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 406,
    "organizations": [
      "veracross",
      "flourishlib",
      "SublimeLinter"
    ],
    "contributions": 2350,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "",
    "login": "gka",
    "location": "Germany",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/816428a875fff612e3cd5922e760db26?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 160,
    "organizations": [
      "okfn",
      "piwik",
      "kartograph",
      "openspending",
      "PyBossa",
      "datawrapper"
    ],
    "contributions": 2342,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Adam Vandenberg",
    "login": "adamv",
    "location": "Issaquah, WA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/7ea0cc75793eb2b1ada4abc953a41592?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 188,
    "organizations": [
      "textmate",
      "Homebrew"
    ],
    "contributions": 2341,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Anil Madhavapeddy",
    "login": "avsm",
    "location": "Cambridge, UK",
    "language": "OCaml",
    "gravatar": "https://secure.gravatar.com/avatar/a4fe81907d90ae55d4901645c895dc85?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [
      "mirage",
      "horizon-institute",
      "ashima",
      "xen-org",
      "CTSRD-TESLA",
      "ocaml",
      "Makespace"
    ],
    "contributions": 2338,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 8
  },
  {
    "name": "Scott González",
    "login": "scottgonzalez",
    "location": "York, PA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/35da631954825179143c86fa42a10954?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 275,
    "organizations": [
      "jquery",
      "appendto",
      "alohaeditor"
    ],
    "contributions": 2328,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Pippin Williamson",
    "login": "pippinsplugins",
    "location": "Lawrence, KS",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/edcaf8a5c1dc7c741113d772e767bfc2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 161,
    "organizations": [],
    "contributions": 2293,
    "contributionsStreak": 67,
    "contributionsCurrentStreak": 67
  },
  {
    "name": "Yusuke SUZUKI",
    "login": "Constellation",
    "location": "Yokohama, Japan",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/09b5a917b6ea8928e0d5bf8a432412fe?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 170,
    "organizations": [],
    "contributions": 2231,
    "contributionsStreak": 32,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Dustin Sallings",
    "login": "dustin",
    "location": "Santa Clara, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/995543cb35c3b92a2eb43275116815a7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 398,
    "organizations": [
      "membase",
      "memcached",
      "couchbase",
      "couchbaselabs"
    ],
    "contributions": 2184,
    "contributionsStreak": 38,
    "contributionsCurrentStreak": 26
  },
  {
    "name": "Mattt Thompson",
    "login": "mattt",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d29bb4d2d2f2ba2c2fb5a329e1e4651f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "heroku",
      "austinonrails",
      "austin-rb",
      "AFNetworking",
      "CocoaPods",
      "Induction",
      "415bike"
    ],
    "contributions": 2132,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 7
  },
  {
    "name": "Lloyd Hilaiel",
    "login": "lloyd",
    "location": "Denver, Colorado",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/d94bd45a3f4cca35b97ead2a04ddd832?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 235,
    "organizations": [
      "mozilla"
    ],
    "contributions": 2122,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "John Wiegley",
    "login": "jwiegley",
    "location": "Peoria, Illinois, USA",
    "language": "Emacs",
    "gravatar": "https://secure.gravatar.com/avatar/910fdec093deffebb92d7db019b5996a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 180,
    "organizations": [
      "boostpro",
      "boost-lib",
      "ledger"
    ],
    "contributions": 2106,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Charlie Somerville",
    "login": "charliesome",
    "location": "Melbourne, Australia",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/bcb6acc9d0d9bef99e033b36c3d32ca9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 183,
    "organizations": [
      "envato",
      "slash-lang"
    ],
    "contributions": 2105,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mark Story",
    "login": "markstory",
    "location": "Toronto, Ontario",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/669144d1ab0a861af5d54175371bc586?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 510,
    "organizations": [
      "cakephp"
    ],
    "contributions": 2034,
    "contributionsStreak": 34,
    "contributionsCurrentStreak": 18
  },
  {
    "name": "Demis Bellot",
    "login": "mythz",
    "location": "New York",
    "language": "ASP",
    "gravatar": "https://secure.gravatar.com/avatar/1257196ff88132651f94ac85f662c038?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 188,
    "organizations": [
      "ServiceStack",
      "StackExpress"
    ],
    "contributions": 1992,
    "contributionsStreak": 35,
    "contributionsCurrentStreak": 14
  },
  {
    "name": "Wes McKinney",
    "login": "wesm",
    "location": "New York, NY",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/2c08a3eed709a9d1a2654cea45aa466f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 249,
    "organizations": [
      "statsmodels",
      "pydata"
    ],
    "contributions": 1986,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Philip (flip) Kromer",
    "login": "mrflip",
    "location": "Austin, TX USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/99df54e24a1bed7d0edb6c51e7010d17?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 167,
    "organizations": [
      "infochimps",
      "postrank-labs",
      "infochimps-labs",
      "infochimps-away"
    ],
    "contributions": 1984,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Konstantin Kudryashov",
    "login": "everzet",
    "location": "Nantes, France",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/f742011db78e0c681ed4bc885bfee982?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 336,
    "organizations": [
      "KnpLabs",
      "phpspec",
      "FriendsOfSymfony",
      "Behat"
    ],
    "contributions": 1937,
    "contributionsStreak": 18,
    "contributionsCurrentStreak": 6
  },
  {
    "name": "Samuel Clay",
    "login": "samuelclay",
    "location": "San Francisco",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/623aae0b4533bc1db9ecc20fe9ea4912?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 342,
    "organizations": [
      "documentcloud"
    ],
    "contributions": 1906,
    "contributionsStreak": 25,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "James Burke",
    "login": "jrburke",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/00ac28bdce61e7db41be57fb3b7f3525?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 560,
    "organizations": [
      "umdjs",
      "volojs",
      "requirejs",
      "wavysandbox"
    ],
    "contributions": 1905,
    "contributionsStreak": 28,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Jeremy D. Miller",
    "login": "jeremydmiller",
    "location": "Austin, TX",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/83a17261fd4c9f537e63165df6ba57bb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [
      "DarthFubuMVC"
    ],
    "contributions": 1902,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Henri Bergius",
    "login": "bergie",
    "location": "Berlin, Germany",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/995f27ce7205a79c55d4e44223cd6de0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 193,
    "organizations": [
      "nemein",
      "midgardproject",
      "alohaeditor",
      "IKS",
      "substance",
      "wysiwhat"
    ],
    "contributions": 1898,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Jared Hanson",
    "login": "jaredhanson",
    "location": "Oakland, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/6c43616eef331e8ad08c7f90a51069a5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 190,
    "organizations": [
      "sifteo",
      "buspreneurs",
      "sailjs",
      "passport",
      "anchorjs",
      "rivetjs",
      "batonops"
    ],
    "contributions": 1886,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Phil Hagelberg",
    "login": "technomancy",
    "location": "Seattle, WA, USA",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/22788ec68b2aee512f8f4c5d8ae819ae?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 796,
    "organizations": [
      "heroku",
      "Seajure"
    ],
    "contributions": 1871,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Magnar Sveen",
    "login": "magnars",
    "location": "Norway",
    "language": "Emacs",
    "gravatar": "https://secure.gravatar.com/avatar/7c4453ccef88852995d6b191307aab27?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 224,
    "organizations": [
      "busterjs"
    ],
    "contributions": 1871,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Benoit Chesneau",
    "login": "benoitc",
    "location": "Creil, France",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/f04edc7cb2099745e5413c754d3d22f5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 336,
    "organizations": [
      "couchapp",
      "agner",
      "refuge"
    ],
    "contributions": 1848,
    "contributionsStreak": 22,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Addy Osmani",
    "login": "addyosmani",
    "location": "London, England",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/96270e4c3e5e9806cf7245475c00b275?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 3,
    "organizations": [
      "jquery",
      "h5bp",
      "umdjs",
      "yeoman",
      "TasteJS",
      "GoogleChrome",
      "html5rocks",
      "components",
      "jquery-boilerplate",
      "aurajs"
    ],
    "contributions": 1824,
    "contributionsStreak": 44,
    "contributionsCurrentStreak": 29
  },
  {
    "name": "Maxwell Salzberg",
    "login": "maxwell",
    "location": "94110",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/4ad02acf6f990530d0b6a66e89ba37de?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 176,
    "organizations": [
      "diaspora"
    ],
    "contributions": 1813,
    "contributionsStreak": 32,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "John MacFarlane",
    "login": "jgm",
    "location": "Berkeley, CA",
    "language": "Haskell",
    "gravatar": "https://secure.gravatar.com/avatar/88307384b9330a12c4a8f8d1c8af2d86?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 188,
    "organizations": [
      "markdown"
    ],
    "contributions": 1801,
    "contributionsStreak": 31,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dale  Harvey",
    "login": "daleharvey",
    "location": "Edinburgh, Scotland",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/030451d8cfc268d666bae9a7fe8d10ec?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [
      "couchapp",
      "agner",
      "mozilla-b2g"
    ],
    "contributions": 1770,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 6
  },
  {
    "name": "Max Ogden",
    "login": "maxogden",
    "location": "Oakland, CA (recruiters: please don't ever email me)",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/fcc9bbfe2a31c5a6225cc287ed7ae2a6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 720,
    "organizations": [
      "okfn",
      "codeforamerica",
      "opencivicdata",
      "open211",
      "Abacus",
      "substance",
      "burritomaps",
      "dataprotocols"
    ],
    "contributions": 1761,
    "contributionsStreak": 18,
    "contributionsCurrentStreak": 18
  },
  {
    "name": "Steve Losh",
    "login": "sjl",
    "location": "Rochester, NY",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/143487689572bcc7084c2b6aa1f48c46?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 691,
    "organizations": [
      "dwaiter",
      "stable",
      "roclisp",
      "pculture"
    ],
    "contributions": 1754,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "David Grudl",
    "login": "dg",
    "location": "",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/583bcf76466286a687368ef66a21e5cd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 202,
    "organizations": [
      "nette"
    ],
    "contributions": 1750,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ricardo Signes",
    "login": "rjbs",
    "location": "Bethlehem, PA, USA",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/7237fc86253f6d361649324b2d05e8d1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 190,
    "organizations": [],
    "contributions": 1723,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Tomás Pollak",
    "login": "tomas",
    "location": "Santiago, Chile",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b8bf37c87f11c353385bcb751de7eb80?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 185,
    "organizations": [
      "prey",
      "bootic"
    ],
    "contributions": 1720,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "John-David Dalton",
    "login": "jdalton",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/299a3d891ff1920b69c364d061007043?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 305,
    "organizations": [
      "bestiejs"
    ],
    "contributions": 1707,
    "contributionsStreak": 41,
    "contributionsCurrentStreak": 20
  },
  {
    "name": "Sindre Sorhus",
    "login": "sindresorhus",
    "location": "Norway",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 456,
    "organizations": [
      "twitter",
      "Modernizr",
      "editorconfig",
      "ot-crew",
      "gruntjs",
      "yeoman",
      "TasteJS",
      "IndigoUnited",
      "components",
      "aurajs"
    ],
    "contributions": 1701,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 11
  },
  {
    "name": "",
    "login": "ujihisa",
    "location": "Vancouver, Canada",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d9d0ceb387e3b6de5c4562af78e8a910?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 317,
    "organizations": [
      "vimjolts",
      "satsubatsu",
      "vim-jp",
      "van-clj"
    ],
    "contributions": 1700,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Konstantin Haase",
    "login": "rkh",
    "location": "Berlin",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/5c2b452f6eea4a6d84c105ebd971d2a4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 666,
    "organizations": [
      "sinatra",
      "rack",
      "rubinius",
      "redcar",
      "a-team",
      "travis-ci",
      "travis-repos",
      "travis-pro",
      "rubymonsters"
    ],
    "contributions": 1673,
    "contributionsStreak": 29,
    "contributionsCurrentStreak": 29
  },
  {
    "name": "Jeremy Ashkenas",
    "login": "jashkenas",
    "location": "NYC",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/32652ed5b8fbd2ecdb1c78e9ac567b4b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 3,
    "organizations": [
      "documentcloud",
      "NYTimes"
    ],
    "contributions": 1666,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Mike Bostock",
    "login": "mbostock",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "square",
      "NYTimes",
      "protovis",
      "d3"
    ],
    "contributions": 1663,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rick Waldron",
    "login": "rwldrn",
    "location": "Brooklyn, NY",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/36c697d974542aadaee06a0f39cb1437?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 446,
    "organizations": [
      "jquery",
      "bocoup",
      "Abacus",
      "oqulr",
      "jquerymobilecookbook"
    ],
    "contributions": 1659,
    "contributionsStreak": 34,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andrews Medina",
    "login": "andrewsmedina",
    "location": "Rio de Janeiro",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/b11eec4cb13d50de922479fcc5e2e803?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 202,
    "organizations": [
      "globocom",
      "cobrateam",
      "djangobrasil",
      "pythonbrasil"
    ],
    "contributions": 1655,
    "contributionsStreak": 24,
    "contributionsCurrentStreak": 24
  },
  {
    "name": "Tony Arcieri",
    "login": "tarcieri",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/4131d2f57a0db2a2b4d9a62bd389fd44?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 389,
    "organizations": [
      "rubinius",
      "agner",
      "celluloid",
      "cryptosphere"
    ],
    "contributions": 1642,
    "contributionsStreak": 25,
    "contributionsCurrentStreak": 17
  },
  {
    "name": "Paul Reioux",
    "login": "faux123",
    "location": "Los Angeles",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/0e5dc9f1c56a904cee51248caefcbd59?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 187,
    "organizations": [
      "Atrix-Dev-Team",
      "Galaxy-Nexus-Project"
    ],
    "contributions": 1638,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jeff Forcier",
    "login": "bitprophet",
    "location": "Lafayette, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/f1acc6318028fdba9874c77bc622a2fb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 178,
    "organizations": [
      "urbanairship",
      "fabric",
      "paramiko",
      "pyinvoke"
    ],
    "contributions": 1635,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Wesley Beary",
    "login": "geemus",
    "location": "Iowa City, IA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/e3191b55da8ada73c3e1ada98a63af6e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 241,
    "organizations": [
      "heroku",
      "icruby",
      "rubygems",
      "fog"
    ],
    "contributions": 1635,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Paul Betts",
    "login": "xpaulbettsx",
    "location": "San Francisco, CA",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/cba1c933e48e5ec70c68f640a530b969?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 244,
    "organizations": [
      "github",
      "libgit2",
      "ProgRx",
      "play"
    ],
    "contributions": 1633,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "R. Tyler Croy",
    "login": "rtyler",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d565139dbbafc06e7daf4826ca0f0228?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 160,
    "organizations": [
      "lookout",
      "jenkinsci"
    ],
    "contributions": 1629,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Philip Arndt",
    "login": "parndt",
    "location": "Christchurch, New Zealand",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/1d676127a3e4c0531e2d37dabef0a12d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 167,
    "organizations": [
      "wymeditor",
      "redcar",
      "refinery",
      "refinerycms",
      "DynamoMTL",
      "travis-ci"
    ],
    "contributions": 1622,
    "contributionsStreak": 56,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kana Natsuno",
    "login": "kana",
    "location": "Tokyo, Japan",
    "language": "VimL",
    "gravatar": "https://secure.gravatar.com/avatar/46bce3a0fb5eb6fa9abe3a395c3e03f7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 316,
    "organizations": [],
    "contributions": 1621,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Josh Abernathy",
    "login": "joshaber",
    "location": "Yellow Springs, OH",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/62e8c8bfaa8d755cab82accb48d335c8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 379,
    "organizations": [
      "github",
      "twitter",
      "libgit2",
      "ReactiveCocoa"
    ],
    "contributions": 1620,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Jörn Zaefferer",
    "login": "jzaefferer",
    "location": "Cologne, Germany",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a9d4d2558b560b0ef168ced0f6c5198c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 317,
    "organizations": [
      "jquery",
      "cologne-js"
    ],
    "contributions": 1612,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Ben Alman",
    "login": "cowboy",
    "location": "Boston, MA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/978a1a2a80394217a0e39c84f07a7c16?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "jquery",
      "bocoup",
      "gruntjs"
    ],
    "contributions": 1577,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Tim Caswell",
    "login": "creationix",
    "location": "Red Lick, TX, USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/c953ddd239707998340e1a6fbb3eeb46?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "ajaxorg",
      "senchalabs",
      "luvit",
      "c9",
      "nodebits",
      "webos-commons"
    ],
    "contributions": 1574,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Daniel Shiffman",
    "login": "shiffman",
    "location": "",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/b493403bb70b0df15582683a914d3f35?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 327,
    "organizations": [
      "processing",
      "ITPNYU"
    ],
    "contributions": 1564,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Marijn Haverbeke",
    "login": "marijnh",
    "location": "Berlin",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f6a35c85d26694e26bb92ea4d4262c77?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 354,
    "organizations": [
      "OpenTechSchool"
    ],
    "contributions": 1560,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 6
  },
  {
    "name": "Eloy Durán",
    "login": "alloy",
    "location": "Amsterdam, the Netherlands",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/424a9ce662b059c35063b405e160461d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 270,
    "organizations": [
      "Fingertips",
      "MacRuby",
      "CocoaPods",
      "HipByte"
    ],
    "contributions": 1559,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Peter Steinberger",
    "login": "steipete",
    "location": "Vienna, Austria",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/832ece085bfe2c7c5b0ed6be62d7e675?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 822,
    "organizations": [
      "foundationkit",
      "CocoaPods",
      "PSPDFKit"
    ],
    "contributions": 1552,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Gregory Brown",
    "login": "sandal",
    "location": "New Haven, CT",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/31e038e4e9330f6c75ccfd1fca8010ee?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 263,
    "organizations": [
      "elm-city-craftworks",
      "documenting-ruby",
      "prawnpdf",
      "mendicant"
    ],
    "contributions": 1544,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Michael Aufreiter",
    "login": "michael",
    "location": "Linz, Austria",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/d5a959d7e57daa5433fcb9f8da40be4b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 354,
    "organizations": [
      "okfn",
      "quasipartikel",
      "LucidTechnics",
      "substance",
      "prose"
    ],
    "contributions": 1539,
    "contributionsStreak": 30,
    "contributionsCurrentStreak": 6
  },
  {
    "name": "Joshua Peek",
    "login": "josh",
    "location": "Chicago, IL",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/bbe5dc8dcf248706525ab76f46185520?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 946,
    "organizations": [
      "github",
      "37signals",
      "rack"
    ],
    "contributions": 1538,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "David Dollar",
    "login": "ddollar",
    "location": "Atlanta, GA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d7210ed93db93fbfa3de0c2215d83b9a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 278,
    "organizations": [
      "heroku",
      "rubygems",
      "pirateradio"
    ],
    "contributions": 1531,
    "contributionsStreak": 26,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Astro",
    "login": "astro",
    "location": "Dresden, Germany",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/0120a25badc6b1e50f6890527dca7042?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 272,
    "organizations": [
      "nko",
      "c3d2",
      "nko2"
    ],
    "contributions": 1529,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Damien Elmes",
    "login": "dae",
    "location": "Japan",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/5d129f124fb1b4c654b185f180afb51e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 246,
    "organizations": [],
    "contributions": 1528,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jake Wharton",
    "login": "JakeWharton",
    "location": "San Francisco, CA",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/e68309f117985270285ade8082f4877d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "square"
    ],
    "contributions": 1528,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Amos Wenger",
    "login": "nddrylliog",
    "location": "",
    "language": "ooc",
    "gravatar": "https://secure.gravatar.com/avatar/d2bb443841ad7e4890f1a8fccade782e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 174,
    "organizations": [
      "ooc-lang"
    ],
    "contributions": 1525,
    "contributionsStreak": 18,
    "contributionsCurrentStreak": 7
  },
  {
    "name": "Rafael Mendonça França",
    "login": "rafaelfranca",
    "location": "São Paulo, Brazil",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/0525b332aafb83307b32d9747a93de03?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 213,
    "organizations": [
      "rails",
      "plataformatec",
      "elixir-lang",
      "frandino",
      "rails-api"
    ],
    "contributions": 1521,
    "contributionsStreak": 38,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Randall Degges",
    "login": "rdegges",
    "location": "Bakersfield",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/34a28a7454ad43e6d79e1bb1dc046ccf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 191,
    "organizations": [
      "telephonyresearch",
      "POSSA",
      "heapify",
      "chaos-labs",
      "postgression"
    ],
    "contributions": 1520,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "James Coglan",
    "login": "jcoglan",
    "location": "London, UK",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/81eec7f220df03d5b8cadf106a2c14c5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 364,
    "organizations": [
      "songkick",
      "unhosted",
      "RemoteStorage"
    ],
    "contributions": 1516,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Richard Huang",
    "login": "flyerhzm",
    "location": "Shanghai, China",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/13c60e2a5806406b537daa542d3495da?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 420,
    "organizations": [
      "railsbp"
    ],
    "contributions": 1497,
    "contributionsStreak": 31,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Remy Sharp",
    "login": "remy",
    "location": "Brighton, UK",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/c8b387c489181844b3ffc704fadc0f14?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "t2w",
      "xui",
      "leftlogic"
    ],
    "contributions": 1477,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Mitchell Hashimoto",
    "login": "mitchellh",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/2828f28fb012308a7786eee83b8293c5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 385,
    "organizations": [
      "rubygems",
      "hashicorp",
      "cfengine",
      "ircrelay"
    ],
    "contributions": 1473,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Yurii Rashkovskii",
    "login": "yrashk",
    "location": "Vancouver, BC, Canada",
    "language": "Erlang",
    "gravatar": "https://secure.gravatar.com/avatar/ae2b294e24fd2e472bfca45ab19050c5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 205,
    "organizations": [
      "zeromq",
      "beamjs",
      "oftn",
      "agner",
      "spawnfest",
      "ehttpi",
      "zenview",
      "krarup",
      "elixir-lang",
      "Spawnfest2012"
    ],
    "contributions": 1471,
    "contributionsStreak": 41,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Nicolas Perriault",
    "login": "n1k0",
    "location": "Montpellier, France",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/c0240424425f5ca75071b478c0dc29b9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 265,
    "organizations": [
      "akei",
      "scopyleft",
      "casperjs"
    ],
    "contributions": 1464,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 6
  },
  {
    "name": "Jeremy Kahn",
    "login": "jeremyckahn",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/53bce92a03ee94d3d9011cde3033f2c8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [],
    "contributions": 1462,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Travis Swicegood",
    "login": "tswicegood",
    "location": "Austin, TX",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/9e37f9dc53378c04bab413d352994b79?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 219,
    "organizations": [
      "domain51",
      "texastribune",
      "nko",
      "armstrong",
      "awpug",
      "ATXHackNight",
      "python"
    ],
    "contributions": 1449,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Yuvi Panda",
    "login": "yuvipanda",
    "location": "Chennai",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/5cb11c6d11db3f8e8e302e32ee0897c9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 227,
    "organizations": [
      "publictransit-in"
    ],
    "contributions": 1435,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Mr.doob",
    "login": "mrdoob",
    "location": "Barcelona, Spain",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a00211a1e1aa4fe920302e7b76da0d91?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [
      "dataarts",
      "xplsv"
    ],
    "contributions": 1434,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jasper Van der Jeugt",
    "login": "jaspervdj",
    "location": "Lokeren & Ghent, Belgium",
    "language": "Haskell",
    "gravatar": "https://secure.gravatar.com/avatar/e7300da9ebd3fecfdf53adb4e4ee2002?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 166,
    "organizations": [
      "snapframework",
      "ZeusWPI",
      "dcpu16",
      "geohub"
    ],
    "contributions": 1429,
    "contributionsStreak": 26,
    "contributionsCurrentStreak": 19
  },
  {
    "name": "Bryan O'Sullivan",
    "login": "bos",
    "location": "",
    "language": "Haskell",
    "gravatar": "https://secure.gravatar.com/avatar/76d19f57f5d4c2d36f1f417c5ac5beae?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 495,
    "organizations": [
      "haskell",
      "mailrank"
    ],
    "contributions": 1428,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "hadley wickham",
    "login": "hadley",
    "location": "Houston, TX",
    "language": "R",
    "gravatar": "https://secure.gravatar.com/avatar/7ba164f40a50bc23dbb2aa825fb7bc16?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 665,
    "organizations": [
      "ggobi",
      "rstudio",
      "rstats",
      "ropensci",
      "rjournal"
    ],
    "contributions": 1423,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Anthony Grimes",
    "login": "Raynes",
    "location": "Eldridge, AL",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/54222b6321f0504e0a312c24e97adfc1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 198,
    "organizations": [
      "geni",
      "flatland",
      "tenthbit",
      "breakpoint-eval",
      "noir-clojure"
    ],
    "contributions": 1414,
    "contributionsStreak": 35,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Mark Otto",
    "login": "mdo",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/bc4ab438f7a4ce1c406aadc688427f2c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "github",
      "twitter",
      "colossal"
    ],
    "contributions": 1407,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Guillermo Rauch",
    "login": "guille",
    "location": "SF",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/486e20e16ef676a02ac0299d2f92b813?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "mootools",
      "LearnBoost",
      "component",
      "jsconf"
    ],
    "contributions": 1379,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Aaron Straup Cope",
    "login": "straup",
    "location": "New York City",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/07e62c1b087303ddb458ac6ed57d72ea?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 183,
    "organizations": [
      "cooperhewitt",
      "exflickr",
      "Citytracking"
    ],
    "contributions": 1372,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 8
  },
  {
    "name": "Shay Banon",
    "login": "kimchy",
    "location": "",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/fd44bb3c96e34e000c5453a0078900d6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 227,
    "organizations": [
      "elasticsearch"
    ],
    "contributions": 1361,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 9
  },
  {
    "name": "Ben Noordhuis",
    "login": "bnoordhuis",
    "location": "Gouda, the Netherlands",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/3d43d9038ab645ecb2e3a1df2951d30a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 263,
    "organizations": [
      "ajaxorg",
      "Jasig",
      "pagespeed"
    ],
    "contributions": 1357,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Christophe Coevoet",
    "login": "stof",
    "location": "Paris",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/7894bbdf1c05b18a1444ad8c76c9d583?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 438,
    "organizations": [
      "symfony",
      "KnpLabs",
      "doctrine",
      "Yrch",
      "FriendsOfSymfony",
      "Behat",
      "Incenteev",
      "Cilex"
    ],
    "contributions": 1348,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "",
    "login": "graemerocher",
    "location": "",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/8a8599a62cdcb121904ab0015afc4569?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 178,
    "organizations": [
      "grails",
      "grails-plugins",
      "gpc",
      "SpringSource",
      "grails-samples"
    ],
    "contributions": 1344,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Jakub Vrána",
    "login": "vrana",
    "location": "",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/b8a7eece5a46b9ed2a1a8025a78c4fb6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 218,
    "organizations": [
      "facebook",
      "nette"
    ],
    "contributions": 1338,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Derick Rethans",
    "login": "derickr",
    "location": "London, England",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/2ef995275795830995d4241368713176?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 179,
    "organizations": [
      "10gen",
      "mongodb",
      "zetacomponents"
    ],
    "contributions": 1313,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yukihiro \"Matz\" Matsumoto",
    "login": "matz",
    "location": "Matsue, Japan",
    "language": "",
    "gravatar": "https://secure.gravatar.com/avatar/0ec4920185b657a03edf01fff96b4e9b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "mruby"
    ],
    "contributions": 1311,
    "contributionsStreak": 51,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Antonin Hildebrand",
    "login": "darwin",
    "location": "Prague, Czech Republic",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/79322c2ed80c2d722de8c9d0475198a0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 375,
    "organizations": [
      "binaryage"
    ],
    "contributions": 1307,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mark McGranaghan",
    "login": "mmcgrana",
    "location": "San Francisco, CA",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/3cd8add6bfd84c56eb92ab22a22a6de2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 343,
    "organizations": [
      "heroku"
    ],
    "contributions": 1300,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jackson Tian",
    "login": "JacksonTian",
    "location": "Hangzhou, China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/31b9dfd78b6aa9cefb68129ea21af3bf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 513,
    "organizations": [
      "TBEDP",
      "cnodejs"
    ],
    "contributions": 1283,
    "contributionsStreak": 26,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Jeff Casimir",
    "login": "jcasimir",
    "location": "Washington, DC",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/039547def8be2e50f7dc4a1beb9fecaa?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 164,
    "organizations": [
      "JumpstartLab",
      "drapergem"
    ],
    "contributions": 1280,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "lestrrat",
    "login": "lestrrat",
    "location": "Tokyo, Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/2809d563da3d77aef4d450c60d9701bf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 199,
    "organizations": [
      "zeromq",
      "xslate",
      "perldoc-jp",
      "stf-storage"
    ],
    "contributions": 1280,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ryan Weaver",
    "login": "weaverryan",
    "location": "Nashville, TN",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/681e6d4d4cf91760e5e1d8ac9d6d7fc4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 266,
    "organizations": [
      "symfony",
      "KnpLabs",
      "evolvingprocess",
      "Behat"
    ],
    "contributions": 1278,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nadim Kobeissi",
    "login": "kaepora",
    "location": "Montréal, QC",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/55f5c1a4c5aa4b7f9bbfb5974a1a6544?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [
      "cryptocat"
    ],
    "contributions": 1276,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Thomas Davis",
    "login": "thomasdavis",
    "location": "Brisbane, Australia",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/cff733cf90823edd218a834980379c61?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 226,
    "organizations": [
      "cdnjs",
      "umdjs",
      "apiengine"
    ],
    "contributions": 1270,
    "contributionsStreak": 27,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Steve Klabnik",
    "login": "steveklabnik",
    "location": "Hollywood, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/233c279c012ebac792aaa805f966cbc7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 759,
    "organizations": [
      "rails",
      "sinatra",
      "xomboverlord",
      "shoes",
      "thechangelog",
      "hacketyhack",
      "rubinius",
      "osgcc",
      "arcturo",
      "travis-ci",
      "homesteading",
      "JumpstartLab",
      "documenting-ruby",
      "Farmhouse",
      "drapergem"
    ],
    "contributions": 1265,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Christian Amor Kvalheim",
    "login": "christkv",
    "location": "Barcelona, Spain",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a132807512f576d8b2394a7a8b0379a0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [
      "10gen",
      "mongodb"
    ],
    "contributions": 1263,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Ricardo Quesada",
    "login": "ricardoquesada",
    "location": "San Francisco, CA. USA",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/60f960f36508d02de4c5e0d9a80467ed?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 189,
    "organizations": [],
    "contributions": 1259,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Evan Coury",
    "login": "EvanDotPro",
    "location": "Gilbert, Arizona",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/5fac6a9353bbc9235568e920cdd400f6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 244,
    "organizations": [
      "doctrine",
      "firal",
      "zendframework",
      "EzTexting",
      "UberGallery",
      "mtd",
      "Gym",
      "PHPBenelux",
      "speckcommerce",
      "ZF-Commons",
      "relationships",
      "vim-php",
      "Roave"
    ],
    "contributions": 1256,
    "contributionsStreak": 41,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nathan Marz",
    "login": "nathanmarz",
    "location": "San Francisco",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/dcb940360e18d06ae54ad76f972c6b7f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 954,
    "organizations": [
      "Cascading"
    ],
    "contributions": 1254,
    "contributionsStreak": 25,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mickael Daniel",
    "login": "mklabs",
    "location": "Grenoble, France",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a23615915f0baf096b94cc9df93fc327?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 186,
    "organizations": [
      "lyonjs",
      "h5bp",
      "yeoman"
    ],
    "contributions": 1247,
    "contributionsStreak": 27,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rebecca Murphey",
    "login": "rmurphey",
    "location": "Durham, NC",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/0177cdce6af15e10db15b6bf5dc4e0b0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "bocoup",
      "ot-crew"
    ],
    "contributions": 1246,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kris Kowal",
    "login": "kriskowal",
    "location": "Pasadena, CA, USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/3c6753e1e589735a0a3a6d417d9553cd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 223,
    "organizations": [
      "montagejs",
      "promises-aplus"
    ],
    "contributions": 1229,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Peter Wagenet",
    "login": "wagenet",
    "location": "Orange County, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/88a1521be4c8a667dbb7d61e68cc0668?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 187,
    "organizations": [
      "carlhuda",
      "getbpm",
      "bpm",
      "emberjs",
      "emberjs-addons",
      "tildeio",
      "CrowdStrike"
    ],
    "contributions": 1227,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Shawn M Moore",
    "login": "sartak",
    "location": "Somerville, MA",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/c372e6ad465af8b81a28cefe69d2c5c7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 177,
    "organizations": [
      "iinteractive",
      "moose",
      "PerlGameDev",
      "MoeOrganization"
    ],
    "contributions": 1224,
    "contributionsStreak": 165,
    "contributionsCurrentStreak": 165
  },
  {
    "name": "Christian Johansen",
    "login": "cjohansen",
    "location": "Oslo",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/6e7ddb6784d284c385f3f0f307ebf90d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 189,
    "organizations": [
      "busterjs"
    ],
    "contributions": 1220,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "John Mettraux",
    "login": "jmettraux",
    "location": "Hiroshima",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/8d96626e52beb1ff90f57a8e189e1e6f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 215,
    "organizations": [
      "ruote",
      "tlug",
      "hiroshimarb"
    ],
    "contributions": 1219,
    "contributionsStreak": 34,
    "contributionsCurrentStreak": 19
  },
  {
    "name": "Carl Meyer",
    "login": "carljm",
    "location": "Rapid City, SD",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/b1f36e554be0e1ae19f9a74d6ece9107?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 218,
    "organizations": [
      "django",
      "mozilla",
      "oddbird"
    ],
    "contributions": 1218,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Johannes",
    "login": "schmittjoh",
    "location": "",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/96a13b96ece78afe3c2dc841edc4a8f5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 356,
    "organizations": [
      "symfony",
      "doctrine",
      "FriendsOfSymfony",
      "Behat",
      "aopalliance",
      "scrutinizer-ci"
    ],
    "contributions": 1214,
    "contributionsStreak": 22,
    "contributionsCurrentStreak": 13
  },
  {
    "name": "Xinchen Hui",
    "login": "laruence",
    "location": "China",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/888b213b936c90cfb88f0dd7cd76f8db?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 495,
    "organizations": [
      "msgpack"
    ],
    "contributions": 1213,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andrew Nesbitt",
    "login": "andrew",
    "location": "Bath, UK",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/8ddbf811da78bb0daeeb3cacd7cf743f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 161,
    "organizations": [
      "railsrumble",
      "forward"
    ],
    "contributions": 1203,
    "contributionsStreak": 24,
    "contributionsCurrentStreak": 24
  },
  {
    "name": "Sam Soffes",
    "login": "soffes",
    "location": "Louisville",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/eb02c1cdbc2e1b474051b5c622e1d539?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "thechangelog",
      "nothingmagical",
      "refactortv"
    ],
    "contributions": 1203,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Tomas Doran",
    "login": "bobtfish",
    "location": "London",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/6aef71220772d356d704e66184a478b9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 160,
    "organizations": [
      "youdevise",
      "suretec",
      "plack",
      "MoeOrganization"
    ],
    "contributions": 1201,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Jose Diaz-Gonzalez",
    "login": "josegonzalez",
    "location": "New York, NY",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/b069294dc48acd6c4cfe8b98fc467c89?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 382,
    "organizations": [
      "citrusbyte",
      "cakephp",
      "UnionOfRAD",
      "seatgeek",
      "OctoBear"
    ],
    "contributions": 1199,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Piotr Sarnacki",
    "login": "drogus",
    "location": "Warsaw",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/582034b63279abeaa8e76acf12f5ee30?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 229,
    "organizations": [
      "rails",
      "travis-ci",
      "lupitt",
      "stoliczku"
    ],
    "contributions": 1196,
    "contributionsStreak": 61,
    "contributionsCurrentStreak": 9
  },
  {
    "name": "Douglas Campos",
    "login": "qmx",
    "location": "Sao Paulo, Brazil",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/684b4bfe97a40454db104abcb601e375?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 157,
    "organizations": [
      "guru-sp",
      "jruby",
      "caelum",
      "dynjs",
      "aerogear"
    ],
    "contributions": 1187,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rob \"Hurricane\" Ashton",
    "login": "robashton",
    "location": "London",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b6a6693f03003f7ab0f9b0882e9c2dde?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 158,
    "organizations": [
      "WindowsAzure"
    ],
    "contributions": 1185,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 6
  },
  {
    "name": "fengmk2",
    "login": "fengmk2",
    "location": "Hangzhou, China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/95b9d41231617a05ced5604d242c9670?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 390,
    "organizations": [
      "TBEDP",
      "cnodejs",
      "kissjs"
    ],
    "contributions": 1184,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tim Branyen",
    "login": "tbranyen",
    "location": "Boston, MA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/21dbcdbf46f8ee3774c1b9b3efadfa9e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 416,
    "organizations": [
      "h5bp",
      "backbone-boilerplate",
      "gruntjs",
      "matchbox",
      "backstopmedia"
    ],
    "contributions": 1184,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Ingy döt Net",
    "login": "ingydotnet",
    "location": "Seattle",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/8b3bd89d842c858bea279637e34b4382?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 237,
    "organizations": [
      "perl6",
      "yaml",
      "ActiveState",
      "acmeism",
      "Cloud-Apps",
      "cloudfreestyle",
      "sharpsaw",
      "perl11",
      "o-fun"
    ],
    "contributions": 1179,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Phil Sturgeon",
    "login": "philsturgeon",
    "location": "Williamsburg, New York",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/14df293d6c5cd6f05996dfc606a6a951?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "pyrocms",
      "happyninjas",
      "kapture"
    ],
    "contributions": 1175,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Fogus",
    "login": "fogus",
    "location": "DC",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/5aa24eee4238e1e964210ed447e8dc91?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 381,
    "organizations": [
      "clojure"
    ],
    "contributions": 1174,
    "contributionsStreak": 24,
    "contributionsCurrentStreak": 24
  },
  {
    "name": "Charles Oliver Nutter",
    "login": "headius",
    "location": "",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/f1d37642fdaa1662ff46e4c65731e9ab?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 435,
    "organizations": [
      "jruby",
      "jenkinsci",
      "ruboto",
      "rubinius",
      "redcar",
      "mirah",
      "jnr",
      "openjdk-mirror"
    ],
    "contributions": 1173,
    "contributionsStreak": 25,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Aslak Hellesøy",
    "login": "aslakhellesoy",
    "location": "London, UK",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/0be0e4aa42aacd9a8a95c792de273ca7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 478,
    "organizations": [
      "cucumber",
      "webbit",
      "speakerconf"
    ],
    "contributions": 1169,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Aaron Patterson",
    "login": "tenderlove",
    "location": "Seattle",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/f29327647a9cff5c69618bae420792ea?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [
      "rails",
      "rack",
      "seattlerb",
      "ruby",
      "rubinius",
      "att-innovate",
      "sparklemotion"
    ],
    "contributions": 1162,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Sean Cribbs",
    "login": "seancribbs",
    "location": "DeKalb, IL",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ce461b57b6a1f65ce5b6cc1c124673e3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 204,
    "organizations": [
      "radiant",
      "basho"
    ],
    "contributions": 1157,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Charlie Robbins",
    "login": "indexzero",
    "location": "NYC",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/d43e8ea63b61e7669ded5b9d3c2e980f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 813,
    "organizations": [
      "nodejitsu",
      "nko",
      "nodeapps",
      "flatiron",
      "nodedocs",
      "EmpireJS"
    ],
    "contributions": 1157,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Felix Geisendörfer",
    "login": "felixge",
    "location": "Berlin, Germany",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/23968f0ca75b13463d2db5343e5c2096?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 980,
    "organizations": [
      "transloadit",
      "nodecopter"
    ],
    "contributions": 1156,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "José Lorenzo Rodríguez",
    "login": "lorenzo",
    "location": "Caracas, Venezuela",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/5b883d5e78e97a9cf371e0c9b458dc72?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 210,
    "organizations": [
      "cakephp",
      "CakePHP-Courses"
    ],
    "contributions": 1153,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Josh Suereth",
    "login": "jsuereth",
    "location": "Pittsburgh, PA",
    "language": "Scala",
    "gravatar": "https://secure.gravatar.com/avatar/5ed293320c06809a24812f56861201ad?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 168,
    "organizations": [
      "scala",
      "typesafehub",
      "sbt"
    ],
    "contributions": 1136,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "saber",
    "login": "saberma",
    "location": "ShenZhen China",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/871c4ba6d25169779cee977e04b2f0c3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 254,
    "organizations": [],
    "contributions": 1130,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "",
    "login": "Marak",
    "location": "Goa, India",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/7972c616246ab60df7cbc374d4ef9d35?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [],
    "contributions": 1128,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Lance Pollard",
    "login": "viatropos",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a2beb162438985ede0a49b240aa17ca1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [
      "guard"
    ],
    "contributions": 1127,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dan Kubb",
    "login": "dkubb",
    "location": "Mission, BC, Canada",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/7c92608db4acf7a44337670eff6ce5bc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 255,
    "organizations": [
      "merb",
      "datamapper"
    ],
    "contributions": 1125,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mark Harrah",
    "login": "harrah",
    "location": "Boston, MA",
    "language": "Scala",
    "gravatar": "https://secure.gravatar.com/avatar/c9e8de1be98d66ac0eb22fd7473aa263?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 181,
    "organizations": [
      "typesafehub",
      "sbt"
    ],
    "contributions": 1123,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Jeff Verkoeyen",
    "login": "jverkoey",
    "location": "San Francisco, CA",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/f3c8603c353afa79b9f1c77f35efd566?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 521,
    "organizations": [
      "facebook",
      "Three20",
      "7CubedProject",
      "uWaterloo",
      "nebulus",
      "nimbusios",
      "NimbusKit",
      "ThePixelHeart"
    ],
    "contributions": 1113,
    "contributionsStreak": 22,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Pedro Teixeira",
    "login": "pgte",
    "location": "Portugal",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/50c758737b034075682a7f1e4fddab44?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 340,
    "organizations": [
      "flatiron",
      "nodedocs",
      "expensecat",
      "thenodefirm",
      "nodeconfeu",
      "R42"
    ],
    "contributions": 1102,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "tyru",
    "login": "tyru",
    "location": "",
    "language": "VimL",
    "gravatar": "https://secure.gravatar.com/avatar/5fdf83c448b8503add52517c7de0e3cc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 262,
    "organizations": [
      "vimjolts",
      "vimpr",
      "vim-jp"
    ],
    "contributions": 1099,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Allan Odgaard",
    "login": "sorbits",
    "location": "Denmark",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/0077b96c5297042f41beb88042bf7232?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 310,
    "organizations": [
      "textmate",
      "avian"
    ],
    "contributions": 1098,
    "contributionsStreak": 30,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Jannis Leidel",
    "login": "jezdez",
    "location": "Berlin, Germany",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/cf3595fa166bfb4106211e1697f39f94?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 740,
    "organizations": [
      "pinax",
      "django",
      "django-extensions",
      "django-de",
      "ennio",
      "pypa",
      "Gidsy",
      "django-debug-toolbar"
    ],
    "contributions": 1095,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "James Ward",
    "login": "jamesward",
    "location": "",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/2a5d2e19906383b1a574f4d48d634d47?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 273,
    "organizations": [
      "MixingLoom",
      "typesafehub",
      "JavaPosseRoundup",
      "webjars"
    ],
    "contributions": 1094,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Kyle McDonald",
    "login": "kylemcdonald",
    "location": "Brooklyn, New York",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/e5d92e48e175112e9df112e2418bd528?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 489,
    "organizations": [
      "fatlab",
      "scratchml",
      "ITPNYU"
    ],
    "contributions": 1091,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Chris Banes",
    "login": "chrisbanes",
    "location": "London, UK",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/241e12c0524fe6344898cc974a2e8426?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 292,
    "organizations": [
      "hmark"
    ],
    "contributions": 1090,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Olivier Grisel",
    "login": "ogrisel",
    "location": "Paris, France",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/aee56554ec30edfd680e1c937ed4e54d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 182,
    "organizations": [
      "scikit-learn",
      "nuxeo",
      "compatible",
      "pydata",
      "sup-e-educ"
    ],
    "contributions": 1088,
    "contributionsStreak": 18,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Naitik Shah",
    "login": "daaku",
    "location": "",
    "language": "Go",
    "gravatar": "https://secure.gravatar.com/avatar/162ba763482bf53ed1d9a4589fad393f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 194,
    "organizations": [
      "facebook"
    ],
    "contributions": 1083,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ariya Hidayat",
    "login": "ariya",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/0284b8950e0f4a57bcc092d4dbb98d97?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 333,
    "organizations": [
      "extjs",
      "senchalabs"
    ],
    "contributions": 1078,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James George",
    "login": "obviousjim",
    "location": "Brooklyn, New York",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/3bcf955bca297a223e9daa1f997bfad5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 191,
    "organizations": [
      "labatrockwell",
      "Flightphase"
    ],
    "contributions": 1068,
    "contributionsStreak": 25,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Paul Irish",
    "login": "paulirish",
    "location": "San Francisco",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/ffe68d6f71b225f7661d33f2a8908281?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 6,
    "organizations": [
      "jquery",
      "Modernizr",
      "diveintomark",
      "h5bp",
      "jshint",
      "ot-crew",
      "yeoman",
      "GoogleChrome",
      "html5rocks",
      "components"
    ],
    "contributions": 1066,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Xueqiao Xu",
    "login": "qiao",
    "location": "Guangzhou, China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/af22ed6bb242a2a308ea74414a14e9ca?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 270,
    "organizations": [
      "sysu"
    ],
    "contributions": 1062,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Carlos Antonio da Silva",
    "login": "carlosantoniodasilva",
    "location": "Rio do Sul, Santa Catarina, Brasil",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/77237b97a465ae5a293ad323b7296837?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 232,
    "organizations": [
      "rails",
      "plataformatec",
      "gmate",
      "mendicant-original",
      "gurusc",
      "rails-api"
    ],
    "contributions": 1059,
    "contributionsStreak": 35,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "James Tauber",
    "login": "jtauber",
    "location": "Burlington, MA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/f2d9cd49c78a2f6151175c7c651a2f16?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 442,
    "organizations": [
      "pinax",
      "django",
      "eldarion",
      "openscriptures",
      "morphgnt",
      "journeymanofsome",
      "ainulindale"
    ],
    "contributions": 1057,
    "contributionsStreak": 41,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Wynn Netherland",
    "login": "pengwynn",
    "location": "TX",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/7e19cd5486b5d6dc1ef90e671ba52ae0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 548,
    "organizations": [
      "github",
      "thechangelog",
      "thesassway",
      "dotfiles"
    ],
    "contributions": 1055,
    "contributionsStreak": 48,
    "contributionsCurrentStreak": 48
  },
  {
    "name": "Salvatore Sanfilippo",
    "login": "antirez",
    "location": "Campobello di Licata, Sicily, Italy",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/7379345fed54f2447537068ed1c2e440?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "redis"
    ],
    "contributions": 1055,
    "contributionsStreak": 32,
    "contributionsCurrentStreak": 6
  },
  {
    "name": "John Myles White",
    "login": "johnmyleswhite",
    "location": "Brooklyn, NY",
    "language": "R",
    "gravatar": "https://secure.gravatar.com/avatar/b6b704f26ffe0d91e6317a1c069d4303?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 255,
    "organizations": [
      "JuliaLang"
    ],
    "contributions": 1053,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Richard Schneeman",
    "login": "schneems",
    "location": "Austin, Tx",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/db953d125f5cc49756edb6149f1b813e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 207,
    "organizations": [
      "heroku",
      "austinonrails",
      "gowalla",
      "codetriage"
    ],
    "contributions": 1048,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Koushik Dutta",
    "login": "koush",
    "location": "Seattle, WA",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/397a38699baa96fa9cf4efab2d257442?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 908,
    "organizations": [
      "CyanogenMod",
      "deployfu",
      "teamhacksung",
      "ClockworkMod"
    ],
    "contributions": 1047,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Sebastian Bergmann",
    "login": "sebastianbergmann",
    "location": "Siegburg, Germany",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/1f01f6b92d3be09868d1b65fca2d2fc1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "thePHPcc"
    ],
    "contributions": 1044,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Álvaro Justen",
    "login": "turicas",
    "location": "Niterói, Rio de Janeiro - Brasil",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/2139983a9baaabded6905b2970a036cb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 208,
    "organizations": [
      "horaextra",
      "dojorio",
      "ArduInRio",
      "pythonbrasil",
      "EMAp",
      "NAMD"
    ],
    "contributions": 1033,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "SHIBATA Hiroshi",
    "login": "hsbt",
    "location": "Japan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/eabad423977cfc6873b8f5df62b848a6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 215,
    "organizations": [
      "jenkinsci",
      "tdiary",
      "hiki",
      "asakusarb",
      "paperboy-sqale",
      "paperboy-fanic",
      "paperboy-all",
      "paperboy-petit",
      "paperboy-30days",
      "paperboy-minne",
      "railsgirls-jp"
    ],
    "contributions": 1023,
    "contributionsStreak": 27,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Christopher Jeffrey",
    "login": "chjj",
    "location": "MN",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/96160627de1a1c142b3b5f1058dff07f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [
      "nodejitsu",
      "flatiron"
    ],
    "contributions": 1006,
    "contributionsStreak": 34,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "John Nunemaker",
    "login": "jnunemaker",
    "location": "South Bend, IN, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/3783e88128f2773aa70a8f925d5f795d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "github",
      "orderedlistinc"
    ],
    "contributions": 1004,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Brian Noguchi",
    "login": "bnoguchi",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/80a7ef9f365cf269bc614ff8f4eaac06?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 260,
    "organizations": [
      "codeparty"
    ],
    "contributions": 1004,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mislav Marohnić",
    "login": "mislav",
    "location": "",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/8f93a872e399bc1353cc8d4e791d5401?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 908,
    "organizations": [
      "rails",
      "radiant",
      "printbox"
    ],
    "contributions": 1002,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "David DeSandro",
    "login": "desandro",
    "location": "Brooklyn, NY",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/08452845db61b0edbb0c3c16d9599770?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "twitter",
      "metafizzy",
      "h5bp"
    ],
    "contributions": 995,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andrey “A.I” Sitnik",
    "login": "ai",
    "location": "Saint Petersburg, Russia",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/cd32d17c95d3bfb352504c36462b98bd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [
      "evilmartians",
      "gmate",
      "evolu"
    ],
    "contributions": 993,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Coda Hale",
    "login": "codahale",
    "location": "Berkeley, CA",
    "language": "Scala",
    "gravatar": "https://secure.gravatar.com/avatar/87206f3bf53d403e16ec023c56e904c5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 655,
    "organizations": [
      "yammer"
    ],
    "contributions": 990,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Marcus Westin",
    "login": "marcuswestin",
    "location": "Mountain View, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2b3b0c8a8ec8edb2a95b3cae9a508b63?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 161,
    "organizations": [
      "clover",
      "FlutterbyLabs"
    ],
    "contributions": 987,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Eric Holscher",
    "login": "ericholscher",
    "location": "Portland, Or",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/a985c35d6be3c88a87d92b92b0d3756f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 363,
    "organizations": [],
    "contributions": 979,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Miller Medeiros",
    "login": "millermedeiros",
    "location": "São Paulo, Brasil",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2e1599d22dce3e1661b6e63e8514b38e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 231,
    "organizations": [
      "requirejs",
      "mout"
    ],
    "contributions": 975,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Piotr Solnica",
    "login": "solnic",
    "location": "Poland, Kraków",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/e864e5088627498df8f9b911a9bc3219?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 181,
    "organizations": [
      "datamapper",
      "powow"
    ],
    "contributions": 967,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Lim Chee Aun",
    "login": "cheeaun",
    "location": "Singapore",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/3ad38aa83f5148bd4a8670fe033d68f6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 246,
    "organizations": [
      "wego"
    ],
    "contributions": 965,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Oliver Drobnik",
    "login": "Cocoanetics",
    "location": "Weistrach, Austria",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/ac48abfd9468edd1d29f1c97c981e5f5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 430,
    "organizations": [
      "CocoaPods"
    ],
    "contributions": 961,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "arturo",
    "login": "arturoc",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/84c985e7168027f833fd837f3afd9f3e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 270,
    "organizations": [],
    "contributions": 961,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Mathias Meyer",
    "login": "roidrage",
    "location": "Berlin, Germany",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/4d9dd9bd8d3d4d0ba8af2acc41d14006?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 265,
    "organizations": [
      "postrank-labs",
      "travis-ci",
      "travis-repos",
      "travis-pro"
    ],
    "contributions": 960,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Ricardo Cerqueira",
    "login": "rmcc",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/30f5cd3b74f52af325d5d596cb5b1381?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 233,
    "organizations": [
      "CyanogenMod"
    ],
    "contributions": 954,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andy Lester",
    "login": "petdance",
    "location": "McHenry, IL",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/d1588981e0248aaa0174906c99df180e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 219,
    "organizations": [
      "parrot",
      "w3c",
      "Perl-Critic"
    ],
    "contributions": 946,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nuno Job",
    "login": "dscape",
    "location": "Portugal",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a998795c23a775e72ee28643c482a1f4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 264,
    "organizations": [
      "marklogic",
      "nodejitsu",
      "nodeapps",
      "flatiron",
      "nodedocs",
      "iriscouch",
      "nodetraining",
      "expensecat",
      "thenodefirm",
      "hubbleio",
      "nodeconfeu",
      "nodejitsuhackdays"
    ],
    "contributions": 943,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Bernardo Heynemann",
    "login": "heynemann",
    "location": "Rio de Janeiro, RJ, Brazil",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/eca21e5e47811c60e03087fc311e1d29?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 173,
    "organizations": [
      "globocom",
      "cobrateam",
      "timehome"
    ],
    "contributions": 932,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Scott Jehl",
    "login": "scottjehl",
    "location": "Seagrove Beach, FL",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f6d5229f000f5f54b21792d4228f2fab?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 789,
    "organizations": [
      "filamentgroup",
      "jquery",
      "mobilewood",
      "alistapart"
    ],
    "contributions": 930,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "rick",
    "login": "technoweenie",
    "location": "Rapid City, SD",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/821395fe70906c8290df7f18ac4ac6cf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "github",
      "libgit2",
      "lostisland"
    ],
    "contributions": 929,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Joshua Holbrook",
    "login": "jesusabdullah",
    "location": "Goa, India",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/8b1cdadd1804a128dced3531b89efc1d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 181,
    "organizations": [
      "nodeapps",
      "flatiron",
      "nodedocs",
      "HackThePlanet"
    ],
    "contributions": 928,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "David Walsh",
    "login": "darkwing",
    "location": "Madison, Wisconsin, United States",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/e15d8725aa42ce94ff509dd9136284d8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 545,
    "organizations": [
      "mootools",
      "mozilla"
    ],
    "contributions": 927,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Vojta Jina",
    "login": "vojtajina",
    "location": "San Francisco Bay Area",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/d59bdceef864e67df13167d806d6da63?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 215,
    "organizations": [
      "angular",
      "GoogleChrome"
    ],
    "contributions": 925,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Arnout Kazemier",
    "login": "3rd-Eden",
    "location": "The Netherlands",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/21f4971707a00270b92e2ae791d5633d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 215,
    "organizations": [
      "nodejitsu",
      "flatiron",
      "observing"
    ],
    "contributions": 916,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Matthew Eernisse",
    "login": "mde",
    "location": "San Francisco, California, USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/61399195fbd021b3a65437f2d37421ae?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 219,
    "organizations": [
      "yammer",
      "thenodefirm"
    ],
    "contributions": 915,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andrew Nacin",
    "login": "nacin",
    "location": "Washington, D.C.",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/01cfe9feaafb068590891bbd1f6a7f5a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 244,
    "organizations": [
      "jquery",
      "WordPress"
    ],
    "contributions": 914,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dean Sofer",
    "login": "ProLoser",
    "location": "San Francisco",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/8dff46d1b5dbbb556859639ca88186ec?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 197,
    "organizations": [
      "Jobvite",
      "angular-ui",
      "CSS-Tricks",
      "UniBot",
      "CakePHP-Copula"
    ],
    "contributions": 910,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Jon Leighton",
    "login": "jonleighton",
    "location": "London",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/2940bc7d4506f3e099e3dcc32a412b98?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 172,
    "organizations": [
      "rails",
      "loco2"
    ],
    "contributions": 908,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Michael Ficarra",
    "login": "michaelficarra",
    "location": "Chicago, IL",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/24fb0088507077f7852adaec4f6b679f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 171,
    "organizations": [],
    "contributions": 892,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ryan Davis",
    "login": "zenspider",
    "location": "Seattle, WA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/16c4b19d8670085a428787f8b2438223?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 215,
    "organizations": [
      "seattlerb",
      "rubygems",
      "att-innovate",
      "rdoc"
    ],
    "contributions": 884,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "fat-kun",
    "login": "fat",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a98244cbdacaf1c0b55499466002f7a8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "twitter",
      "adobe",
      "ender-js",
      "Obvious",
      "colossal",
      "components",
      "maker"
    ],
    "contributions": 882,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Sergey Chikuyonok",
    "login": "sergeche",
    "location": "Moscow, Russia",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/cceff469a14240fbdda75dfbee065388?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 339,
    "organizations": [
      "Imobilco",
      "emmetio"
    ],
    "contributions": 874,
    "contributionsStreak": 40,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Vicent Martí",
    "login": "vmg",
    "location": "Europe",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/2bb2258c02ee8f25f1a41a6223f9ac1f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 372,
    "organizations": [
      "github",
      "libgit2"
    ],
    "contributions": 872,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "James Reeves",
    "login": "weavejester",
    "location": "London, UK",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/fbb03719a57061b0745b94dd5e1ba6fe?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 294,
    "organizations": [
      "ring-clojure"
    ],
    "contributions": 869,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nicholas Semendyaev",
    "login": "Quarx2k",
    "location": "Russia, Omsk",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/3068b1d0aff6d22e34a86f6d013ecbb4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 340,
    "organizations": [
      "CyanogenDefy",
      "CyanogenModXT720",
      "STS-Dev-Team",
      "CyanogenKobe"
    ],
    "contributions": 866,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Justin Hileman",
    "login": "bobthecow",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2718352f0c20f271e2998e960416df26?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 239,
    "organizations": [
      "Modernizr",
      "SublimeText",
      "four53",
      "nanoc"
    ],
    "contributions": 862,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Vincent Driessen",
    "login": "nvie",
    "location": "Netherlands",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/466ef7561a0b100dc5a1021959962d28?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 421,
    "organizations": [
      "3rdcloud"
    ],
    "contributions": 861,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "FURUHASHI Sadayuki",
    "login": "frsyuki",
    "location": "Mountain View, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/75fdb396a77ee857a715857524f9d254?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 317,
    "organizations": [
      "msgpack",
      "ls4",
      "treasure-data",
      "fluent"
    ],
    "contributions": 860,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Phus Lu",
    "login": "phus",
    "location": "Nanjing, China",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/b6633545a2dc0c796e8f856caba3ccd3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 201,
    "organizations": [
      "goagent"
    ],
    "contributions": 853,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Estelle Weyl",
    "login": "estelle",
    "location": "California, USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/8e75de08afdc1e0fe9333e758d3c7249?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 168,
    "organizations": [],
    "contributions": 846,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Daniel Hillenbrand",
    "login": "codeworkx",
    "location": "Germany",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/d2d7bc2b214b1441300845e14e121c40?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 297,
    "organizations": [
      "CyanogenMod",
      "teamhacksung",
      "opengalaxy",
      "bbqlinux"
    ],
    "contributions": 846,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mike Perham",
    "login": "mperham",
    "location": "Portland, OR",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/af54a0871600db7fbdbb5c558a6e29a3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 385,
    "organizations": [
      "TheClymb"
    ],
    "contributions": 845,
    "contributionsStreak": 25,
    "contributionsCurrentStreak": 7
  },
  {
    "name": "Thomas Reynolds",
    "login": "tdreyno",
    "location": "Portland, OR",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/291394b477c2824bf5d75b831f125304?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [
      "Instrument",
      "middleman"
    ],
    "contributions": 838,
    "contributionsStreak": 18,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yi-Ting Cheng",
    "login": "xdite",
    "location": "Taipei, Taiwan / San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/19e786a2a74377ff6e052d87fd8d1fa8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 328,
    "organizations": [
      "techbang",
      "rubytaiwan",
      "rocodev"
    ],
    "contributions": 835,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jim Weirich",
    "login": "jimweirich",
    "location": "Cincinnati",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/b2e519cf5d98262296c37f3d01cb1cf0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 695,
    "organizations": [
      "edgecase",
      "cincinnatirb",
      "newcontext",
      "neo"
    ],
    "contributions": 834,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dennis Reimann",
    "login": "dennisreimann",
    "location": "Bremen, Germany",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/39ddce6b70cf21ae0773bced9baae152?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 187,
    "organizations": [
      "openid",
      "appfertigung",
      "iOctocat"
    ],
    "contributions": 834,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Jaisen Mathai",
    "login": "jmathai",
    "location": "San Francisco / Sunnyvale, CA USA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/e4d1f099d40e3b453be3355349b90457?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 251,
    "organizations": [
      "photo"
    ],
    "contributions": 834,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Hongli Lai",
    "login": "FooBarWidget",
    "location": "",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/02f0ee0da223f90bb9996ef252e528c1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 288,
    "organizations": [
      "phusion"
    ],
    "contributions": 830,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 17
  },
  {
    "name": "Xavier Noria",
    "login": "fxn",
    "location": "Barcelona",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/7223c62b7310e164eb79c740188abbda?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 291,
    "organizations": [
      "rails",
      "ProRuby"
    ],
    "contributions": 824,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Bozhidar Batsov",
    "login": "bbatsov",
    "location": "Sofia, Bulgaria",
    "language": "Emacs",
    "gravatar": "https://secure.gravatar.com/avatar/7710f41976a45c0b25deaf0f2a4577bc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 290,
    "organizations": [
      "fosscourse",
      "slim-template"
    ],
    "contributions": 824,
    "contributionsStreak": 24,
    "contributionsCurrentStreak": 7
  },
  {
    "name": "Dave Reisner",
    "login": "falconindy",
    "location": "New York City",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/64d339a30e44af55d95371f06df6bfa1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 192,
    "organizations": [],
    "contributions": 818,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Patrick Debois",
    "login": "jedi4ever",
    "location": "Belgium",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/2a05e5e24cfce84b942634aea441b818?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 206,
    "organizations": [
      "monigusto"
    ],
    "contributions": 818,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Jan Lehnardt",
    "login": "janl",
    "location": "Berlin, Germany",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2af516fdc33afea661fb3b32c769c9cc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 544,
    "organizations": [
      "oreilly",
      "mustache",
      "couchbase",
      "couchbaselabs",
      "jsconf",
      "hoodiehq",
      "berlinjs"
    ],
    "contributions": 817,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "antimatter15",
    "login": "antimatter15",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/cdea44b85ae2242dcccd758cd80aad6b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 179,
    "organizations": [
      "neotenic"
    ],
    "contributions": 815,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Javier Jiménez",
    "login": "soyjavi",
    "location": "Bilbao, Spain",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b45dac4e52795ea2c8c493612d09ac32?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 314,
    "organizations": [
      "TapQuo"
    ],
    "contributions": 815,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Tim Pope",
    "login": "tpope",
    "location": "Jacksonville Beach, FL",
    "language": "VimL",
    "gravatar": "https://secure.gravatar.com/avatar/67259dd09c53aef920fe2aca18c7a8e0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [
      "hashrocket",
      "vim-ruby"
    ],
    "contributions": 815,
    "contributionsStreak": 34,
    "contributionsCurrentStreak": 34
  },
  {
    "name": "Maciej Małecki",
    "login": "mmalecki",
    "location": "Poznań, Poland",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/88980828020437cf9ec42c936d69e686?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 200,
    "organizations": [
      "nodejitsu",
      "nodeapps",
      "flatiron",
      "travis-ci",
      "nodedocs",
      "Relief-1"
    ],
    "contributions": 814,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Stevan Little",
    "login": "stevan",
    "location": "",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/0bffad37a60feece78c306af4456f53a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 167,
    "organizations": [
      "iinteractive",
      "moose",
      "MoeOrganization"
    ],
    "contributions": 814,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Charles Leifer",
    "login": "coleifer",
    "location": "Lawrence, KS",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/ebd1c4256c1ece3469d2ccf3031cb6c5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 234,
    "organizations": [
      "thenerdery"
    ],
    "contributions": 810,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jason Davies",
    "login": "jasondavies",
    "location": "London, UK",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f9dd9f4c2b8d081b67fe34769e24808e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 191,
    "organizations": [
      "d3"
    ],
    "contributions": 804,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "roxlu",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/a3e45d93c2d24b6ae8bbef0453065e45?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [],
    "contributions": 801,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nathan Hamblen",
    "login": "n8han",
    "location": "New York",
    "language": "Scala",
    "gravatar": "https://secure.gravatar.com/avatar/51e9266cad7460b23daac1179a72da2b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 246,
    "organizations": [
      "meetup",
      "unfiltered"
    ],
    "contributions": 801,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Chris Done",
    "login": "chrisdone",
    "location": "Italy",
    "language": "Haskell",
    "gravatar": "https://secure.gravatar.com/avatar/fed2705cf484a7ffbc3d44a742b686e5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 220,
    "organizations": [
      "haskell",
      "faylang"
    ],
    "contributions": 794,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tanguy Pruvot",
    "login": "tpruvot",
    "location": "Paris, France",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/3a3d590a99eddec38c1c9ff6c0eff75c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 183,
    "organizations": [
      "CyanogenMod",
      "CyanogenDefy",
      "Atrix-Dev-Team"
    ],
    "contributions": 785,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Fuji, Goro",
    "login": "gfx",
    "location": "Tokyo, Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/9278c3a06b8d8752fb913dea93f959c1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 276,
    "organizations": [
      "msgpack",
      "xslate",
      "p5-app-adventcalendar",
      "perl-users-jp",
      "jsx",
      "dartrefjp",
      "jsthread"
    ],
    "contributions": 782,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Igor Minar",
    "login": "IgorMinar",
    "location": "SF Bay Area, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/fc5dc0d579fb554752763792a2d5f449?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 182,
    "organizations": [
      "angular"
    ],
    "contributions": 781,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Nathan Weizenbaum",
    "login": "nex3",
    "location": "Seattle",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/39b3031f890ad7ce40661614af8b52a6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 337,
    "organizations": [
      "dart-lang",
      "haml"
    ],
    "contributions": 781,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Matthew McCullough",
    "login": "matthewmccullough",
    "location": "Denver, CO USA",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/9112400090829f79d97ed9b12056fa4f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 402,
    "organizations": [
      "github",
      "git",
      "PresentationPatterns",
      "githubtraining"
    ],
    "contributions": 781,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Ian Bicking",
    "login": "ianb",
    "location": "Minneapolis, Minnesota, USA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/cc8334869c9d2a9e603017f2da805eb3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 243,
    "organizations": [
      "mozilla",
      "Pylons",
      "pypa"
    ],
    "contributions": 764,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "AlteredQualia",
    "login": "alteredq",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/05a9ea8209c0f0d038d94865d380b210?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 196,
    "organizations": [],
    "contributions": 760,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jonathan \"Duke\" Leto",
    "login": "leto",
    "location": "Portland, OR",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/fb844ffed6c5a2e69638627e3b721308?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 193,
    "organizations": [
      "cashmusic",
      "perl6",
      "parrot",
      "bioperl",
      "solgenomics",
      "GMOD",
      "letolabs",
      "bti",
      "serversky",
      "domenika",
      "Cloud-Apps",
      "poca",
      "collectiveagency",
      "pdxgit",
      "codersociety",
      "cloudfreestyle",
      "beeminder"
    ],
    "contributions": 760,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 7
  },
  {
    "name": "Harry Roberts",
    "login": "csswizardry",
    "location": "Leeds, UK",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/435359cf1fcaf6b1c93b7f8b9166c861?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 550,
    "organizations": [],
    "contributions": 754,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Yehuda Katz",
    "login": "wycats",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/428167a3ec72235ba971162924492609?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 3,
    "organizations": [
      "rails",
      "jquery",
      "carlhuda",
      "rubinius",
      "guard",
      "travis-ci",
      "getbpm",
      "bpm",
      "emberjs",
      "emberjs-addons",
      "tildeio",
      "tokaido",
      "erikhuda"
    ],
    "contributions": 748,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 6
  },
  {
    "name": "Brad Fitzpatrick",
    "login": "bradfitz",
    "location": "San Francisco, CA",
    "language": "Go",
    "gravatar": "https://secure.gravatar.com/avatar/903d96c91eb06237d765695845d51e72?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 679,
    "organizations": [
      "djabberd",
      "camlistore",
      "google"
    ],
    "contributions": 741,
    "contributionsStreak": 18,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tatsuhiko Miyagawa",
    "login": "miyagawa",
    "location": "San Francisco, CA",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/49e1240c84b221f3dcca57d005a2f569?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "cookpad",
      "plack"
    ],
    "contributions": 735,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Stefan Kanev",
    "login": "skanev",
    "location": "Sofia, Bulgaria",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/5ca07e641fada5a88a09277c45bd7c1b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 182,
    "organizations": [
      "artilect",
      "fmi"
    ],
    "contributions": 735,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Caolan McMahon",
    "login": "caolan",
    "location": "Vancouver, BC",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a12f0df529117f01505bfd072f65bacc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 389,
    "organizations": [
      "documentcloud",
      "medic",
      "kanso"
    ],
    "contributions": 733,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Pedro Melo",
    "login": "melo",
    "location": "Figueira da Foz, Portugal",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/584d974034606369cf2e3401e4497354?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 181,
    "organizations": [],
    "contributions": 723,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ward Cunningham",
    "login": "WardCunningham",
    "location": "Portland, Oregon",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/5c819321db181e77b9010369807df2f9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 382,
    "organizations": [
      "indieweb"
    ],
    "contributions": 723,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Miguel de Icaza",
    "login": "migueldeicaza",
    "location": "Boston, MA.",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/3a9106e0c085d9a856588c454894d66b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 680,
    "organizations": [
      "IronLanguages",
      "fsharp",
      "mono-soc-2011",
      "xamarin"
    ],
    "contributions": 722,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James Smith",
    "login": "loopj",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/20171a64471be602e50c8ba7662313af?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 174,
    "organizations": [
      "bugsnag"
    ],
    "contributions": 717,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Craig Campbell",
    "login": "ccampbell",
    "location": "New York, NY",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/eaa9da4ab45880411d481bc8524e9a9e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 174,
    "organizations": [
      "vimeo"
    ],
    "contributions": 715,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Sam Pullara",
    "login": "spullara",
    "location": "Los Altos, CA",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/e5469ac2a15699133a4d63b6a80921c6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 169,
    "organizations": [
      "twitter"
    ],
    "contributions": 710,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jed Schmidt",
    "login": "jed",
    "location": "Tokyo, Japan",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/7b72d5a18ab92129692e97a76a153fe0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 479,
    "organizations": [
      "thenodefirm"
    ],
    "contributions": 700,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Zach Holman",
    "login": "holman",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/6f63cde8b16b035280ca615f621a6c8c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [
      "github",
      "libgit2",
      "play"
    ],
    "contributions": 700,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kang-min Liu",
    "login": "gugod",
    "location": "Amsterdam, Netherlands",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/4d8c65b603554811079a7ea9b7aab9c0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 225,
    "organizations": [
      "perltaiwan",
      "g0v"
    ],
    "contributions": 699,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jonathan Wight",
    "login": "schwa",
    "location": "Emeryville CA",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/a28254f42a1867eceafd3b4ddc7d5629?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 357,
    "organizations": [
      "TouchCode"
    ],
    "contributions": 698,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "小鱼",
    "login": "sofish",
    "location": "China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/713d89c43a5897bd68824fe74f8e7677?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 455,
    "organizations": [
      "baixing",
      "Trimidea"
    ],
    "contributions": 698,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "André Arko",
    "login": "indirect",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/4c3ed917e59156a36212d48155831482?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 219,
    "organizations": [
      "wesabe",
      "rails",
      "mavenlink",
      "carlhuda",
      "bundler"
    ],
    "contributions": 696,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Steve Kondik",
    "login": "cyanogen",
    "location": "Seattle, WA",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/345ef36929e4ecae65ed8fdee4ec92d0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "CyanogenMod",
      "TeamChopsticks"
    ],
    "contributions": 696,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "R.I.Pienaar",
    "login": "ripienaar",
    "location": "London",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/9482a1c5a9c64c5d7296971f030165b7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 271,
    "organizations": [
      "puppetlabs"
    ],
    "contributions": 695,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Luke Redpath",
    "login": "lukeredpath",
    "location": "London, UK",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/bdd4d23d1a822b2d68b53e7c51d69a39?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 291,
    "organizations": [
      "CocoaPods"
    ],
    "contributions": 695,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Max Lapshin",
    "login": "maxlapshin",
    "location": "Moscow, Russia",
    "language": "Erlang",
    "gravatar": "https://secure.gravatar.com/avatar/143c67bc66364c543e85bc907717a8ab?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 212,
    "organizations": [],
    "contributions": 693,
    "contributionsStreak": 20,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rob Allen",
    "login": "akrabat",
    "location": "Worcester, UK",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/79d9ba388d6b6cf4ec7310cad9fa8c8a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 343,
    "organizations": [
      "zendframework",
      "ZF-Commons"
    ],
    "contributions": 692,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Grigory Bakunov",
    "login": "bobuk",
    "location": "Russia, Moscow",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/1f283e06dbdff08f4f1df21cb2e102cf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 456,
    "organizations": [
      "webnabludatel"
    ],
    "contributions": 692,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Evan Phoenix",
    "login": "evanphx",
    "location": "Los Angeles, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/540cb3b3712ffe045113cb03bab616a2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 421,
    "organizations": [
      "rubygems",
      "rubinius",
      "larb",
      "homesteading",
      "puma",
      "Farmhouse"
    ],
    "contributions": 688,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Jason Lee",
    "login": "huacnlee",
    "location": "Hangzhou,China",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/4035ddfe11dbb2afc4e683b1bc6ac68f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 680,
    "organizations": [
      "ruby-china",
      "etaoux"
    ],
    "contributions": 687,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jonas Nicklas",
    "login": "jnicklas",
    "location": "Sweden",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/6c469749d725177dd2837d806c769cd4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 383,
    "organizations": [
      "elabs",
      "carrierwave-lib",
      "got-js"
    ],
    "contributions": 678,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Bert Belder",
    "login": "piscisaureus",
    "location": "Amsterdam",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/dfa62a8ce7e537d68302b67a4a853b4b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 186,
    "organizations": [
      "joyent",
      "ajaxorg",
      "WindowsAzure",
      "c9"
    ],
    "contributions": 678,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mathias Bynens",
    "login": "mathiasbynens",
    "location": "Belgium",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 915,
    "organizations": [
      "iRail",
      "oftn",
      "bestiejs",
      "h5bp",
      "FlatTurtle",
      "whatwg"
    ],
    "contributions": 673,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Christoph Pojer",
    "login": "cpojer",
    "location": "Graz, Austria",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/77a332a7da779ef594cb6db9970c7b2f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 293,
    "organizations": [
      "mootools",
      "facebook",
      "auphonic"
    ],
    "contributions": 669,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "jerpelea",
    "login": "freexperia",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/7319b6bdb0d2892048dc7ee392cf43d7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 310,
    "organizations": [
      "CyanogenMod"
    ],
    "contributions": 668,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Daniel Sperl",
    "login": "PrimaryFeather",
    "location": "Austria",
    "language": "ActionScript",
    "gravatar": "https://secure.gravatar.com/avatar/5cbc9c27cb00dd257a4066c0c51139bb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 217,
    "organizations": [],
    "contributions": 666,
    "contributionsStreak": 24,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Akira Matsuda",
    "login": "amatsuda",
    "location": "Tokyo",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/76a777ff80f30bd3b390e275cce625bc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 453,
    "organizations": [
      "rails",
      "cookpad",
      "grooves",
      "ruby-no-kai",
      "asakusarb",
      "rails3recipebook"
    ],
    "contributions": 665,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "John Polacek",
    "login": "johnpolacek",
    "location": "Chicago",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/151f5327ae2dac26ba1255335b26ec9a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 247,
    "organizations": [
      "dfcb"
    ],
    "contributions": 658,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Johan Tibell",
    "login": "tibbe",
    "location": "San Francisco",
    "language": "Haskell",
    "gravatar": "https://secure.gravatar.com/avatar/b52bc71fb15db17f585b912aed45b217?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 171,
    "organizations": [
      "haskell"
    ],
    "contributions": 656,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mark Nottingham",
    "login": "mnot",
    "location": "Melbourne, Australia",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/38f92fdb9ac1b5213d40c595b14ec620?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 302,
    "organizations": [
      "squid-cache",
      "uri-templates",
      "json-patch"
    ],
    "contributions": 652,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ralph Schindler",
    "login": "ralphschindler",
    "location": "New Orleans, Louisiana",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/49661a0cd4ca8479240be88893501988?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 369,
    "organizations": [
      "zendframework"
    ],
    "contributions": 644,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Chris O'Hara",
    "login": "chriso",
    "location": "Sydney, Australia",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a22a8707c85dff1f5499eaa4fc90c6a9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 176,
    "organizations": [
      "sydneystockholm"
    ],
    "contributions": 643,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Juan Lopes",
    "login": "juanplopes",
    "location": "Rio de Janeiro",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/f63499cec1e638f53805da5f385e8daa?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 176,
    "organizations": [
      "intelie",
      "dojorio",
      "dotnetarchitects",
      "innvent"
    ],
    "contributions": 642,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "唐鳳",
    "login": "audreyt",
    "location": "Taipei, Taiwan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/f63068d724b6084f4807a86426b3b9eb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 386,
    "organizations": [
      "rubinius",
      "acmeism",
      "perltaiwan",
      "g0v",
      "o-fun"
    ],
    "contributions": 642,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 8
  },
  {
    "name": "thinca",
    "login": "thinca",
    "location": "",
    "language": "VimL",
    "gravatar": "https://secure.gravatar.com/avatar/3b83f8f7a25019f3ee01791df024bf3c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 226,
    "organizations": [
      "vimjolts",
      "vimpr",
      "vim-jp"
    ],
    "contributions": 641,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Eric Bidelman",
    "login": "ebidel",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/e7948aac7c52b26470be80311873a398?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 459,
    "organizations": [
      "google",
      "yeoman",
      "GoogleChrome",
      "html5rocks"
    ],
    "contributions": 637,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Assaf Arkin",
    "login": "assaf",
    "location": "Bay Area, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a62b87a36bfc29a7207bc73f3aac960b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 222,
    "organizations": [
      "demandforce"
    ],
    "contributions": 633,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "astaxie",
    "login": "astaxie",
    "location": "shanghai  china",
    "language": "Go",
    "gravatar": "https://secure.gravatar.com/avatar/84147bb143d6ba187e59066ecf29872c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 242,
    "organizations": [],
    "contributions": 633,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Alex Young",
    "login": "alexyoung",
    "location": "London, England",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b1d2c5db7f856ee30e6816dccfdc511c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 335,
    "organizations": [],
    "contributions": 631,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Mahdi Yusuf",
    "login": "myusuf3",
    "location": "Ottawa, Canada",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/fab591eb34c76cbd0716024ce22d4906?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 207,
    "organizations": [
      "pyconca",
      "pycoders",
      "python-ottawa"
    ],
    "contributions": 627,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nicolas Gramlich",
    "login": "nicolasgramlich",
    "location": "San Francisco, CA",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/ff1dc0e0a23f1c2270babc57bb8fd60c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 404,
    "organizations": [
      "zynga"
    ],
    "contributions": 624,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Alexander Makarov",
    "login": "samdark",
    "location": "Russia",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/c13375ba1016846e39bc0e48260d0bb1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 223,
    "organizations": [
      "yiiext",
      "yiisoft"
    ],
    "contributions": 620,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "David Keegan",
    "login": "kgn",
    "location": "Irvine, CA",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/367353947536189ba6c9b9f18384dbbc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 183,
    "organizations": [],
    "contributions": 620,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Cal Henderson",
    "login": "iamcal",
    "location": "San Francisco, CA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/d4b1e130573342d48bd0936183fce628?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 240,
    "organizations": [
      "etsy",
      "exflickr",
      "tinyspeck"
    ],
    "contributions": 617,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dayle Rees",
    "login": "daylerees",
    "location": "Wales, UK",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/fac3a58aaa455adbcb3f684ccff663b8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 204,
    "organizations": [
      "boxuk",
      "laravel",
      "PhoenixGroup",
      "codehappy",
      "illuminate",
      "phpanda"
    ],
    "contributions": 617,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Karel Minarik",
    "login": "karmi",
    "location": "Prague, Czech Republic",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/4e515deb518e9195f0dc45ec2af6a541?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 285,
    "organizations": [
      "sinatra",
      "elasticsearch",
      "rubyonrails-cz"
    ],
    "contributions": 616,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brian Rosner",
    "login": "brosner",
    "location": "Denver, CO",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/b7472bc7aa45c70641c299e9408b78ab?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 476,
    "organizations": [
      "pinax",
      "django",
      "eldarion",
      "pypa"
    ],
    "contributions": 615,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Pat Allan",
    "login": "pat",
    "location": "Melbourne, Australia",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/29f82ebe1801087f04de6aaae92e19ea?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 248,
    "organizations": [
      "inspire9",
      "flying-sphinx",
      "rails-oceania"
    ],
    "contributions": 614,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Alexander Farkas",
    "login": "aFarkas",
    "location": "Berlin",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/5c4f4e081b98517cf7c5b21f47d9fe33?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [
      "Modernizr"
    ],
    "contributions": 612,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Gabriel Falcão",
    "login": "gabrielfalcao",
    "location": "New York - NY",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/3fa0df5c54f5ac0f8652d992d7d24039?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 194,
    "organizations": [
      "Yipit"
    ],
    "contributions": 603,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Tobias Schneider",
    "login": "tobeytailor",
    "location": "Munich",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/4c070ea4b5d033a7f5c98b08fb836a54?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 176,
    "organizations": [],
    "contributions": 595,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James Xu",
    "login": "xumingming",
    "location": "HangZhou, ZheJiang, China",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/2e4b76a1b6ac1809a564333068ba1760?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 158,
    "organizations": [],
    "contributions": 595,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nils Adermann",
    "login": "naderman",
    "location": "Karlsruhe, Germany",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/9f580202b05cc640aa9297ab7a1ae764?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [
      "phpbb",
      "doctrine",
      "pmfstat",
      "composer",
      "forumatic"
    ],
    "contributions": 593,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Hakim El Hattab",
    "login": "hakimel",
    "location": "NYC",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/669d1a520df32153f9793e33c3905476?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [
      "qwiki"
    ],
    "contributions": 589,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Zach Tellman",
    "login": "ztellman",
    "location": "San Francisco, CA",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/b52ee6e0ba8856d814d4eb8a5f028999?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 256,
    "organizations": [],
    "contributions": 584,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mihai Bazon",
    "login": "mishoo",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/8a966def06bd0f3e02f1af3570ec42a9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 204,
    "organizations": [],
    "contributions": 583,
    "contributionsStreak": 16,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "ofZach",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/04ffd573ed878bc5b8c818c3aeaa2d71?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 279,
    "organizations": [
      "fatlab"
    ],
    "contributions": 581,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Paul Rouget",
    "login": "paulrouget",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a910b7c21b8b05766236349a959b23d4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 191,
    "organizations": [
      "mozilla"
    ],
    "contributions": 580,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kentaro Kuribayashi",
    "login": "kentaro",
    "location": "Tokyo, Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/23f4d5d797a91b6d17d627b90b5a42d9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 195,
    "organizations": [
      "hatena",
      "prepan-developers",
      "paperboy-sqale",
      "paperboy-all",
      "paperboy-30days",
      "paperboy-heteml",
      "paperboy-minne",
      "paperboy-cmsp"
    ],
    "contributions": 577,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brett Terpstra",
    "login": "ttscoff",
    "location": "Winona, MN USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/5fd63e67639747af45ecf8f3b8c47b06?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 392,
    "organizations": [],
    "contributions": 573,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Alexandre Gomes Gaigalas",
    "login": "alganet",
    "location": "São Paulo, SP, Brasil",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/63c59020e0d7efaef816653c853ecc05?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 332,
    "organizations": [
      "PHPSP",
      "Respect",
      "casadocodigo",
      "Hidro",
      "Aeronautics",
      "rainbowdriver"
    ],
    "contributions": 568,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "dennis zhuang",
    "login": "killme2008",
    "location": "BeiJing,China",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/0a1fc541b9d8681ee21af5591766297d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 231,
    "organizations": [],
    "contributions": 566,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Memo Akten",
    "login": "memo",
    "location": "London",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/b5c0e3c2630097b29680cfeda464024c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 515,
    "organizations": [],
    "contributions": 565,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Xavier Shay",
    "login": "xaviershay",
    "location": "Melbourne, Australia",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/116ed602629e00b79eae9af774398bb0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 271,
    "organizations": [
      "amanikids",
      "square"
    ],
    "contributions": 564,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Bodil Stokke",
    "login": "bodil",
    "location": "Oslo, Norway",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/999235d92c7c5896e90b1ece926e7eaa?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 198,
    "organizations": [
      "arktekk",
      "webrebels"
    ],
    "contributions": 563,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nicolas Gallagher",
    "login": "necolas",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/992c9c162c4c62ec0e2621b4f2206533?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "twitter",
      "tweetdeck",
      "h5bp"
    ],
    "contributions": 559,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Alex MacCaw",
    "login": "maccman",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/baf018e2cc4616e4776d323215c7136c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [
      "spine"
    ],
    "contributions": 557,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Olivier Poitrey",
    "login": "rs",
    "location": "France, Paris",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/ac58d25ab87736a93514105474a6ca83?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 290,
    "organizations": [
      "dailymotion"
    ],
    "contributions": 552,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Magnus     {japh,scp1} Woldrich",
    "login": "trapd00r",
    "location": "Norrköping, Sweden",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/2f0275fed52e5d478dd227bd6999a9d5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 208,
    "organizations": [
      "sharpsaw"
    ],
    "contributions": 551,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Bryan Veloso",
    "login": "bryanveloso",
    "location": "Los Angeles, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/88124ba9e758ec0cbd4f902f30e96fae?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 312,
    "organizations": [
      "github",
      "aliter",
      "django",
      "revyver",
      "avalonstar",
      "day9tv"
    ],
    "contributions": 547,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andreas Linde",
    "login": "TheRealKerni",
    "location": "Bietigheim-Bissingen, Germany",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/da87d32a70f89fa91de14bcae2564f51?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 179,
    "organizations": [
      "codenauts",
      "bitstadium"
    ],
    "contributions": 547,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Matthias Tretter",
    "login": "myell0w",
    "location": "Vienna",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/ba791cd9ce723c252e1fccc33839259a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 262,
    "organizations": [
      "foundationkit",
      "NOUSguide"
    ],
    "contributions": 546,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Francois Zaninotto",
    "login": "fzaninotto",
    "location": "Paris, France",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/8ad62a25686796c42fedbe3ddedce1f1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 250,
    "organizations": [
      "propelorm"
    ],
    "contributions": 544,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Nick Quaranto",
    "login": "qrush",
    "location": "Buffalo, NY",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/eb8975af8e49e19e3dd6b6b84a542e26?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 357,
    "organizations": [
      "37signals",
      "rubygems",
      "gitready",
      "coworkbuffalo",
      "OpenHack"
    ],
    "contributions": 544,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Jeff Lindsay",
    "login": "progrium",
    "location": "Berkeley, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/bb46488d2c90d51f366cafc776e2b3ad?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 489,
    "organizations": [
      "hackerdojo",
      "devhouse",
      "webpipes"
    ],
    "contributions": 543,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Artur Adib",
    "login": "arturadib",
    "location": "Burlington, VT",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/1e79769843eb2b1146834c762ae5f3da?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 164,
    "organizations": [],
    "contributions": 538,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tim Sharpe",
    "login": "rodjek",
    "location": "Sydney",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/920e60e81da4fb61eaeb95fa9d7c3b70?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 197,
    "organizations": [
      "github",
      "monitoringsucks",
      "sensu",
      "boxen"
    ],
    "contributions": 534,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "",
    "login": "pershoot",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/e6deca0fa8833279059bf6655821c3ab?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 178,
    "organizations": [
      "CyanogenMod"
    ],
    "contributions": 534,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Alex Sexton",
    "login": "SlexAxton",
    "location": "Austin, TX",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/7ea369b9b67a85f638af2e0f5d708d2d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 608,
    "organizations": [
      "twitter",
      "jquery",
      "Modernizr",
      "bazaarvoice",
      "sprintly",
      "MiniDonations",
      "ot-crew",
      "yeoman",
      "components",
      "jedtoolkit"
    ],
    "contributions": 530,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Allan Jardine",
    "login": "DataTables",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/8b1feb7f958da6bb957ed650fdb0fae0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 306,
    "organizations": [],
    "contributions": 527,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jeffrey Zhao",
    "login": "JeffreyZhao",
    "location": "China",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/9afc32e99dc5e363dad91cbb6a74accd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 748,
    "organizations": [],
    "contributions": 527,
    "contributionsStreak": 23,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Bernhard Schussek",
    "login": "bschussek",
    "location": "Vienna, Austria",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/24d20907afea0f684e62d620b886af16?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 233,
    "organizations": [
      "symfony"
    ],
    "contributions": 525,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tualatrix Chou",
    "login": "tualatrix",
    "location": "Beijing, China",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/3aa394e5aef22274b9d36a74adb787e9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 348,
    "organizations": [],
    "contributions": 525,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Aaron Swartz",
    "login": "aaronsw",
    "location": "",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/2ee45d7dd2c26c6fea3b887f831f7b38?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 342,
    "organizations": [
      "pokayoke"
    ],
    "contributions": 525,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tekkub",
    "login": "tekkub",
    "location": "Denver, CO",
    "language": "Lua",
    "gravatar": "https://secure.gravatar.com/avatar/472814aac7576b67da59ea79fcbf7d66?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "github",
      "TekNoLogic",
      "tanuki"
    ],
    "contributions": 525,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Gina Trapani",
    "login": "ginatrapani",
    "location": "San Diego, CA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/44230311a3dcd684b6c5f81bf2ec9f60?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "ThinkUpLLC"
    ],
    "contributions": 524,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jacob Appelbaum",
    "login": "ioerror",
    "location": "",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/43aa59f31939e9061ff78a57c3b176c6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 249,
    "organizations": [
      "Neg9",
      "noisebridge"
    ],
    "contributions": 523,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Keiji, Yoshimi",
    "login": "walf443",
    "location": "Tokyo, Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/dea4fe079aec284744ad02eb3d2594f5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 158,
    "organizations": [
      "perl-users-jp",
      "perldoc-jp"
    ],
    "contributions": 518,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rob Hudson",
    "login": "robhudson",
    "location": "Eugene, Oregon",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/47ae07204a8b5c27fcfa9d6d253bba4e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 246,
    "organizations": [
      "mozilla",
      "django-debug-toolbar"
    ],
    "contributions": 518,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Evan Martin",
    "login": "martine",
    "location": "San Francisco",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/1d125552c92c317d4b00435a75848404?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 162,
    "organizations": [],
    "contributions": 518,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Gosuke Miyashita",
    "login": "mizzy",
    "location": "Kanagawa, Japan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/0d5d8fb9cc4c06f581825f5a61d3f5f1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 179,
    "organizations": [
      "paperboy-sqale",
      "nikon-universe",
      "blosxom-fanatics",
      "paperboy-all",
      "paperboy-30days",
      "coderwall-altruist",
      "coderwall-forked",
      "coderwall-honeybadger",
      "coderwall-mongoose",
      "coderwall-mongoose3",
      "coderwall-octopussy",
      "coderwall-philanthropist",
      "coderwall-python3",
      "coderwall-raven",
      "coderwall-velociraptor",
      "coderwall-24PullRequestsParticipant"
    ],
    "contributions": 518,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Juriy Zaytsev",
    "login": "kangax",
    "location": "New York",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f1fcf834ddad415f60d29c87cc10d4d4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 610,
    "organizations": [
      "printio"
    ],
    "contributions": 512,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Valerio Proietti",
    "login": "kamicane",
    "location": "Rome, Italy",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/00ef3b0b0f0ae8cc26b3f45d7f08e5e1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 229,
    "organizations": [
      "mootools"
    ],
    "contributions": 511,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tomohiro Matsuyama",
    "login": "m2ym",
    "location": "",
    "language": "Common",
    "gravatar": "https://secure.gravatar.com/avatar/eefd3c9c9d51b3116119a5cb814ce1a1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 217,
    "organizations": [
      "arielnetworks",
      "auto-complete"
    ],
    "contributions": 510,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Anton Kovalyov",
    "login": "antonkovalyov",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/de4bc2ea0dbe8d1ef6c3e190325a35de?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 160,
    "organizations": [
      "disqus",
      "jshint",
      "JSFixed"
    ],
    "contributions": 508,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Lyric Wai",
    "login": "lyricat",
    "location": "Beijing, China",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/9e845595fb3be085c9888d7e1014831a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 289,
    "organizations": [
      "stanzax"
    ],
    "contributions": 508,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Zach Carter",
    "login": "zaach",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a7657b2354d983b2c8db0d6226d1ce20?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 162,
    "organizations": [
      "mozilla"
    ],
    "contributions": 503,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 9
  },
  {
    "name": "Alexis Sellier",
    "login": "cloudhead",
    "location": "Berlin",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a8a0061962c41735ca87789720da46c8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [
      "soundcloud",
      "Paws",
      "oftn",
      "arbre"
    ],
    "contributions": 501,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ryan Grove",
    "login": "rgrove",
    "location": "Portland, OR",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/683e9380d7cc0724a35dadfb4eeb142b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 224,
    "organizations": [
      "yui",
      "smugmug"
    ],
    "contributions": 501,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Feross Aboukhadijeh",
    "login": "feross",
    "location": "Stanford, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b498d33041627b07726dc29c28f02df7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 343,
    "organizations": [
      "StanfordACM"
    ],
    "contributions": 501,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Michael G. Schwern",
    "login": "schwern",
    "location": "Portland, OR",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/e55e0ec3c00f834d78fbdddeaa36e308?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 251,
    "organizations": [
      "gitpan",
      "Perl-Toolchain-Gang",
      "perl-doc-cats"
    ],
    "contributions": 497,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "David Chelimsky",
    "login": "dchelimsky",
    "location": "Chicago, IL, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/5d38ab152e1e3e219512a9859fcd93af?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 502,
    "organizations": [
      "rspec",
      "speakerconf"
    ],
    "contributions": 493,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "nikic",
    "location": "",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/b4ec98df44deb80b1576283152670358?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 324,
    "organizations": [],
    "contributions": 492,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ivan Sagalaev",
    "login": "isagalaev",
    "location": "Redmond, WA, USA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/fdc6c703379d875de38a014cd0d9fea6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 243,
    "organizations": [],
    "contributions": 492,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Alexander Artemenko",
    "login": "svetlyak40wt",
    "location": "Moscow",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/5b3558b0fd5ca9c08d9061a6e51b555a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 164,
    "organizations": [
      "office-doodles"
    ],
    "contributions": 490,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Adán Miguel Sánchez Albert",
    "login": "dual3nigma",
    "location": "Coatepec, Veracruz, México",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/5405d6ba1ac2ec5a1e3c175be4ddae53?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 169,
    "organizations": [
      "Mejorandola"
    ],
    "contributions": 487,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Joshua Clayton",
    "login": "joshuaclayton",
    "location": "Boston, MA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/786f05409ca8d18bae8d59200156272c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 282,
    "organizations": [
      "thoughtbot",
      "blueprintcss"
    ],
    "contributions": 486,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Endy Muhardin",
    "login": "endymuhardin",
    "location": "Jakarta, Indonesia",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/a3c8a6a973fc0c0fa3d89cb69c103ad0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [
      "artivisi"
    ],
    "contributions": 485,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Fred Wu",
    "login": "fredwu",
    "location": "Melbourne, Australia (Shanghai, China)",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/2735068c913a072744a799e3c0833b7b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 395,
    "organizations": [
      "Wuit",
      "locomote",
      "500Startups",
      "slim-template"
    ],
    "contributions": 480,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andy Dawson",
    "login": "AD7six",
    "location": "Spain",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/876a61b58a729fcf71048529885d64dc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 285,
    "organizations": [
      "cakephp",
      "h5bp"
    ],
    "contributions": 480,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Corey Donohoe",
    "login": "atmos",
    "location": "Potrero, SF",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a86224d72ce21cd9f5bee6784d4b06c7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 516,
    "organizations": [
      "github"
    ],
    "contributions": 479,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Harper Reed",
    "login": "harperreed",
    "location": "Chicago, Il",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/b7a96b3d5b5cfed5228396104cd67b38?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 219,
    "organizations": [
      "ofa-alumni"
    ],
    "contributions": 476,
    "contributionsStreak": 22,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nick Sieger",
    "login": "nicksieger",
    "location": "Minneapolis, MN, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/526d60de6472502bb570a9df2842b33b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 195,
    "organizations": [
      "jruby",
      "jnr"
    ],
    "contributions": 476,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ethan Schoonover",
    "login": "altercation",
    "location": "Seattle",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/afa1db0cd6b58e180e08e15ddd3df1de?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 200,
    "organizations": [
      "solarized"
    ],
    "contributions": 475,
    "contributionsStreak": 18,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Irene Ros",
    "login": "iros",
    "location": "Cambridge MA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f99c66cc9f64454df105006286d47521?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [
      "bocoup",
      "misoproject",
      "OpenGenderTracking"
    ],
    "contributions": 472,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Mary Rose Cook",
    "login": "maryrosecook",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/1740897fb90e8f6d3fa0617a61987b37?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 184,
    "organizations": [
      "HackerSchool12"
    ],
    "contributions": 471,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Alex Gaynor",
    "login": "alex",
    "location": "San Francisco",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/edcdfd5affb524e0f88ec1a00ed3fe5d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 739,
    "organizations": [
      "django",
      "rdio"
    ],
    "contributions": 470,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Matt Aimonetti",
    "login": "mattetti",
    "location": "San Diego, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/c69521d6e22fc0bbd69337ec8b1698df?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 474,
    "organizations": [
      "livingsocial",
      "postrank-labs",
      "rubymotion"
    ],
    "contributions": 469,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tomasz Figa",
    "login": "tom3q",
    "location": "Warsaw, Poland",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/3f1d2a5bea8b26ed3480b27795c6049b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 196,
    "organizations": [
      "sg3"
    ],
    "contributions": 463,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Weibin Yao(姚伟斌)",
    "login": "yaoweibin",
    "location": "Hangzhou, China",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/8a92465c849dda1cd172e8727e5c77d2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 171,
    "organizations": [
      "taobao"
    ],
    "contributions": 462,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Davies Lliu",
    "login": "davies",
    "location": "Beijing, China",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/dc19c0038b42d5d8109bf050335c13ab?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 195,
    "organizations": [],
    "contributions": 461,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Chris Anderson",
    "login": "jchris",
    "location": "Mountain View, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/fc67805d4cb2c9d9e159702e943f9a7c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 459,
    "organizations": [
      "membase",
      "couchapp",
      "oreilly",
      "couchbase",
      "couchbaselabs",
      "expensecat"
    ],
    "contributions": 459,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "cho45",
    "login": "cho45",
    "location": "Japan",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/c6fb2af8cf4ae9047afeb92990e7f61f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 360,
    "organizations": [
      "perl-users-jp",
      "blosxom-fanatics"
    ],
    "contributions": 458,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yuichiro MASUI",
    "login": "masuidrive",
    "location": "Tokyo, JP",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/0ec58a040e1e4e959c8566484b4bba19?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 468,
    "organizations": [
      "appcelerator",
      "mobiruby"
    ],
    "contributions": 455,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 10
  },
  {
    "name": "Eric Barnes",
    "login": "ericbarnes",
    "location": "North Carolina",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/0e7b6742f9d7e1a8a213d74b429b9e8f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 253,
    "organizations": [
      "EllisLab",
      "68kb",
      "laravel",
      "UserScape"
    ],
    "contributions": 455,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Josh Lockhart",
    "login": "codeguy",
    "location": "Chapel Hill, North Carolina",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/ec8434027a0055891a341f83e7f48566?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 315,
    "organizations": [],
    "contributions": 451,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "bdarnell",
    "location": "",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/5947d19db094dcaf873c8b886a725d06?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 178,
    "organizations": [
      "dropbox"
    ],
    "contributions": 450,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Paul Querna",
    "login": "pquerna",
    "location": "San Francisco, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/1085d3830662765fb7e5b48bd761d8cf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 222,
    "organizations": [
      "cloudkick",
      "nko",
      "luvit"
    ],
    "contributions": 449,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Qiang Xue",
    "login": "qiangxue",
    "location": "Virginia, U.S.A.",
    "language": "",
    "gravatar": "https://secure.gravatar.com/avatar/f5897d0a3ee1c390cce0da65e08044e9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 201,
    "organizations": [
      "yiisoft"
    ],
    "contributions": 448,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "youpy",
    "login": "youpy",
    "location": "Japan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/05629ee80e4e8db92fe0bfd70231a2ca?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 162,
    "organizations": [],
    "contributions": 448,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Max Howell",
    "login": "mxcl",
    "location": "Wayland, MI",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/1510549f9353c9859b7b3c81872df09c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 585,
    "organizations": [
      "Homebrew",
      "rackit"
    ],
    "contributions": 446,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "TAKANO Mitsuhiro",
    "login": "takano32",
    "location": "Roppongi, Tokyo, Japan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/eba4a40bdae5edfe1589601c050a2b96?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 170,
    "organizations": [
      "sinsai",
      "hametsu",
      "java-ja",
      "maltine-records",
      "International-Space-Apps-Challenge-Tokyo",
      "Rosetta-FizzBuzz",
      "openstack-ja",
      "orezeni",
      "Rosetta-Ack"
    ],
    "contributions": 446,
    "contributionsStreak": 21,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Shota Fukumori",
    "login": "sorah",
    "location": "Utsunomiya, Tochigi, Japan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/626ca235e8dab778c5bad6fc10e94ad8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 252,
    "organizations": [
      "cookpad",
      "pasra",
      "sinsai",
      "gentoojp"
    ],
    "contributions": 446,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jeremy Kemper",
    "login": "jeremy",
    "location": "Tempe, AZ",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/24d2f8804e6bb4b7ea6bd11e0a586470?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 440,
    "organizations": [
      "rails",
      "37signals",
      "rack"
    ],
    "contributions": 440,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jon Rohan",
    "login": "jonrohan",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/4a182249dc31bc436c7f6fe599402ca5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 165,
    "organizations": [
      "github",
      "botriot"
    ],
    "contributions": 440,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mikito Takada",
    "login": "mixu",
    "location": "San Francisco, California",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f0af2953911805542c66fd43b2f8fc38?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 197,
    "organizations": [
      "zendesk"
    ],
    "contributions": 439,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "hitode909",
    "login": "hitode909",
    "location": "",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/cc696ce673253d3bd21b3aa9e7927f39?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 160,
    "organizations": [
      "hatena",
      "termtter",
      "HatenaIntern2012"
    ],
    "contributions": 435,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Max Goodman",
    "login": "chromakode",
    "location": "frontendshire",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/ceb705506e72e2e845b6c0d577fb8ca9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 221,
    "organizations": [
      "reddit"
    ],
    "contributions": 433,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Idan Gazit",
    "login": "idan",
    "location": "Tel Aviv, Israel",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/0d877f80c535471ede57c7a4c0f487de?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 195,
    "organizations": [
      "django",
      "umbrellaco"
    ],
    "contributions": 429,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Young Hahn",
    "login": "yhahn",
    "location": "DC",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b51d43c8d398a0bfad8030d4d026281a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 169,
    "organizations": [
      "developmentseed",
      "mapbox"
    ],
    "contributions": 414,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James Turnbull",
    "login": "jamtur01",
    "location": "Brooklyn, New York",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/31cc2100279326dd6148a7e163692097?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 157,
    "organizations": [
      "puppetlabs"
    ],
    "contributions": 412,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Santiago Pastorino",
    "login": "spastorino",
    "location": "Montevideo, Uruguay",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d04d064616ae7fd752fdcb8daa5abdd6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 250,
    "organizations": [
      "rails",
      "wyeworks",
      "rubinius",
      "rails-api"
    ],
    "contributions": 411,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Guillaume Bort",
    "login": "guillaumebort",
    "location": "Paris",
    "language": "Scala",
    "gravatar": "https://secure.gravatar.com/avatar/adcd749d588278dbd255068c1d4b20d3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 287,
    "organizations": [
      "zenexity",
      "playframework",
      "linkedin",
      "typesafehub"
    ],
    "contributions": 411,
    "contributionsStreak": 13,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Bulat Shakirzyanov",
    "login": "avalanche123",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/f000c9b4dd0656f60de1dc9e75f7386c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 273,
    "organizations": [
      "twilio",
      "doctrine",
      "FriendsOfSymfony",
      "nko2"
    ],
    "contributions": 410,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "David Heinemeier Hansson",
    "login": "dhh",
    "location": "Chicago, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ed9635566b34ade32274f510f0f9a6d2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 3,
    "organizations": [
      "rails",
      "37signals",
      "tolk"
    ],
    "contributions": 406,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Armin Ronacher",
    "login": "mitsuhiko",
    "location": "United Kingdom / Austria",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/181de1fb11dffe39774f3e2e23cda3b6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "fireteam",
      "core"
    ],
    "contributions": 405,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Nate Abele",
    "login": "nateabele",
    "location": "Philadelphia, PA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/7fca546408cc6d46ab158f06baed2535?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 201,
    "organizations": [
      "UnionOfRAD",
      "uor",
      "OctoBear"
    ],
    "contributions": 404,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Elijah Insua",
    "login": "tmpvar",
    "location": "Roaming",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2893bc1693002e652210b3705f74b5dd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 358,
    "organizations": [
      "nko",
      "flatiron",
      "appjs"
    ],
    "contributions": 403,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Caleb Troughton",
    "login": "imakewebthings",
    "location": "Corning, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/42ab3a7cc78df73ddcb06c56e4c82892?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 276,
    "organizations": [],
    "contributions": 403,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Guilherme Blanco",
    "login": "guilhermeblanco",
    "location": "Toronto, ON, Canada",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/5f258a6128e0e026bf91f7ace0f85967?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 283,
    "organizations": [
      "doctrine",
      "instaclick",
      "phpedia"
    ],
    "contributions": 402,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nando Vieira",
    "login": "fnando",
    "location": "São Paulo, Brazil",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/cb5d9e9095cd41b636764a85e57ade4b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 523,
    "organizations": [
      "guru-sp",
      "codeplane",
      "hellobits"
    ],
    "contributions": 397,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Mikeal Rogers",
    "login": "mikeal",
    "location": "Oakland, CA, USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/d8eba8dd0e89a0580ec4157681121a79?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 737,
    "organizations": [
      "expensecat",
      "Abacus",
      "thenodefirm"
    ],
    "contributions": 396,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andreas Gal",
    "login": "andreasgal",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/dc614466f1a6d8f9c0e7a868bda77196?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 256,
    "organizations": [],
    "contributions": 395,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Karl Swedberg",
    "login": "kswedberg",
    "location": "Grand Rapids, MI",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/0f6923fc391653284355a60fb4974e86?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 266,
    "organizations": [
      "jquery"
    ],
    "contributions": 395,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Theodore Watson",
    "login": "ofTheo",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/3b0860ec0180f7fb7ac4d2cd9252ec3f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 406,
    "organizations": [
      "fatlab"
    ],
    "contributions": 392,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "evilsocket",
    "login": "evilsocket",
    "location": "Rome, Italy",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/299758694008b3a4af42fc193774a47f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [],
    "contributions": 392,
    "contributionsStreak": 30,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Shaun McCormick",
    "login": "splittingred",
    "location": "Austin, TX",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/8382888f3b3259f4190d3314fc5ab770?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [
      "modxcms"
    ],
    "contributions": 390,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "unconed",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/867cde5ab563c2a80a3d8b7c5b98918a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 500,
    "organizations": [],
    "contributions": 388,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jeremy Bush",
    "login": "zombor",
    "location": "Kenosha, WI",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/d5620d3ea86667ae2e2ad0d174b8be92?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 183,
    "organizations": [
      "kohana",
      "sittercity",
      "vendo"
    ],
    "contributions": 385,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dexter.Yy",
    "login": "dexteryy",
    "location": "Beijing, China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/cb4e79a629b12581cdba6dc22445c42b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 203,
    "organizations": [
      "douban-f2e",
      "mwip"
    ],
    "contributions": 384,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brandon Keepers",
    "login": "bkeepers",
    "location": "Holland, MI, US",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/20bfe76b3d6105641f879fe45cfc9272?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 359,
    "organizations": [
      "github",
      "orderedlistinc"
    ],
    "contributions": 384,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Jamie Rumbelow",
    "login": "jamierumbelow",
    "location": "Cambridge, UK",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/92049f10bad31bde78023f9a19cac0e1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 268,
    "organizations": [
      "efendibooks"
    ],
    "contributions": 381,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Heather Arthur",
    "login": "harthur",
    "location": "San Francisco, USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/1c076cf3c465f363784904ed114a1e41?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 483,
    "organizations": [],
    "contributions": 380,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ryan Bates",
    "login": "ryanb",
    "location": "Southern Oregon",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/8dbf316d36ff66aad4869a4fc3cfbd37?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 4,
    "organizations": [
      "railscasts"
    ],
    "contributions": 377,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Visual Idiot",
    "login": "idiot",
    "location": "UK",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b43844f49f9430ad35a6ee1e18be9239?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 429,
    "organizations": [
      "anchorcms",
      "codin"
    ],
    "contributions": 376,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Corey Haines",
    "login": "coreyhaines",
    "location": "chicago, il",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/3d7807bb66e1a0c68c73ab2daaa77d8f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 297,
    "organizations": [
      "trunkclub",
      "kidscodecamp",
      "coderetreat"
    ],
    "contributions": 375,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dan Croak",
    "login": "croaky",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/8e2b996de3842c6ef7e68a82fa5f01f5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 165,
    "organizations": [
      "thoughtbot",
      "bostonrb",
      "copycopter"
    ],
    "contributions": 374,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Arun Agrawal",
    "login": "arunagw",
    "location": "India",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ee85853909657f47c8a68e8a9bc7d992?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 173,
    "organizations": [
      "rails",
      "thoughtbot",
      "jruby",
      "rubyrockers",
      "bangaloreruby"
    ],
    "contributions": 374,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rob Fuller",
    "login": "mubix",
    "location": "",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/9ac8c62bcc9c854fbea50ea012bbb082?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 188,
    "organizations": [],
    "contributions": 368,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "云风",
    "login": "cloudwu",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/c4bdfcddb1a82bd027e8bdd6987e607e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [],
    "contributions": 368,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "finscn",
    "login": "finscn",
    "location": "China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/3d44a8d4926fdb2461be5f3210c42ce5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 166,
    "organizations": [],
    "contributions": 368,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Daniel Kerr",
    "login": "opencart",
    "location": "Hong Kong",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b01bef97fda2202dc46862444540f159?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 275,
    "organizations": [],
    "contributions": 365,
    "contributionsStreak": 47,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Alex Ott",
    "login": "alexott",
    "location": "Paderborn, Germany",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/9b31b9d123bff80f00317a1df0dd00e2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 165,
    "organizations": [
      "SOCI"
    ],
    "contributions": 362,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Gareth Rushgrove",
    "login": "garethr",
    "location": "Cambridge",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/98234c645fe8c935edc0fec0186d28b8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 226,
    "organizations": [
      "alphagov"
    ],
    "contributions": 360,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Keith Rarick",
    "login": "kr",
    "location": "San Francisco",
    "language": "Go",
    "gravatar": "https://secure.gravatar.com/avatar/b88d0f594813e7c5cd925043396738a7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 224,
    "organizations": [
      "heroku",
      "ha",
      "beanstalkd"
    ],
    "contributions": 359,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Mat Marquis",
    "login": "Wilto",
    "location": "Somerville, MA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/36386473ee7de091db26bd82f8d18ca8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 232,
    "organizations": [
      "filamentgroup",
      "jquery",
      "h5bp",
      "ot-crew",
      "alistapart",
      "ResponsiveImagesCG"
    ],
    "contributions": 359,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Jonas Bonér",
    "login": "jboner",
    "location": "Uppsala, Sweden",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/e0b5787d1a1935a2800e0bbffc81c196?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 409,
    "organizations": [
      "typesafehub",
      "akka"
    ],
    "contributions": 357,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "James Padolsey",
    "login": "padolsey",
    "location": "London, UK, Europe",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/e5852a88a22128ad80f78a1c4f20ca1c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 547,
    "organizations": [],
    "contributions": 356,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Lea Verou",
    "login": "LeaVerou",
    "location": "Greece",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/3869e93ce6b2a22e37cf13281d9e6f75?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [
      "webplatform"
    ],
    "contributions": 355,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yoshihiro Sugi",
    "login": "sugyan",
    "location": "Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/84394d788041102b59ac0b157fcc0244?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 235,
    "organizations": [],
    "contributions": 353,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Miško Hevery",
    "login": "mhevery",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/8d67eedc1442e8392a7add197abacd66?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 209,
    "organizations": [
      "angular"
    ],
    "contributions": 351,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James Golick",
    "login": "jamesgolick",
    "location": "Vancouver, BC",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/f6eddf2f983d23c2d031e407852625e9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 397,
    "organizations": [
      "bitlove"
    ],
    "contributions": 349,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Shuo Chen",
    "login": "chenshuo",
    "location": "China",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/f0f94369d2707939f7b27bc969886d91?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 441,
    "organizations": [],
    "contributions": 347,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Scott Chacon",
    "login": "schacon",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/9375a9529679f1b42b567a640d775e7d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 6,
    "organizations": [
      "github",
      "git",
      "progit",
      "ghtraining",
      "libgit2",
      "speakfreely"
    ],
    "contributions": 347,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mark Murphy",
    "login": "commonsguy",
    "location": "",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/5ff53c2b4f6cc66ee989bb9d9effe119?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [],
    "contributions": 346,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Anthony Ferrara",
    "login": "ircmaxell",
    "location": "New York, NY",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/06a61b14cb2db07126dace77d8c458b0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 177,
    "organizations": [],
    "contributions": 345,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Magnus Holm",
    "login": "judofyr",
    "location": "Oslo, Norway",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/b397b498cc02503a2d86c86176f7fd3e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 172,
    "organizations": [
      "camping",
      "Nordaaker",
      "slim-template"
    ],
    "contributions": 345,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Bartek Szopka",
    "login": "bartaz",
    "location": "Poznań, Poland",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b1d34875b6175ed2b5377b13a4782dba?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 539,
    "organizations": [],
    "contributions": 344,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Luciano Ramalho",
    "login": "ramalho",
    "location": "São Paulo - Brasil",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/27c093d0834208f4712faaaec38c2c5c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 186,
    "organizations": [
      "pythonbrasil",
      "oturing",
      "rebec",
      "acpy"
    ],
    "contributions": 344,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "brian d foy",
    "login": "briandfoy",
    "location": "",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/edd8638efe875601bfe394a8aea5b16d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 180,
    "organizations": [],
    "contributions": 343,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Chris Williams",
    "login": "voodootikigod",
    "location": "Reston, VA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/fff2222d0a24009fe938bba62946201a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 276,
    "organizations": [
      "thenodefirm",
      "jsconf",
      "CommunityJS",
      "nodecopter"
    ],
    "contributions": 343,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ben Edmunds",
    "login": "benedmunds",
    "location": "Phenix City, AL, USA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/22f21d5c22b930fd35dd98f25dedf6a4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 239,
    "organizations": [
      "appstucco"
    ],
    "contributions": 342,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kit Cambridge",
    "login": "kitcambridge",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/bb3a685a3b48e5332aeb4cc0a01380c5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 185,
    "organizations": [
      "bestiejs",
      "Voxer"
    ],
    "contributions": 341,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brad Larson",
    "login": "BradLarson",
    "location": "Madison, WI USA",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/52a2ffb44b1c11ab9001cb67e0a0021c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 203,
    "organizations": [],
    "contributions": 340,
    "contributionsStreak": 18,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "James Dennis",
    "login": "j2labs",
    "location": "Brooklyn, NY",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/532c88ceb3cccb03ad63bf9184b868ad?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 248,
    "organizations": [
      "hackandtell",
      "brubeck"
    ],
    "contributions": 338,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brock Whitten",
    "login": "sintaxi",
    "location": "Vancouver",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/bcf46750ba13cf50684639eecda1aa4f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 190,
    "organizations": [
      "phonegap",
      "xui",
      "chloi"
    ],
    "contributions": 337,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mark Jaquith",
    "login": "markjaquith",
    "location": "Tampa, FL",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/682b7a49f9ed567186c4d1f707fe4523?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 434,
    "organizations": [
      "WordPress"
    ],
    "contributions": 336,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Kris Zyp",
    "login": "kriszyp",
    "location": "Sandy, UT",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/7c973216b407468b07f9d7da8e0442f6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 264,
    "organizations": [
      "dojo",
      "persvr",
      "SitePen",
      "json-schema"
    ],
    "contributions": 335,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ilya Grigorik",
    "login": "igrigorik",
    "location": "Mountain View, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a17f0025641b4be419a6cd3845e55dd2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "postrank-labs",
      "google",
      "pagespeed",
      "html5rocks"
    ],
    "contributions": 335,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mohamed Mansour",
    "login": "mohamedmansour",
    "location": "Mountain View, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/0609d62b7dc0462fd2002c60a0cf53f3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 220,
    "organizations": [
      "hangout"
    ],
    "contributions": 332,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Limor \"Ladyada\" Fried",
    "login": "ladyada",
    "location": "New York, NY",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/3f7ca151e1f7f7dead8b2db60aa744c1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 208,
    "organizations": [
      "adafruit"
    ],
    "contributions": 331,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Henrique Bastos",
    "login": "henriquebastos",
    "location": "Rio de Janeiro, Brasil",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/d47e5a6a94e793ad1a1c315d6ab63877?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 327,
    "organizations": [
      "horaextra",
      "dojorio",
      "dekode",
      "loogica"
    ],
    "contributions": 331,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Stuart Sierra",
    "login": "stuartsierra",
    "location": "",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/55878d0196b91803f9cb2c372b0551d3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 179,
    "organizations": [
      "clojure",
      "relevance"
    ],
    "contributions": 329,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Sam Vermette",
    "login": "samvermette",
    "location": "Montréal",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/807c0d9d496b2755f4fcb75493479b9b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 508,
    "organizations": [],
    "contributions": 327,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Michel Martens",
    "login": "soveran",
    "location": "Buenos Aires, Argentina",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a18d75bcb4dc90c5944e48aa3ef7441a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 181,
    "organizations": [
      "ruby",
      "rubysur",
      "twpil",
      "redis",
      "rubyargentina"
    ],
    "contributions": 326,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brian LeRoux",
    "login": "brianleroux",
    "location": "San Francisco, USA || Vancouver, Canada",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/778a0220d30fefe14c89cec0419fc389?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 564,
    "organizations": [
      "nitobi",
      "phonegap",
      "xui",
      "adobe",
      "cordova",
      "thenodefirm"
    ],
    "contributions": 325,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Martin Grenfell",
    "login": "scrooloose",
    "location": "UK",
    "language": "VimL",
    "gravatar": "https://secure.gravatar.com/avatar/3853788896fe7234d126dd3b7576d47a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 446,
    "organizations": [
      "PlayMob",
      "rhokmtl"
    ],
    "contributions": 324,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Daisuke Murase",
    "login": "typester",
    "location": "Kamakura, Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/fbc6511bcc0649366086c0445fb456d3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 310,
    "organizations": [],
    "contributions": 324,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Divya Manian",
    "login": "nimbupani",
    "location": "San Francisco",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/c64a99fbbc7785e6cf9588a8777ba083?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 681,
    "organizations": [
      "adobe",
      "h5bp",
      "adobe-webplatform"
    ],
    "contributions": 322,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Wayne E. Seguin",
    "login": "wayneeseguin",
    "location": "Buffalo, NY",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/b9b5ff40232c1dfd61238c2a90467f84?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 421,
    "organizations": [
      "rubinius",
      "railsinstaller",
      "sm",
      "dtf-gems",
      "rvm"
    ],
    "contributions": 317,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ryan Florence",
    "login": "rpflorence",
    "location": "Salt Lake City, UT",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/749001c9fe6927c4b069a45c2a3d68f7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 158,
    "organizations": [
      "instructure",
      "UtahJS",
      "umdjs",
      "ot-crew"
    ],
    "contributions": 315,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Trevor Turk",
    "login": "trevorturk",
    "location": "Chicago",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/c0b6fb3807d7d4f255463ed168c75897?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 243,
    "organizations": [
      "37signals",
      "carrierwave-lib"
    ],
    "contributions": 312,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rasmus Andersson",
    "login": "rsms",
    "location": "San Francisco",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2549260c9a75104a1f2e9ab18a44d92d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 844,
    "organizations": [],
    "contributions": 310,
    "contributionsStreak": 14,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Josh Nichols",
    "login": "technicalpickles",
    "location": "Savannah, GA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/1c1aabc1abed5cce37b192dd00f0f28c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 268,
    "organizations": [
      "railsmachine"
    ],
    "contributions": 310,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nick Lockwood",
    "login": "nicklockwood",
    "location": "UK",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/cbf84770b8cf76a258ffe446f177c7f9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 530,
    "organizations": [],
    "contributions": 308,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "simurai",
    "login": "simurai",
    "location": "Netherlands",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/722a7ba9dc9331c79d815e7cc2220d70?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 366,
    "organizations": [],
    "contributions": 305,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Karl Seguin",
    "login": "karlseguin",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/6f448664cd294829b9ed0cd356f91cb1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 320,
    "organizations": [
      "mogade",
      "littleio"
    ],
    "contributions": 304,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Lourens Naudé",
    "login": "methodmissing",
    "location": "Funchal, Madeira, Portugal",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/28314d64ae18c43f6b5428dc00a48e6e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 186,
    "organizations": [
      "zeromq",
      "wildfireapp",
      "postrank-labs"
    ],
    "contributions": 302,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Darcy Laycock",
    "login": "Sutto",
    "location": "Perth, Western Australia",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/72d5f419e4a520ff4fe452400eac83d4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 208,
    "organizations": [
      "railsrumble",
      "YouthTree"
    ],
    "contributions": 302,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jonathan H. Wage",
    "login": "jwage",
    "location": "Nashville, TN",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/f76041410752f9019752b6afd2bebc2a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 505,
    "organizations": [
      "opensky",
      "doctrine",
      "symfony-cmf"
    ],
    "contributions": 302,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Gianni Chiappetta",
    "login": "gf3",
    "location": "Victoria, BC, Canada",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/4b0209ae3652cc5a7d53545e759fbe39?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 174,
    "organizations": [
      "jquery",
      "Runlevel6",
      "metalabdesign",
      "ot-crew"
    ],
    "contributions": 301,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kazuho Oku",
    "login": "kazuho",
    "location": "Tokyo",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/a1f8ed12fefd7759ef8838e62ee409a6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 225,
    "organizations": [
      "jsx"
    ],
    "contributions": 299,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nick Sutterer",
    "login": "apotonick",
    "location": "Freiburg/Germany",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/0fe13386ba69a128e9fadc19ae9d96be?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 252,
    "organizations": [],
    "contributions": 299,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Eric Butler",
    "login": "codebutler",
    "location": "Seattle, WA",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/9b2d2f2c832191eadc1667bf2c3f224f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 264,
    "organizations": [
      "Neg9",
      "irseas",
      "osmobuntu"
    ],
    "contributions": 297,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Aman Gupta",
    "login": "tmm1",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d47656e20ff5e42f125fc5ea0fd636c6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 815,
    "organizations": [
      "github",
      "rubinius",
      "postrank-labs",
      "graphite-project"
    ],
    "contributions": 296,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "John Resig",
    "login": "jeresig",
    "location": "Brooklyn, NY",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b3e04a46e85ad3e165d66f5d927eb609?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 5,
    "organizations": [
      "Khan",
      "jquery",
      "Abacus"
    ],
    "contributions": 295,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Robbie Hanson",
    "login": "robbiehanson",
    "location": "San Francisco",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/26826b55dce2a1b8ee0ddc7293d8b08e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 372,
    "organizations": [
      "yaptv"
    ],
    "contributions": 293,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Trek Glowacki",
    "login": "trek",
    "location": "Chicago, IL",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/1764a8db261a619b1a8e35c9498c0edf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 189,
    "organizations": [],
    "contributions": 288,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Phil Haack",
    "login": "Haacked",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/cdf546b601bf29a7eb4ca777544d11cd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 796,
    "organizations": [
      "github",
      "NuGet"
    ],
    "contributions": 287,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Thomas Fuchs",
    "login": "madrobby",
    "location": "Philadelphia, PA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/cf287bd57ec416f58baa2454fdd28e1e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "cheerful"
    ],
    "contributions": 283,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mike Chambers",
    "login": "mikechambers",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/7786885cb16d2e55d7c8d06bd033a3d8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 350,
    "organizations": [
      "adobe",
      "flex-users"
    ],
    "contributions": 282,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Swaroop C H",
    "login": "swaroopch",
    "location": "India",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/7804a955e69b43b820a3e248c2fa6642?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [],
    "contributions": 281,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jerome Gravel-Niquet",
    "login": "jeromegn",
    "location": "Montreal, QC",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 201,
    "organizations": [
      "DocumentUp",
      "Planbox"
    ],
    "contributions": 280,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "motemen",
    "login": "motemen",
    "location": "Kyoto, Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/9b741203feda475cbeae8b384de9f415?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [
      "hatena"
    ],
    "contributions": 279,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ryan Petrich",
    "login": "rpetrich",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/bdfc3c6624b35a109d0a6037e00105e4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 513,
    "organizations": [
      "tweakweek"
    ],
    "contributions": 279,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Moxie Marlinspike",
    "login": "moxie0",
    "location": "San Francisco",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/3039ee38b82701f3d0dd0fbb901a754f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 412,
    "organizations": [
      "WhisperSystems",
      "tack"
    ],
    "contributions": 279,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Zachary Voase",
    "login": "zacharyvoase",
    "location": "",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/fcd3a40babe606ef30cb342a6a74c54c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 165,
    "organizations": [
      "dvxhouse"
    ],
    "contributions": 276,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Cody Lindley",
    "login": "codylindley",
    "location": "boise, id",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/0798df5e6e970c56326bd6ba8eb30ef3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 189,
    "organizations": [
      "jquery"
    ],
    "contributions": 275,
    "contributionsStreak": 19,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "jugyo",
    "login": "jugyo",
    "location": "Tokyo",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/142f56fa109167d398a312e968485087?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 294,
    "organizations": [
      "termtter",
      "spice-life"
    ],
    "contributions": 274,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Alvaro Videla",
    "login": "videlalvaro",
    "location": "Zurich",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/b3eb24dc767e178a2c7d67f1ee1af11f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 227,
    "organizations": [],
    "contributions": 273,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kyle Simpson",
    "login": "getify",
    "location": "Austin, TX",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/35761e3936deba2f8189c2d20982c771?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 251,
    "organizations": [],
    "contributions": 273,
    "contributionsStreak": 12,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kris Wallsmith",
    "login": "kriswallsmith",
    "location": "Portland, Oregon USA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/097f39f4cd9a83a03d92c246a2797880?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 540,
    "organizations": [
      "symfony",
      "opensky",
      "doctrine",
      "FriendsOfSymfony"
    ],
    "contributions": 272,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Wang Dàpéng",
    "login": "wong2",
    "location": "Beijing, China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/c4304a7108b702fabbaac8484393c18b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 192,
    "organizations": [],
    "contributions": 269,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "unclecheese",
    "location": "",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/b6b462f53b1459985277ece4224cf490?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 168,
    "organizations": [],
    "contributions": 267,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Joe Hewitt",
    "login": "joehewitt",
    "location": "Los Gatos, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/15cf42a96576559fee2a0f904427b8a0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 961,
    "organizations": [],
    "contributions": 263,
    "contributionsStreak": 15,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Michael Bleigh",
    "login": "mbleigh",
    "location": "Kansas City, MO",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/69dc78b59ef008c58e6e842f9f3e0624?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 403,
    "organizations": [
      "intridea",
      "nko",
      "divshot"
    ],
    "contributions": 263,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Damian Edwards",
    "login": "DamianEdwards",
    "location": "Redmond, WA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/538d845ead710ee91dfa89724b90b2e2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 169,
    "organizations": [
      "SignalR"
    ],
    "contributions": 262,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Sam Stephenson",
    "login": "sstephenson",
    "location": "Chicago",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/5b9fe87ec1faa67a4599782930f45ec9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "37signals"
    ],
    "contributions": 261,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Jacob Kaplan-Moss",
    "login": "jacobian",
    "location": "Lawrence, KS",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/2f5463832ccb768ccb4a1ca3607c27ef?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 963,
    "organizations": [
      "django",
      "revsys"
    ],
    "contributions": 256,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Drew Neil",
    "login": "nelstrom",
    "location": "London, UK",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/802afd5856ed0054d7d1851ea21cbabe?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 562,
    "organizations": [
      "radiant",
      "senchalearn",
      "StudioNelstrom"
    ],
    "contributions": 256,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Steven Sanderson",
    "login": "SteveSanderson",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/ff2012dcfd9ec0c29df3d4c164cc0d14?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 625,
    "organizations": [],
    "contributions": 256,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Robey Pointer",
    "login": "robey",
    "location": "San Francisco, CA",
    "language": "Scala",
    "gravatar": "https://secure.gravatar.com/avatar/08759e178c55c968a861367e55f56ad9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 428,
    "organizations": [],
    "contributions": 255,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 8
  },
  {
    "name": "",
    "login": "verekia",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/4bad4d8f19db31b9478deaad7fa1cfaf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 167,
    "organizations": [],
    "contributions": 247,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dave Gamache",
    "login": "dhgamache",
    "location": "SF Bay Area",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/14267e25aa6c7ef4f396afc483d6f238?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 288,
    "organizations": [
      "colossal",
      "maker"
    ],
    "contributions": 246,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Chris Eppstein",
    "login": "chriseppstein",
    "location": "San Jose, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/723ee972f9e5078aeda85cdf0db3f3c8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 625,
    "organizations": [
      "caring",
      "blueprintcss",
      "Compass",
      "haml"
    ],
    "contributions": 246,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Daniel Shaw",
    "login": "dshaw",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/dc2beefe13f65e75fd74eae1b1c1b803?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 256,
    "organizations": [
      "RebelVox",
      "dreadnode",
      "nko",
      "thenodefirm",
      "Voxer"
    ],
    "contributions": 246,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Peteris Krumins",
    "login": "pkrumins",
    "location": "Riga, Latvia",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/9055b6c1d07708555ec584d03c387f15?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "browserling"
    ],
    "contributions": 244,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Scott Schiller",
    "login": "scottschiller",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2950ef260cb2deedb48f94a883e471c3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 189,
    "organizations": [
      "flickr"
    ],
    "contributions": 244,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Bill Erickson",
    "login": "billerickson",
    "location": "Austin, TX",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/ae510affa31e5b946623bda4ff969b67?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [],
    "contributions": 244,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Philip Guo",
    "login": "pgbovine",
    "location": "",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/6264a10fa779f0643400f7fcf2c32dd4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 165,
    "organizations": [],
    "contributions": 244,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "honcheng",
    "login": "honcheng",
    "location": "Singapore",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/a397a02e62916831379b915a0b5a3a9d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 379,
    "organizations": [
      "buUuk"
    ],
    "contributions": 243,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Julia West",
    "login": "juliamae",
    "location": "Cleveland, Ohio",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a0fde053889106001f4d0a0886b68a3a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 194,
    "organizations": [
      "github",
      "homesteading"
    ],
    "contributions": 240,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Gary Bernhardt",
    "login": "garybernhardt",
    "location": "Seattle, WA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/0f3aad429c4fe35ea2bcffa654995a5e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 857,
    "organizations": [
      "speakerconf"
    ],
    "contributions": 237,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yusuke Yamamoto",
    "login": "yusuke",
    "location": "Tokyo, Japan",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/c74faf8a5336f2898b08202e98211e06?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 224,
    "organizations": [
      "agorava"
    ],
    "contributions": 236,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tianyi Cui",
    "login": "tianyicui",
    "location": "Hangzhou, China",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/004518b2a8e91d0054a756ee4c425a9d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 293,
    "organizations": [],
    "contributions": 236,
    "contributionsStreak": 17,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Paul Lewis",
    "login": "paullewis",
    "location": "London, United Kingdom",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/19f2e112d349e75c73c95d549220f874?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 192,
    "organizations": [
      "google",
      "GoogleChrome",
      "html5rocks",
      "WebGLTools",
      "WebIntents"
    ],
    "contributions": 233,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Matthias Käppler",
    "login": "mttkay",
    "location": "Berlin, Germany",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/5cfa38a7e54e6c6a850dc6169a699246?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [
      "qype"
    ],
    "contributions": 233,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jonathan 'Wolf' Rentzsch",
    "login": "rentzsch",
    "location": "Chicagoland+WI",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/4657022b56c5a4cc420c38ed5c99d413?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 530,
    "organizations": [],
    "contributions": 232,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Paul Kinlan",
    "login": "PaulKinlan",
    "location": "a few places.",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b590f0fb3aba34aee093cfa1406eac0b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 288,
    "organizations": [
      "google",
      "GoogleChrome",
      "html5rocks",
      "WebIntents"
    ],
    "contributions": 232,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Michael Hartl",
    "login": "mhartl",
    "location": "Pasadena, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ffda7d145b83c4b118f982401f962ca6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 653,
    "organizations": [],
    "contributions": 232,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mike Alsup",
    "login": "malsup",
    "location": "@malsup on twitter",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/bc5a05e7a6824f0b9aa95d9b7a0b8beb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 434,
    "organizations": [],
    "contributions": 231,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Peter Seibel",
    "login": "gigamonkey",
    "location": "Berkeley, CA",
    "language": "Common",
    "gravatar": "https://secure.gravatar.com/avatar/8fec02c9a2897b309447fe2df2d653b8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 205,
    "organizations": [],
    "contributions": 230,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Felix Gnass",
    "login": "fgnass",
    "location": "Hamburg, Germany",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f1f2e1842f6ff681a6d1b0a2405d0117?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 174,
    "organizations": [
      "riotfamily",
      "neteye"
    ],
    "contributions": 230,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mugunth Kumar",
    "login": "MugunthKumar",
    "location": "Singapore",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/eb567948b729268cefe4b8dfaa8dea63?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 506,
    "organizations": [
      "iosptl"
    ],
    "contributions": 229,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Brandon Mathis",
    "login": "imathis",
    "location": "Birmingham, AL",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/c86443373fbfe92996aa882d0d7a59f8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 382,
    "organizations": [
      "radiant",
      "octopress",
      "Compass",
      "MongoHQ"
    ],
    "contributions": 229,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Daniel Lindsley",
    "login": "toastdriven",
    "location": "Lawrence, KS",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/ea39e564e226a87b507a00d46e471e10?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 390,
    "organizations": [],
    "contributions": 227,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brad Frost",
    "login": "bradfrost",
    "location": "Pittsburgh, PA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b3af6edec1a3c41ed3fac5830df8d0de?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 230,
    "organizations": [],
    "contributions": 226,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James Bennett",
    "login": "ubernostrum",
    "location": "Lawrence, Kansas, USA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/108534f65d8d2d7de6995973c1f49889?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 184,
    "organizations": [
      "django"
    ],
    "contributions": 223,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Nick Fitzgerald",
    "login": "fitzgen",
    "location": "Bellingham, WA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/6766096e8ae81ad6b3b82b9c12be19e0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 170,
    "organizations": [
      "mozilla"
    ],
    "contributions": 222,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Evan Miller",
    "login": "evanmiller",
    "location": "Chicago, IL",
    "language": "Erlang",
    "gravatar": "https://secure.gravatar.com/avatar/c28f2fbd39539591e374a9585a1fb736?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [
      "agner"
    ],
    "contributions": 222,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Victor Coulon",
    "login": "Victa",
    "location": "Paris, France",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/ee90b8b18179134ef3b45739912fb373?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 190,
    "organizations": [
      "hull"
    ],
    "contributions": 222,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Devin Price",
    "login": "devinsays",
    "location": "Austin, Texas",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/a9c17d250b9b97a7baf76ac13d817a08?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 258,
    "organizations": [],
    "contributions": 221,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jamie Wilkinson",
    "login": "jamiew",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/7f67a350859f0ab846c91afa1f66cc4f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 192,
    "organizations": [
      "fatlab",
      "artzilla",
      "vhx",
      "scratchml"
    ],
    "contributions": 221,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Florian Ragwitz",
    "login": "rafl",
    "location": "Chemnitz, Germany",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/b7623d3ead9eb46172a44e1bd761b37a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 274,
    "organizations": [
      "moose",
      "bricoleurs",
      "dbsrgits",
      "CPAN-API",
      "k9mail",
      "tpf",
      "perl-doc-cats",
      "kiokudb",
      "perl-catalyst",
      "MoeOrganization"
    ],
    "contributions": 221,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Paolo Fragomeni",
    "login": "hij1nx",
    "location": "NYC",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2c03b6faf7b9816f159af69e240221fd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 583,
    "organizations": [
      "nko",
      "flatiron",
      "nodedocs",
      "WindowsAzure",
      "oqulr"
    ],
    "contributions": 221,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Adrian Holovaty",
    "login": "adrianholovaty",
    "location": "Chicago",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/0e4a313a845e7e83d8c9e5dd97f7d016?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [
      "django"
    ],
    "contributions": 220,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Abraham Williams",
    "login": "abraham",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/cfc268557922ae6f5464a8cb337ceac2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 329,
    "organizations": [
      "addvocate"
    ],
    "contributions": 219,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Scott Hanselman",
    "login": "shanselman",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/719c91f5c3013e43ee46ed2bdc67f883?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 571,
    "organizations": [
      "ligershark"
    ],
    "contributions": 219,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "komagata",
    "login": "komagata",
    "location": "Tokyo Japan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ad764891660aca92abb3ae39879b1b36?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 167,
    "organizations": [
      "fjordllc",
      "communiture"
    ],
    "contributions": 219,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Guillaume Laforge",
    "login": "glaforge",
    "location": "Paris, France",
    "language": "Groovy",
    "gravatar": "https://secure.gravatar.com/avatar/137d3908243acfc30e126615d59d4e6d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 170,
    "organizations": [
      "grails",
      "groovy"
    ],
    "contributions": 217,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jeff Gilfelt",
    "login": "jgilfelt",
    "location": "Berkshire, United Kingdom",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/7edf4f27bc9e38720880c6fec0ad37ee?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 245,
    "organizations": [],
    "contributions": 215,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yoshimasa Niwa",
    "login": "niw",
    "location": "San Francisco, CA and Tokyo, Japan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/e4e01fb8b7105e61e3876224139503ab?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 183,
    "organizations": [
      "twitter"
    ],
    "contributions": 214,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Christian Neukirchen",
    "login": "chneukirchen",
    "location": "Munich, Germany",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/7264fb16beeea92b89bb42023738259d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 327,
    "organizations": [
      "rack"
    ],
    "contributions": 213,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Michael Fellinger",
    "login": "manveru",
    "location": "Germany",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/86e33dee4a89a8879a26487051c216a8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [
      "rack",
      "Ramaze",
      "rubinius",
      "rubyists",
      "iron-io"
    ],
    "contributions": 213,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "João Batista Neto",
    "login": "netojoaobatista",
    "location": "Franca/SP - Brazil",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/21bb2571af8528b86b581fd74588f967?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 157,
    "organizations": [
      "paypalxbrasil",
      "iMastersDev",
      "jonny-data",
      "documentationnetwork",
      "SampaJS",
      "CodingForChange"
    ],
    "contributions": 212,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Albert Pham",
    "login": "sk89q",
    "location": "United States",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/4b787bd3fd2d09654120bac224f0f859?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 269,
    "organizations": [],
    "contributions": 211,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Avdi Grimm",
    "login": "avdi",
    "location": "Pennsylvania, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/4dea430d31b993abaf41cd9b54f8128d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 419,
    "organizations": [
      "nulldb",
      "objects-on-rails"
    ],
    "contributions": 208,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Cédric Luthi",
    "login": "0xced",
    "location": "Geneva, Switzerland",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/e634e02646d909ce006da694a9deec28?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 274,
    "organizations": [],
    "contributions": 207,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Harry Marr",
    "login": "hmarr",
    "location": "London, UK",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/dc3a4c4f6d1ae1445586e2444c435cd2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 158,
    "organizations": [
      "gocardless"
    ],
    "contributions": 206,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James Edward Gray II",
    "login": "JEG2",
    "location": "Edmond, OK, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/4299e35bacef054df40583da2d51edea?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 279,
    "organizations": [
      "ruby"
    ],
    "contributions": 205,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Qiangning Hong",
    "login": "hongqn",
    "location": "Beijing, China",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/9480b6a8f5e28b8f80bc57512e94e982?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 248,
    "organizations": [],
    "contributions": 205,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Chris Granger",
    "login": "ibdknox",
    "location": "",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/5c30df226ea6e7f58c050d4ad6b4514b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "Kodowa",
      "noir-clojure",
      "korma"
    ],
    "contributions": 204,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brian Lopez",
    "login": "brianmario",
    "location": "San Francisco, Ca",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/c9f60c0cb1d941fa8e93bbfcb907c27e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 277,
    "organizations": [
      "github",
      "rubinius",
      "libgit2"
    ],
    "contributions": 202,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Ryan Tomayko",
    "login": "rtomayko",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/abfc88b96ae18c85ba7aac3bded2ec5e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "sinatra",
      "github",
      "rack"
    ],
    "contributions": 201,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Uli Kusterer",
    "login": "uliwitness",
    "location": "Likely indoors.",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/b863723f4ac174d9fdb1e7b9e7ab63f0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 200,
    "organizations": [],
    "contributions": 199,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "YAMAGUCHI EIKICHI",
    "login": "glassesfactory",
    "location": "tokyo,setagaya",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/29ae0441f1980e37e2f6e57b2ed2c915?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [],
    "contributions": 199,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "",
    "login": "aterrien",
    "location": "Rennes, Fr",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/e2139a6a040af9bf741e35caf2d05f11?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 475,
    "organizations": [
      "ccmbenchmark"
    ],
    "contributions": 199,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Pavel",
    "login": "nadlabak",
    "location": "Prague, Czech Republic",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/f7560e9520c5118af3d92f72279b33d9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 324,
    "organizations": [
      "a853"
    ],
    "contributions": 199,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ben Schwarz",
    "login": "benschwarz",
    "location": "Melbourne, Australia",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/42e2ec6a72627f8c15115e279a5f7d8e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 237,
    "organizations": [
      "sydjs"
    ],
    "contributions": 198,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Juan Basso",
    "login": "jrbasso",
    "location": "Aventura, FL, USA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/1333d11249a2ed342d612c49a7c1e913?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 169,
    "organizations": [
      "cakephp",
      "zumba"
    ],
    "contributions": 198,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tom McFarlin",
    "login": "tommcfarlin",
    "location": "Atlanta, Georgia",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/1f0b00b8853cf0311888bb3ed2a77ebc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 179,
    "organizations": [
      "eightbit"
    ],
    "contributions": 197,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Shaofei Cheng",
    "login": "wintercn",
    "location": "China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/5528512e7f15d0712dca9c362b9e8aee?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 313,
    "organizations": [
      "mhtml5",
      "kissjs"
    ],
    "contributions": 196,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Liam McLoughlin",
    "login": "Hexxeh",
    "location": "United Kingdom",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/3875538cd5c8cce9e818863760e4b0f2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 201,
    "organizations": [],
    "contributions": 195,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dustin Diaz",
    "login": "ded",
    "location": "San Francisco",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/cfac4fc60b4e72258138903daab65b44?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 964,
    "organizations": [
      "ender-js"
    ],
    "contributions": 195,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Boris Smus",
    "login": "borismus",
    "location": "San Francisco / Vancouver",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f27f8e02a79b64799fe5ac2df3e7f519?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 271,
    "organizations": [
      "HCII",
      "GoogleChrome",
      "html5rocks"
    ],
    "contributions": 194,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Robby Russell",
    "login": "robbyrussell",
    "location": "Portland, Oregon",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a82ba1167f4d4a8d1de63820e576a87f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 333,
    "organizations": [],
    "contributions": 194,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kevin van Zonneveld",
    "login": "kvz",
    "location": "Amsterdam, The Netherlands",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/3210e1be3e4059b93c4a88309e2183a2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 187,
    "organizations": [
      "transloadit",
      "true"
    ],
    "contributions": 194,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tom Dale",
    "login": "tomdale",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/9bf3a766e037b9d5a4da0a6f9d0f4f68?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 238,
    "organizations": [
      "travis-ci",
      "emberjs",
      "emberjs-addons",
      "tildeio"
    ],
    "contributions": 193,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kakutani Shintaro",
    "login": "kakutani",
    "location": "Tokyo, Japan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/63a6bff89d692e21de20868202bc8dde?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 347,
    "organizations": [
      "esminc",
      "ruby-no-kai",
      "tdiary",
      "testing-rails-rspec-ja",
      "asakusarb",
      "agile-samurai-ja",
      "keccon2012",
      "railsgirls-jp"
    ],
    "contributions": 192,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Christian Heilmann",
    "login": "codepo8",
    "location": "London, England",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/07fcd228af02d476b1b8367d85a903b2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 535,
    "organizations": [],
    "contributions": 192,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dan Horrigan",
    "login": "dandoescode",
    "location": "New York, NY",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/e4db7d4177037dbb122c8ce552d6cf3f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 297,
    "organizations": [
      "happyninjas"
    ],
    "contributions": 191,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Jon Maddox",
    "login": "maddox",
    "location": "Richmond, Va",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/e32fc8d646083d242229ef8fc9168c27?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 300,
    "organizations": [
      "github",
      "play"
    ],
    "contributions": 191,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Justin Palmer",
    "login": "Caged",
    "location": "Portland, OR",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/97c3a8eea9b7eaa9e1e93ea3cd47399f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 293,
    "organizations": [
      "github",
      "cashmusic"
    ],
    "contributions": 190,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Shaun Smith",
    "login": "darscan",
    "location": "London, UK",
    "language": "ActionScript",
    "gravatar": "https://secure.gravatar.com/avatar/a09862c4e99d05160beaf5d1f0eee31a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 227,
    "organizations": [
      "robotlegs",
      "try-harder"
    ],
    "contributions": 190,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jan Berkel",
    "login": "jberkel",
    "location": "Berlin",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/7c02e94043800ebd486cc25963a47b81?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 168,
    "organizations": [
      "soundcloud",
      "ruboto",
      "oneclickorgs",
      "nko",
      "k9mail",
      "sbt"
    ],
    "contributions": 190,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Martian Z",
    "login": "MartianZ",
    "location": "China",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/ac8bbfdcec1e64dd6a3fd00806820aff?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 245,
    "organizations": [],
    "contributions": 189,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Simon Marlow",
    "login": "simonmar",
    "location": "Cambridge, UK",
    "language": "Haskell",
    "gravatar": "https://secure.gravatar.com/avatar/b154f641d894dd9b0bfb8436a8a3e500?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [
      "haskell",
      "ghc"
    ],
    "contributions": 188,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kazuhiro Osawa",
    "login": "yappo",
    "location": "",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/6b783f98e70fda69a0fede4329ffa5fb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 289,
    "organizations": [
      "livedoor",
      "xslate",
      "perl-users-jp",
      "perldoc-jp"
    ],
    "contributions": 181,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Justin Windle",
    "login": "soulwire",
    "location": "New York City",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/dce862b9a968b0b7ccc5ab0ab7e0319a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 702,
    "organizations": [],
    "contributions": 181,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Graham Weldon",
    "login": "predominant",
    "location": "Tokyo, Japan",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/15690d08b698329062aaeb9fe34f0540?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 192,
    "organizations": [
      "cakephp",
      "slavitica",
      "sydphp",
      "phpconfau",
      "CakePHP-Courses",
      "OneGameAMonth"
    ],
    "contributions": 179,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ben Firshman",
    "login": "bfirsh",
    "location": "London, UK",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/011ce2693e5feec652d9ff2cc1b90d15?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 198,
    "organizations": [
      "radiowarwick",
      "Spacelog",
      "echonest",
      "epio",
      "boar",
      "pneutube",
      "poetica"
    ],
    "contributions": 177,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ivo Wetzel",
    "login": "BonsaiDen",
    "location": "Mainz, Germany",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b04d74db65a7a2dc6e554e50dd4708b2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 209,
    "organizations": [
      "zynga"
    ],
    "contributions": 177,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "David Nolen",
    "login": "swannodette",
    "location": "New York",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/eac0aafb77a926e0ef53779ce873a472?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 408,
    "organizations": [
      "clojure"
    ],
    "contributions": 175,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Richard Crowley",
    "login": "rcrowley",
    "location": "San Francisco, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/6eeb5509abc07f9f6c3eab38f013e739?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 231,
    "organizations": [
      "devstructure",
      "betable"
    ],
    "contributions": 175,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Luís Almeida",
    "login": "luis-almeida",
    "location": "Copenhagen, Denmark",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/1e71e0a2afaaaa9188e2603efefc86bd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 192,
    "organizations": [],
    "contributions": 174,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brandon Jones",
    "login": "toji",
    "location": "Mountain View, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/5f471f1a9edfd1588c79a90e61b31549?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 210,
    "organizations": [
      "Motorola-Mobility"
    ],
    "contributions": 174,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Wen-Tien Chang",
    "login": "ihower",
    "location": "Hsinchu, Taiwan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/c38fd9074fb072551c0ff80ccd90d24e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 380,
    "organizations": [
      "rubytaiwan"
    ],
    "contributions": 174,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jade",
    "login": "plusjade",
    "location": "Berkeley, CA, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/b835c3656fab4a9241d6b7f983d6fce3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 161,
    "organizations": [
      "Gild",
      "jekyllbootstrap",
      "ruhoh"
    ],
    "contributions": 173,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tomohito Ozaki",
    "login": "yuroyoro",
    "location": "Tokyo",
    "language": "Scala",
    "gravatar": "https://secure.gravatar.com/avatar/bd3590aaffe8948079d27795cb6f7388?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 269,
    "organizations": [
      "java-ja"
    ],
    "contributions": 173,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Steve Francia",
    "login": "spf13",
    "location": "NYC",
    "language": "VimL",
    "gravatar": "https://secure.gravatar.com/avatar/e52bc145bc33c4d337698dd9f161ea89?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [
      "10gen",
      "mongodb",
      "10gen-labs"
    ],
    "contributions": 172,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ernie Miller",
    "login": "ernie",
    "location": "Louisville, Kentucky",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/2274a7476f6d2ac7aedcdec0651d0542?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 211,
    "organizations": [
      "rails"
    ],
    "contributions": 171,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Pádraic Brady",
    "login": "padraic",
    "location": "Ireland",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/f504f897ae18536c52eb8d899c47799f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 270,
    "organizations": [
      "zendframework"
    ],
    "contributions": 170,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ulf Wiger",
    "login": "uwiger",
    "location": "Sweden",
    "language": "Erlang",
    "gravatar": "https://secure.gravatar.com/avatar/8b36098398075de6e8e1706a3ffead77?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 158,
    "organizations": [
      "Feuerlabs"
    ],
    "contributions": 169,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dave Rupert",
    "login": "davatron5000",
    "location": "Austin, TX",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/0988796fb50136535a69cea314396cfa?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 635,
    "organizations": [
      "austinonrails",
      "Paravel"
    ],
    "contributions": 169,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rei",
    "login": "chloerei",
    "location": "china, beijing",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/5aec84cd0b5479a0d1d89b6ffa2a9a20?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 179,
    "organizations": [
      "ruby-china",
      "csdn-dev"
    ],
    "contributions": 167,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James Tucker",
    "login": "raggi",
    "location": "Bermuda",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/b19b02a49b433c9e2e6e6c43785d2bfb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 200,
    "organizations": [
      "rack",
      "wildfireapp",
      "rubinius",
      "RDBI",
      "rdoc",
      "postrank-labs"
    ],
    "contributions": 166,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nathan Smith",
    "login": "nathansmith",
    "location": "Dallas, TX",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/3e101126b514c65ee531e47bd6281ba3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 576,
    "organizations": [
      "lifechurch",
      "jquery"
    ],
    "contributions": 165,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Marc-André Cournoyer",
    "login": "macournoyer",
    "location": "Montreal, QC, Canada",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/0d949b795e64e062c4c001c6f5a6f3f3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 516,
    "organizations": [
      "rack",
      "arbre"
    ],
    "contributions": 165,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James Tang",
    "login": "mystcolor",
    "location": "Hong Kong",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/9c8dc9ba16b7417a8b936a55c33f3115?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 164,
    "organizations": [],
    "contributions": 164,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Satoshi Nakagawa",
    "login": "psychs",
    "location": "Santa Clara, CA",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/4f0b1592036392a00aac1a3683aee706?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 224,
    "organizations": [
      "twitter",
      "MacRuby"
    ],
    "contributions": 162,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Aaron Quint",
    "login": "quirkey",
    "location": "Bay Area, CA <-> Brooklyn, NY",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/f04bfa14141dca6713f0d9caa763e26b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 352,
    "organizations": [
      "paperlesspost"
    ],
    "contributions": 162,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Pamela Fox",
    "login": "pamelafox",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/92dfeb863138a5a9c0453ed80f9c8c75?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 365,
    "organizations": [
      "girldevelopit"
    ],
    "contributions": 161,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Edwin Chen",
    "login": "echen",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/e51f46224c3d0896071965d4bee54f67?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 280,
    "organizations": [
      "twitter"
    ],
    "contributions": 160,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "August \"Gus\" Mueller",
    "login": "ccgus",
    "location": "Everett, WA",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/b3127da5b98567967da317caf8fc9b6a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 221,
    "organizations": [],
    "contributions": 159,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Takuto Wada",
    "login": "twada",
    "location": "Tokyo, Japan",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/9f3a83db74bee75a64b5e6ed106a775c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 223,
    "organizations": [
      "keccon2012"
    ],
    "contributions": 159,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Nicolás Sanguinetti",
    "login": "foca",
    "location": "Montevideo, Uruguay",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d0ca2bf32bda9e9ea8c4473ffc3aaa0d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 239,
    "organizations": [
      "sinatra",
      "github",
      "rubysur",
      "rubyconfuruguay",
      "coworkingmvd"
    ],
    "contributions": 158,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Leevi Graham",
    "login": "leevigraham",
    "location": "Newcastle, Australia",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/d613d2145633372c632e1a02a49657e0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 173,
    "organizations": [
      "newism"
    ],
    "contributions": 157,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Giles",
    "login": "gilesbowkett",
    "location": "Los Angeles",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ce8b03e5750097942c58e12b46724312?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 261,
    "organizations": [],
    "contributions": 157,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Stig Brautaset",
    "login": "stig",
    "location": "London",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/f83cfcc2713f34cf9db3f6488383cee1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 164,
    "organizations": [],
    "contributions": 157,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Egor Homakov",
    "login": "homakov",
    "location": "Follow there http://twitter.com/homakov",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d2881b5d4c082996a62f23055b61956d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 462,
    "organizations": [
      "ysoslow"
    ],
    "contributions": 156,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Boris Moore",
    "login": "BorisMoore",
    "location": "Redmond WA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/49714f0dd44c46b27d7b2e9ee20061c9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 265,
    "organizations": [
      "jquery",
      "WindowsAzure"
    ],
    "contributions": 155,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rasmus Lerdorf",
    "login": "rlerdorf",
    "location": "Probably on a plane",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/e915a97db0aeef46c5dd899d47c175ad?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 293,
    "organizations": [
      "php",
      "etsy"
    ],
    "contributions": 153,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "chromatic",
    "login": "chromatic",
    "location": "",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/a015089796c7876b72336e1eca72bfe1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 205,
    "organizations": [
      "PerlGameDev"
    ],
    "contributions": 153,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Christiano Milfont",
    "login": "cmilfont",
    "location": "Fortaleza, CE, Brazil, BR",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a74805efb038d287f4ac77959a77d3d4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 188,
    "organizations": [
      "fortesinformatica",
      "milfont"
    ],
    "contributions": 152,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "lijing00333",
    "login": "jayli",
    "location": "Beijing China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/cb9e58891ba7f47286edb660919f72b4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 177,
    "organizations": [
      "kissyteam"
    ],
    "contributions": 150,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ed Finkler",
    "login": "funkatron",
    "location": "Lafayette, Indiana USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/afc5f9b074fda34ccd985ccc2579a400?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 257,
    "organizations": [
      "fictivekin",
      "spazproject"
    ],
    "contributions": 150,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ryan Seddon",
    "login": "ryanseddon",
    "location": "Melbourne, Australia",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/8677c9f7c0f6d947bf318c1430d00bfd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 200,
    "organizations": [
      "Modernizr"
    ],
    "contributions": 149,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Anthony Ettinger",
    "login": "chovy",
    "location": "Capitola, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/5f8673ebb2a41d696a881b7b1c92d9ad?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [],
    "contributions": 149,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Larry Wall",
    "login": "TimToady",
    "location": "",
    "language": "",
    "gravatar": "https://secure.gravatar.com/avatar/555e0003c02ff9ccb8272f2bbee011ca?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 174,
    "organizations": [
      "perl6"
    ],
    "contributions": 149,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Michael Fields",
    "login": "mfields",
    "location": "Portland, Oregon, USA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/2a585573cf199670374c07991a38fb46?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 217,
    "organizations": [
      "Automattic"
    ],
    "contributions": 148,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tait Brown",
    "login": "taitems",
    "location": "Melbourne, Australia",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b8e2f6a7bcacf56bdcdded55e661e013?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 173,
    "organizations": [],
    "contributions": 147,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Blake Mizerany",
    "login": "bmizerany",
    "location": "http://blakemizerany.com",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/1a250566b475961b9b36abf359950c76?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 610,
    "organizations": [
      "sinatra",
      "heroku",
      "pat-go"
    ],
    "contributions": 147,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "John Barnette",
    "login": "jbarnette",
    "location": "SF / NOLA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/33682dbe3b7d8d63a4d7c65af2bc9a94?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 381,
    "organizations": [
      "github",
      "rubinius",
      "boxen"
    ],
    "contributions": 146,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "John-Paul Bader",
    "login": "hukl",
    "location": "Berlin",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/0273cfca70ccb1caa0914cfc28e219e9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 181,
    "organizations": [
      "wooga"
    ],
    "contributions": 145,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "nicolas garcia belmonte",
    "login": "philogb",
    "location": "Palo Alto, California",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a2b51961d5cb9140c6b949d2c9bfe0a7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 314,
    "organizations": [
      "twitter",
      "senchalabs"
    ],
    "contributions": 145,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dustin L. Howett",
    "login": "DHowett",
    "location": "Berkeley, CA",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/bf2b3b6c83a73caded08c587190985c4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 261,
    "organizations": [
      "DailyBooth",
      "Chronic-Dev"
    ],
    "contributions": 143,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Joshua Hull",
    "login": "joshbuddy",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/c7e2ce5b40f683dfb6c1bdf5e6af0c72?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 354,
    "organizations": [
      "postrank-labs",
      "renee-project",
      "leapmotion"
    ],
    "contributions": 143,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kevin Whinnery",
    "login": "kwhinnery",
    "location": "Saint Paul / Minneapolis",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/d2bd5c191390ea44cf4fda03c6cbc8fa?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 387,
    "organizations": [
      "twilio",
      "JavaScriptMN"
    ],
    "contributions": 143,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Simon Rozet",
    "login": "sr",
    "location": "Brussels, Belgium",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/8cf17bf55c4d16cf52480619bb0b6c92?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 387,
    "organizations": [
      "sinatra",
      "github",
      "integrity"
    ],
    "contributions": 143,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Fabio Kung",
    "login": "fabiokung",
    "location": "San Francisco, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/251c190c5a8277a3bc6197491f32da51?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 267,
    "organizations": [
      "heroku"
    ],
    "contributions": 142,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Timothee \"TTimo\" Besset",
    "login": "TTimo",
    "location": "Dallas, TX, USA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/9c19426948190c34b837081521921b26?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 290,
    "organizations": [],
    "contributions": 141,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nicholas C. Zakas",
    "login": "nzakas",
    "location": "Mountain View, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b605f11383e1ec18717bca5a5c36ee15?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [],
    "contributions": 138,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Indragie Karunaratne",
    "login": "indragiek",
    "location": "Edmonton, AB, Canada",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/1ebe99fd25ad376dad53b12322dd1337?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 225,
    "organizations": [
      "sonoramac"
    ],
    "contributions": 137,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "johnlindquist",
    "location": "",
    "language": "ActionScript",
    "gravatar": "https://secure.gravatar.com/avatar/d548043ced5a2887057b6138302c8d65?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 205,
    "organizations": [],
    "contributions": 134,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jean Carlo Nascimento",
    "login": "suissa",
    "location": "São Paulo - SP",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/242a4a40838ce152d5fabb7643c0e744?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 202,
    "organizations": [
      "igrape",
      "jonny-data",
      "documentationnetwork",
      "wpbrasil"
    ],
    "contributions": 133,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Evan Wallace",
    "login": "evanw",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/db7cdc9833cff457df70310949f9b610?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 431,
    "organizations": [],
    "contributions": 132,
    "contributionsStreak": 9,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Seth Fitzsimmons",
    "login": "mojodna",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a0b49382b6dcd9dd4602c3088717724e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [
      "stamen",
      "anodejs"
    ],
    "contributions": 131,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Christophe Coenraets",
    "login": "ccoenraets",
    "location": "Boston",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/3f30c25cbbc01a086a653b5d90535f19?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 509,
    "organizations": [
      "adobe"
    ],
    "contributions": 131,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Bryan Helmkamp",
    "login": "brynary",
    "location": "New York City",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/535d73db0b47b6f745e9981e80dabdb4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 305,
    "organizations": [
      "rails",
      "rubinius"
    ],
    "contributions": 130,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ciaran Jessup",
    "login": "ciaranj",
    "location": "Manchester, Uk",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/9c38b1ec06c3473bf8386480b67160f7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 191,
    "organizations": [
      "msysgit"
    ],
    "contributions": 129,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Peter Alfonso",
    "login": "peteralfonso",
    "location": "Florida, United States",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/f6a7b4106d2d19909e4ef2e48fe02de5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 248,
    "organizations": [],
    "contributions": 129,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mitchell Simoens",
    "login": "mitchellsimoens",
    "location": "Saint Louis Area, Missouri USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/477ebf2de3b60e05e71347d92afa45ec?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 317,
    "organizations": [
      "ModusCreateOrg",
      "SenchaProSvcs"
    ],
    "contributions": 127,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Guilherme Silveira",
    "login": "guilhermesilveira",
    "location": "São Paulo, Brasil",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/641f736b59103127c7a6a46a683bca58?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 227,
    "organizations": [
      "caelum"
    ],
    "contributions": 126,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Reg Braithwaite",
    "login": "raganwald",
    "location": "Toronto, Canada",
    "language": "CoffeeScript",
    "gravatar": "https://secure.gravatar.com/avatar/6944576a4252ea5303f0b978f8604a30?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 593,
    "organizations": [],
    "contributions": 126,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Daniel Eden",
    "login": "daneden",
    "location": "Manchester, UK",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/ce22c94e6c291345223e0118bfdd8714?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 430,
    "organizations": [],
    "contributions": 123,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Chris Wanstrath",
    "login": "defunkt",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/b8dbb1987e8e5318584865f880036796?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 9,
    "organizations": [
      "github",
      "mustache"
    ],
    "contributions": 122,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Zed A. Shaw",
    "login": "zedshaw",
    "location": "San Francisco, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/8c43ed7f065406bf171c0f3eb32cf615?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 916,
    "organizations": [],
    "contributions": 122,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "aaronksaunders",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/31dc771f44171ef0a1c0464e883a71f0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [
      "appcelerator-developer-relations"
    ],
    "contributions": 122,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jack Moore",
    "login": "jackmoore",
    "location": "Atlanta, Ga",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/ff8f4d60e37abfd3870391aa2966c188?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 531,
    "organizations": [],
    "contributions": 122,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Loiane Groner",
    "login": "loiane",
    "location": "Sao Paulo, Brazil",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/0fae59acfc01c4072eb78a84ff2836b8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 410,
    "organizations": [],
    "contributions": 120,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tim Lucas",
    "login": "toolmantim",
    "location": "Melbourne, Australia (was Berlin, Germany)",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/8b3a5fa50d63275c5c6e304f1a081bfb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 174,
    "organizations": [
      "sydjs"
    ],
    "contributions": 120,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jeff Haynie",
    "login": "jhaynie",
    "location": "Mountain View, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/92351439dc15dab1775b734a21448fc2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 213,
    "organizations": [
      "appcelerator"
    ],
    "contributions": 119,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Gabriel Handford",
    "login": "gabriel",
    "location": "San Francisco, CA",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/5a4a4677b06f5f235d36e716c07835ec?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 209,
    "organizations": [],
    "contributions": 119,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Matt Biddulph",
    "login": "mattb",
    "location": "London",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/bcb6957818a985e2ac67752b45d54929?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 241,
    "organizations": [
      "philterphactory",
      "CocoaPods"
    ],
    "contributions": 118,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yuichi Tateno",
    "login": "hotchpotch",
    "location": "Tokyo, Japan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/2997ec7879942bd0415690c85731e328?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 258,
    "organizations": [
      "cookpad",
      "asakusarb",
      "fluent"
    ],
    "contributions": 118,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Karlisson Bezerra",
    "login": "karlisson",
    "location": "São Paulo/SP - Brazil",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/52af4004e6428d46044592c7449a14fe?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 170,
    "organizations": [],
    "contributions": 118,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Douglas Crockford",
    "login": "douglascrockford",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b871de839c31ddb1d9db8e33e0cb88a6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 3,
    "organizations": [],
    "contributions": 118,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ole Begemann",
    "login": "ole",
    "location": "Berlin",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/d0efc09d023fa0569a2479c9dcfd4620?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 169,
    "organizations": [],
    "contributions": 117,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "朱建刚",
    "login": "levey",
    "location": "Hangzhou, China",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/d639d3bce2ba3a2f5ab32fe4b5ec90d7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 346,
    "organizations": [],
    "contributions": 115,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ovid",
    "login": "Ovid",
    "location": "Paris, France",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/7f633daa0796788b31b868b5ffe98157?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 174,
    "organizations": [
      "Perl-Toolchain-Gang"
    ],
    "contributions": 111,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nick Johnson",
    "login": "Arachnid",
    "location": "London, England",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/dc69af7dd7151a00843602888638fabb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [],
    "contributions": 111,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Greg Young",
    "login": "gregoryyoung",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/8a61736c3f6b3e02b173c9aa6ce6ca8e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 321,
    "organizations": [
      "continuoustests",
      "EventStore"
    ],
    "contributions": 111,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "David Pollak",
    "login": "dpp",
    "location": "San Francisco",
    "language": "Scala",
    "gravatar": "https://secure.gravatar.com/avatar/4d48744f58953f2e3aa1812a3dd58564?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 340,
    "organizations": [
      "inquus",
      "lift",
      "Lifty",
      "goatrodeo",
      "visi-lang",
      "telegr-am",
      "hoisted"
    ],
    "contributions": 110,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "",
    "login": "apenwarr",
    "location": "Canada.  Sometimes.",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/918b627daf7d848cd40770ed6cd15233?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 305,
    "organizations": [],
    "contributions": 110,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Johan Nilsson",
    "login": "johannilsson",
    "location": "Stockholm, Sweden",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/fa6595df828624e971ab01182fda8704?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 256,
    "organizations": [
      "droidgiro",
      "Avtryck",
      "avvikelse",
      "dodr",
      "expact"
    ],
    "contributions": 108,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Adam Shanks",
    "login": "ChainsDD",
    "location": "Norfolk, UK",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/2044ccc9e1c8b0048716b7a46f95954c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 304,
    "organizations": [
      "CyanogenMod"
    ],
    "contributions": 107,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Aral Balkan",
    "login": "aral",
    "location": "Brighton, UK",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/6362d0b8d7ec2569efb18152a0589f6d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [],
    "contributions": 106,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tyler Hall",
    "login": "tylerhall",
    "location": "Nashville, TN",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/1555792b2fbfbe64165ac7641addac81?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 184,
    "organizations": [],
    "contributions": 106,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Wang, Xiaozhe",
    "login": "chaoslawful",
    "location": "Beijing, China",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/a823b0601776070b345e2f8ce44b5337?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 325,
    "organizations": [
      "taobao"
    ],
    "contributions": 106,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Stuart Halloway",
    "login": "stuarthalloway",
    "location": "Chapel Hill, NC",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/9e9dc71d1ebbec92c1a01feb70f10c84?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 405,
    "organizations": [
      "clojure",
      "relevance",
      "speakerconf"
    ],
    "contributions": 105,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kishikawa Katsumi",
    "login": "kishikawakatsumi",
    "location": "Tokyo",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/9bf923e39671cde83584e3e926296c13?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 290,
    "organizations": [
      "cookpad"
    ],
    "contributions": 104,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Douglas Neiner",
    "login": "dcneiner",
    "location": "Cumberland, IA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/6868c2908859c318f4fa0911eb6029b0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 254,
    "organizations": [
      "jquery",
      "appendto",
      "alohaeditor"
    ],
    "contributions": 104,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nick Gerakines",
    "login": "ngerakines",
    "location": "Irvine, CA",
    "language": "Erlang",
    "gravatar": "https://secure.gravatar.com/avatar/0764d8fb09760f0bec8800b15f284274?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 231,
    "organizations": [
      "Blizzard",
      "Socklabs"
    ],
    "contributions": 104,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Christophe Grand",
    "login": "cgrand",
    "location": "Saint-Étienne, France",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/bbc0085f33478b26d720edff3c6221dc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 185,
    "organizations": [
      "clojure"
    ],
    "contributions": 104,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Paul Tarjan",
    "login": "ptarjan",
    "location": "San Jose, CA, USA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/4cd77fb0ea4d6cb5ad94f9ef61e17e9e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 200,
    "organizations": [
      "facebook"
    ],
    "contributions": 101,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Amir Salihefendic",
    "login": "amix",
    "location": "The World",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/0d2b45022b6937bf0903e988172904b8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 248,
    "organizations": [
      "Plurk",
      "Doist"
    ],
    "contributions": 101,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jack Moffitt",
    "login": "metajack",
    "location": "Albuquerque, NM  USA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/405d91268cec8f5e75be74c75cce1c79?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 199,
    "organizations": [
      "talkto",
      "greyarea"
    ],
    "contributions": 100,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kyle Neath",
    "login": "kneath",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/5f2da528927a2ec9ba4fec2069cbc958?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 707,
    "organizations": [
      "github"
    ],
    "contributions": 100,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Tobias Lütke",
    "login": "tobi",
    "location": "Ottawa, Canada",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/44a1b8a3a990e1a496261f55cd44fbd9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 371,
    "organizations": [
      "Shopify"
    ],
    "contributions": 99,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yusuke Wada",
    "login": "yusukebe",
    "location": "Kanagawa, Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/4dcc1c01d31f63309cb731abe5f0fced?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 297,
    "organizations": [],
    "contributions": 99,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dr. Drang",
    "login": "drdrang",
    "location": "",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/5074909319a2bf87d136cdc0ed47509f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 162,
    "organizations": [],
    "contributions": 98,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Chad Scira",
    "login": "icodeforlove",
    "location": "los angeles",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/71a3e2556ab7c41a1331422282efddf4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [],
    "contributions": 98,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Eric Davis",
    "login": "edavis10",
    "location": "Portland, OR USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ae959c6836366656b895069d75ad09bf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 333,
    "organizations": [
      "littlestreamsoftware",
      "chiliproject"
    ],
    "contributions": 97,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Marcos Tapajós",
    "login": "tapajos",
    "location": "",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/2224acac6b9f3f0e7728322f48866d1e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 421,
    "organizations": [
      "couchrest",
      "horaextra"
    ],
    "contributions": 97,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dann",
    "login": "dann",
    "location": "Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/6c336cac38027aee98b47d959bff77d7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 164,
    "organizations": [],
    "contributions": 95,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Scott Taylor",
    "login": "smtlaissezfaire",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/369b9fd2a0d9e7cdbc60907a2a056ad9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 174,
    "organizations": [],
    "contributions": 95,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Chris Coyier",
    "login": "chriscoyier",
    "location": "Palo Alto, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "CodePen",
      "CSS-Tricks"
    ],
    "contributions": 93,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Marcus Ramberg",
    "login": "marcusramberg",
    "location": "Oslo, Norway",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/25484352cbd4cd37598a3b5d96b87d91?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 173,
    "organizations": [
      "Nordaaker",
      "mojomojo",
      "mojolicious"
    ],
    "contributions": 93,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tim Holman",
    "login": "tholman",
    "location": "Australian... living in New York",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/cb947f0ebdde8d0f973741b366a51ed6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 188,
    "organizations": [],
    "contributions": 92,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 3
  },
  {
    "name": "Patrick Wyatt",
    "login": "webcoyote",
    "location": "Bellevue, WA",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/4226422e73ae9945b2b3c935a2348540?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 305,
    "organizations": [],
    "contributions": 91,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Steve Streza",
    "login": "amazingsyco",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/c7ddff80047bea08b59a0fd29aeeba63?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 273,
    "organizations": [
      "ComputerScienceHouse",
      "Pocket"
    ],
    "contributions": 91,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Paul Dix",
    "login": "pauldix",
    "location": "New York, NY",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/39b7a68b6cbc43ec7683ad0bcc4c9570?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 274,
    "organizations": [
      "benchmark-solutions"
    ],
    "contributions": 89,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Shi Chuan",
    "login": "shichuan",
    "location": "",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/336ce96c7588ffb9c86b3cb5e83b52d5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 252,
    "organizations": [
      "h5bp"
    ],
    "contributions": 86,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "James Pearce",
    "login": "jamesgpearce",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/55330362b49dcac1ca70dafd06468643?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 174,
    "organizations": [
      "facebook",
      "fbsamples"
    ],
    "contributions": 86,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Julie Ann Horvath",
    "login": "nrrrdcore",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/8209444173472be8823f570f77ed8b8b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 247,
    "organizations": [
      "github",
      "eclipse",
      "boxen"
    ],
    "contributions": 86,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "John Sheehan",
    "login": "johnsheehan",
    "location": "San Francisco, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/54b75f6fbf4434162bfcda6b0cb9b86b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 164,
    "organizations": [
      "restsharp"
    ],
    "contributions": 85,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "migurski",
    "location": "",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/039667155d1baa533e461671e97891a1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 228,
    "organizations": [
      "stamen",
      "mapnik",
      "doprojects",
      "oam",
      "Citytracking",
      "modestmaps"
    ],
    "contributions": 85,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Joel Hooks",
    "login": "joelhooks",
    "location": "Dallas, TX",
    "language": "ActionScript",
    "gravatar": "https://secure.gravatar.com/avatar/4f672c7c43c0031145b86c3efecefc79?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 276,
    "organizations": [
      "robotlegs",
      "flexunit",
      "aurajs"
    ],
    "contributions": 84,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Pete Warden",
    "login": "petewarden",
    "location": "Boulder, CO",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/9cbf603d5f93133178367214f1e091b9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 230,
    "organizations": [],
    "contributions": 83,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Steve Jenson",
    "login": "stevej",
    "location": "San Francisco, CA",
    "language": "Scala",
    "gravatar": "https://secure.gravatar.com/avatar/5916987ee556fff13a4d56b44d0b3fac?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 167,
    "organizations": [],
    "contributions": 83,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Drew Conway",
    "login": "drewconway",
    "location": "New York, NY",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/760426ae4df6b0bc28e2f29de8cb3a67?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 348,
    "organizations": [
      "networkx"
    ],
    "contributions": 82,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Woody Gilk",
    "login": "shadowhand",
    "location": "MN, USA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/0d7d3dd2bdb76a2a2d8d862ca1d943dc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 353,
    "organizations": [
      "kohana"
    ],
    "contributions": 82,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "lzyy",
    "login": "lzyy",
    "location": "Hangzhou, China",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/44afb80f6ac2f7c81e59852d0306aec1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 177,
    "organizations": [],
    "contributions": 81,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Greg Borenstein",
    "login": "atduskgreg",
    "location": "New York, NY",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/2f4faa539dc6a0ae688e58d6a329fce9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 191,
    "organizations": [],
    "contributions": 80,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jeremy McAnally",
    "login": "jm",
    "location": "Orlando, FL",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/6ac41c39b6087f6e059f31903ffc003e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 413,
    "organizations": [
      "rails",
      "github",
      "arcturo"
    ],
    "contributions": 79,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tom Preston-Werner",
    "login": "mojombo",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 9,
    "organizations": [
      "github"
    ],
    "contributions": 77,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yuki Sonoda (Yugui)",
    "login": "yugui",
    "location": "Saitama, Japan",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/1e7e007723cfe59320d994a7db4ab4cf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 253,
    "organizations": [
      "asakusarb"
    ],
    "contributions": 76,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Hooopo",
    "login": "hooopo",
    "location": "Beijing, China",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/e9ed4664dfd7ea664ccc5813de4d1fd7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 190,
    "organizations": [
      "csdn-dev"
    ],
    "contributions": 74,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Eduardo Mourao",
    "login": "eduardordm",
    "location": "Porto Velho, Brazil - New York, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/9acabffbf83dfcb273626e43b0196937?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 207,
    "organizations": [
      "intermeta"
    ],
    "contributions": 73,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jonathan Rockway",
    "login": "jrockway",
    "location": "New York, New York",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/c020aeae684d0e137d1da9d3ac3fda17?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 252,
    "organizations": [],
    "contributions": 71,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Thomas Aylott",
    "login": "subtleGradient",
    "location": "Fremont, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/404c6364f94068264bac04f99f5608a4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 334,
    "organizations": [
      "mootools",
      "facebook",
      "textmate"
    ],
    "contributions": 71,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rich Hickey",
    "login": "richhickey",
    "location": "NY",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/846ec9659b7b76c8fbb335f25b08d5d0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "clojure",
      "speakerconf"
    ],
    "contributions": 71,
    "contributionsStreak": 10,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "Grafikart",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f48d118b2f34a0c69bc745891e81fe93?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 180,
    "organizations": [],
    "contributions": 71,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Chad Fowler",
    "login": "chad",
    "location": "Washington, DC",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/77f306388bb6ae00ac0b0401e27cdc99?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 298,
    "organizations": [
      "livingsocial"
    ],
    "contributions": 71,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Eddie Machado",
    "login": "eddiemachado",
    "location": "Venice Beach, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b5bc833a78ab41971a296e5f0a3e620a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 241,
    "organizations": [
      "themble"
    ],
    "contributions": 70,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Atsushi Kobayashi",
    "login": "nekokak",
    "location": "Kanagawa Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/6a4f5a57f6afbcff5bb4f69935cdc3db?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [
      "perldoc-jp"
    ],
    "contributions": 70,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Geoffrey Grosenbach",
    "login": "topfunky",
    "location": "Seattle, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a9d024f5032b8de04d7c74528beb77ab?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 936,
    "organizations": [],
    "contributions": 70,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Matteo Spinelli",
    "login": "cubiq",
    "location": "Florence, Italy",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/7f6a5eb2b362a675dea2f8fc042bffef?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 326,
    "organizations": [],
    "contributions": 69,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Adam Wiggins",
    "login": "adamwiggins",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/fcafc7eab67d34d48b14f9d70bc05713?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 420,
    "organizations": [
      "sinatra",
      "heroku"
    ],
    "contributions": 69,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Claus Wahlers",
    "login": "claus",
    "location": "São Paulo, Brazil",
    "language": "ActionScript",
    "gravatar": "https://secure.gravatar.com/avatar/a9cbf77542e8bbf988bded9a3c7d6b28?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 206,
    "organizations": [
      "MadeInHaus"
    ],
    "contributions": 69,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Garann Means",
    "login": "garann",
    "location": "Austin, TX",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/76f795cabbf80024b1024517c67f0bcf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 270,
    "organizations": [
      "etsy",
      "allgirlhacknight",
      "nko2",
      "girldevelopit",
      "ot-crew"
    ],
    "contributions": 68,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jesse Newland",
    "login": "jnewland",
    "location": "Savannah, GA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/f317439da90c3176adc8938bcf5181ff?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 251,
    "organizations": [
      "github",
      "etsy",
      "cookbooks"
    ],
    "contributions": 68,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Daniel Lopes",
    "login": "danielvlopes",
    "location": "Belo Horizonte - MG - Brasil",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/89e57a28dfdb85e07b33f92783dbe349?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 275,
    "organizations": [],
    "contributions": 68,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Grant Paul",
    "login": "grpaul",
    "location": "San Francisco",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/eb827b39e830eff658fe84a7fbd9af84?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 497,
    "organizations": [
      "Xuzz"
    ],
    "contributions": 68,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Hilary Mason",
    "login": "hmason",
    "location": "New York, NY",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/c87a84cf3b06077036deade1b44aa45e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 761,
    "organizations": [
      "bitly",
      "nycresistor"
    ],
    "contributions": 68,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ben Vinegar",
    "login": "benvinegar",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2ab326462da24e47db9a12eb984524aa?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [
      "disqus"
    ],
    "contributions": 67,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jimmy Bogard",
    "login": "jbogard",
    "location": "Austin, TX",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/cc359c5ccf90d7a24b5976316797b5ec?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [
      "AutoMapper"
    ],
    "contributions": 67,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Cameron McEfee",
    "login": "cameronmcefee",
    "location": "San Francisco",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a79ff2bb7da84e275361857d2feb2b1b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 329,
    "organizations": [
      "github"
    ],
    "contributions": 66,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "闲耘™",
    "login": "hotoo",
    "location": "Hangzhou, China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/2fdef0a77e4bf207e3ec30660e7896e8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 217,
    "organizations": [
      "vimcn",
      "diveintohtml5-zh-cn",
      "aralejs"
    ],
    "contributions": 65,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 4
  },
  {
    "name": "Dustin Whittle",
    "login": "dustinwhittle",
    "location": "San Francisco, California, USA",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/6d9b2c900628962b16a5cb5e4e73990e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 165,
    "organizations": [
      "sensio",
      "parvenu",
      "kwarter"
    ],
    "contributions": 65,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dinner Bone",
    "login": "Dinnerbone",
    "location": "Stockholm, Sweden",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/e5770fdf7c887878654caa894257200a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 298,
    "organizations": [
      "Bukkit",
      "Mojang"
    ],
    "contributions": 65,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Joe Stump",
    "login": "joestump",
    "location": "Boulder, CO",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/2e47ce8a038f8eaf3fe80c069e380814?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 292,
    "organizations": [
      "sprintly"
    ],
    "contributions": 65,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Naoya Ito",
    "login": "naoya",
    "location": "Tokyo, Japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/b4afc7d853d7f1cb6a253d3c7183c05a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 459,
    "organizations": [
      "RubyMotionJP"
    ],
    "contributions": 64,
    "contributionsStreak": 8,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ola Bini",
    "login": "olabini",
    "location": "Chicago, IL",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a5b01739148d8795e99582444361a1bc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 315,
    "organizations": [
      "thoughtworks",
      "jruby",
      "Ioke",
      "seph-lang",
      "speakerconf"
    ],
    "contributions": 60,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Carlos Brando",
    "login": "carlosbrando",
    "location": "Brazil",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/aa3622edf87e418d834aa66d6a8c8e4c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 416,
    "organizations": [
      "remarkable"
    ],
    "contributions": 60,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Daniel Spiewak",
    "login": "djspiewak",
    "location": "Wisconsin, USA",
    "language": "Scala",
    "gravatar": "https://secure.gravatar.com/avatar/6883cab0dedd4d45544abfc7eb788e82?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 225,
    "organizations": [
      "reportgrid"
    ],
    "contributions": 59,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 2
  },
  {
    "name": "Francisco Ryan Tolmasky I",
    "login": "tolmasky",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/baf6b3ca7b2031809d7ebefc3829b6ce?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 198,
    "organizations": [
      "cappuccino"
    ],
    "contributions": 57,
    "contributionsStreak": 6,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Mike Ash",
    "login": "mikeash",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/9245f9f7df459c19a735740e281aeae2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 500,
    "organizations": [
      "plausiblelabs"
    ],
    "contributions": 56,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andy Matuschak",
    "login": "andymatuschak",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/5a37f99aa1daf8c27aaa81e4f019484d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 283,
    "organizations": [],
    "contributions": 55,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ayaka Ikezawa",
    "login": "ikeay",
    "location": "",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/59e62a31385a7c6786514833e1ac119b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 732,
    "organizations": [],
    "contributions": 54,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Devin Ross",
    "login": "devinross",
    "location": "New York",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/942a9744128f7bdeaabdfca82bac21f6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 191,
    "organizations": [],
    "contributions": 54,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Eric Florenzano",
    "login": "ericflo",
    "location": "San Francisco, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/04d6b8e8d3c68899ac88eb8623392150?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 566,
    "organizations": [
      "mochi",
      "boilerplate",
      "clutchio"
    ],
    "contributions": 52,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Alex Payne",
    "login": "al3x",
    "location": "",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/3fcb27e39d2ff47357a803e91347fee4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 711,
    "organizations": [],
    "contributions": 52,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "elliottcable",
    "location": "Anchorage, Alaska",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/4eac78fe7a7a607dcc097a0d6fd63690?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 211,
    "organizations": [
      "WebKit",
      "Paws",
      "yreality"
    ],
    "contributions": 50,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Cliff Moon",
    "login": "cliffmoon",
    "location": "San Francisco",
    "language": "Erlang",
    "gravatar": "https://secure.gravatar.com/avatar/c8a7750a333cfb27a1c72aa61b73b763?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 187,
    "organizations": [
      "boundary"
    ],
    "contributions": 49,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ari",
    "login": "auser",
    "location": "Palo Alto",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/0ec7fe2c17900b71bd85ff63fc9d8a17?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [
      "sinatra",
      "att-innovate"
    ],
    "contributions": 48,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Robin Lu",
    "login": "robin",
    "location": "Beijing, China",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/fafeacba500e05318f8b4643b375fcd3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 225,
    "organizations": [
      "in-src"
    ],
    "contributions": 48,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nick Kallen",
    "login": "nkallen",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/2b292377455ec105686730d6aa59c262?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 316,
    "organizations": [
      "rails"
    ],
    "contributions": 48,
    "contributionsStreak": 11,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Richard Jones",
    "login": "RJ",
    "location": "London",
    "language": "Erlang",
    "gravatar": "https://secure.gravatar.com/avatar/f49a08029a6762a0b2246267cdb02c58?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 296,
    "organizations": [
      "spawnfest",
      "irccloud"
    ],
    "contributions": 47,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "iosdeveloper",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/48517012c96de18f94cafc09deeb2446?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 212,
    "organizations": [],
    "contributions": 46,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "hidden",
    "login": "zzdhidden",
    "location": "China",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a128ed994fdba3004a713314a840204c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 192,
    "organizations": [
      "webim",
      "zhejie"
    ],
    "contributions": 45,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Joni Korpi",
    "login": "jonikorpi",
    "location": "Finland",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/938ae65b289d32d860f8c619b46a49e7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 203,
    "organizations": [
      "kiskolabs"
    ],
    "contributions": 45,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 5
  },
  {
    "name": "Mark Allison",
    "login": "StylingAndroid",
    "location": "Hertfordshire, UK",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/ec408e2c84f631cc0153b2d810347f3c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 271,
    "organizations": [],
    "contributions": 45,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Gregg Pollack",
    "login": "Gregg",
    "location": "Orlando, FL",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/7255c45cb618d9759e1be08fdc9c365c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 208,
    "organizations": [
      "envylabs",
      "codeschool"
    ],
    "contributions": 44,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Phil Calçado",
    "login": "pcalcado",
    "location": "Berlin",
    "language": "Clojure",
    "gravatar": "https://secure.gravatar.com/avatar/47ebffbfed2c317687211c7745eec80d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 248,
    "organizations": [
      "soundcloud",
      "casadocodigo"
    ],
    "contributions": 44,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jeff Balogh",
    "login": "jbalogh",
    "location": "San Francisco",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/6734abfcc677eef556c5bc011a57ea89?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 194,
    "organizations": [
      "mozilla",
      "mozilla-services"
    ],
    "contributions": 43,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tom Robinson",
    "login": "tlrobinson",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/b8b1657e3d9725114383b2763d367a3a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 309,
    "organizations": [
      "cappuccino",
      "robohornet",
      "webpipes"
    ],
    "contributions": 43,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Matt Ranney",
    "login": "mranney",
    "location": "Oakland, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/f2602cabcccbe70f6e73e0c86379921d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 194,
    "organizations": [
      "RebelVox",
      "Voxer"
    ],
    "contributions": 42,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "yuiseki",
    "login": "yuiseki",
    "location": "Akihabara, Tokyo, Japan.",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/be655ec7caeb4fe41d62f69db209496a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 208,
    "organizations": [
      "sinsai",
      "maltine-records",
      "International-Space-Apps-Challenge-Tokyo"
    ],
    "contributions": 40,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "angus croll",
    "login": "angus-c",
    "location": "San Francisco",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/52c6174ba60557536f93809b4e95d97c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 187,
    "organizations": [
      "twitter"
    ],
    "contributions": 40,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Hendri Karisma",
    "login": "situkangsayur",
    "location": "Bandung",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/df079590b7d715bcbe6a70955000cfb0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [],
    "contributions": 40,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Tim Burks",
    "login": "timburks",
    "location": "Palo Alto, CA",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/46ebd20b4af816e9e4ed4d4b6163fbbc?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 291,
    "organizations": [],
    "contributions": 40,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "12meses12katas",
    "location": "",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/c92497f11cb4bacfdf0e27ebb18dfe4f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 158,
    "organizations": [],
    "contributions": 40,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Josh Susser",
    "login": "joshsusser",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/9f0f89bbd9e1ecfbaab6584e429b7a2f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 201,
    "organizations": [
      "gogaruco",
      "rubinius"
    ],
    "contributions": 40,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nico Hagenburger",
    "login": "hagenburger",
    "location": "Berlin, Germany",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d72ec8b81ac92d0e58a6b88145c548c2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 204,
    "organizations": [
      "moviepilot",
      "p7s1digital"
    ],
    "contributions": 39,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yin Wang",
    "login": "yinwang0",
    "location": "",
    "language": "Scheme",
    "gravatar": "https://secure.gravatar.com/avatar/43ec631d6fda6a1cf42aaf875d784597?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 720,
    "organizations": [],
    "contributions": 38,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Adrian Kosmaczewski",
    "login": "akosma",
    "location": "Oron-la-Ville, Switzerland",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/6757b8e1c5804eb021ff599678450f9b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 262,
    "organizations": [
      "akosmasoftware"
    ],
    "contributions": 38,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Zach Beane",
    "login": "quicklisp",
    "location": "Portland, Maine",
    "language": "Common",
    "gravatar": "https://secure.gravatar.com/avatar/bf0a0923f08795c1a2de637e3a071648?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 237,
    "organizations": [],
    "contributions": 38,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Fabio Akita",
    "login": "akitaonrails",
    "location": "Brazil",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/98c2fb4c31fae25fe0b618f1c994c1f3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "Codeminer42"
    ],
    "contributions": 38,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jeffrey Way",
    "login": "JeffreyWay",
    "location": "Chattanooga, TN",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/6fa6f0343e6c25ab7d7a68ae018fa5df?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "envato"
    ],
    "contributions": 37,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Kyle Bragger",
    "login": "kylebragger",
    "location": "SF",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/5c874db5aff154c8f6ade20f177e7b70?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 238,
    "organizations": [
      "Forrst"
    ],
    "contributions": 36,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "bret",
    "login": "worrydream",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/05a95058b2bac76774fc27a313e26446?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 260,
    "organizations": [],
    "contributions": 35,
    "contributionsStreak": 7,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Vinicius Teles",
    "login": "viniciusteles",
    "location": "Rio de Janeiro, Brazil",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/f44f52109f2b22b69f2ee34b6417b2a6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 302,
    "organizations": [
      "horaextra",
      "dojorio"
    ],
    "contributions": 35,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Sebastian Riedel",
    "login": "kraih",
    "location": "",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/d9fae208c6398bc6172b97ad62427842?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 243,
    "organizations": [
      "mojolicious"
    ],
    "contributions": 34,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "开源中国",
    "login": "oschina",
    "location": "SZ China",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/724beed2464be3366cf8697d9c0b7268?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 405,
    "organizations": [],
    "contributions": 34,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "vim-scripts",
    "location": "",
    "language": "VimL",
    "gravatar": "https://secure.gravatar.com/avatar/b7fa89418f6767ac5fe5bfbe8e86a014?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [],
    "contributions": 33,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "ry",
    "login": "ry",
    "location": "",
    "language": "",
    "gravatar": "https://secure.gravatar.com/avatar/b984299ceb40752b58146714eb192554?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 2,
    "organizations": [],
    "contributions": 33,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dmitry Baranovskiy",
    "login": "DmitryBaranovskiy",
    "location": "Sydney, Australia",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/679a33ec2ceb2195591888496d287df8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "sydjs",
      "adobe"
    ],
    "contributions": 32,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rob Conery",
    "login": "robconery",
    "location": "Hanalei, HI",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/31b18bc48108bc410884022764dbeec6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 660,
    "organizations": [
      "tekpub"
    ],
    "contributions": 32,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Steve Dekorte",
    "login": "stevedekorte",
    "location": "San Francisco",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/7588e3d3aa94ba40f57f495ec8c3206b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 298,
    "organizations": [],
    "contributions": 32,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dave DeLong",
    "login": "davedelong",
    "location": "Santa Clara, CA",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/0bf4d0bd5a77c2e0620c40ba34cc5c2e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 287,
    "organizations": [],
    "contributions": 31,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "stefanesser",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/5fbbd4fa1fef6006bacc457e1b3c7a8d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 187,
    "organizations": [],
    "contributions": 31,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Robert C. Martin",
    "login": "unclebob",
    "location": "Gurnee, IL",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/e47a3e81d72676bd497b1cb67f66da97?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 719,
    "organizations": [
      "8thlight"
    ],
    "contributions": 31,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andrei Zmievski",
    "login": "andreiz",
    "location": "San Francisco, CA",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/aa4af19d5034741a0864f0f0738800f2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 178,
    "organizations": [
      "php-memcached-dev"
    ],
    "contributions": 30,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Peter Cooper",
    "login": "peterc",
    "location": "Cambridge, UK",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/6268c7528d855f1cef5696a00d159909?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 359,
    "organizations": [
      "postrank-labs"
    ],
    "contributions": 30,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Vladimir Kolesnikov",
    "login": "voloko",
    "location": "Mountain View",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/bbee57a05b72bd3c29c1e48551a816f4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 251,
    "organizations": [],
    "contributions": 29,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Matthijs Hollemans",
    "login": "hollance",
    "location": "Breda, Netherlands",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/3fe51901d36948779ddf2d144babf2c3?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 296,
    "organizations": [
      "OneGameAMonth"
    ],
    "contributions": 28,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Erica Sadun",
    "login": "erica",
    "location": "Denver, CO",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/5451f7df31d36d0159a018706aec7adb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [],
    "contributions": 28,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jay Freeman (saurik)",
    "login": "saurik",
    "location": "Santa Barbara, CA",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/2aeddf3522b96c79031ae5e460bd9b40?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 267,
    "organizations": [
      "SaurikIT"
    ],
    "contributions": 27,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Sam de Freyssinet",
    "login": "samsoir",
    "location": "Chicago, IL",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/116a0a17ea0612994d2d2823347b4c09?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 173,
    "organizations": [
      "kohana"
    ],
    "contributions": 27,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Steve Smith",
    "login": "orderedlist",
    "location": "South Bend, IN, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ae14cc4491ac334f9cd23f9f93b4305e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 361,
    "organizations": [
      "github",
      "orderedlistinc",
      "Animatable"
    ],
    "contributions": 27,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ben Orenstein",
    "login": "r00k",
    "location": "Boston, MA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ad4631ddac812d2492978b531cadb387?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 184,
    "organizations": [
      "thoughtbot"
    ],
    "contributions": 26,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "joe armstrong",
    "login": "joearms",
    "location": "stockhom sweden",
    "language": "Erlang",
    "gravatar": "https://secure.gravatar.com/avatar/b50d3f9ed186e43dfcc867571749393c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 451,
    "organizations": [],
    "contributions": 25,
    "contributionsStreak": 5,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brandon Kelly",
    "login": "brandonkelly",
    "location": "California",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/1d2ffecbd0a4929ad92a1166b247e6a6?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 197,
    "organizations": [
      "pixelandtonic"
    ],
    "contributions": 25,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Daniel Peebles",
    "login": "copumpkin",
    "location": "Connecticut",
    "language": "Haskell",
    "gravatar": "https://secure.gravatar.com/avatar/7e6f970116176f8c098e4c43a67d98bb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 225,
    "organizations": [
      "agda",
      "haskell"
    ],
    "contributions": 25,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Michael Koziarski",
    "login": "NZKoz",
    "location": "Wellington, New Zealand",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/efa76b164a7de4a5730e4fa397cc4425?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 225,
    "organizations": [
      "rails"
    ],
    "contributions": 24,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brandon Aaron",
    "login": "brandonaaron",
    "location": "Texas",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/5caa0660a37102fb758ebff952d936d9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 436,
    "organizations": [
      "rubyftw",
      "jquery",
      "simplifi"
    ],
    "contributions": 23,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Christian Van Der Henst S.",
    "login": "cvander",
    "location": "Santiago, Chile",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/a48714f9671877208b4cb334992b023a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 482,
    "organizations": [
      "Mejorandola",
      "generacionmejorandola"
    ],
    "contributions": 22,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Guilherme Chapiewski",
    "login": "guilhermechapiewski",
    "location": "Cupertino, California, USA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/52ef01d3d0b0a046c296adf815386f89?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 391,
    "organizations": [
      "yahoo",
      "yql",
      "pyccuracy",
      "horaextra"
    ],
    "contributions": 22,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dave Fayram",
    "login": "KirinDave",
    "location": "SF,CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d4fabd6c08ac228a3ff846d9d0d1580e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 195,
    "organizations": [],
    "contributions": 21,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jamis Buck",
    "login": "jamis",
    "location": "Caldwell, Idaho, USA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/992fe8c19bbbc27f2b562a9f96efc03d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 670,
    "organizations": [
      "37signals"
    ],
    "contributions": 21,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nicole Sullivan",
    "login": "stubbornella",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/1d153775485e41e8474b115e2b30413d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 787,
    "organizations": [],
    "contributions": 20,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Michael Hoisie",
    "login": "hoisie",
    "location": "San Francisco, CA",
    "language": "Go",
    "gravatar": "https://secure.gravatar.com/avatar/47867063d0ac506b9f90080a708e7f55?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 198,
    "organizations": [],
    "contributions": 19,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Daniel Neighman",
    "login": "hassox",
    "location": "Australia",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/9d1f5d2d9de70bd9a934f557dc95a406?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 180,
    "organizations": [
      "sydjs"
    ],
    "contributions": 19,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Matthew A. Russell",
    "login": "ptwobrussell",
    "location": "Franklin, TN",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/322a50ffdb98591460f05015770b7adb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 182,
    "organizations": [],
    "contributions": 18,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Joshua Hill",
    "login": "posixninja",
    "location": "Atlanta, GA",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/6f0e11b10e4297681f2ef833e94dba61?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 326,
    "organizations": [],
    "contributions": 17,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jonnie Hallman",
    "login": "destroytoday",
    "location": "Brooklyn",
    "language": "ActionScript",
    "gravatar": "https://secure.gravatar.com/avatar/6cb5bbfc4a621565604f35bdb610a9ed?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 233,
    "organizations": [
      "oakstudios",
      "fictivekin"
    ],
    "contributions": 17,
    "contributionsStreak": 4,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Hitoshi Amano",
    "login": "amachang",
    "location": "Tokyo, Japan",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/fd5f685078e05abc24334d86adf20fae?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 250,
    "organizations": [],
    "contributions": 16,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Sebastian Tschan",
    "login": "blueimp",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/188943e53857bfaca6a5cf4328866e5d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 695,
    "organizations": [],
    "contributions": 16,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Xin Liu",
    "login": "livid",
    "location": "Shanghai, China",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/9d208c7fa1e7afa739ced76bc134bfba?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 692,
    "organizations": [],
    "contributions": 16,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jim Dovey",
    "login": "AlanQuatermain",
    "location": "Toronto, ON",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/911e9fb72bbb1221d1d6913cab15d732?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 429,
    "organizations": [],
    "contributions": 16,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "marcoarment",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/e7f3eb127c979c3be007f1134944e7cd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 677,
    "organizations": [],
    "contributions": 15,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Micheil Smith",
    "login": "miksago",
    "location": "London, UK",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 192,
    "organizations": [
      "brandedcode",
      "EqualMedia",
      "promised-io"
    ],
    "contributions": 14,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ben Cherry",
    "login": "bcherry",
    "location": "San Francisco, CA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/11ca08051b8b1cd99938f110d589ba0b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 216,
    "organizations": [],
    "contributions": 14,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Obie Fernandez",
    "login": "obie",
    "location": "Atlanta, GA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/d61a2db96e73acf66b0b18688a39ecfb?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 298,
    "organizations": [
      "speakerconf"
    ],
    "contributions": 14,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Joel Perras",
    "login": "jperras",
    "location": "Toronto, Canada",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/21d9c11de70ec53e5ec6c60ac3f747c0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 158,
    "organizations": [
      "UnionOfRAD",
      "fictivekin",
      "nerdie"
    ],
    "contributions": 14,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Joe Damato",
    "login": "ice799",
    "location": "san francisco, ca",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/6ad736d940f059c279ff93558d23504e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 228,
    "organizations": [
      "boundary"
    ],
    "contributions": 13,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Paulo Silveira",
    "login": "peas",
    "location": "São Paulo, Brazil",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/c621f1575c6b408ed20d110b86873357?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 170,
    "organizations": [
      "caelum"
    ],
    "contributions": 13,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Adam Stacoviak",
    "login": "adamstac",
    "location": "Houston, TX",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/edb0f9e4684403ca978d9d784c9d9341?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 368,
    "organizations": [
      "thechangelog",
      "purecharity",
      "causemetric",
      "thesassway"
    ],
    "contributions": 12,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "comex",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/c5edb8ac42268961073ce12297a871f4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 490,
    "organizations": [],
    "contributions": 12,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Paul Neave",
    "login": "neave",
    "location": "London",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/735d2094edc6fdc0c3b5b249ecda5c75?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 175,
    "organizations": [],
    "contributions": 12,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Matt Gemmell",
    "login": "mattgemmell",
    "location": "Edinburgh, Scotland (UK)",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/caf8e0aca5de2c11b22af0c902e3c1c4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 830,
    "organizations": [],
    "contributions": 11,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Pratik",
    "login": "lifo",
    "location": "London",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a05834e9b5954947eb0ba3b570c47d5e?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 380,
    "organizations": [
      "rails",
      "37signals",
      "rack"
    ],
    "contributions": 11,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Corey Johnson",
    "login": "probablycorey",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ac65e62b7ad42e9bc5fdf391d0e250a7?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 225,
    "organizations": [
      "github",
      "minimagick"
    ],
    "contributions": 10,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Robert Hodgin",
    "login": "flight404",
    "location": "San Francisco",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/90c65f9eadb6ec82fdcc5ae8a421fd5b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 223,
    "organizations": [],
    "contributions": 10,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Pat Nakajima",
    "login": "nakajima",
    "location": "New York, NY",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/3399cbfb9e5fec93c324789b29309911?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 430,
    "organizations": [
      "github"
    ],
    "contributions": 10,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jens Bergensten",
    "login": "jebox",
    "location": "Stockholm, Sweden",
    "language": "",
    "gravatar": "https://secure.gravatar.com/avatar/5d516fc8c3141dcf808eab721b1c1d44?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 157,
    "organizations": [
      "Mojang"
    ],
    "contributions": 9,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nodester",
    "login": "nodester",
    "location": "Phoenix, Arizona",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/8fbdd208cbecb812550683dfe9b0a1f2?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 442,
    "organizations": [],
    "contributions": 9,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "jlamarche",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/4a7fbbca80dcec9edc46bf97b8a9d10f?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 229,
    "organizations": [
      "martiancraft"
    ],
    "contributions": 9,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dan Webb",
    "login": "danwrong",
    "location": "San Francisco",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/0727907ae68db2e8ebc1ea1b01f00d69?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 205,
    "organizations": [
      "twitter"
    ],
    "contributions": 8,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "simplebits",
    "location": "",
    "language": "PHP",
    "gravatar": "https://secure.gravatar.com/avatar/47a8050b53d5d816183fd1ee6555b313?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 172,
    "organizations": [],
    "contributions": 8,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Andrew Gerrand",
    "login": "nf",
    "location": "Sydney",
    "language": "Go",
    "gravatar": "https://secure.gravatar.com/avatar/62e9b1d0c4e00a93f5ca64bc2ac04a94?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 341,
    "organizations": [],
    "contributions": 8,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Loren Brichter",
    "login": "atebits",
    "location": "Philly",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/248f40e895dbe4656616ab3f9bf139ff?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 507,
    "organizations": [],
    "contributions": 8,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jeremy Keith",
    "login": "adactio",
    "location": "Brighton, UK",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/5ad82c5ba0264363974af89deb743c20?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 216,
    "organizations": [
      "clearleft",
      "mobilewood"
    ],
    "contributions": 8,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ole Zorn",
    "login": "omz",
    "location": "Berlin, Germany",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/922171743c2bc912e98a423df1d91499?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 269,
    "organizations": [],
    "contributions": 8,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Blaine Cook",
    "login": "blaine",
    "location": "London, England",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/fa273befbb36b0323044fcf035b7ee39?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 179,
    "organizations": [
      "historymesh",
      "poetica"
    ],
    "contributions": 8,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Joe Ricioppo",
    "login": "joericioppo",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/2eb9851bb97b68e2d1b80e0f99a7bd48?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 186,
    "organizations": [],
    "contributions": 8,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jordan Mechner",
    "login": "jmechner",
    "location": "",
    "language": "Assembly",
    "gravatar": "https://secure.gravatar.com/avatar/1fe62201864a55dcbd1f800db11eafad?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 372,
    "organizations": [],
    "contributions": 8,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "jawahar",
    "login": "csjaba",
    "location": "chennai,tamil nadu,india",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/487684504c90d530bc674ea554acb9c5?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 241,
    "organizations": [],
    "contributions": 8,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Simon Willison",
    "login": "simonw",
    "location": "London",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/e172168287724cd3051588354ded616b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 771,
    "organizations": [],
    "contributions": 7,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Leah Culver",
    "login": "leah",
    "location": "San Francisco, CA",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/5573f0b3cbe983ae0f2d00a2e610d6be?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [
      "sincerely",
      "groveio"
    ],
    "contributions": 7,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Rob Hawkes",
    "login": "robhawkes",
    "location": "Bournemouth, UK",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/fb2b8ae81bb14f846d850263464e4050?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 224,
    "organizations": [
      "rawkes"
    ],
    "contributions": 7,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "AnderWeb",
    "location": "",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/7d9e24d5e0b42572c0ffe7cacd639345?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 244,
    "organizations": [],
    "contributions": 7,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "pod2g",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/d3f15b221294f711293fb6b0c9073078?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 190,
    "organizations": [
      "Chronic-Dev"
    ],
    "contributions": 7,
    "contributionsStreak": 3,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Matt Todd",
    "login": "mtodd",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/b6861bc75bff3c594212338a914a39ad?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 201,
    "organizations": [
      "github",
      "rack"
    ],
    "contributions": 6,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Cyril Mottier",
    "login": "cyrilmottier",
    "location": "France",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/e9bf8f6d5480ea2a2623df7dccfd1f70?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 396,
    "organizations": [],
    "contributions": 6,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Grant Skinner",
    "login": "gskinner",
    "location": "",
    "language": "ActionScript",
    "gravatar": "https://secure.gravatar.com/avatar/e1d15f085b93762ab30283fb3eae101c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 635,
    "organizations": [
      "CreateJS"
    ],
    "contributions": 6,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Brendan Eich",
    "login": "BrendanEich",
    "location": "",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/c936d5fc7ef09504480b9d8aafb7e8a0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 216,
    "organizations": [],
    "contributions": 6,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "kejun",
    "login": "kejun",
    "location": "beijing",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/c281b65fc956e69cff4cc176bb932232?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 230,
    "organizations": [
      "douban-f2e",
      "mwip"
    ],
    "contributions": 5,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "mala",
    "login": "mala",
    "location": "japan",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/01b71b58e2be3c71a605a356823292c0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 263,
    "organizations": [
      "blosxom-fanatics"
    ],
    "contributions": 5,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Masafumi Otsune",
    "login": "otsune",
    "location": "Tokyo",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/96137e8beb09ef61e628fe7d52351de8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 199,
    "organizations": [],
    "contributions": 5,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Sergey Tikhonov",
    "login": "haqu",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/8818d0d435172a119eca85fccc073b5d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 221,
    "organizations": [],
    "contributions": 5,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "planetbeing",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/a4b0f4de7a5238491547d1e1fa9f031a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 358,
    "organizations": [],
    "contributions": 5,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Nicolas Haunold",
    "login": "westbaer",
    "location": "Vienna, Austria",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/9fb31e6287818d89b9cfe6c67c3e32a1?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 178,
    "organizations": [
      "Chronic-Dev"
    ],
    "contributions": 4,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Jason Morrissey",
    "login": "jasonmorrissey",
    "location": "Melbourne, Australia",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/b3c89587c6e7fd59e8fc7c170ce09566?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 164,
    "organizations": [],
    "contributions": 4,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Marcel Molina",
    "login": "marcel",
    "location": "San Francisco, CA",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/aefec48f6f83b6ead722c625c8edf78b?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 161,
    "organizations": [
      "twitter"
    ],
    "contributions": 4,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Account for Github research",
    "login": "hcilab",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/4a70a247b4f222894f6b9861e40f733d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 398,
    "organizations": [
      "LSDG"
    ],
    "contributions": 4,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "johnezang",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/1b33e4065ce33ca9873fea6074682a5d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 178,
    "organizations": [],
    "contributions": 3,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Dan Benjamin",
    "login": "dan",
    "location": "Austin, Texas",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/ccac01cefa0352e0014a8de5b4efcdfd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 310,
    "organizations": [],
    "contributions": 3,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "kevin",
    "login": "montylounge",
    "location": "NJ/NYC",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/038e0e339c789eba490983fa9bbf170c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 163,
    "organizations": [],
    "contributions": 3,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "John Freddy Vega",
    "login": "freddier",
    "location": "",
    "language": "Python",
    "gravatar": "https://secure.gravatar.com/avatar/4552047320032dbee698dcd282b846c9?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 322,
    "organizations": [
      "Mejorandola",
      "generacionmejorandola"
    ],
    "contributions": 3,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Robert Penner",
    "login": "robertpenner",
    "location": "Canada",
    "language": "ActionScript",
    "gravatar": "https://secure.gravatar.com/avatar/9fcc1d6d4af9da05d3f9b75d068d122a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 411,
    "organizations": [
      "robotlegs",
      "bayareacomputerclub"
    ],
    "contributions": 3,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "skypeopensource",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/6712b98915e449f9edbbce00657b7672?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 182,
    "organizations": [],
    "contributions": 3,
    "contributionsStreak": 2,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Sony Xperia Developer World",
    "login": "sonyxperiadev",
    "location": "Sweden",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/0be131c9d3fb779490e90ca8a38f03e8?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 168,
    "organizations": [],
    "contributions": 2,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Romain Guy",
    "login": "romainguy",
    "location": "",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/237be48129b762b31847d6167597366d?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 257,
    "organizations": [],
    "contributions": 2,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Ching-Lan 'digdog' HUANG 黃 青嵐",
    "login": "digdog",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/dcbe94cbbf18592e313560a37cb671bf?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 243,
    "organizations": [],
    "contributions": 2,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Adam 'Atomic' Saltsman",
    "login": "AdamAtomic",
    "location": "Austin, TX",
    "language": "ActionScript",
    "gravatar": "https://secure.gravatar.com/avatar/c0ac3c2b2eb8c2cf1cc7d5df117e772c?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 341,
    "organizations": [],
    "contributions": 2,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "ravendb",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/89ecda6d2a43c388aa5ec420d90fba96?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [],
    "contributions": 2,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "raspberrypi",
    "location": "",
    "language": "Shell",
    "gravatar": "https://secure.gravatar.com/avatar/62a2172c0b957c62e695292f1bbb3ab0?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 1,
    "organizations": [],
    "contributions": 2,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "",
    "login": "openframeworks",
    "location": "",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/a858611b044a8302ab14cfe752e17369?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 506,
    "organizations": [],
    "contributions": 1,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "The Octocat",
    "login": "octocat",
    "location": "San Francisco",
    "language": "",
    "gravatar": "https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 294,
    "organizations": [],
    "contributions": 1,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Aaron Newton",
    "login": "anutron",
    "location": "San Francisco, CA, USA",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/7f02bfb29baa35797094f45507754e99?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 159,
    "organizations": [
      "mootools",
      "clientcide"
    ],
    "contributions": 1,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Practical Arduino - The Book",
    "login": "practicalarduino",
    "location": "Australia",
    "language": "Java",
    "gravatar": "https://secure.gravatar.com/avatar/19339561ab1226ffe4afd92be23d6db4?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 190,
    "organizations": [],
    "contributions": 1,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Krystal Mok",
    "login": "rednaxelafx",
    "location": "Hangzhou, China",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/a93fb4d9b744d1f433115ae725f25e30?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 172,
    "organizations": [],
    "contributions": 1,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "cocos2d",
    "login": "cocos2d",
    "location": "",
    "language": "Objective",
    "gravatar": "https://secure.gravatar.com/avatar/2c474191a9930625c01a6752b40ebf72?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 751,
    "organizations": [],
    "contributions": 1,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Peter Boctor",
    "login": "boctor",
    "location": "San Francisco/Seattle",
    "language": "Ruby",
    "gravatar": "https://secure.gravatar.com/avatar/dfad456f9e0753a53eeea065a06ddbdd?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 205,
    "organizations": [],
    "contributions": 1,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Paul Pajo",
    "login": "pageman",
    "location": "Manila, Philippines",
    "language": "JavaScript",
    "gravatar": "https://secure.gravatar.com/avatar/ca064364d586e5415d3d4c0fc3d02b0a?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 212,
    "organizations": [],
    "contributions": 1,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "George Hotz",
    "login": "geohot",
    "location": "Glen Rock, NJ",
    "language": "C",
    "gravatar": "https://secure.gravatar.com/avatar/af3257df626f6e1f0fdbc77c1ffb07ac?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 397,
    "organizations": [],
    "contributions": 1,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  },
  {
    "name": "Yuval Kogman",
    "login": "nothingmuch",
    "location": "The Intertubes",
    "language": "Perl",
    "gravatar": "https://secure.gravatar.com/avatar/81912bc5ca02376f99a5ee44531dee27?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
    "followers": 220,
    "organizations": [
      "kiokudb"
    ],
    "contributions": 1,
    "contributionsStreak": 1,
    "contributionsCurrentStreak": 0
  }
];


User.Model = Model.extend({
  url: '/users/',
  initialize: function() {

  }
});

User.Collection = Collection.extend({
  model: User.Model,
  getRandomUser: function() {
    var randIndex = _.random(0, this.length);
    return this.at(randIndex);
  }

});

module.exports = User;
