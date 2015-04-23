## Permission levels

(0) anonymous
(2) logged in, only on self (except when admin)
(4) admin-only

## API calls by resulting resource type

All resources contain a 

- `type` field with the name of the collection they're a part of
- `links.self` field with a relative URL of the resource

e.g.
 
 ```js
 {
     "_id": "55113f1742ff1a0877242a39",
     "name": {
         "first": "Admin",
         "last": "User",
         "full": "Admin User"
     },
     "organization": {
         "_id": "5512857ab22121c7cbd0af46",
         "name": "d-pac",
         "type": "organizations",
         "links": {
           "self": "/api/organizations/5512857ab22121c7cbd0af46"
         }
     },
     "email": "user@keystonejs.com",
     "assessments": [
         "5511410927f4401a785dff0b"
     ],
     "type": "users",
     "links": {
       "self": "/api/users/55113f1742ff1a0877242a39"
     }
 }
```

These fields are sometimes omitted from the examples.

### authorization

#### retrieve session (2)

##### Request

```
GET 	/api/session
```

##### Response

```
200 OK
```
```json
{
    "_id": "55113f1742ff1a0877242a39",
    "name": {
        "first": "Admin",
        "last": "User",
        "full": "Admin User"
    },
    "organization": {
        "_id": "5512857ab22121c7cbd0af46",
        "name": "d-pac"
    },
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ]
}
```

#### create session (0)

##### Request

```
POST 	/api/session	
```
```json
{
	"password": "test",
	"password_confirm": "test",
	"email": "user@keystonejs.org"
}
```

##### Response

```
200 OK
```
```json
{
    "_id": "55113f1742ff1a0877242a39",
    "name": {
        "first": "Admin",
        "last": "User",
        "full": "Admin User"
    },
    "organization": {
        "_id": "5512857ab22121c7cbd0af46",
        "name": "d-pac"
    },
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ]
}
```

#### remove session (2)

##### Request

```
DELETE 	/api/session
```

##### Response

```
204 No content
```

### users

#### list users (4)

##### Request

```
GET /api/users
```

##### Response

```
200 OK
```
```json
[{
    "_id": "55113f1742ff1a0877242a39",
    "name": {
        "first": "Admin",
        "last": "User",
        "full": "Admin User"
    },
    "organization": {
        "_id": "5512857ab22121c7cbd0af46",
        "name": "d-pac"
    },
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ]
}]
```

#### create user (4)

##### Request

```
POST /api/user
```
```json
{
    "name": {
        "first": "Admin",
        "last": "User"
    },
    "organization": "5512857ab22121c7cbd0af46",
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ],
    "password": "test",
    "password_confirm": "test"
}
```

##### Response

```
200 OK
```
```json
{
    "_id": "55113f1742ff1a0877242a39",
    "name": {
        "first": "Admin",
        "last": "User",
        "full": "Admin User"
    },
    "organization": {
        "_id": "5512857ab22121c7cbd0af46",
        "name": "d-pac"
    },
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ]
}
```

#### retrieve user (4)

##### Request

```
GET 	/api/users/:id
```

##### Response

```
200 OK
```
```json
{
    "_id": "55113f1742ff1a0877242a39",
    "name": {
        "first": "Admin",
        "last": "User",
        "full": "Admin User"
    },
    "organization": {
        "_id": "5512857ab22121c7cbd0af46",
        "name": "d-pac"
    },
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ]
}
```

#### update user (4)

##### Request

```
PATCH /api/users/:id
```
```json
{
    "name": {
        "first": "Admin",
        "last": "User"
    },
    "organization": "5512857ab22121c7cbd0af46",
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ],
    "password": "test",
    "password_confirm": "test"
}
```

##### Response


```
200 OK
```
```json
{
    "_id": "55113f1742ff1a0877242a39",
    "name": {
        "first": "Admin",
        "last": "User",
        "full": "Admin User"
    },
    "organization": {
        "_id": "5512857ab22121c7cbd0af46",
        "name": "d-pac"
    },
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ]
}
```

#### remove user (4)

##### Request

```
DELETE 	/api/users/:id
```

##### Response

