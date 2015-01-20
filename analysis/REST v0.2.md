## Permission levels

(0) anonymous
(2) logged in, only on self (except when admin)
(4) admin-only

## API calls by resulting resource type

### sessions

#### retrieve session (2)
GET 	/api/session
GET 	/api/users/:userId/session/

#### create session (0)
POST 	/api/session				
	? password={string} && password_confirm={string} && email={string}

#### remove session (2)
DELETE 	/api/session

### accounts

#### retrieve account (2)
GET 	/api/users/:userId/account

#### update account (2)
PUT 	/api/users/:userId/account
PATCH 	/api/users/:userId/account

### mementos

#### retrieve mementos list (2)
GET 	/api/mementos				
	? [user=:userId || assessment=:assessmentId]
GET 	/api/users/:userId/mementos
	? [assessment=:assessmentId]
GET 	/api/assessments/:assessmentId/mementos
	? [user=:userId]

#### create memento (2)
POST 	/api/mementos				
	? user=:userId && assessment=:assessmentId
--??
POST 	/api/users/:userId/mementos
	? assessment=:assessmentId
POST 	/api/assessments/:assessmentId/mementos
	? user=:userId
--??

### assessments

#### retrieve assessments list (2)
GET 	/api/assessments			
	? [user=:userId]
GET 	/api/users/:userId/assessments


### comparisons

#### retrieve comparisons list (2)
GET 	/api/comparisons			
	? [user=:userId || assessment=assessmentId]
GET 	/api/users/:userId/comparisons
	? [assessment=:assessmentId]
GET 	/api/assessments/:assessmentId/comparisons
	? [user=:userId]

#### retrieve comparison (4)
GET 	/api/comparisons/:comparisonId

#### update comparison (2)
PATCH 	/api/comparisons/:comparisonId
PUT 	/api/comparisons/:comparisonId

#### report comparisons (4)

GET 	/api/comparisons/actions/report

### judgements

#### retrieve judgements list (4)
GET 	/api/judgements				
	? [user=:userId || comparison=:comparisonId]
GET 	/api/users/:userId/judgements
	? [comparison=:comparisonId]
GET 	/api/comparisons/:comparisonId/judgements
	? [user=:userId]

#### update judgement (2)
PUT 	/api/judgements/:judgementId
PATCH 	/api/judgements/:judgementId

### seqs

#### create seq (2)

POST 	/api/seqs

### update seq (2)

PATCH 	/api/seqs/:seqId
PUT 	/api/seqs/:seqId

### timelogs

#### get timelogs list (2)

GET 	/api/timelogs
	? [user=:userId || comparison=:comparisonId || begin={date} || end={date}]
GET 	/api/users/:userId/timelogs
	? [comparison=:comparisonId || begin={date} || end={date}]
GET 	/api/comparisons/:comparisonId/timelogs
	? [user=:userId || begin={date} || end={date}]

#### update timelog (2)

PATCH 	/api/timelogs/:timelogId
PUT 	/api/timelogs/:timelogId

#### representations

#### retrieve representation list (4)

GET 	/api/representations
	? [assessee=:userId || assessment=:assessmentId ]
GET 	/api/users/:userId/representations
	? [assessment=:assessmentId ]
GET 	/api/assessments/:assessmentId/representations
	? [user=:userId]

GET 	/api/representations/actions/find
	? q=[duplicates || pair]

#### retrieve representation (0)

GET 	/api/representations/:representationId.:format
	? [format=:format]

### sessions

GET 	/api/sessions/:sessionId						(2)
POST 	/api/sessions									(0)
DELETE 	/api/sessions/:sessionId						(2)

### users

GET 	/api/users/:userId/session/						(2)
GET 	/api/users/:userId/account						(2)
PUT 	/api/users/:userId/account						(2)
PATCH 	/api/users/:userId/account						(2)
GET 	/api/users/:userId/mementos						(2)
GET 	/api/users/:userId/assessments					(2)
GET 	/api/users/:userId/comparisons					(2)
GET 	/api/users/:userId/judgements					(4)
GET 	/api/users/:userId/timelogs						(2)
GET 	/api/users/:userId/representations				(2)

### mementos

GET 	/api/mementos									(2)
POST 	/api/mementos									(2)

### assessments 

GET 	/api/assessments/:assessmentId/mementos			(2)
GET 	/api/assessments								(2)
GET 	/api/assessments/:assessmentId/comparisons		(2)
GET 	/api/assessments/:assessmentId/representations	(4)

### comparisons

GET 	/api/comparisons								(2)
GET 	/api/comparisons/:comparisonId					(4)
PATCH 	/api/comparisons/:comparisonId					(2)
PUT 	/api/comparisons/:comparisonId					(2)
GET 	/api/comparisons/:comparisonId/judgements		(4)
GET 	/api/comparisons/:comparisonId/timelogs			(2)
GET 	/api/comparisons/actions/report					(4)

### judgements

GET 	/api/judgements									(4)
PUT 	/api/judgements/:judgementId					(2)
PATCH 	/api/judgements/:judgementId					(2)

### seqs

POST 	/api/seqs										(2)
PATCH 	/api/seqs/:seqId								(2)
PUT 	/api/seqs/:seqId								(2)

### timelogs

GET 	/api/timelogs									(2)
PATCH 	/api/timelogs/:timelogId						(2)
PUT 	/api/timelogs/:timelogId						(2)

### representations

GET 	/api/representations							(4)
GET 	/api/representations/actions/find				(4)
GET 	/api/representations/:representationId.:format	(0)

