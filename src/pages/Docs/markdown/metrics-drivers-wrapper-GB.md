### Metrics Drivers Wrapper

Although each platform is different, there is only a small number of methods in which data is reported (a CSV report, an API, a spreadsheet, etc.), so existing drivers may be used as a template to develop more drivers for those platforms that we haven't covered. In addition, the Matomo, Google Analytics, and Access Logs drivers are provided to allow a publisher/platform to collect usage metrics from their own website. The most interesting modules are the Drivers and Plugins which are explained below:

- Drivers: Drivers are independent modules that can be installed locally to collect and normalise data from a given platform. The drivers are packages located in PyPI, and you can install them with a single command, e.g.: 
```bash
        $ pip install <package_name>. 
```
- Plugins: The plugins are responsible for normalising the data collected by the drivers. Initially, we retrieve the variables from a YAML file to aid in this normalisation and filtering process. Subsequently, a translator is used to convert the relevant data into an acceptable URI identifier, after which the data is saved to the database.

The current list of drivers that we have developed is:

- [Access Logs Local][1]
- [Crossref Cited-by][2]
- [Google Books][3]
- [IRUS-UK][4]
- [Matomo][5]
- [Unglue.it][6]
- [Google Analytics 3 (being deprecated)][7]

The Plugings found in the metrics drivers:

- [Access Logs Local [non-Google Cloud]][1]
- [Crossref Cited-by][2]
- [Google Books][3]
- [IRUS UK][4]
- [MATOMO][5]
- [Unglue.it][6]
- [Google Analytics 3 (being deprecated)][7]
- [Server Access Logs [Google Cloud]][8]
- [JSTOR][9]

[1]: https://metrics.operas-eu.org/docs/access-logs-local "Access logs Local"
[2]: https://metrics.operas-eu.org/docs/crossref-citedby "Crossref Citedby"
[3]: https://metrics.operas-eu.org/docs/google-books "Google Books"
[4]: https://metrics.operas-eu.org/docs/irus-uk "IRUS-UK"
[5]: https://metrics.operas-eu.org/docs/matomo "Matomo"
[6]: https://metrics.operas-eu.org/docs/unglueit "Unglue.it"
[7]: https://metrics.operas-eu.org/docs/google-analytics "Google Analytics"
[8]: https://metrics.operas-eu.org/docs/server-access-logs "Server Access Logs [Google Cloud]"
[9]: https://metrics.operas-eu.org/docs/jstor "JSTOR"
