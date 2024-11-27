# ContactSearch
# Documentation and Instructions 

### Prerequisites

Before deploying the application, ensure the following:
1. Node.js (version 14 or higher) is installed: https://nodejs.org/en
2. npm (Node Package Manager) or yarn is available for managing dependencies
3. A code editor like Visual Studio Code (https://code.visualstudio.com) is installed for development.

### Setting up locally

1. Clone the repository from your version control system (e.g., GitHub): git clone <repository-url> or download the source code and extract it into a project folder.
2. Install dependencies. Navigate to project-directory through cd <project-folder> and `npm install` (Which will install the neccessary node modules (packages, dependencies)
3. `npm start` to run the application locally, Open (http://localhost:3000) to view it in your browser.


# Key Features

### Contact Display with Pagination
1. Displays a list of contacts.
2. Supports pagination to display 5 contacts per page.
3. Allows navigation between next and prev page.

### Search and Filters
1. Filters contacts based on firstname, lastname, etc.
2. Matches properly by checking if any contact contains the search string (case in-sensitive).
3. Includes a clear option to reset filters.

### Contact Selection
1. Select the contact by using the checkbox or click anywhere on a contact item.
2. Clicking again will deselect the selected contact.
3. Only allows user to select one contact at a time.

### Contact Details
1. Displays the details of the contact selected. 
