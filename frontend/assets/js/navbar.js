// Function to open the search dialog on desktop version
function openSearchDialog() {
    document.getElementById('searchDialog').style.display = 'block';
}

// Function to select an event from the dialog on desktop version
function selectEvent(event) {
    document.getElementById('searchBox').value = event;
    document.getElementById('searchDialog').style.display = 'none';
}

// Close the search dialog if clicking outside the box (for desktop)
document.addEventListener('click', function(event) {
    if (!document.getElementById('searchBox').contains(event.target) && !document.getElementById('searchDialog').contains(event.target)) {
        document.getElementById('searchDialog').style.display = 'none';
    }
});

// Mobile version: Open search dialog
function openSearchDialogMobile() {
    document.getElementById('mobileSearchDialog').style.display = 'block';
}

// Mobile version: Close search dialog
function closeSearchDialogMobile() {
    document.getElementById('mobileSearchDialog').style.display = 'none';
}

// Function to select an event on mobile version
function selectEventMobile(event) {
    document.getElementById('mobileSearchBox').value = event;
    document.getElementById('mobileSearchDialog').style.display = 'none';
}