```
200 OK
```
```json
{
    "_id": "55113f1742ff1a0877242a39",
    "name": {
        "first": "Admin",
        "last": "User",
        "full": "Admin User"
    },
    "organization": {
        "_id": "5512857ab22121c7cbd0af46",
        "name": "d-pac"
    },
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ]
}
```

#### retrieve user details for current user (2)

##### Request

```
GET 	/api/user
```

##### Response

```
200 OK
```
```json
{
    "_id": "55113f1742ff1a0877242a39",
    "name": {
        "first": "Admin",
        "last": "User",
        "full": "Admin User"
    },
    "organization": {
        "_id": "5512857ab22121c7cbd0af46",
        "name": "d-pac"
    },
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ]
}
```

#### update user details for current user (2)

##### Request

```
PATCH /api/user
```
```json
{
    "name": {
        "first": "Admin",
        "last": "User"
    },
    "organization": "5512857ab22121c7cbd0af46",
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ],
    "password": "test",
    "password_confirm": "test"
}
```

##### Response

```
200 OK
```
```json
{
    "_id": "55113f1742ff1a0877242a39",
    "name": {
        "first": "Admin",
        "last": "User",
        "full": "Admin User"
    },
    "organization": {
        "_id": "5512857ab22121c7cbd0af46",
        "name": "d-pac"
    },
    "email": "user@keystonejs.com",
    "assessments": [
        "5511410927f4401a785dff0b"
    ]
}
```

### mementos

#### create memento (4)

##### Request

```
POST /api/mementos
```
```json
{
	"assessment": "5511410927f4401a785dff0b"
}
```

##### Response

```
200 OK
```
```json
{
    "assessor": "55113f1742ff1a0877242a39",
    "assessment": {
        "_id": "5511410927f4401a785dff0b",
        "algorithm": "comparative-selection",
        "title": "Test Assessment",
        "description": "",
        "order": 0,
        "state": "published",
        "comparisonsNum": 20,
        "phases": [
            "5423f87677177065a0887b99"
        ]
    },
    "comparison": {
        "_id": "55114689eeaee2b17c331b2b",
        "_rid": 1,
        "assessor": "55113f1742ff1a0877242a39",
        "assessment": "5511410927f4401a785dff0b",
        "phase": "5423f87677177065a0887b99",
        "completed": false,
        "representations": [
            "551141561d13789d78fff006",
            "5511417f494157b8783984c5"
        ]
    },
    "representations": [
        {
            "_id": "551141561d13789d78fff006",
            "document": "55113f4642ff1a0877242a3f",
            "assessment": "5511410927f4401a785dff0b",
            "type": "to rank",
            "ability": null,
            "compared": [
                "5511417f494157b8783984c5"
            ],
            "comparedNum": 3,
            "name": "Test Assessment - D-pac logo"
        },
        {
            "_id": "5511417f494157b8783984c5",
            "document": "55113f2c42ff1a0877242a3e",
            "assessment": "5511410927f4401a785dff0b",
            "type": "to rank",
            "ability": null,
            "compared": [
                "551141561d13789d78fff006"
            ],
            "comparedNum": 3,
            "name": "Test Assessment - Screen shot 2011-05-04 at 10.59.13.png"
        }
    ],
    "progress": {
        "completedNum": 0,
        "comparisonsNum": 20
    },
    "phases": [
        {
            "_id": "5423f87677177065a0887b99",
            "type": "select",
            "label": "Select best"
        }
    ]
}
```

#### list mementos for current user (2)

##### Request

```
GET /api/user/mementos
```

##### Response

