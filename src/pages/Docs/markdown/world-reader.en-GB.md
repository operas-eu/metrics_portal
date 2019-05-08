# World Reader Driver
- **Source**: https://github.com/hirmeos/world_reader_driver
- **Image**: https://hub.docker.com/r/openbookpublishers/world_reader_driver

This driver allows programmatic retrieval and normalisation of World Reader usage reports.

The driver is made of two modules: the first one scrapes usage reports from World Reader and stores them in a directory (`CACHEDIR`); the second reads from cache, normalises the reports, and outputs to a different directory (`OUTDIR`). We recommend running this driver in a docker container and mapping both `CACHEDIR` and `OUTDIR` to persistent volumes.


## Setup
### Requirements
Identifier normalisation is performed using an instance of [hirmeos/identifier_translation_service][1] - you must first setup this API.

World Reader provides geographical data using the country name, so we normalise it to iso-2 format using an instance of [hirmeos/countries_api][2] - you must also setup this API.

### World Reader reports
Unfortunately, World Reader does not have a proper reporting API or interface for publishers hosting books with them. They do however send a monthly email with a unique link to an interface where publishers can review usage for the previous month. These links are completely random, so in order for the driver to work one must input the each link in the driver's configuration file as soon as they receive it.

The report links are not persistent, and indeed most of our own ones for the past year are not active at the moment. The drive caches all requests in `CACHEDIR` for future use, so this is not too much of a problem, but it's worth having in mind.

### Environment variables
The following environment variables must be set. You can find a template in `./config/config.env.example`.

| Variable           | Description                                                                      |
| ---------------    | -------------------------------------------------------------------------------- |
| `MODES`            | A JSON array containing further configuration (see below).                       |
| `WORK_TYPES`       | All the pertinent work types to query in the translation service.                |
| `OUTDIR`           | The path to the directory where the driver will store its output.                |
| `CACHEDIR`         | The path to the directory where the driver will store the raw reports.           |
| `URI_API_ENDP`     | The URL to the translation service.                                              |
| `AUTH_API_ENDP`    | The URL to the tokens API.                                                       |
| `COUNTRY_API_ENDP` | The URL to the countries API.                                                    |
| `URI_API_USER`     | The email address of the user with access to the translation service.            |
| `URI_API_PASS`     | The password of the above user.                                                  |
| `URI_SCHEME`       | The desired URI scheme to normalise identifiers to (we recommend DOI, info:doi). |
| `URI_STRICT`       | Whether to output errors with ambiguous translation queries.                     |


### Example `config.env` file
```
MODES=[{"measure":"https://metrics.operas-eu.org/world-reader/users/v1","name":"world-reader","startDate":"2018-05-01","config":[{"name":"report-url","value":"https://mb.wrdr.io/embed/dashboard/random_string#bordered&#x3D;true&amp;titled&#x3D;true"}]}]
WORK_TYPES=["book","book-series","book-set","dissertation","edited-book","journal","journal-issue","journal-volume","monograph","posted-content","proceedings","reference-book","report","report-series","standard","standard-series"]
OUTDIR=/usr/src/app/output
CACHEDIR=/usr/src/app/cache
URI_API_ENDP=https://identifier.translation.service/translate
AUTH_API_ENDP=https://authentication.service/tokens
COUNTRY_API_ENDP=httsp://countries.api/countries
URI_API_USER=admin_user@openbookpublishers.com
URI_API_PASS=some_secret_password
URI_SCHEME=info:doi
URI_STRICT=true
```

### The `MODES` env variable
You must define a JSON array in`MODES`, with at least one record. The driver will iterate through the array, performing its task once per mode; in a typical case there will only be one entry in the array.

Each entry of the `MODES` array must contain values for `measure`, `name`, `startDate`, and `config`.

| Attribute   | Description                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| `measure`   | A URI identifying the type of measure. You may use https://metrics.operas-eu.org/world-reader/users/v1       |
| `name`      | The name of this mode. This is not too important, though it is used as the prefix of cache and output files. |
| `startDate` | The first date in which your account has usage data available in Google Books (YYYY-MM-DD format)            |
| `config`    | An array containing dictionaries with the report URLs (see example below)                                    |

Example:
```
MODES=[{"measure":"https://metrics.operas-eu.org/world-reader/users/v1","name":"world-reader","startDate":"2018-05-01","config":[{"name":"report-url","value":"https://mb.wrdr.io/embed/dashboard/random_string#bordered&#x3D;true&amp;titled&#x3D;true"}]}]
```

## Run via crontab
```
0 0 * * 0 docker run --rm --name "world_reader_driver" --env-file /path/to/config.env -v world_reader_cache:/usr/src/app/cache -v metrics:/usr/src/app/output openbookpublishers/world_reader_driver:1
```
- `--rm` is used to delete the container once it exists;
- `--name` is completely optional (it will get receive a random name otherwise);
- `--env-file` is the path to the config file (in the local machine);
- `-v` is to add a named volume (to persist data). We have two of these: world_reader_cache will store the results of the API queries to GA; metrics stores the output of the driver (the normalised CSV files).

[1]: https://metrics.operas-eu.org/docs/identifier-translation-service "Identifier Translation Service"
[2]: https://metrics.operas-eu.org/docs/countries-api "Countries API"
