# Metrics API

The Metrics API is both available as read-only via GET requests, and as "read-write access" 

- **Metrics API Source**: [https://gitlab.com/ubiquitypress/metrics-api][1]


### API routes
The following methods are allowed:

| Method  | Route             | Description                                                                                                                     |
| ------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `GET`   | [`/citations`](#get-citations)     | Retrieve citation metadata for a given work URI                                                                                 | 
| `GET`   | [`/events`](#get-events)         | Retrieves the measures from the API with various parameters, see below                                                          |
| `POST`  | [`/events`](#post-events)         | Creates a new event using JSON in the body                                                                                      |
| `GET`   | [`/measures`](#get-measures)      | List the descriptions of the measures available in the API                                                                      |
| `GET`   | [`/popularity`](#get-popularity)   | Get list of external_ids ordered by the most popular books or journals                                                          |
| `GET`   | [`/services`](#get-services)      | Get list of the services, each element holds the work_uri and the external_id                                                  |
| `POST`  | [`/services`](#post-services)     | Create new services, work_uri and the external_id should be posted in the body as a JSON                                        |
| `DELETE`| [`/services`](#delete-services)    | Delete services, takes a list of lists with each element holding the work_uri and the external_id.                               |
| `GET`   | [`/service_events`](#get-service_events) | Returns a list of works registered to a given service. Takes the service_code and start_date as Query Params.                   |



### GET `citations`

#### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|work_uri|query|string| yes |Uniform Resource Identifier (URI) that uniquely identifies a specific work or piece of content saved in the Event table.|

> Request Example

`http://localhost:8080/citations?work_uri=info:doi:10.1242/dev.164269`

> Response Example

```json
{
    "status": "ok",
    "code": 200,
    "count": 1,
    "data": [
        {
            "authors": [
                {
                    "last_name": "Toro-Tapia",
                    "initial": "G."
                },
                {
                    "last_name": "Villaseca",
                    "initial": "S."
                }
            ],
            "editors": [],
            "year": 2018,
            "title": "The Ric-8A/Gα13/FAK signaling cascade controls focal adhesion formation during neural crest cell migration",
            "source": "Development",
            "volume": null,
            "issue": null,
            "page": null,
            "doi": "10.1242/dev.164269",
            "type": "journal-article"
        }
    ]
}
```


### GET `events`

#### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|event_id|query|string| no |UUID saved in the Event table as an identifier.|
|aggregation|query|string| no |The results can be aggregated on certain values, i.e. aggregation on measure_uri. Aggregation must be one of the following: empty, measure_uri,country_uri, year,measure_uri, measure_uri,month, month,measure_uri, measure_uri,year, country_uri,measure_uri, measure_uri.|
|filter|query|string| no |Many different options can be used in the filter, i.e. filtering on measure_uri or on work_uri. Those can be together or even used multiple times by separating them with a comma ","|

> Request Example

`https://metrics-api.operas-eu.org/events?event_id=5e865d82-fcd4-4586-b209-8722ed1246e3`

> Response Example

```json
{
  "status": "ok",
  "code": 200,
  "count": 1,
  "data": [
    {
      "event_id": "5e865d82-fcd4-4586-b209-8722ed1246e3",
      "work_uri": "info:doi:10.12681/aprlp.16",
      "measure_uri": "https://metrics.operas-eu.org/ekt/landingsessions/v1",
      "timestamp": "2021-02-10T00:00:00+0000",
      "value": 1000,
      "event_uri": "1",
      "country_uri": "urn:iso:std:3166:-2:GR",
      "uploader_uri": "acct:kstamatis@ekt.gr"
    }
  ]
}
```

> Request Example with aggregation and filters

`https://metrics-api.operas-eu.org/events?aggregation=measure_uri&filter=work_uri:info:doi:10.21435/sflin.24`

> Response Example with aggregation and filters

```json
{
  "status": "ok",
  "code": 200,
  "count": 4,
  "data": [
    {
      "measure_uri": "https://metrics.operas-eu.org/oapen/downloads/v1",
      "namespace": "https://metrics.operas-eu.org",
      "source": "OAPEN",
      "type": "downloads",
      "version": "v1",
      "value": 209
    },
    {
      "measure_uri": "https://metrics.operas-eu.org/up-logs/downloads/v1",
      "namespace": "https://metrics.operas-eu.org",
      "source": "Ubiquity Press",
      "type": "downloads",
      "version": "v1",
      "value": 313
    }
  ]
}
```


### POST `events`

#### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|work_uri|body|string| yes |Uniform Resource Identifier (URI) that uniquely identifies a specific work or piece of content saved in the Event table.|
|measure_uri|body|string| yes |reference to a service or endpoint that provides metrics or measurements.|
|timestamp|body|string| yes |Date in ISO 8601 format.|
|value|body|integer| yes |Number of times this event entry occurred.|
|event_uri|body|string| yes |URI used for single-event metrics, to give more information about the event. The format is specific to the type of event.|
|country_uri|body|string| yes |URN (Uniform Resource Name) format specified by the ISO 3166 standard, which is used for country codes. Examples: `urn:iso:std:3166:-2:US` (United States), `urn:iso:std:3166:-2:PK` (Pakistan)|
|uploader_uri|body|string| yes |URI to identify the user that uploaded the metrics event. This uses the acct URI scheme|

> Request Example

`http://localhost:8080/events`

- Body Parameters

```json
{
    "work_uri": "http://example.com/work/2",
    "measure_uri": "http://example.com/measure/2",
    "timestamp": "2023-10-01T12:00:00+0000",
    "value": 100,
    "event_uri": "http://example.com/event/2",
    "country_uri": "http://example.com/country/2",
    "uploader_uri": "http://example.com/uploader/2"
}
```

> Response Example

```json
{
    "status": "ok",
    "code": 200,
    "count": 1,
    "data": [
        {
            "event_id": "22bfe31d-0374-45d6-9e6a-f8285b2bc25e",
            "work_uri": "tag:ubiquitypress.com,2024|press|book:up-p-testing-300",
            "measure_uri": "https://metrics.operas-eu.org/world-reader/users/v1",
            "timestamp": "2024-01-01T00:00:00+0000",
            "value": 100,
            "event_uri": "event_uri_1",
            "country_uri": "urn:iso:std:3166:-2:ZW",
            "uploader_uri": "uploader_uri_1"
        }
    ]
}
```


### GET `measures`

#### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|aggregation|query|string| no |The results can be aggregated on certain values, i.e. aggregation on measure_uri. Aggregation must be one of the following: empty, measure_uri,country_uri, year,measure_uri, measure_uri,month, month,measure_uri, measure_uri,year, country_uri,measure_uri, measure_uri.|


> Request Example

`http://localhost:8080/measures?aggregation=measure_uri`

> Response Example

```json
{
    "status": "ok",
    "code": 200,
    "count": 19,
    "data": [
        {
            "measure_uri": "https://metrics.operas-eu.org/google-books/views/v1",
            "namespace": "https://metrics.operas-eu.org",
            "source": "Google Books",
            "type": "views",
            "version": "v1",
            "description": [
                {
                    "locale_code": "de_DE",
                    "locale_name": "German - Germany",
                    "description": "Book Visits beschreibt die Gesamtanzahl von Besuchen für einen Titel. Dies kann mehrere Besuche von derselben IP-Adresse beinhalten, die jeweils als einzelne Zugriffe gezählt werden. Google Book reports beinhalten nur Book Visits und Seitenviews."
                },
                {
                    "locale_code": "en_GB",
                    "locale_name": "English - United Kingdom",
                    "description": "Book Visits represent the total number of times a book has been accessed. This can include multiple visits by the same IP address, which are counted as separate visits. Google Books only reports back to the publisher the Book Visits and Book Page Views."
                }
            ]
        },
        {
            "measure_uri": "https://metrics.operas-eu.org/obp-html/sessions/v1",
            "namespace": "https://metrics.operas-eu.org",
            "source": "Open Book Publishers HTML Reader",
            "type": "sessions",
            "version": "v1",
            "description": [
                {
                    "locale_code": "en_GB",
                    "locale_name": "English - United Kingdom",
                    "description": "A Book Session is a group of visits made by the same user within a continuous time frame. To record these sessions at Open Book Publishers we use Google Analytics, and a session lasts until there are 30 minutes of inactivity; if a single user keeps interacting with the website within this time frame, multiple visits to the same book will be counted as one session. For more information on Google Analytics’ definition of a session read: <a href=\"https://support.google.com/analytics/answer/2731565\">How a web session is defined in Analytics</a>."
                }
            ]
        }
    ]
}        
```


### GET `popularity`

#### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|service_code|query|string| yes |Code used to identify a service (Press, Journal, Repository, etc).|


> Request Example

`http://localhost:8080/popularity?service_code=up-p-testing`

> Response Example

```json
{
    "status": "ok",
    "code": 200,
    "count": 6,
    "data": [
        123,
        678,
        345
    ]
}

```


### GET `services`

#### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|service_code|query|string| yes |Code used to identify a service (Press, Journal, Repository, etc).|
|body|body|object| no |none|
|uris|body|[array]| yes | Work_uri and external_id. |

> Request Example

`http://localhost:8080/services?service_code=up-p-testing`

- Body Parameters

```json
{
  "service_code": "up-p-testing",
  "uris": [
    [
        "tag:ubiquitypress.com,2024|press|book:up-p-testing-300",
        123
    ],
    [
        "tag:ubiquitypress.com,2024|press|book:up-p-testing-3", 
        345
    ]
  ]
}
```

> Response Example

```json
{
    "status": "ok",
    "code": 200,
    "count": 4,
    "data": [
        [
            "info:doi:10.56687/9781529237290", 
            177
        ],
        [
            "info:doi:10.7765/9781526166814", 
            211
        ], 
        [
            "info:doi:10.36019/9780813540979", 
            191
        ], 
        [
            "tag:ubiquitypress.com,2024|press|book:up-p-testing-32", 
            32
        ]
    ]
}
```


### POST `services`

#### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no | Contains the service_code and the uris. |
|service_code|body|string| yes |Code used to identify a service (Press, Journal, Repository, etc).|
|uris|body|[array]| yes | Work_uri and external_id. |


> Request Example

`http://localhost:8080/services`

- Body Parameters

```json
{
  "service_code": "up-p-testing",
    "uris": [
        [
            "tag:ubiquitypress.com,2024|press|book:up-p-testing-300", 
            123
        ],
        [
            "tag:ubiquitypress.com,2024|press|book:up-p-testing-3", 
            345
        ],
        [
            "tag:ubiquitypress.com,2024|press|book:up-p-testing-305", 
            678
        ]
    ]
}
```


> Response Example

```json
{
    "status": "ok",
    "code": 200,
    "count": 3,
    "data": "200"
}

```


### DELETE `services`

#### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|service_code|query|string| yes | Code used to identify a service (Press, Journal, Repository, etc). |
|body|body|object| no | List of lists consisting of uris. |
|uris|body|[array]| yes | Work_uri and external_id. |


> Request Example

`http://localhost:8080/services`

- Body Parameters

```json
{
  "service_code": "up-p-testing",
  "uris": [
    [
      "tag:ubiquitypress.com",
      "2024|press|book:up-p-testing-300"
    ],
    [
      "tag:ubiquitypress.com",
      "2023|press|book:up-p-testing-310"
    ]
  ]
}
```

> Response Example

```json
{
    "status": "ok",
    "code": 200,
    "count": 42,
    "data": "2 works deleted from service, up-p-testing"
}

```


### GET `service_events`

#### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|service_code|query|string| yes |Code used to identify a service (Press, Journal, Repository, etc).|
|start_date|query|string| yes |ISO 8601 format (YYYY-MM-DD) as a starting date to retrieve the events from.|


> Request Example

`http://localhost:8080/service_events?service_code=up-p-testing&start_date=2020-09-18`

> Response Example

```json
{
    "status": "ok",
    "code": 200,
    "count": 5,
    "data": [
        {
            "measure_uri": "https://metrics.operas-eu.org/crossref/citations/v1",
            "namespace": "https://metrics.operas-eu.org",
            "source": "Crossref",
            "type": "citations",
            "version": "v1",
            "value": 600
        },
        {
            "measure_uri": "https://metrics.operas-eu.org/open-edition/downloads/v1",
            "namespace": "https://metrics.operas-eu.org",
            "source": "Open Edition",
            "type": "downloads",
            "version": "v1",
            "value": 500
        }
    ]
}
```

[1]: https://gitlab.com/ubiquitypress/metrics-api "Metrics-api link"