```
200 OK
```
```json
[
    {
        "assessor": "55113f1742ff1a0877242a39",
        "assessment": {
            "_id": "5511410927f4401a785dff0b",
            "algorithm": "comparative-selection",
            "title": "Test Assessment",
            "description": "",
            "order": 0,
            "state": "published",
            "comparisonsNum": 20,
            "phases": [
                "5423f87677177065a0887b99"
            ]
        },
        "comparison": {
            "_id": "55114689eeaee2b17c331b2b",
            "_rid": 1,
            "assessor": "55113f1742ff1a0877242a39",
            "assessment": "5511410927f4401a785dff0b",
            "phase": "5423f87677177065a0887b99",
            "completed": false,
            "representations": [
                "551141561d13789d78fff006",
                "5511417f494157b8783984c5"
            ]
        },
        "representations": [
            {
                "_id": "551141561d13789d78fff006",
                "document": "55113f4642ff1a0877242a3f",
                "assessment": "5511410927f4401a785dff0b",
                "type": "to rank",
                "ability": null,
                "compared": [
                    "5511417f494157b8783984c5",
                    "5511417f494157b8783984c5",
                    "5511417f494157b8783984c5"
                ],
                "comparedNum": 3,
                "name": "Test Assessment - D-pac logo"
            },
            {
                "_id": "5511417f494157b8783984c5",
                "document": "55113f2c42ff1a0877242a3e",
                "assessment": "5511410927f4401a785dff0b",
                "type": "to rank",
                "ability": null,
                "compared": [
                    "551141561d13789d78fff006",
                    "551141561d13789d78fff006",
                    "551141561d13789d78fff006"
                ],
                "comparedNum": 3,
                "name": "Test Assessment - Screen shot 2011-05-04 at 10.59.13.png"
            }
        ],
        "progress": {
            "completedNum": 0,
            "comparisonsNum": 20
        },
        "phases": [
            {
                "_id": "5423f87677177065a0887b99",
                "type": "select",
                "label": "Select best"
            }
        ]
    }
]
```

### assessments

#### list assessments (4)

##### Request

```
GET 	/api/assessments
```

##### Response

```json
200 OK
```
```json
[
    {
        "_id": "5511410927f4401a785dff0b",
        "algorithm": "comparative-selection",
        "title": "Test Assessment",
        "description": "",
        "order": 0,
        "state": "published",
        "comparisonsNum": 20,
        "phases": [
            {
                "_id": "5423f87677177065a0887b99",
                "type": "select",
                "label": "Select best",
                "__v": 0
            }
        ]
    }
]
```

#### create assessment (4)

##### Request

```
POST 	/api/assessments
```
```json
{
    "_id": "5511410927f4401a785dff0b",
    "algorithm": "comparative-selection",
    "title": "Test Assessment",
    "description": "",
    "order": 0,
    "state": "published",
    "comparisonsNum": 20,
    "phases": [
		"5423f87677177065a0887b99"
    ]
}
```
##### Response

```json
200 OK
```
```json
{
    "_id": "5511410927f4401a785dff0b",
    "algorithm": "comparative-selection",
    "title": "Test Assessment",
    "description": "",
    "order": 0,
    "state": "published",
    "comparisonsNum": 20,
    "phases": [
        {
            "_id": "5423f87677177065a0887b99",
            "type": "select",
            "label": "Select best"
        }
    ]
}
```

#### retrieve assessment (4)

##### Request

```
GET 	/api/assessments/:id
```

##### Response


```json
200 OK
```
```json
{
    "_id": "5511410927f4401a785dff0b",
    "algorithm": "comparative-selection",
    "title": "Test Assessment",
    "description": "",
    "order": 0,
    "state": "published",
    "comparisonsNum": 20,
    "phases": [
        {
            "_id": "5423f87677177065a0887b99",
            "type": "select",
            "label": "Select best"
        }
    ]
}
```

#### update assessment (4)

##### Request

```
PATCH 	/api/assessments/:id
```
```json
{
    "algorithm": "comparative-selection",
    "title": "Test Assessment",
    "description": "",
    "order": 0,
    "state": "published",
    "comparisonsNum": 20,
    "phases": [
		"5423f87677177065a0887b99"
    ]
}
```
##### Response

```json
200 OK
```
```json
{
    "_id": "5511410927f4401a785dff0b",
    "algorithm": "comparative-selection",
    "title": "Test Assessment",
    "description": "",
    "order": 0,
    "state": "published",
    "comparisonsNum": 20,
    "phases": [
        {
            "_id": "5423f87677177065a0887b99",
            "type": "select",
            "label": "Select best"
        }
    ]
}
```

#### remove assessment (4)

##### Request

```
DELETE 	/api/assessments/:id
```

##### Response

```json
200 OK
```
```json
{
    "_id": "5511410927f4401a785dff0b",
    "algorithm": "comparative-selection",
    "title": "Test Assessment",
    "description": "",
    "order": 0,
    "state": "published",
    "comparisonsNum": 20,
    "phases": [
        {
            "_id": "5423f87677177065a0887b99",
            "type": "select",
            "label": "Select best"
        }
    ]
}
```

