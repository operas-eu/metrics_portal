# Publishers

<h2 id="publisherCount"></h2>
<ul id="publisherList">
<span id="last-month-date"></span>

<h3> Use the search field below to narrow down your search:</h3>

<input type="text" id="publisherSearch" placeholder="Search for publishers..." style="margin-bottom: 20px; width: 100%; padding: 10px; font-size: 16px;">


<ul id="publisherList">
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