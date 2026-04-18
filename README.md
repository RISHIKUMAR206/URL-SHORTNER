# URL Shortener (Microservices Architecture)

A URL Shortener web application built using a microservices-based architecture with Docker.

---

## Overview

This project allows users to convert long URLs into short links and redirects them efficiently. It demonstrates backend service communication using an API Gateway and multiple microservices.

---

## Features

* Shorten long URLs
* Redirect to original URL
* Supports all types of links (Google, YouTube, etc.)
* Separate analytics service for tracking
* Containerized using Docker

---

## Architecture

Frontend → API Gateway → URL Service → Analytics Service

---

## Tech Stack

* Node.js
* Express.js
* Docker and Docker Compose
* HTML and Tailwind CSS

---

## Project Structure

url-shortener/

* frontend/
* gateway/
* url-service/
* analytics-service/
* docker-compose.yml

---

## How to Run

```bash
git clone https://github.com/RISHIKUMAR206/URL-SHORTNER.git
cd url-shortener
docker-compose up --build
```

---

## Access

Frontend:
http://localhost:3000

---

## Testing

1. Enter a URL (e.g., Google or YouTube)
2. Click “Shorten”
3. Click the generated short link
4. Verify redirection

---

## Analytics

http://localhost:5002/stats

---

## Notes

Currently, the project uses in-memory storage. It can be extended by integrating a database such as MongoDB to achieve a full three-tier architecture.

---

## Author

Rishi Kumar
GitHub: https://github.com/RISHIKUMAR206

---

## Conclusion

This project demonstrates the implementation of microservices architecture, API Gateway pattern, and containerized deployment using Docker.