### comparisons

#### list comparisons (4)

##### Request

```
GET /api/comparisons
```

##### Response

```
200 OK
```
```json
[
    {
        "_id": "55114689eeaee2b17c331b2b",
        "_rid": 1,
        "assessor": "55113f1742ff1a0877242a39",
        "assessment": {
            "_id": "5511410927f4401a785dff0b",
            "algorithm": "comparative-selection",
            "title": "Test Assessment",
            "description": "",
            "order": 0,
            "state": "published",
            "comparisonsNum": 20,
            "phases": [
                "5423f87677177065a0887b99"
            ]
        },
        "phase": "5423f87677177065a0887b99",
        "completed": false,
        "representations": [
            {
                "_id": "551141561d13789d78fff006",
                "document": "55113f4642ff1a0877242a3f",
                "assessment": "5511410927f4401a785dff0b",
                "type": "to rank",
                "ability": null,
                "compared": [
                    "5511417f494157b8783984c5"
                ],
                "comparedNum": 3,
                "name": "Test Assessment - D-pac logo"
            },
            {
                "_id": "5511417f494157b8783984c5",
                "document": "55113f2c42ff1a0877242a3e",
                "assessment": "5511410927f4401a785dff0b",
                "type": "to rank",
                "ability": null,
                "compared": [
                    "551141561d13789d78fff006"
                ],
                "comparedNum": 3,
                "name": "Test Assessment - Screen shot 2011-05-04 at 10.59.13.png"
            }
        ]
    }
]
```

#### create comparison (4)

##### Request

```
POST /api/comparisons
```
```json
{
    "assessor": "55113f1742ff1a0877242a39",
    "assessment": "5511410927f4401a785dff0b",
    "phase": "5423f87677177065a0887b99",
    "completed": false,
    "representations": [ "551141561d13789d78fff006", "5511417f494157b8783984c5"]
}
```

##### Response

```
200 OK
```
```json
{
    "_id": "55114689eeaee2b17c331b2b",
    "_rid": 1,
    "assessor": "55113f1742ff1a0877242a39",
    "assessment": {
        "_id": "5511410927f4401a785dff0b",
        "algorithm": "comparative-selection",
        "title": "Test Assessment",
        "description": "",
        "order": 0,
        "state": "published",
        "comparisonsNum": 20,
        "phases": [
            "5423f87677177065a0887b99"
        ]
    },
    "phase": "5423f87677177065a0887b99",
    "completed": false,
    "representations": [
        {
            "_id": "551141561d13789d78fff006",
            "document": "55113f4642ff1a0877242a3f",
            "assessment": "5511410927f4401a785dff0b",
            "type": "to rank",
            "ability": null,
            "compared": [
                "5511417f494157b8783984c5"
            ],
            "comparedNum": 3,
            "name": "Test Assessment - D-pac logo"
        },
        {
            "_id": "5511417f494157b8783984c5",
            "document": "55113f2c42ff1a0877242a3e",
            "assessment": "5511410927f4401a785dff0b",
            "type": "to rank",
            "ability": null,
            "compared": [
                "551141561d13789d78fff006"
            ],
            "comparedNum": 3,
            "name": "Test Assessment - Screen shot 2011-05-04 at 10.59.13.png"
        }
    ]
}
```

#### retrieve comparison (4)

##### Request

```
GET /api/comparisons/:id
```

##### Response

```
200 OK
```
```json
{
    "_id": "55114689eeaee2b17c331b2b",
    "_rid": 1,
    "assessor": "55113f1742ff1a0877242a39",
    "assessment": {
        "_id": "5511410927f4401a785dff0b",
        "algorithm": "comparative-selection",
        "title": "Test Assessment",
        "description": "",
        "order": 0,
        "state": "published",
        "comparisonsNum": 20,
        "phases": [
            "5423f87677177065a0887b99"
        ]
    },
    "phase": "5423f87677177065a0887b99",
    "completed": false,
    "representations": [
        {
            "_id": "551141561d13789d78fff006",
            "document": "55113f4642ff1a0877242a3f",
            "assessment": "5511410927f4401a785dff0b",
            "type": "to rank",
            "ability": null,
            "compared": [
                "5511417f494157b8783984c5"
            ],
            "comparedNum": 3,
            "name": "Test Assessment - D-pac logo"
        },
        {
            "_id": "5511417f494157b8783984c5",
            "document": "55113f2c42ff1a0877242a3e",
            "assessment": "5511410927f4401a785dff0b",
            "type": "to rank",
            "ability": null,
            "compared": [
                "551141561d13789d78fff006"
            ],
            "comparedNum": 3,
            "name": "Test Assessment - Screen shot 2011-05-04 at 10.59.13.png"
        }
    ]
}
```

