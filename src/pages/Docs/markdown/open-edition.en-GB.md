# Open Edition Driver
- **Source**: https://github.com/hirmeos/open_edition_driver
- **Image**: https://hub.docker.com/r/openbookpublishers/open_edition_driver

This driver allows programmatic retrieval and normalisation of Open Edition usage reports (which are generated using AWStats).

The driver is made of two modules: the first one downloads usage reports from Open Edition and stores them in a directory (`CACHEDIR`); the second reads from cache, normalises the reports, and outputs to a different directory (`OUTDIR`). We recommend running this driver in a docker container and mapping both `CACHEDIR` and `OUTDIR` to persistent volumes.


## Setup
### Requirements
Identifier normalisation is performed using an instance of [hirmeos/identifier_translation_service][1] - you must first setup this API.

Open Edition reports number of visits per URL so you will need to have populated your instance of [hirmeos/identifier_translation_service][1] with mappings of works and Open Edition URLs. These can be obtained beforehand from [OE's OAI implementation][2] - which you can harvest using [hirmeos/oai_uri_import][3].

### Access to Open Edition reports
Open Edition needs to know beforehand that you would like to have access to their CSV API, as they enable the API on a per publisher basis.

### Environment variables
The following environment variables must be set. You can find a template in `./config/config.env.example`.

| Variable            | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| `MODES`             | A JSON array containing further configuration (see below).                        |
| `EXCLUDED_URLS`     | A list of URLs that we don't want to resolve (e.g. bibliography).                 |
| `IGNORED_TYPES`     | A list of work types (as reported by OE) that we don't want to count (e.g. index) |
| `OE_API_TOKEN`      | The token provided by Open Edition to access their API.                           |
| `OE_API_PUBLISHER`  | The short name of your publisher - used as a parameter in the API.                |
| `OUTDIR`            | The path to the directory where the driver will store its output.                 |
| `CACHEDIR`          | The path to the directory where the driver will store the raw reports.            |
| `URI_API_ENDP`      | The URL to the translation service.                                               |
| `AUTH_API_ENDP`     | The URL to the tokens API.                                                        |
| `URI_API_USER`      | The email address of the user with access to the translation service.             |
| `URI_API_PASS`      | The password of the above user.                                                   |
| `URI_SCHEME`        | The desired URI scheme to normalise identifiers to (we recommend DOI, info:doi).  |
| `URI_STRICT`        | Whether to output errors with ambiguous translation queries.                      |
| `CLEAN_FILE_TYPE`   | Whether to translate download URLs including the type (e.g. /pdf or /epub). Setting this to false will require you to insert all variations of the download URL in the translation service. |
| `REPROCESS_REPORTS` | Whether to regenerate existing reports (useful in case you find new URLs).        |

### Example `config.env` file

```
MODES=[{"measure":"https://metrics.operas-eu.org/open-edition/views/v1","name":"open-edition-views","startDate":"2013-02-01","regex":["http:\\/\\/books\\.openedition\\.org\\/obp\\/[0-9]{1,4}"], "config": [{"name": "exclude-type", "value": "livre"}]},{"measure":"https://metrics.operas-eu.org/open-edition/downloads/v1","name":"open-edition-downloads","startDate":"2013-02-01","regex":["http:\\/\\/books\\.openedition\\.org\\/obp\\/(pdf|epub)\\/[0-9]{1,4}"]}]
EXCLUDED_URLS=[]
IGNORED_TYPES=["pageliminaire","avantpropos","preface","source","index","annexe","bibliographie","postface"]
OE_API_TOKEN=somerandomapitokenobtainedfromoe
OE_API_PUBLISHER=obp
OUTDIR=/usr/src/app/output
CACHEDIR=/usr/src/app/cache
URI_API_ENDP=https://identifier.translation.service/translate
AUTH_API_ENDP=https://authentication.service/tokens
URI_API_USER=admin_user@openbookpublishers.com
URI_API_PASS=some_secret_password
URI_SCHEME=info:doi
URI_STRICT=true
CLEAN_FILE_TYPE=true
REPROCESS_REPORTS=true
```

### The `MODES` env variable
You must define a JSON array in`MODES`, with at least one record. The driver will iterate through the array, performing its task once per mode. The example shows *two modes*, one to produce views, the other downloads.

Each entry of the `MODES` array must contain values for `measure`, `name`, `startDate`, `regex`, and `config`.

| Attribute   | Description                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| `measure`   | A URI identifying the type of measure. You may use https://metrics.operas-eu.org/open-edition/views/v1          |
| `name`      | The name of this mode. This is not too important, though it is used as the prefix of cache and output files.    |
| `startDate` | The first date in which your account has usage data available in Google Books (YYYY-MM-DD format)               |
| `config`    | An array containing one single object containing the unique ID of your Google Books account (see example below) |
| `regex`     | The regular expression needed to retrieve data for a specific URL structure. For example, Open Book Publishers' books at Open Edition follow this structure "http:\\/\\/books\\.openedition\\.org\\/obp\\/[0-9]{1,4}". |

Example
```
MODES=[{"measure":"https://metrics.operas-eu.org/open-edition/views/v1","name":"open-edition-views","startDate":"2013-02-01","regex":["http:\\/\\/books\\.openedition\\.org\\/obp\\/[0-9]{1,4}"], "config": [{"name": "exclude-type", "value": "livre"}]},{"measure":"https://metrics.operas-eu.org/open-edition/downloads/v1","name":"open-edition-downloads","startDate":"2013-02-01","regex":["http:\\/\\/books\\.openedition\\.org\\/obp\\/(pdf|epub)\\/[0-9]{1,4}"]}]
```
NB. The first mode includes the option `exclude-type` to capture all views by chapter (HTML version), the second mode does not exclude anything by type, instead the regex (pdf|epub) makes sure that only file downloads (only available to books/livres) are counted.

## Run via crontab
NB. Unlike with other drivers, OE reports only get generated once a month, so it's useless to run the driver daily or weekly.

```
0 0 1 * * docker run --rm --name "open_edition_driver" --env-file /path/to/config.env -v open_edition_cache:/usr/src/app/cache -v metrics:/usr/src/app/output openbookpublishers/open_edition_driver:1
```
- `--rm` is used to delete the container once it exists;
- `--name` is completely optional (it will get receive a random name otherwise);
- `--env-file` is the path to the config file (in the local machine);
- `-v` is to add a named volume (to persist data). We have two of these: open_edition_cache will store the results of the API queries to GA; metrics stores the output of the driver (the normalised CSV files).

[1]: https://metrics.operas-eu.org/docs/identifier-translation-service "Identifier Translation Service"
[2]: https://oai.openedition.org "Open Edition's OAI"
[3]: https://github.com/hirmeos/oai_uri_import "OAI URI import"
