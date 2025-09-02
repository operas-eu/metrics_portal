# Google Analytics Driver (Legacy)

Note from Google: Starting on July 1, 2023, standard Universal Analytics properties stopped processing new data, and all customers will lose access to the Universal Analytics interface and API starting on July 1, 2024.

Therefore, this driver can only be used to collect data for metrics that occurred up until 01 July 2023 and the driver will stop working entirely after 01 July 2024.

This driver allows programmatic retrieval of stats reports from Google’s standard Universal Analytics API in order to generate normalised publication-level usage reports.


### Plugin Variables Description

| Variable                | Description                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| `active`                | The plugin will not run if this is set to false, boolean.                                          |
| `start_date`            | the date that you want to first pull results the first time the plugin runs, a string.             |
| `uri_scheme`            | Uri scheme to save results against, string.                                                        |
| `events`                | Configuration for “event” metrics.                                                                 |
| `filters`               | RL paths to search, list.                                                                          |
| `json_key`              | Contents of JSON key file from Google for authentication.                                          |
| `prefix`                | Url prefix, string.                                                                                | 
| `regex`                 | regexes to search by, list.                                                                        |
| `view_id`               | View ID, string.                                                                                   |
| `views`                 | Configuration for “view” metrics.                                                                  |


### Example of plugin configuration file:

```yaml
events:
  dimensions:
  - ga:test
  - ga:test
  - ga:test
  - ga:test
  headers:
    identifier_name: ga:test
  identifier_type: https
  measures:
    downloads:
      categories:
      - pdf download
      - epub download
      - mobi download
      measure: https://metrics.test.org/test/downloads/v1
    reads:
      categories:
      - epub view
      measure: https://metrics.test-eu.org/test/reads/v1
  metrics:
  - ga:test
filters:
- /test/books
- /test/chapters
json_key:
  auth_provider_x509_cert_url: https://www.test.com/oauth2/v1/certs
  auth_uri: https://test.com/o/oauth2/auth
  client_email: test@test.com
  client_id: '999999999999999999999'
  client_x509_cert_url: https://www.test.com
  private_key: 'test private key'
  private_key_id: 99999999999999999999999999999999999999999
  project_id: test-99999
  token_uri: https://test.com/token
  type: test
prefix: https://www.test.com
regex:
- https:\/\/(www\.)?test\.com\/site\/(books|chapters)\/([em]\/)?10\.?\d{3,9}(/[-._;():A-Za-z0-9]+)+
```
