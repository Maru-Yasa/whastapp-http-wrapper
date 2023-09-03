<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>whastapp-http-wrapper
</h1>
<h3>◦ Seamless communication made simple!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/Maru-Yasa/whastapp-http-wrapper.git?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/Maru-Yasa/whastapp-http-wrapper.git?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/Maru-Yasa/whastapp-http-wrapper.git?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/Maru-Yasa/whastapp-http-wrapper.git?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The core purpose of the project is to provide a HTTP wrapper for the WhatsApp messaging platform. It allows users to send WhatsApp messages through a RESTful API, providing a simplified and flexible way to integrate WhatsApp messaging into their applications. The project's value proposition lies in offering developers an easy-to-use solution to incorporate WhatsApp functionality dynamically and seamlessly into their projects.

---

## ⚙️ Features

| Feature                | Description                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| **⚙️ Architecture**     | The system follows a server-side architecture using Express.js. It utilizes routers and middleware to handle incoming requests and set up routes for various functionalities.                                                                                                                                              |
| **📖 Documentation**    | Documentation seems to be lacking or incomplete. It would be beneficial to have more detailed explanations of each component's functionalities and usage.                         |
| **🔗 Dependencies**    | The system relies on Express.js for server functionality and routing, dotenv for environment variables, consola for logging, express-validator for request validation, and qr-image for generating QR codes. It also uses Axios for making HTTP requests. |
| **🧩 Modularity**      | The codebase is well-structured, with separate files for different functionalities like routes, hooks, and utils. This approach allows for modular development and easy handling of codebase components.                         |
| **✔️ Testing**          | No information is available about testing strategies or tools. Integration and unit tests should be added to ensure the reliability of the codebase.        |
| **⚡️ Performance**      | Performance can be analyzed with a dedicated benchmark. However, based on the implementation, the codebase appears to be well-structured and should run efficiently with good resource usage.            |
| **🔐 Security**        | The codebase lacks explicit security measures. Additional security practices like input validation and authentication should be implemented to enhance data protection and prevent unauthorized access.     |
| **🔀 Version Control** | The Git repository allows for version control and collaboration between developers. However, no information is available regarding the specific version control strategies or tools used.      |
| **🔌 Integrations**    | The system primarily interacts with WhatsApp, utilizing the WhatsApp web client. It also interacts with external libraries for generating QR codes and making HTTP requests.                        |
| **📶 Scalability**     | The system's scalability depends on the underlying infrastructure and the chosen hosting solution. Express.js is capable of handling increased traffic, but specific scaling techniques or strategies are not outlined in the codebase. |


---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                    | Summary                                                                                                                                                                   |
| ---                                                                                     | ---                                                                                                                                                                       |
| [config.js](https://github.com/Maru-Yasa/whastapp-http-wrapper.git/blob/main/config.js) | This code exports the PORT and WEB_HOOK variables, reading them from dotenv configuration file or using default values.                                                   |
| [app.js](https://github.com/Maru-Yasa/whastapp-http-wrapper.git/blob/main/app.js)       | This code sets up an Express server with body-parser middleware. It also imports and uses a router, sets up a message hook, and listens for requests on a specified port. |

</details>

<details closed><summary>Hooks</summary>

| File                                                                                            | Summary                                                                                                                                                                                                                                                                                                              |
| ---                                                                                             | ---                                                                                                                                                                                                                                                                                                                  |
| [index.js](https://github.com/Maru-Yasa/whastapp-http-wrapper.git/blob/main/hooks/index.js)     | This code exports the messageHook function which can be used to handle messages in an application or system.                                                                                                                                                                                                         |
| [message.js](https://github.com/Maru-Yasa/whastapp-http-wrapper.git/blob/main/hooks/message.js) | This code sets up a message event listener using the `Client` object. When a message is received, it sends a POST request to a webhook endpoint with the message body. It logs the success or failure of the request using the `consola` package. If the request fails with an `AxiosError`, it logs the error code. |

</details>

<details closed><summary>Routes</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [index.js](https://github.com/Maru-Yasa/whastapp-http-wrapper.git/blob/main/routes/index.js)             | This code sets up routes for QR generation and sending messages using express. It imports the QR route and send message route, then uses them to handle corresponding requests. The router is exported for use in the main application.                                                                                                                                                                                      |
| [qr.js](https://github.com/Maru-Yasa/whastapp-http-wrapper.git/blob/main/routes/qr.js)                   | This code defines a router that handles GET requests and generates a QR code image when a request is made. It listens for a QR code event emitted by a client, then uses a QR code generator to create the image. If no QR code is available, it sends an empty response.                                                                                                                                                    |
| [sendMessage.js](https://github.com/Maru-Yasa/whastapp-http-wrapper.git/blob/main/routes/sendMessage.js) | This code exports a router module that handles HTTP POST requests to send messages using a custom messaging client. It validates the'to' and'message' fields in the request body using express-validator. If successful, it calls the sendMessage function from the client module to send the message to the specified contact. It returns a JSON response indicating the success or failure of the message sending process. |

</details>

<details closed><summary>Utils</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                                                                                               |
| ---                                                                                           | ---                                                                                                                                                                                                                                                                                                                   |
| [client.js](https://github.com/Maru-Yasa/whastapp-http-wrapper.git/blob/main/utils/client.js) | The code initializes a WhatsApp web client and handles authentication and loading events. It uses the consola library for logging. The client emits'authenticated' and'ready' events when the authentication and initialization processes are complete, respectively. The client object is exported for external use. |
| [QR.js](https://github.com/Maru-Yasa/whastapp-http-wrapper.git/blob/main/utils/QR.js)         | The code exports a function called "generateQr" that uses the "qr-image" package to generate QR codes.                                                                                                                                                                                                                |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

### 📦 Installation

1. Clone the whastapp-http-wrapper repository:
```sh
git clone https://github.com/Maru-Yasa/whastapp-http-wrapper.git
```

2. Change to the project directory:
```sh
cd whastapp-http-wrapper
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using whastapp-http-wrapper

```sh
node app.js
```

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
