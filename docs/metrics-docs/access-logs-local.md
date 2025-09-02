# Access Logs Driver

Install the driver as a package from PyPI by visiting the following link on [pypi][1].

The driver reads through the server logs of your web application to calculate the number of visits to pages on the site. It determines unique users based on IP address, and excludes known bots from any metrics counts. The URL patterns are also used to determine the type of metrics (views, downloads, etc.)

We strip out entries where the same (IP address * user agent) pair has accessed
a URL within the last `session_timeout` (e.g. half-hour)


### Plugin Variables Description

| Variable                | Description                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| `active`                | The plugin will not run if this is set to false, boolean.                                          |
| `start_date`            | The date that you want to first pull results the first time the plugin runs, a string.             |
| `uri_scheme`            | Uri scheme to save results against, string.                                                        |
| `measure_regexes`       | List of dictionaries containing name, measure_uri and regex as list, for each measure.                                                                |
| `excluded_ips`          | List of IP addresses to exclude.                                                                   |
| `excluded_urls`         | List of URLs  to exclude.                                                                          |
| `logdir`                | Path to the directory containing the logs, string.                                                 | 
| `url_prefix`            | URL prefix of your website, string.                                                                |
| `session_timeout`       | Length of session, in seconds, int.                                                                |
| `rollover`              | Extend session if new requests occur within the timeout window, boolean.                                                                  |

### Example of plugin configuration file:

```yaml
measure_regexes: [
  {
    name: "downloads",
    measure: 'https://test-metrics.com/access-logs-test/downloads/v1',
    regex: ['https:\/\/cjs\.sljol\.info/articles/10.\d{4,9}/[ -._;(/:A-Za-z0-9 ]+/galley/\d+/download/?', ],
  },
  {
    name: "sessions",
    measure: 'https://metrics.com/access-logs-test/sessions/v1',
    regex: ['https:\/\/cjs\.sljol\.info/articles/10.\d{4,9}/[ -._;(/:A-Za-z0-9 ]+/?', ],
  }
]
excluded_ips: ["8.8.8.8", "9.9.9.9"]
excluded_urls: ["https://malformed_url.com"]
logdir: "plugins/access_logs_local/logs"
url_prefix: 'https://cjs.sljol.info'
session_timeout: 1800
rollover: false
cutoff_days: 3
start_date: '2023-06-01'
uri_scheme: "info:doi"

active: false   # set to true for local testing...
```

[1]: https://pypi.org/project/access-logs-local/ "Pypi link" 
