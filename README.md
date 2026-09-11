# automation-engineering-project

An End-to-end test automation suite built with [Cypress](https://www.cypress.io/)

# pre-requisite

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/MargauxKyliec/automation-cypress-project.git
   cd automation-cypress-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables by creating a `cypress.env.json` file in the project root:
   ```json
   {
     "username": "your-username",
     "password": "your-password"
   }
   ```

## Running Tests

Open the Cypress Test Runner (interactive mode):

```bash
npx cypress open
```