#### update comparison (4)

##### Request

```
PATCH /api/comparisons/:id
```
```json
{
    "assessor": "55113f1742ff1a0877242a39",
    "assessment": "5511410927f4401a785dff0b",
    "phase": "5423f87677177065a0887b99",
    "completed": false,
    "representations": [ "551141561d13789d78fff006", "5511417f494157b8783984c5"]
}
```

##### Response

```
200 OK
```
```json
{
    "_id": "55114689eeaee2b17c331b2b",
    "_rid": 1,
    "assessor": "55113f1742ff1a0877242a39",
    "assessment": {
        "_id": "5511410927f4401a785dff0b",
        "algorithm": "comparative-selection",
        "title": "Test Assessment",
        "description": "",
        "order": 0,
        "state": "published",
        "comparisonsNum": 20,
        "phases": [
            "5423f87677177065a0887b99"
        ]
    },
    "phase": "5423f87677177065a0887b99",
    "completed": false,
    "representations": [
        {
            "_id": "551141561d13789d78fff006",
            "document": "55113f4642ff1a0877242a3f",
            "assessment": "5511410927f4401a785dff0b",
            "type": "to rank",
            "ability": null,
            "compared": [
                "5511417f494157b8783984c5"
            ],
            "comparedNum": 3,
            "name": "Test Assessment - D-pac logo"
        },
        {
            "_id": "5511417f494157b8783984c5",
            "document": "55113f2c42ff1a0877242a3e",
            "assessment": "5511410927f4401a785dff0b",
            "type": "to rank",
            "ability": null,
            "compared": [
                "551141561d13789d78fff006"
            ],
            "comparedNum": 3,
            "name": "Test Assessment - Screen shot 2011-05-04 at 10.59.13.png"
        }
    ]
}
```

#### remove comparison (4)

##### Request

```
DELETE /api/comparisons/:id
```

##### Response

```
200 OK
```
```json
{
    "_id": "55114689eeaee2b17c331b2b",
    "_rid": 1,
    "assessor": "55113f1742ff1a0877242a39",
    "assessment": {
        "_id": "5511410927f4401a785dff0b",
        "algorithm": "comparative-selection",
        "title": "Test Assessment",
        "description": "",
        "order": 0,
        "state": "published",
        "comparisonsNum": 20,
        "phases": [
            "5423f87677177065a0887b99"
        ]
    },
    "phase": "5423f87677177065a0887b99",
    "completed": false,
    "representations": [
        {
            "_id": "551141561d13789d78fff006",
            "document": "55113f4642ff1a0877242a3f",
            "assessment": "5511410927f4401a785dff0b",
            "type": "to rank",
            "ability": null,
            "compared": [
                "5511417f494157b8783984c5"
            ],
            "comparedNum": 3,
            "name": "Test Assessment - D-pac logo"
        },
        {
            "_id": "5511417f494157b8783984c5",
            "document": "55113f2c42ff1a0877242a3e",
            "assessment": "5511410927f4401a785dff0b",
            "type": "to rank",
            "ability": null,
            "compared": [
                "551141561d13789d78fff006"
            ],
            "comparedNum": 3,
            "name": "Test Assessment - Screen shot 2011-05-04 at 10.59.13.png"
        }
    ]
}
```

### timelogs

#### list timelogs (4)

##### Request

```
GET /api/timelogs
```

##### Response

```
200 OK
```
```json
[
    {
        "_id": "55126ba6cffa5eb9c484b7f9",
        "end": "2015-03-25T08:02:45.000Z",
        "begin": "2015-03-25T08:02:44.000Z",
        "comparison": "55114689eeaee2b17c331b2b",
        "phase": "5423f87677177065a0887b99",
    }
]
```

