Ah! Got it this time — you want the **full content literally written as Markdown** using `#`, `##`, `###`, `---`, code blocks, and tables — exactly like a GitHub README. No emojis, no extra formatting, just proper Markdown syntax. Here’s the full conversion:

````markdown
# PetNest API & Android App

## Android App

**GitHub Repository:**  
[https://github.com/ST10375530/PROG7314-CODE](https://github.com/ST10375530/PROG7314-CODE)

The main README file and YouTube demo video can be found in the repository above.

---

## API Introduction

The PetNest API is designed using **MongoDB**, **Express**, and **Node.js** — essentially a MERN stack without the frontend.  
It is hosted on **Render** and performs the following key functions:

- Retrieve all medications  
- Find specific medications  
- Identify potential pet sicknesses  
- Provide dosage recommendations for a specific pet and medication  

---

## Getting Started

To begin, we created a folder for our API code and ran several setup commands in **Visual Studio Code** (FreeCodeCamp, 2024).

### Commands Used

```bash
npm i nodemon -D
````

Installs **Nodemon** as a development dependency to dynamically run the code.

```bash
npm i express@4.18.2
```

Installs **Express**, used for routing, managing the server, and middleware support.
Version **4.18.2** was chosen as version **5+** is still in beta.

```bash
npm i mongoose
```

Installs **Mongoose**, enabling communication with the **MongoDB Atlas** database.

```bash
npm i helmet
```

Installs **Helmet** for enhancing security via middleware.

```bash
npm i cors
```

Installs **CORS** — mainly used to allow frontend-backend communication in full MERN stacks (not currently in use).

```bash
npm i dotenv
```

Installs **Dotenv** to load environment variables from a `.env` file.

---

## MongoDB

The API uses **MongoDB** as its database (FreeCodeCamp, 2024).

### Important Note

All data used in the database is for **educational purposes only**.
We have **not consulted veterinarians or medical experts** for the medication/sickness information.
Sources were obtained online and may be inaccurate.
Credit for all medical data goes to **MSD Manual**.

---

## Medication Data (MSD Manual, 2025)

| Medication    | Class                       | Dosage          | Frequency           | Prescription Required |
| ------------- | --------------------------- | --------------- | ------------------- | --------------------- |
| Gentamicin    | Antibiotic (Aminoglycoside) | 5–14 mg/kg      | Once daily          | Yes                   |
| Ampicillin    | Antibiotic (Beta-lactam)    | 6.6–25 mg/kg    | Every 6 to 12 hrs   | Yes                   |
| Buprenorphine | Opioid analgesic            | 0.01–0.03 mg/kg | Every 6 to 12 hrs   | Yes                   |
| Alfaxalone    | Injectable anesthetic       | 0.5–3.5 mg/kg   | Single use          | Yes                   |
| Dexamethasone | Corticosteroid              | 0.25–1 mg/kg    | Once a day or taper | Yes                   |

**Disclaimer:**
The table above contains information sourced directly from the **MSD Manual**.
Full credit to their team — none of this data is original work.

---

## Models

### Sickness Model

Stores information regarding sicknesses.

| Field       | Type            | Description                                           |
| ----------- | --------------- | ----------------------------------------------------- |
| id          | Number (unique) | Unique identifier                                     |
| name        | String          | Sickness name                                         |
| description | String          | Description of sickness                               |
| symptoms    | String          | Comma-separated list of symptoms (ComputerHope, 2025) |

### Medicine Model

Stores medication details.

| Field                | Type            | Description                          |
| -------------------- | --------------- | ------------------------------------ |
| id                   | Number (unique) | Unique identifier                    |
| name                 | String          | Medication name                      |
| description          | String          | Medication description               |
| conditionsTreated    | String          | Conditions treated                   |
| dosageMin            | Number          | Minimum dosage                       |
| dosageMax            | Number          | Maximum dosage                       |
| dosageUnit           | String          | Unit of dosage (e.g., mg/kg)         |
| frequency            | String          | How often medication should be given |
| warnings             | String          | Any important warnings               |
| prescriptionRequired | Boolean         | Whether prescription is required     |

---

## Routes

The **Routes** folder defines which **HTTP method** (`GET`, `POST`, `DELETE`, etc.) is used and how the information is processed (FreeCodeCamp, 2024).

---

## Semantic Search

Originally, we wanted to implement a **semantic search** for different terms of potential symptoms — for example, “high temperature” being the same as “fever” — to improve search accuracy for medications or sicknesses (GoogleCloud, 2025).

However, after further research, we realized this would not be possible without using an **AI API** such as **OpenAI**, **Gemini**, or **Grok** (GoogleCloud, 2025).
An alternative was to manually map different terms, but this would not handle **spelling or phrasing variations** effectively.

---

## Medication Finder

The **Medication Finder** takes the user’s input and searches for medications in the database containing that sequence of letters.
For example, entering `"A"` would return results like **Gentamicin**, **Ampicillin**, and **Dexamethasone**.

This search is implemented using **regular expressions (regex)** with the MongoDB `find()` method (MongoDB, 2025).

---

## Sickness Identifier

The **Sickness Identification System** has been left out for now due to the **semantic search** proving more difficult than expected.

---

## Dosage Recommender (Calculator)

The **Dosage Recommender** works directly with the medication data.
It takes the medication name, retrieves its details from the database, and calculates the dosage based on the **pet’s weight (in kg)**.
All dosage values in the database are stored in **mg/kg** format.

---

## Hosted with Render

### Introduction

Hosting on **Render** was straightforward.
We provided the public API GitHub repository, set up environment variables, and Render automatically ran the build with `npm install`.
The start command is:

```bash
npm start
```

The only environment variable required is:

```bash
MONGO_URL
```

This stores the MongoDB connection string.

### Important Render Issue

Render spins down the API after 50 seconds of inactivity, which may cause a timeout error in the Android application.
To avoid this, **please run the Render website before making a request** through the Android app.

**API URL:**
[https://petnest-api.onrender.com](https://petnest-api.onrender.com)

**API GitHub Repository:**
[https://github.com/VC-ST10405508/Prog7314_PetNest_API](https://github.com/VC-ST10405508/Prog7314_PetNest_API)

---

## Reference List

ComputerHope. 2025. *Delimiter, 9 July 2025.* [Online]. Available at: [https://www.computerhope.com/jargon/d/delimite.htm](https://www.computerhope.com/jargon/d/delimite.htm) [Accessed 6 October 2025].
freecodecamp.org. 2024. *MERN Stack Tutorial with Deployment – Beginner's Course.* [video online] Available at: [https://www.youtube.com/watch?v=O3BUHwfHf84](https://www.youtube.com/watch?v=O3BUHwfHf84) [Accessed 5 October 2025].
GoogleCloud. 2025. *What is semantic search?* [Online]. Available at: [https://cloud.google.com/discover/what-is-semantic-search?hl=en](https://cloud.google.com/discover/what-is-semantic-search?hl=en) [Accessed 6 October 2025].
MongoDB. 2025. *$regex.* [Online]. Available at: [https://www.mongodb.com/docs/manual/reference/operator/query/regex/](https://www.mongodb.com/docs/manual/reference/operator/query/regex/) [Accessed 6 October 2025].
MSD Manual. 2025. *Dosages of Penicillins.* [Online]. Available at: [https://www.msdvetmanual.com/multimedia/table/dosages-of-penicillins](https://www.msdvetmanual.com/multimedia/table/dosages-of-penicillins) [Accessed 6 October 2025].
MSD Manual. 2025. *Selected Analgesics for Use in Dogs.* [Online]. Available at: [https://www.msdvetmanual.com/multimedia/table/selected-analgesics-for-use-in-dogs](https://www.msdvetmanual.com/multimedia/table/selected-analgesics-for-use-in-dogs) [Accessed 6 October 2025].

```

---

If you want, I can also **compress this into a ready-to-paste `README.md` file** that you can drop straight into GitHub.  

Do you want me to do that?
```
