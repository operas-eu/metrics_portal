# Publishers

<h2 id="publisherCount"></h2>
<ul id="publisherList">
<span id="last-month-date"></span>

<h3> Use the search field below to narrow down your search:</h3>

<input type="text" id="publisherSearch" placeholder="Search for publishers..." style="margin-bottom: 20px; width: 100%; padding: 10px; font-size: 16px;">


<ul id="publisherList">
    <li>Association for Computing Machinery (ACM)</li>
    <li>Modern Language Association</li>
    <li>Ordfront Forlag</li>
    <li>Indian Institute of Technology Knowledge Sharing in Publishing - IIT KSHIP</li>
    <li>Gävle University Press</li>
    <li>University Press of Florida</li>
    <li>Stockholm University Press</li>
    <li>Acta Universitatis Gothoburgensis</li>
    <li>Winchester University Press</li>
    <li>Walter de Gruyter GmbH</li>
    <li>Karlstad University Press</li>
    <li>Project MUSE</li>
    <li>University of Illinois Press</li>
    <li>University of Westminster Press</li>
    <li>Transformative Dialogues: Teaching and Learning Journal</li>
    <li>University of Pennsylvania Press</li>
    <li>Arkiv Forlag & Tidskrift</li>
    <li>Manchester University Press</li>
    <li>Sprak- och litteraturcentrum, Lunds universitet</li>
    <li>Aperio Press</li>
    <li>University of North Carolina Press (publisher)</li>
    <li>University of Technology, Sydney (UTS)</li>
    <li>Radboud University</li>
    <li>Karlsruhe Institute of Technology Library</li>
    <li>Universitetskanslersämbetet</li>
    <li>NYU Press</li>
    <li>Northwestern University</li>
    <li>LSE Press</li>
    <li>Transcript Verlag</li>
    <li>University of Chicago Press</li>
    <li>Indiana University Press</li>
    <li>JSTOR</li>
    <li>Cornell University Press</li>
    <li>Acta Universitatis Upsaliensis</li>
    <li>Latin American Studies Association</li>
    <li>The Pennsylvania State University Libraries</li>
    <li>Ubiquity Press, Ltd.</li>
    <li>The Ohio State University Libraries</li>
    <li>University of Minnesota Press</li>
    <li>University of California Press</li>
    <li>Helsinki University Press</li>
    <li>University of Toronto Press Inc. (UTPress)</li>
    <li>University of Virginia Press</li>
    <li>Virginia Tech Libraries</li>
    <li>University of Cincinnati Press</li>
    <li>Kriterium</li>
    <li>Oxford University Press (OUP)</li>
    <li>Makadam</li>
    <li>University of Massachusetts Amherst</li>
    <li>The Pennsylvania State University Press</li>
    <li>White Rose University Press</li>
    <li>University of Michigan Library</li>
    <li>Scandinavian Military Studies</li>
    <li>Stockholmia - forskning och forlag</li>
    <li>University of British Columbia Press</li>
    <li>Cardiff University Press</li>
    <li>Leiden University Press</li>
    <li>MIT Press</li>
    <li>Duke University Press</li>
    <li>Stanford University Press</li>
    <li>Bristol University Press</li>
    <li>Suomalaisen Kirjallisuuden Seura</li>
    <li>Cambridge University Press (CUP)</li>
    <li>MWV Medizinisch Wissenschaftliche Verlagsgesellschaft mbH and Co. KG</li>
    <li>Kungliga Skytteanska Samfundets Handlingar</li>
    <li>Cornell University Library</li>
    <li>Nordic Academic Press</li>
    <li>Harvard University Press</li>
    <li>Rutgers University Press</li>
    <li>Institute for Health Metrics and Evaluation (IHME)</li>
    <li>Modern Academic Publishing Partners</li>
</ul>

<script>
// Get the unordered list element by its ID
const publisherList = document.getElementById('publisherList');

// Get all the list items within the unordered list
const listItems = publisherList.getElementsByTagName('li');

// Retrieve the count of the list items
const count = listItems.length;

// Create the last month date to display
const today = new Date();
const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
const lastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
const lastMonthLastDay = `${lastDay}/${lastMonth.getMonth() + 1}/${lastMonth.getFullYear()}`;
const lastMonthFirstDay = `01/${lastMonth.getMonth() + 1}/${lastMonth.getFullYear()}`;

// Update the text of the h2 element with the count
const publisherCountElement = document.getElementById('publisherCount');
publisherCountElement.innerHTML = `This is a list of the ${count} publishers who have recorded book metrics in the OPERAS Metrics database in the last month, from ${lastMonthFirstDay} to ${lastMonthLastDay}:`;
</script>