#### create timelog (4)

##### Request

```
POST /api/timelogs
```
```json
{
    "end": "2015-03-25T08:02:45.000Z",
    "begin": "2015-03-25T08:02:44.000Z",
    "comparison": "55114689eeaee2b17c331b2b",
    "phase": "5423f87677177065a0887b99"
}
```

##### Response

```
200 OK
```
```json
[
    {
        "_id": "55126ba6cffa5eb9c484b7f9",
        "end": "2015-03-25T08:02:45.000Z",
        "begin": "2015-03-25T08:02:44.000Z",
        "comparison": "55114689eeaee2b17c331b2b",
        "phase": "5423f87677177065a0887b99"
    }
]
```

#### retrieve timelog (4)

##### Request

```
GET /api/timelogs/:id
```

##### Response

```
200 OK
```
```json
[
    {
        "_id": "55126ba6cffa5eb9c484b7f9",
        "end": "2015-03-25T08:02:45.000Z",
        "begin": "2015-03-25T08:02:44.000Z",
        "comparison": "55114689eeaee2b17c331b2b",
        "phase": "5423f87677177065a0887b99"
    }
]
```

#### update timelog (4)

##### Request

```
PATCH /api/timelogs/:id
```
```json
{
    "end": "2015-03-25T08:02:45.000Z",
    "begin": "2015-03-25T08:02:44.000Z",
    "comparison": "55114689eeaee2b17c331b2b",
    "phase": "5423f87677177065a0887b99"
}
```

##### Response

```
200 OK
```
```json
[
    {
        "_id": "55126ba6cffa5eb9c484b7f9",
        "end": "2015-03-25T08:02:45.000Z",
        "begin": "2015-03-25T08:02:44.000Z",
        "comparison": "55114689eeaee2b17c331b2b",
        "phase": "5423f87677177065a0887b99"
    }
]
```

#### remove timelog (4)

##### Request

```
DELETE /api/timelogs/:id
```

##### Response

```
200 OK
```
```json
[
    {
        "_id": "55126ba6cffa5eb9c484b7f9",
        "end": "2015-03-25T08:02:45.000Z",
        "begin": "2015-03-25T08:02:44.000Z",
        "comparison": "55114689eeaee2b17c331b2b",
        "phase": "5423f87677177065a0887b99"
    }
]
```

### representations

#### list representations (4)

##### Request

```
GET /api/representations
```

##### Response

```
200 OK
```
```json
[
    {
        "_id": "551141561d13789d78fff006",
        "document": {
            "href": "http://d-pac.be/images/be72540e.d-pac-logo_colour.png"
        },
        "assessment": "5511410927f4401a785dff0b",
        "type": "to rank",
        "ability": null,
        "compared": [
            "5511417f494157b8783984c5"
        ],
        "comparedNum": 3,
        "name": "Test Assessment - D-pac logo"
    },
    {
        "_id": "5511417f494157b8783984c5",
        "document": {
            "href": "/uploads/Screen shot 2011-05-04 at 10.59.13-1427193661242.png"
        },
        "assessment": "5511410927f4401a785dff0b",
        "type": "to rank",
        "ability": null,
        "compared": [
            "551141561d13789d78fff006"
        ],
        "comparedNum": 3,
        "name": "Test Assessment - Screen shot 2011-05-04 at 10.59.13.png"
    }
]
```

#### retrieve representation (4)

##### Request

```
GET /api/representations/:id
```

##### Response

```
200 OK
```
```json
{
    "_id": "551141561d13789d78fff006",
    "document": {
        "_id": "55113f4642ff1a0877242a3f",
        "_rid": 2,
        "owner": "55113f1742ff1a0877242a39",
        "link": "http://d-pac.be/images/be72540e.d-pac-logo_colour.png",
        "type": "link",
        "title": "D-pac logo",
        "name": "D-pac logo"
    },
    "assessment": "5511410927f4401a785dff0b",
    "type": "to rank",
    "ability": null,
    "compared": [
        "5511417f494157b8783984c5"
    ],
    "comparedNum": 3,
    "name": "Test Assessment - D-pac logo"
}
```


