document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("publisherSearch");
    const publisherList = document.getElementById("publisherList");
    const publishers = publisherList.getElementsByTagName("li");
  
    searchInput.addEventListener("input", function () {
      const filter = searchInput.value.toLowerCase();
      for (let i = 0; i < publishers.length; i++) {
        const text = publishers[i].textContent || publishers[i].innerText;
        publishers[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Ensure two-digit month
    const day = String(today.getDate()).padStart(2, '0'); // Ensure two-digit day
    const todayDate = `${year}-${month}-${day}`;

    // API endpoint
    const apiUrl = `https://metrics-api.operas-eu.org/publishers`;

    // Get the publisher list element
    const publisherList = document.getElementById('publisherList');

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === "ok" && Array.isArray(data.data)) {
                // Remove only existing <li> elements, keeping search input
                const listItems = publisherList.querySelectorAll('li');
                listItems.forEach(item => item.remove());

                // Populate the list with publishers
                data.data.forEach(publisher => {
                    const li = document.createElement('li');
                    li.textContent = publisher.publisher_name;
                    publisherList.appendChild(li);
                });

                // Update count
                const publisherCountElement = document.getElementById('publisherCount');
                publisherCountElement.innerHTML = `This is a list of the ${data.count} publishers who have recorded book metrics in the OPERAS Metrics database:`;
            } else {
                console.error("Invalid response format", data);
            }
        })
        .catch(error => {
            console.error("Error fetching publishers:", error);
        });

    // Search filter functionality
    document.getElementById('publisherSearch').addEventListener('input', function () {
        const searchText = this.value.toLowerCase();
        const items = publisherList.getElementsByTagName('li');
        for (let item of items) {
            if (item.textContent.toLowerCase().includes(searchText)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    });
});
