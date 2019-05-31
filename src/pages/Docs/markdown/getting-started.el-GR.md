# Getting Started

## Foreword
Usage metrics have been widely adopted in Open Access works as an indication of the popularity or acceptance of a particular publication. Inevitably, performance assessment and funding allocation is being based on these statistics. However, while we do not agree with these practices, we acknowledge that metrics collection and reporting is nowadays a fundamental need for any organisations producing and/or hosting digital monographs.

Thanks to their licenses, Open Access publications are disseminated across multiple platforms and repositories. However, publishers and distributing platforms simply collect usage data from their own system, due to the lack of public APIs that could allow programmatic collection of data from all the various websites hosting a publication. Most usage metrics available within distributing platforms display data for that particular website, not for the publication.

As part of Work Package 6 of the [HIRMEOS project][1] [Open Book Publishers][2] has developed open source software to allow collection and normalisation of third-party usage metrics, used to populate a database of title-specific data that allows its analysis and visualisation.

## Components
The HIRMEOS metrics suite is made of:
- [Identifier Translation Service][16]. Used to normalise identifiers.
- Drivers. Used to collect and normalise data from reporting platforms.
- [Tokens API][19]. Used to generate JSON Web Tokens to authenticate all the various services.
- [Metrics API][17]. Used to store and retrieve normalised data.
- [Countries API][18]. Used by some drivers to normalise geographical data.

![HIRMEOS Metrics Service Diagram](https://www.openbookpublishers.com/shopimages/metrics-servicehirmeos-wp6.png)

### Identifier Translation Service
The first step when implementing our software is the [Identifier Translation Service][16], an API used by the drivers to normalise publication identifiers. HIRMEOS partners normalise all identifiers to DOIs, however, our schema stores identifiers as URIs, so any other type can be used instead.

### Drivers
Drivers are independent modules that can be installed locally to collect and normalise data from a given platform.

Although each platform is different, there is only a small number of methods in which data is reported (a CSV report, an API, a spreadsheet, etc.), so existing drivers may be used as a template to develop more drivers for those platforms that we haven't covered. In addition, the Matomo, Google Analytics, and Access Logs drivers are provided to allow a publisher/platform to collect usage metrics from their own website.

The current list of drivers that we have developed is:

- [Google Analytics][3]
- [Matomo][4]
- [Access Logs][5]
- [Google Books][6]
- [Open Edition][7]
- [OAPEN][8]
- [JSTOR][9]
- [World Reader][10]
- [Unglue.it][11]
- [OpenAIRE][12]
- [IRUS-UK][13]
- [Wikiversity][14]

A rather simplified schema of a driver would look like this:

![HIRMEOS Metrics Service Driver Diagram](https://www.openbookpublishers.com/shopimages/driver-process.png)

### Metrics API
Once data is collected and normalised it can be stored in the [metrics database, via its REST API][17].

## More
You may find more information, including slides, [here][15].

You may also get in touch with our technical team:
- Usage metrics: <a href="mailto:javi@openbookpublishers.com">Javier Arias</a> (Open Book Publishers)
- Altmetrics: <a href="mailto:rowan.hatherley@ubiquitypress.com">Rowan Hatherley</a> (Ubiquity Press)

[1]: https://www.hirmeos.eu "HIRMEOS"
[2]: https://www.openbookpublishers.com "Open Book Publishers"
[3]: https://metrics.operas-eu.org/docs/google-analytics "Google Analytics"
[4]: https://metrics.operas-eu.org/docs/matomo "Matomo"
[5]: https://metrics.operas-eu.org/docs/access-logs "Access logs"
[6]: https://metrics.operas-eu.org/docs/google-books "Google Books"
[7]: https://metrics.operas-eu.org/docs/open-edition "Open Edition"
[8]: https://metrics.operas-eu.org/docs/oapen "OAPEN"
[9]: https://metrics.operas-eu.org/docs/jstor "JSTOR"
[10]: https://metrics.operas-eu.org/docs/world-reader "World Reader"
[11]: https://metrics.operas-eu.org/docs/unglueit "Unglue.it"
[12]: https://metrics.operas-eu.org/docs/openaire "OpenAIRE"
[13]: https://metrics.operas-eu.org/docs/irus-uk "IRUS-UK"
[14]: https://metrics.operas-eu.org/docs/wikiversity "Wikiversity"
[15]: https://www.openbookpublishers.com/section/92/1 "OA Book Usage Data"
[16]: https://metrics.operas-eu.org/docs/identifier-translation-service "Translation service"
[17]: https://metrics.operas-eu.org/docs/metrics-api "Metrics API"
[18]: https://metrics.operas-eu.org/docs/countries-api "Countries API"
[19]: https://metrics.operas-eu.org/docs/tokens-api "Tokens API"
