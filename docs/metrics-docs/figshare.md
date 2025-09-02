# Figshare Driver

Install the driver as a package from PyPI by visiting the following link on [pypi][1].

The driver performs API calls to the Figshare endpoint https://stats.figshare.com/tome/breakdown/ and executes the needed filters and data normalization to be able to saved such data in the OPERAS database.


### Plugin Variables Description

| Variable                | Description                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| `active`                | The plugin will not run if this is set to false, boolean.                                          |
| `start_date`            | the date that you want to first pull results the first time the plugin runs, string.             |
| `gb_account`            | Google books account id. Numeric representation of the account, used to download the google books files, string.                                                                           |
| `logdir`            | Directory where the driver will read the .txt file containing the metrics ids to pull from the API, string.                                           |
| `username`              | username for the google books account, string.                                                     |
| `password`              | password for the google books account, string.                                                  | 
| `ids_file`              | Name of the txt file containing the ids to query against, string.                                                |
| `base_url`              | Figshare endpoint to perform the API calls, string.                                            |


### Example of plugin configuration file:

```yaml
base_url: "https://stats.figshare.com/tome/breakdown/"
username: "some_username_stats"
password: "****"
logdir: "plugins/figshare/uploads"
start_date: "2011-07-01"
ids_file: "article_ids.txt"
active: false
```

[1]: https://pypi.org/project/figshare-driver/ "Pypi link" 
