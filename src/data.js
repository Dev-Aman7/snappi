export default {
  settings: {
    images: {
      logo: "images/logo.png",
    },
    constants: {
      currency: "Food",
    },
    camera: {
      zoom: {
        type: "static",
        default: 700,
      },
    },
    shop: {
      isEnabled: false,
    },
    inventory: {
      isEnabled: false,
    },
  },
  variables: {
    timeLeft: {
      default: "$timePreoutbreak",
    },
    state: {
      default: "preoutbreak",
    },
    timerMessage: {
      default: "Outbreak happening in $timeLeft seconds",
    },
    timeGameover: {
      default: 10,
    },
    outbreakRatio: {
      default: 0.15,
    },
    zombieCount: {
      default: 0,
    },
    humanCount: {
      default: 0,
    },
    zombieDecay: {
      default: 0.995,
    },
    humanWinBonus: {
      default: 500,
    },
    zombieInfectBonus: {
      default: 100,
    },
  },
  abilities: {
    use: {
      type: "use",
      target: ["holdingItem"],
      cost: {},
    },
    pickup: {
      type: "pickup",
      target: ["entityInFront"],
      cost: {},
    },
    hold: {
      type: "hold",
      target: ["entityInFront"],
      cost: {
        cast: {},
        channeling: {},
      },
    },
    release: {
      type: "release",
      cost: {},
    },
    dash: {
      type: "push",
      target: ["self"],
      force: 1200,
      createJoint: false,
      cost: {
        cast: {
          stamina: 18,
        },
      },
    },
  },
  unitTypes: {
    human: {
      name: "Human",
      handle: "human",
      skin: "man",
      price: 0,
      baseSpeed: 54,
      abilities: {
        mouse1Down: "use",
      },
      customAttributes: {
        immunity: {
          min: 0,
          max: 100,
          value: 0,
          regenerateSpeed: -0.05,
          isVisible: true,
          color: "cyan",
        },
      },
      spawnPosition: {
        x: 1200,
        y: 2200,
      },
      body: {
        type: "dynamic",
        linearDamping: 5,
        angularDamping: 1,
        allowSleep: true,
        bullet: false,
        fixedRotation: false,
        fixtures: [
          {
            density: 5,
            friction: 0.01,
            restitution: 0.05,
            shape: {
              type: "rectangle",
            },
          },
        ],
      },
    },
    zombie_king: {
      name: "Zombie King",
      handle: "zombie_king",
      skin: "zombie_king",
      price: 0,
      baseSpeed: 60,
      abilities: {},
      customAttributes: {
        killStreak: {
          min: 0,
          max: 5,
          value: 0,
          regenerateSpeed: 0,
          isVisible: false,
        },
      },
      spawnPosition: {
        x: 1200,
        y: 2000,
      },
      body: {
        type: "dynamic",
        linearDamping: 5,
        angularDamping: 1,
        allowSleep: true,
        bullet: false,
        fixedRotation: false,
        fixtures: [
          {
            density: 1,
            friction: 0.01,
            restitution: 0.5,
            shape: {
              type: "rectangle",
            },
          },
        ],
      },
    },
    zombie_hulk: {
      name: "Zombie Hulk",
      handle: "zombie_hulk",
      skin: "zombie_hulk",
      price: 0,
      baseSpeed: 45,
      abilities: {
        mouse1Down: "hold",
        mouse1Up: "release",
      },
      customAttributes: {
        stamina: {
          min: 0,
          max: 30,
          value: 30,
          regenerateSpeed: 0.3,
          isVisible: true,
          color: "white",
        },
        killStreak: {
          min: 0,
          max: 5,
          value: 0,
          regenerateSpeed: 0,
          isVisible: false,
        },
      },
      spawnPosition: {
        x: 1200,
        y: 2000,
      },
      body: {
        type: "dynamic",
        linearDamping: 5,
        angularDamping: 1,
        allowSleep: true,
        bullet: false,
        fixedRotation: false,
        fixtures: [
          {
            density: 1,
            friction: 0.01,
            restitution: 0.5,
            shape: {
              type: "rectangle",
            },
          },
        ],
      },
    },
    zombie_ghost: {
      name: "Zombie Ghost",
      handle: "zombie_ghost",
      skin: "zombie_ghost",
      price: 0,
      baseSpeed: 45,
      abilities: {
        mouse1Down: "dash",
      },
      customAttributes: {
        stamina: {
          min: 0,
          max: 30,
          value: 30,
          regenerateSpeed: 0.3,
          isVisible: true,
          color: "white",
        },
        killStreak: {
          min: 0,
          max: 5,
          value: 0,
          regenerateSpeed: 0,
          isVisible: false,
        },
      },
      spawnPosition: {
        x: 1200,
        y: 2000,
      },
      body: {
        type: "dynamic",
        linearDamping: 5,
        angularDamping: 1,
        allowSleep: true,
        bullet: false,
        fixedRotation: false,
        fixtures: [
          {
            density: 1,
            friction: 0.01,
            restitution: 0.5,
            shape: {
              type: "rectangle",
            },
          },
        ],
      },
    },
    zombie: {
      name: "Zombie",
      handle: "zombie",
      skin: "zombie",
      price: 0,
      baseSpeed: 54,
      abilities: {},
      customAttributes: {
        killStreak: {
          min: 0,
          max: 5,
          value: 0,
          regenerateSpeed: 0,
          isVisible: false,
        },
      },
      spawnPosition: {
        x: 1200,
        y: 2000,
      },
      body: {
        type: "dynamic",
        linearDamping: 5,
        angularDamping: 1,
        allowSleep: true,
        bullet: false,
        fixedRotation: false,
        fixtures: [
          {
            density: 1,
            friction: 0.01,
            restitution: 0.5,
            shape: {
              type: "rectangle",
            },
          },
        ],
      },
    },
    sick: {
      name: "Sick",
      handle: "sick",
      skin: "man",
      price: 0,
      baseSpeed: 5,
      abilities: [],
      customAttributes: {
        immunity: {
          min: 0,
          max: 100,
          value: 0,
          regenerateSpeed: -0.05,
          isVisible: true,
          color: "cyan",
        },
        killStreak: {
          min: 0,
          max: 5,
          value: 0,
          regenerateSpeed: 0,
          isVisible: false,
        },
      },
      spawnPosition: {
        x: 1200,
        y: 2000,
      },
      body: {
        type: "dynamic",
        linearDamping: 5,
        angularDamping: 1,
        allowSleep: true,
        bullet: false,
        fixedRotation: false,
        fixtures: [
          {
            density: 1,
            friction: 0.01,
            restitution: 0.5,
            shape: {
              type: "rectangle",
            },
          },
        ],
      },
    },
  },
  scripts: {
    init: {
      triggers: [],
      conditions: [],
      actions: [],
    },
    playerJoined: {
      triggers: [],
      conditions: [],
      actions: [
        {
          type: "condition",
          conditions: ["==", "$state", "postoutbreak"],
          then: [
            {
              type: "createUnit",
              unitType: "zombie",
            },
          ],
          else: [
            {
              type: "createUnit",
              unitType: "human",
            },
          ],
        },
        {
          type: "updateUiText",
          target: "top",
          action: "show",
          clientId: {
            function: "getAttribute",
            attribute: "clientId",
          },
        },
      ],
    },
    reset: {
      triggers: [],
      conditions: [],
      actions: [
        {
          type: "updateUiText",
          target: "center-lg",
          action: "hide",
        },
        {
          type: "forAllInGroup",
          group: "debris",
          actions: [
            {
              type: "resetPosition",
            },
            {
              type: "condition",
              conditions: [
                "<",
                {
                  function: "getRandomNumberBetween",
                  min: 0,
                  max: 100,
                },
                30,
              ],
              then: [
                {
                  type: "spawnRandomItem",
                  position: {
                    function: "getPosition",
                  },
                },
              ],
              else: [],
            },
          ],
        },
        {
          type: "forAllInGroup",
          group: "units",
          actions: [
            {
              type: "resetPosition",
            },
            {
              type: "setAttribute",
              attribute: "type",
              value: "human",
            },
            {
              type: "setAttribute",
              attribute: "skin",
              value: "man",
            },
            {
              type: "castAbility",
              abilityName: "release",
            },
            {
              type: "runScript",
              scriptName: "updateSizeAndSpeed",
            },
          ],
        },
      ],
    },
    everySecond: {
      triggers: [
        {
          type: "secondTick",
        },
      ],
      conditions: [],
      actions: [
        {
          type: "setVariable",
          variableName: "timeLeft",
          value: {
            function: "calculate",
            items: ["-", "$timeLeft", 1],
          },
        },
        {
          type: "updateUiText",
          target: "top",
          value: "$timerMessage",
        },
        {
          type: "runScript",
          scriptName: "countUnits",
        },
        {
          type: "runScript",
          scriptName: "updateScore",
        },
        {
          type: "updateUiText",
          target: "scoreboard",
          value:
            "$humanCount Humans<br/> <span class='text-danger'> $zombieCount Zombies</span>",
        },
        {
          type: "condition",
          conditions: [
            "AND",
            ["==", "$timeLeft", "$timeSick"],
            ["==", "$state", "preoutbreak"],
          ],
          then: [
            {
              type: "runScript",
              scriptName: "makeHumansSick",
            },
          ],
          else: [],
        },
        {
          type: "condition",
          conditions: ["<=", "$timeLeft", 0],
          then: [
            {
              type: "runScript",
              scriptName: "changeState",
            },
          ],
          else: [],
        },
      ],
    },
    updateScore: {
      triggers: [],
      conditions: ["==", "$state", "postoutbreak"],
      actions: [
        {
          type: "forAllInGroup",
          group: "units",
          condition: [],
          actions: [
            {
              type: "condition",
              conditions: [
                "==",
                {
                  function: "getAttribute",
                  attribute: "type",
                },
                "human",
              ],
              then: [
                {
                  type: "setAttribute",
                  attribute: "points",
                  entity: {
                    function: "getEntityById",
                    id: {
                      function: "getAttribute",
                      attribute: "ownerId",
                    },
                  },
                  value: {
                    function: "calculate",
                    items: [
                      "+",
                      {
                        function: "getAttribute",
                        attribute: "points",
                        entity: {
                          function: "getEntityById",
                          id: {
                            function: "getAttribute",
                            attribute: "ownerId",
                          },
                        },
                      },
                      "$zombieCount",
                    ],
                  },
                },
              ],
              else: [
                {
                  type: "setAttribute",
                  attribute: "points",
                  entity: {
                    function: "getEntityById",
                    id: {
                      function: "getAttribute",
                      attribute: "ownerId",
                    },
                  },
                  value: {
                    function: "calculate",
                    items: [
                      "*",
                      {
                        function: "getAttribute",
                        attribute: "points",
                        entity: {
                          function: "getEntityById",
                          id: {
                            function: "getAttribute",
                            attribute: "ownerId",
                          },
                        },
                      },
                      "$zombieDecay",
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    countUnits: {
      triggers: [],
      conditions: [],
      actions: [
        {
          type: "setVariable",
          variableName: "humanCount",
          value: 0,
        },
        {
          type: "setVariable",
          variableName: "zombieCount",
          value: 0,
        },
        {
          type: "forAllInGroup",
          group: "units",
          condition: [],
          actions: [
            {
              type: "condition",
              conditions: [
                "==",
                {
                  function: "getAttribute",
                  attribute: "type",
                },
                "human",
              ],
              then: [
                {
                  type: "setVariable",
                  variableName: "humanCount",
                  value: {
                    function: "calculate",
                    items: ["+", "$humanCount", 1],
                  },
                },
              ],
              else: [
                {
                  type: "setVariable",
                  variableName: "zombieCount",
                  value: {
                    function: "calculate",
                    items: ["+", "$zombieCount", 1],
                  },
                },
              ],
            },
          ],
        },
        {
          type: "condition",
          conditions: ["<=", "$humanCount", 0],
          then: [
            {
              type: "runScript",
              scriptName: "gameOver",
            },
          ],
        },
      ],
    },
    shopTouch: {
      triggers: [
        {
          type: "contact",
        },
      ],
      conditions: [],
      actions: [
        {
          type: "condition",
          conditions: [
            "AND",
            [
              "==",
              {
                function: "getAttribute",
                attribute: "type",
              },
              "human",
            ],
            [
              "==",
              {
                function: "getAttribute",
                attribute: "name",
                entity: {
                  function: "getEntityById",
                  id: {
                    function: "getAttribute",
                    attribute: "lastTouchedEntityId",
                  },
                },
              },
              "shop7890",
            ],
          ],
          then: [
            {
              type: "openShop",
              clientId: {
                function: "getAttribute",
                attribute: "clientId",
              },
            },
          ],
          else: [],
        },
      ],
    },
    zombieTouch: {
      triggers: [
        {
          type: "contact",
        },
      ],
      conditions: ["==", "$state", "postoutbreak"],
      actions: [
        {
          type: "condition",
          conditions: [
            "AND",
            [
              "==",
              {
                function: "stringContains",
                string: {
                  function: "getAttribute",
                  attribute: "type",
                },
                keyword: "zombie",
              },
              true,
            ],
            [
              "==",
              {
                function: "getAttribute",
                attribute: "type",
                entity: {
                  function: "getEntityById",
                  id: {
                    function: "getAttribute",
                    attribute: "lastTouchedEntityId",
                  },
                },
              },
              "human",
            ],
          ],
          then: [
            {
              entity: {
                function: "getEntityById",
                id: {
                  function: "getAttribute",
                  attribute: "lastTouchedEntityId",
                },
              },
              type: "runScript",
              scriptName: "zombify",
            },
            {
              entity: {
                function: "getEntityById",
                id: {
                  function: "getAttribute",
                  attribute: "lastTouchedEntityId",
                },
              },
              type: "runScript",
              scriptName: "stealPoints",
            },
          ],
          else: [
            {
              type: "condition",
              conditions: [
                "AND",
                [
                  "==",
                  {
                    function: "stringContains",
                    string: {
                      function: "getAttribute",
                      attribute: "type",
                      entity: {
                        function: "getEntityById",
                        id: {
                          function: "getAttribute",
                          attribute: "lastTouchedEntityId",
                        },
                      },
                    },
                    keyword: "zombie",
                  },
                  true,
                ],
                [
                  "==",
                  {
                    function: "getAttribute",
                    attribute: "type",
                  },
                  "human",
                ],
              ],
              then: [
                {
                  type: "runScript",
                  scriptName: "zombify",
                },
                {
                  type: "runScript",
                  scriptName: "stealPoints",
                },
              ],
              else: [],
            },
          ],
        },
        {
          type: "runScript",
          scriptName: "updateSizeAndSpeed",
        },
        {
          entity: {
            function: "getEntityById",
            id: {
              function: "getAttribute",
              attribute: "lastTouchedEntityId",
            },
          },
          type: "runScript",
          scriptName: "updateSizeAndSpeed",
        },
      ],
    },
    zombify: {
      triggers: [],
      conditions: [],
      actions: [
        {
          type: "dropAllItems",
        },
        {
          type: "setVariable",
          variableName: "randomNumber",
          value: {
            function: "getRandomNumberBetween",
            min: 0,
            max: 100,
          },
        },
        {
          type: "condition",
          conditions: ["<", "$randomNumber", 3],
          then: [
            {
              type: "setAttribute",
              attribute: "type",
              value: "zombie_ghost",
            },
          ],
          else: [
            {
              type: "condition",
              conditions: ["<", "$randomNumber", 5],
              then: [
                {
                  type: "setAttribute",
                  attribute: "type",
                  value: "zombie_hulk",
                },
              ],
              else: [
                {
                  type: "setAttribute",
                  attribute: "type",
                  value: "zombie",
                },
              ],
            },
          ],
        },
      ],
    },
    stealPoints: {
      triggers: [],
      conditions: [],
      actions: [
        {
          type: "setAttribute",
          attribute: "points",
          entity: {
            entity: {
              function: "getEntityById",
              id: {
                function: "getAttribute",
                attribute: "lastTouchedEntityId",
              },
            },
            function: "getEntityById",
            id: {
              function: "getAttribute",
              attribute: "ownerId",
            },
          },
          value: {
            function: "calculate",
            items: [
              "+",
              {
                entity: {
                  entity: {
                    function: "getEntityById",
                    id: {
                      function: "getAttribute",
                      attribute: "lastTouchedEntityId",
                    },
                  },
                  function: "getEntityById",
                  id: {
                    function: "getAttribute",
                    attribute: "ownerId",
                  },
                },
                function: "getAttribute",
                attribute: "points",
              },
              [
                "+",
                "$zombieInfectBonus",
                [
                  "*",
                  {
                    entity: {
                      function: "getEntityById",
                      id: {
                        function: "getAttribute",
                        attribute: "ownerId",
                      },
                    },
                    function: "getAttribute",
                    attribute: "points",
                  },
                ],
              ],
            ],
          },
        },
        {
          entity: {
            function: "getEntityById",
            id: {
              function: "getAttribute",
              attribute: "ownerId",
            },
          },
          type: "setAttribute",
          attribute: "points",
          value: {
            function: "calculate",
            items: [
              "*",
              {
                entity: {
                  function: "getEntityById",
                  id: {
                    function: "getAttribute",
                    attribute: "ownerId",
                  },
                },
                function: "getAttribute",
                attribute: "points",
              },
            ],
          },
        },
      ],
    },
    updateSizeAndSpeed: {
      triggers: [],
      conditions: [],
      actions: [
        {
          type: "setAttribute",
          attribute: "scale",
          value: {
            function: "calculate",
            items: [
              "+",
              1,
              [
                "/",
                {
                  entity: {
                    function: "getEntityById",
                    id: {
                      function: "getAttribute",
                      attribute: "ownerId",
                    },
                  },
                  function: "getAttribute",
                  attribute: "points",
                },
                20000,
              ],
            ],
          },
        },
        {
          type: "setAttribute",
          attribute: "bonusSpeed",
          value: {
            function: "calculate",
            items: [
              "/",
              {
                entity: {
                  function: "getEntityById",
                  id: {
                    function: "getAttribute",
                    attribute: "ownerId",
                  },
                },
                function: "getAttribute",
                attribute: "points",
              },
              800,
            ],
          },
        },
      ],
    },
    changeState: {
      triggers: [],
      conditions: [],
      actions: [
        {
          type: "condition",
          conditions: ["==", "$state", "preoutbreak"],
          then: [
            {
              type: "runScript",
              scriptName: "outbreak",
            },
          ],
          else: [
            {
              type: "condition",
              conditions: ["==", "$state", "postoutbreak"],
              then: [
                {
                  type: "updateUiText",
                  target: "center-lg",
                  action: "show",
                },
                {
                  type: "updateUiText",
                  target: "center-lg",
                  value: "<span class='text-secondary'> Humans Win </span>",
                },
                {
                  type: "forAllInGroup",
                  group: "units",
                  conditions: [
                    "==",
                    {
                      function: "getAttribute",
                      attribute: "type",
                    },
                    "human",
                  ],
                  actions: [
                    {
                      type: "setAttribute",
                      attribute: "points",
                      entity: {
                        function: "getEntityById",
                        id: {
                          function: "getAttribute",
                          attribute: "ownerId",
                        },
                      },
                      value: {
                        function: "calculate",
                        items: [
                          "+",
                          {
                            function: "getAttribute",
                            attribute: "points",
                            entity: {
                              function: "getEntityById",
                              id: {
                                function: "getAttribute",
                                attribute: "ownerId",
                              },
                            },
                          },
                          "$humanWinBonus",
                        ],
                      },
                    },
                  ],
                },
                {
                  type: "runScript",
                  scriptName: "gameOver",
                },
              ],
              else: [
                {
                  type: "condition",
                  conditions: ["==", "$state", "gameover"],
                  then: [
                    {
                      type: "setVariable",
                      variableName: "timeLeft",
                      value: "$timePreoutbreak",
                    },
                    {
                      type: "setVariable",
                      variableName: "state",
                      value: "preoutbreak",
                    },
                    {
                      type: "setVariableRaw",
                      variableName: "timerMessage",
                      value: "Outbreak happening in $timeLeft seconds",
                    },
                    {
                      type: "runScript",
                      scriptName: "reset",
                    },
                  ],
                  else: [],
                },
              ],
            },
          ],
        },
      ],
    },
    outbreak: {
      triggers: [],
      conditions: [],
      actions: [
        {
          type: "setVariable",
          variableName: "timeLeft",
          value: "$timePostoutbreak",
        },
        {
          type: "setVariable",
          variableName: "state",
          value: "postoutbreak",
        },
        {
          type: "setVariableRaw",
          variableName: "timerMessage",
          value: "Humans must survive for $timeLeft seconds",
        },
        {
          type: "forAllInGroup",
          group: "units",
          conditions: [
            "==",
            {
              function: "getAttribute",
              attribute: "type",
            },
            "sick",
          ],
          actions: [
            {
              type: "setAttribute",
              attribute: "type",
              value: "zombie_king",
            },
            {
              type: "dropAllItems",
            },
            {
              type: "runScript",
              scriptName: "updateSizeAndSpeed",
            },
          ],
        },
        {
          type: "closeShop",
        },
      ],
    },
    makeHumansSick: {
      triggers: [],
      conditions: [],
      actions: [
        {
          type: "while",
          conditions: [
            "<",
            {
              function: "numberOf",
              variable: "units",
              conditions: [
                "==",
                {
                  function: "getAttribute",
                  attribute: "type",
                },
                "sick",
              ],
            },
            {
              function: "calculate",
              items: [
                "*",
                {
                  function: "numberOf",
                  variable: "units",
                },
                "$outbreakRatio",
              ],
            },
          ],
          actions: [
            {
              type: "setVariable",
              variableName: "victimIndex",
              value: {
                function: "getRandomNumberBetween",
                min: 0,
                max: {
                  function: "calculate",
                  items: ["-", "$humanCount", 1],
                },
              },
            },
            {
              type: "setVariable",
              variableName: "i",
              value: 0,
            },
            {
              type: "forAllInGroup",
              group: "units",
              conditions: [
                "==",
                {
                  function: "getAttribute",
                  attribute: "type",
                },
                "human",
              ],
              actions: [
                {
                  type: "condition",
                  conditions: [
                    "AND",
                    ["==", "$i", "$victimIndex"],
                    [
                      ">",
                      {
                        function: "getRandomNumberBetween",
                        min: 0,
                        max: 100,
                      },
                      {
                        function: "getCustomAttribute",
                        attribute: "immunity",
                      },
                    ],
                  ],
                  then: [
                    {
                      type: "setAttribute",
                      attribute: "type",
                      value: "sick",
                    },
                    {
                      type: "setAttribute",
                      attribute: "skin",
                      value: "man_sick",
                    },
                    {
                      type: "runScript",
                      scriptName: "updateSizeAndSpeed",
                    },
                    {
                      type: "break",
                    },
                  ],
                  else: [],
                },
                {
                  type: "setVariable",
                  variableName: "i",
                  value: {
                    function: "calculate",
                    items: ["+", "$i", 1],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    gameOver: {
      triggers: [],
      conditions: ["!=", "$state", "gameover"],
      actions: [
        {
          type: "condition",
          conditions: ["<=", "$humanCount", 0],
          then: [
            {
              type: "updateUiText",
              target: "center-lg",
              action: "show",
            },
            {
              type: "updateUiText",
              target: "center-lg",
              value: "<span class='text-danger'> Zombies Win </span>",
            },
          ],
        },
        {
          type: "setVariable",
          variableName: "timeLeft",
          value: "$timeGameover",
        },
        {
          type: "setVariable",
          variableName: "state",
          value: "gameover",
        },
        {
          type: "setVariableRaw",
          variableName: "timerMessage",
          value: "Game restarting in $timeLeft seconds",
        },
      ],
    },
    empty: {
      triggers: [],
      conditions: [],
      actions: [],
    },
  },
  sound: {
    coughing: ["man_cough.mp3"],
    zombieSpawn: ["zombie_growl1.mp3"],
    zombieTag: ["man_scream1.mp3", "man_scream2.mp3", "man_scream3.mp3"],
    bulletHitsBody: ["bullet_hits_body1.mp3", "bullet_hits_body2.mp3"],
    stun: ["bullet_hits_body_stun.mp3"],
    slow: ["bullet_hits_body_slow.mp3"],
    reload: ["reload.mp3"],
    fireEmpty: ["fire_empty.mp3"],
    firePistol: ["fire_pistol.mp3"],
    fireUzi: ["fire_uzi.mp3"],
    fireShotgun: ["fire_shotgun.mp3"],
    fireRifle: ["fire_rifle.mp3"],
    fireSniperRifle: ["fire_sniper_rifle.mp3"],
    fireMinigun: ["fire_minigun.mp3"],
  },
  music: {
    files: ["quest.mp3"],
    states: {
      preoutbreak: {
        fileIndex: 0,
        startTime: 0,
        endTime: 25,
      },
      postoutbreak: {
        fileIndex: 0,
        startTime: 29,
      },
    },
  },
  itemTypes: {
    stick: {
      name: "Stick",
      handle: "stick",
      price: 300,
      holdingDistance: 28,
      width: 4,
      height: 10,
      texture: "stick.png",
      isStackable: false,
      isPurchasable: false,
      isGun: false,
      type: "weapon",
      spawnChance: 0.5,
      sound: {
        fire: "undefined",
      },
      body: {
        linearDamping: 1,
        restitution: 1,
        density: 1,
        isTangible: true,
        carriedBy: ["human"],
      },
      buffTypes: [
        "height",
        "stunChance",
        "slowChance",
        "movementSpeed",
        "immunity",
        "maxStamina",
      ],
    },
    drumstick: {
      name: "Drumstick",
      handle: "drumstick",
      price: 500,
      holdingDistance: 28,
      width: 12,
      height: 20,
      texture: "drumstick.png",
      isStackable: false,
      isPurchasable: false,
      type: "consumable",
      isConsumedImmediately: true,
      consumeBonus: {
        points: 200,
        customAttributes: {},
      },
      body: {
        isTangible: false,
        carriedBy: ["human"],
      },
      spawnChance: 0.3,
      sound: {
        fire: "undefined",
      },
      buffTypes: [
        "height",
        "stunChance",
        "slowChance",
        "movementSpeed",
        "immunity",
        "maxStamina",
      ],
    },
    coin: {
      name: "Coin",
      handle: "coin",
      price: 5000,
      holdingDistance: 28,
      width: 24,
      height: 24,
      texture: "coin.png",
      isStackable: false,
      isPurchasable: true,
      type: "consumable",
      isConsumedImmediately: true,
      consumeBonus: {
        coins: 1,
        customAttributes: {},
      },
      body: {
        isTangible: false,
        carriedBy: ["human"],
      },
      spawnChance: 0.05,
      sound: {
        fire: "undefined",
      },
      buffTypes: [],
    },
    pill: {
      name: "Pill",
      handle: "pill",
      price: 200,
      holdingDistance: 28,
      width: 12,
      height: 20,
      texture: "pill.png",
      isStackable: false,
      isPurchasable: false,
      type: "consumable",
      isConsumedImmediately: false,
      consumeBonus: {
        customAttributes: {
          immunity: 65,
        },
      },
      body: {
        isTangible: false,
        carriedBy: ["human"],
      },
      isGun: false,
      spawnChance: 0.3,
      sound: {
        fire: "undefined",
      },
    },
    crowbar: {
      name: "Crowbar",
      handle: "crowbar",
      price: 400,
      holdingDistance: 33,
      width: 6,
      height: 14,
      texture: "crowbar.png",
      isStackable: false,
      isPurchasable: false,
      isGun: false,
      type: "weapon",
      spawnChance: 0.07,
      sound: {
        fire: "undefined",
      },
      body: {
        isTangible: true,
        carriedBy: ["human"],
        linearDamping: 1,
        restitution: 1,
        density: 1,
      },
      buffTypes: [
        "height",
        "stunChance",
        "slowChance",
        "movementSpeed",
        "immunity",
        "maxStamina",
      ],
    },
    baseball_bat: {
      name: "Baseball Bat",
      handle: "baseball_bat",
      price: 700,
      holdingDistance: 33,
      width: 6,
      height: 36,
      texture: "baseball_bat.png",
      isStackable: false,
      isPurchasable: true,
      isGun: false,
      type: "weapon",
      spawnChance: 0.07,
      sound: {
        fire: "undefined",
      },
      body: {
        isTangible: true,
        carriedBy: ["human"],
        linearDamping: 1,
        restitution: 1,
        density: 1,
      },
      buffTypes: [
        "height",
        "stunChance",
        "slowChance",
        "movementSpeed",
        "immunity",
        "maxStamina",
      ],
    },
    katana: {
      name: "Katana",
      handle: "katana",
      price: 900,
      holdingDistance: 33,
      width: 6,
      height: 40,
      texture: "katana.png",
      isStackable: false,
      isPurchasable: false,
      isGun: false,
      type: "weapon",
      spawnChance: 0.05,
      sound: {
        fire: "undefined",
      },
      body: {
        isTangible: true,
        carriedBy: ["human"],
        linearDamping: 1,
        restitution: 1,
        density: 1,
      },
      buffTypes: [
        "height",
        "stunChance",
        "slowChance",
        "movementSpeed",
        "immunity",
        "maxStamina",
      ],
    },
    glock: {
      name: "Glock",
      handle: "glock",
      price: 1200,
      holdingDistance: 30,
      width: 8,
      height: 20,
      texture: "glock.png",
      hasParticles: true,
      isStackable: false,
      isPurchasable: true,
      isGun: true,
      hits: ["zombie", "zombie_king", "zombie_hulk", "sick"],
      type: "weapon",
      spawnChance: 0.09,
      ammoSize: 20,
      ammo: 20,
      ammoTotal: 60,
      reloadRate: 2000,
      recoilForce: 0,
      fireRate: 140,
      bulletType: "raycast",
      distanceStart: 30,
      distanceEnd: 700,
      bulletForce: 16,
      penetration: false,
      sound: {
        fire: "firePistol",
        reload: "reload",
        empty: "fireEmpty",
      },
      body: {
        isTangible: false,
        carriedBy: ["human"],
      },
      buffTypes: [
        "bulletForce",
        "recoilForce",
        "reloadRate",
        "fireRate",
        "distanceEnd",
        "movementSpeed",
        "ammoSize",
        "ammoTotal",
        "stunChance",
        "slowChance",
        "maxStamina",
      ],
    },
    shotgun: {
      name: "Shotgun",
      handle: "shotgun",
      price: 2000,
      holdingDistance: 30,
      width: 16,
      height: 36,
      texture: "shotgun.png",
      hasParticles: true,
      isStackable: false,
      isPurchasable: false,
      isGun: true,
      hits: ["zombie", "zombie_king", "zombie_hulk", "sick"],
      type: "weapon",
      spawnChance: 0.04,
      ammoSize: 8,
      ammo: 8,
      ammoTotal: 24,
      reloadRate: 2500,
      fireRate: 1200,
      recoilForce: 30,
      bulletType: "raycast",
      distanceStart: 30,
      distanceEnd: 300,
      bulletForce: 30,
      penetration: false,
      sound: {
        fire: "fireShotgun",
        reload: "reload",
        empty: "fireEmpty",
      },
      body: {
        isTangible: false,
        carriedBy: ["human"],
      },
      buffTypes: [
        "bulletForce",
        "recoilForce",
        "reloadRate",
        "fireRate",
        "distanceEnd",
        "ammoSize",
        "ammoTotal",
        "stunChance",
        "slowChance",
        "maxStamina",
      ],
    },
    ak47: {
      name: "AK-47",
      handle: "ak47",
      price: 3200,
      holdingDistance: 30,
      width: 8,
      height: 36,
      texture: "ak47.png",
      hasParticles: true,
      isStackable: false,
      isPurchasable: false,
      isGun: true,
      hits: ["zombie", "zombie_king", "zombie_hulk", "sick"],
      type: "weapon",
      spawnChance: 0.03,
      ammoSize: 30,
      ammo: 30,
      ammoTotal: 90,
      reloadRate: 2800,
      recoilForce: 0,
      bulletForce: 14,
      fireRate: 70,
      bulletType: "raycast",
      distanceStart: 30,
      distanceEnd: 1300,
      penetration: false,
      sound: {
        fire: "fireRifle",
        reload: "reload",
        empty: "fireEmpty",
      },
      body: {
        isTangible: false,
        carriedBy: ["human"],
      },
      buffTypes: [
        "bulletForce",
        "recoilForce",
        "reloadRate",
        "fireRate",
        "distanceEnd",
        "ammoSize",
        "ammoTotal",
        "stunChance",
        "slowChance",
        "maxStamina",
      ],
    },
    potato_gun: {
      name: "Potato Gun",
      handle: "potato_gun",
      price: 3000,
      holdingDistance: 40,
      width: 12,
      height: 40,
      texture: "potato_gun.png",
      isStackable: false,
      isPurchasable: true,
      isGun: true,
      type: "weapon",
      spawnChance: 0.03,
      ammoSize: 8,
      ammo: 8,
      ammoTotal: 30,
      reloadRate: 3000,
      recoilForce: 0,
      fireRate: 1400,
      bulletType: "projectile",
      distanceStart: 40,
      bulletForce: 18000,
      bullet: {
        width: 20,
        height: 20,
        body: {
          linearDamping: 0.7,
          angularDamping: 0.1,
          type: "dynamic",
          allowSleep: true,
          bullet: false,
          fixedRotation: false,
          fixtures: [
            {
              density: 3,
              restitution: 0.1,
              shape: {
                type: "circle",
              },
            },
          ],
          texture: "potato.png",
        },
        lifeSpan: 600,
      },
      sound: {
        fire: "fireMinigun",
        reload: "reload",
        empty: "fireEmpty",
      },
      body: {
        isTangible: false,
        carriedBy: ["human"],
      },
      buffTypes: [
        "bulletForce",
        "reloadRate",
        "fireRate",
        "ammoSize",
        "ammoTotal",
        "movementSpeed",
        "maxStamina",
      ],
    },
  },
  buffTypes: {
    reloadRate: {
      minBonus: 0,
      maxBonus: -0.3,
      chance: 0.1,
      unit: "percentage",
    },
    fireRate: {
      minBonus: 0,
      maxBonus: -0.3,
      chance: 0.15,
      unit: "percentage",
    },
    distanceEnd: {
      minBonus: 100,
      maxBonus: 500,
      chance: 0.3,
      unit: "percentage",
    },
    ammoSize: {
      minBonus: 0,
      maxBonus: 0.3,
      chance: 0.1,
      unit: "percentage",
    },
    ammoTotal: {
      minBonus: 0,
      maxBonus: 0.3,
      chance: 0.2,
      unit: "percentage",
    },
    bulletForce: {
      minBonus: 0.1,
      maxBonus: 1,
      chance: 0.07,
      unit: "percentage",
    },
    recoilForce: {
      minBonus: 0,
      maxBonus: 8,
      chance: 0.04,
      unit: "integer",
    },
    stunChance: {
      minBonus: 0.02,
      maxBonus: 0.1,
      chance: 0.05,
      unit: "percentage",
    },
    slowChance: {
      minBonus: 0.02,
      maxBonus: 0.1,
      chance: 0.05,
      unit: "percentage",
    },
    immunity: {
      minBonus: 0.05,
      maxBonus: 0.2,
      chance: 0.1,
      unit: "percentage",
    },
    movementSpeed: {
      minBonus: 1,
      maxBonus: 5,
      chance: 0.02,
      unit: "integer",
    },
    maxStamina: {
      minBonus: 20,
      maxBonus: 120,
      chance: 0.1,
      unit: "integer",
    },
    height: {
      minBonus: 0.05,
      maxBonus: 0.3,
      chance: 0.2,
      unit: "percentage",
    },
    canPushDebris: {
      chance: 0.05,
      unit: "boolean",
    },
    canPenetrate: {
      chance: 0.05,
      unit: "boolean",
    },
  },
};
