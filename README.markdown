# 🚀 הדגמת CI/CD מאובטח: Node.js, Python, Jenkins, SonarQube, Docker ו-Kubernetes

![CI/CD Pipeline](https://img.shields.io/badge/Status-Build%20Passing-brightgreen)
![SonarQube](https://img.shields.io/badge/SonarQube-Quality%20Gate-blue)
![Node.js](https://img.shields.io/badge/Node.js-16.x-green)
![Python](https://img.shields.io/badge/Python-3.x-blue)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Enabled-blue)
![License](https://img.shields.io/badge/License-MIT-green)

**מחבר**: Eidan Vy  
**מאגר GitHub**: [https://github.com/idanvn/pipeline_project.git](https://github.com/idanvn/pipeline_project.git)

ברוכים הבאים לפרויקט הדגמה מתקדם של **CI/CD מאובטח** מאת Eidan Vy, המשלב **Jenkins**, **SonarQube**, **Node.js**, **Python**, **Docker**, ו-**Kubernetes**. פרויקט זה מציג תהליך בנייה אוטומטי, מאובטח ואיכותי, הכולל שליפת קוד, בדיקות, ניתוח קוד סטטי, פריסה ב-Docker ו-Kubernetes, ושליחת התראות ל-Slack. הוא תוכנן להדרכות טכניות, ומדגים ניהול פרויקט מרובה שפות תוך שמירה על סטנדרטים גבוהים של אבטחה, איכות קוד, וסקיילביליות. כולל תיעוד מפורט, דוגמאות קוד, דיאגרמות, ותסריט הדרכה.

## 🎯 מטרות הפרויקט
- **הדגמת CI/CD מאובטח**: pipeline שלם ב-Jenkins עם בדיקות, ניתוח קוד, ופריסה.
- **ניתוח קוד עם SonarQube**: בדיקת איכות ואבטחה עבור Node.js ו-Python.
- **פריסה מודרנית**: בניית תמונות Docker ופריסה ב-Kubernetes.
- **שילוב GitHub**: הפעלה אוטומטית עם Webhooks ותמיכה ב-Pull Requests.
- **שיתוף פעולה**: התראות Slack עם סטטוס וקישור ללוגים.
- **הדרכה מתקדמת**: תיעוד ותסריט הדרכה עם תרחישי כשל.

## 🔍 מדוע SonarQube הוא קריטי?
SonarQube משפר את ה-CI/CD על ידי:
- **אבטחה**: זיהוי פגיעויות כמו XSS, הזרקות SQL, או ספריות לא מאובטחות (OWASP Top 10, CWE).
  - דוגמה: זיהוי `eval` ב-JavaScript או קלט לא מסונן ב-Python.
- **איכות קוד**: זיהוי באגים, Code Smells, וחוסר עקביות.
  - דוגמה: פונקציות ארוכות או משתנים לא בשימוש.
- **תמיכה מרובת שפות**: תומך ב-JavaScript ו-Python.
- **שערי איכות**: מפסיק את ה-pipeline אם הקוד לא עומד בקריטריונים (למשל, כיסוי בדיקות <80%).
- **שילוב GitHub**: ניתוח Pull Requests והערות אוטומטיות.
- **Shift-Left**: זיהוי בעיות מוקדם להפחתת עלויות.

## 📂 מבנה הפרויקט
```
pipeline_project/
├── node-app/
│   ├── package.json          # תלויות Node.js
│   ├── index.js             # API עם Express
│   ├── tests/               # בדיקות Jest
│   ├── sonar-project.properties  # הגדרות SonarQube
│   ├── Dockerfile           # בניית תמונת Docker
│   └── deployment.yaml      # פריסה ב-Kubernetes
├── python-app/
│   ├── requirements.txt      # תלויות Python
│   ├── app.py               # API עם Flask
│   ├── tests/               # בדיקות pytest
│   ├── sonar-project.properties  # הגדרות SonarQube
│   ├── Dockerfile           # בניית תמונת Docker
│   └── deployment.yaml      # פריסה ב-Kubernetes
├── Jenkinsfile              # Pipeline של Jenkins
└── README.md                # תיעוד זה
```

### תיאור תתי-הפרויקטים
1. **Node.js (`node-app`)**:
   - API עם Express (`GET /`, `POST /data`).
   - בדיקות Jest, דוחות כיסוי (lcov).
   - SonarQube לניתוח JavaScript.
   - Docker ו-Kubernetes לפריסה.
2. **Python (`python-app`)**:
   - API עם Flask (`GET /`, `POST /data`).
   - בדיקות pytest, דוחות כיסוי (XML).
   - SonarQube לניתוח Python.
   - Docker ו-Kubernetes לפריסה.

## 🛠️ דרישות מקדימות
| רכיב          | דרישות                                                                 |
|---------------|------------------------------------------------------------------------|
| **Jenkins**   | גרסה 2.x+, פלאגינים: Git, NodeJS, Python, SonarQube Scanner, Slack Notification, Pipeline Utility Steps. |
| **SonarQube** | גרסה 9.x/10.x, זמין ב-`http://sonarqube-server:9000`.                  |
| **GitHub**    | מאגר: [https://github.com/idanvn/pipeline_project.git](https://github.com/idanvn/pipeline_project.git), טוקן עם `repo`. |
| **Slack**     | Webhook להתראות.                                                     |
| **Docker**    | Docker Engine לבניית תמונות.                                         |
| **Kubernetes**| קלאסomethane: minikube start
kubectl apply -f node-app/deployment.yaml
kubectl apply -f python-app/deployment.yaml
```

## 🚀 הרצת ה-Pipeline
1. **עבודה ב-Jenkins**:
   - צור Pipeline, קשר ל-`Jenkinsfile` עם `github-token`.
2. **הפעלה**:
   - הרץ ידנית ("Build Now") או המתן לאירוע GitHub.
3. **מעקב**:
   - לוגים: Jenkins Console Output.
   - תוצאות: SonarQube Dashboard.
   - התראות: Slack.
   - פריסה: בדוק `kubectl get pods`.

## 📊 דיאגרמת Pipeline
```mermaid
graph TD
    A[Checkout from GitHub] --> B[Node.js: Install & Test]
    A --> C[Python: Install & Test]
    B --> D[SonarQube Analysis: Node.js]
    C --> E[SonarQube Analysis: Python]
    D --> F[Quality Gate]
    E --> F
    F --> G[Build Docker Images]
    G --> H[Deploy to Kubernetes]
    H --> I[Slack Notifications]
```

## 📈 שלבי ה-Pipeline
| שלב                     | תיאור                                                                 |
|-------------------------|----------------------------------------------------------------------|
| **Checkout**            | שליפת קוד מ-[https://github.com/idanvn/pipeline_project.git](https://github.com/idanvn/pipeline_project.git). |
| **Node.js: Install and Test** | `npm install`, בדיקות Jest, דוחות כיסוי (lcov).                     |
| **Python: Install and Test** | `pip install`, בדיקות pytest, דוחות כיסוי (XML).                   |
| **SonarQube Analysis: Node.js** | ניתוח JavaScript (באגים, אבטחה, כיסוי).                          |
| **SonarQube Analysis: Python** | ניתוח Python (באגים, אבטחה, כיסוי).                              |
| **Quality Gate**        | כשלון אם הקריטריונים לא מתקיימים.                                  |
| **Build Docker Images** | בניית תמונות Docker עבור Node.js ו-Python.                          |
| **Deploy to Kubernetes**| פריסת תמונות עם `kubectl apply`.                                    |
| **Slack Notifications** | התראה (ירוק/אדום) עם קישור ללוגים.                                |

## 💻 דוגמאות קוד

### Node.js (`node-app/index.js`)
```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.post('/data', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.json({ message: `Received: ${name}` });
});

if (!module.parent) {
  app.listen(3000, () => {
    console.log('Node.js app running on port 3000');
  });
}

module.exports = app;
```

### Node.js Test (`node-app/tests/app.test.js`)
```javascript
const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

describe('Node.js API', () => {
  test('GET / returns hello message', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from Node.js!');
  });

  test('POST /data with valid input', async () => {
    const response = await request.post('/data').send({ name: 'Test' });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Received: Test');
  });

  test('POST /data without name returns 400', async () => {
    const response = await request.post('/data').send({});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Name is required');
  });
});
```

### Python (`python-app/app.py`)
```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello from Python!'

@app.route('/data', methods=['POST'])
def data():
    data = request.get_json()
    if not data or 'name' not in data:
        return jsonify({'error': 'Name is required'}), 400
    return jsonify({'message': f'Received: {data["name"]}'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

### Python Test (`python-app/tests/test_app.py`)
```python
import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_hello(client):
    response = client.get('/')
    assert response.status_code == 200
    assert response.data.decode('utf-8') == 'Hello from Python!'

def test_data_valid_input(client):
    response = client.post('/data', json={'name': 'Test'})
    assert response.status_code == 200
    assert response.json['message'] == 'Received: Test'

def test_data_missing_name(client):
    response = client.post('/data', json={})
    assert response.status_code == 400
    assert response.json['error'] == 'Name is required'
```

## 🔒 תכונות אבטחה
- **אחסון סודות**: טוקנים מאוחסנים כ-Credentials ב-Jenkins.
- **שערי איכות**: מפסיקים את ה-pipeline אם יש פגיעויות (למשל, XSS).
- **בדיקות**: דוחות כיסוי (Jest, pytest) משולבים ב-SonarQube.
- **Kubernetes**: Liveness Probes וגבולות משאבים ליציבות.

## 🧑‍🏫 תסריט הדרכה
1. **הצגת הפרויקט**:
   - הסבר מבנה המאגר: [https://github.com/idanvn/pipeline_project.git](https://github.com/idanvn/pipeline_project.git).
   - הדגש תפקיד Docker/Kubernetes.
2. **הרצת Pipeline**:
   - הרץ ב-Jenkins, הצג לוגים.
   - הדגם כשל Quality Gate (למשל, הוסף `eval` ב-JavaScript).
3. **SonarQube**:
   - הצג Dashboard: Issues, Security Hotspots, Coverage.
   - תקן פגיעות והראה שיפור.
4. **Docker ו-Kubernetes**:
   - בנה תמונות: `docker build`.
   - פרוס: `kubectl apply`.
   - בדוק: `kubectl get pods`, `kubectl get services`.
5. **Slack**:
   - הצג התראות עם קישור ללוגים.
6. **GitHub**:
   - הדגם Webhook וניתוח Pull Requests.

## 🚀 הרחבות
1. **GitHub Actions**:
   ```yaml
   name: CI/CD with SonarQube and Docker
   on: [push, pull_request]
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v3
       - name: SonarQube Scan (Node.js)
         uses: sonarsource/sonarqube-scan-action@v2
         env:
           SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
           SONAR_HOST_URL: http://sonarqube-server:9000
         with:
           projectBaseDir: node-app
       - name: SonarQube Scan (Python)
         uses: sonarsource/sonarqube-scan-action@v2
         env:
           SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
           SONAR_HOST_URL: http://sonarqube-server:9000
         with:
           projectBaseDir: python-app
       - name: Build Docker Images
         run: |
           docker build -t node-app:latest ./node-app
           docker build -t python-app:latest ./python-app
   ```
2. **ניטור**: שלב Prometheus/Grafana.
3. **בדיקות**: הוסף בדיקות אבטחה עם OWASP ZAP.

## 🛠️ פתרון בעיות
| בעיה                              | פתרון                                                                 |
|-----------------------------------|----------------------------------------------------------------------|
| **שגיאת גישה למאגר**            | בדוק `github-token` והרשאות `repo`.                                 |
| **SonarQube לא זמין**            | בדוק כתובת וטוקן; הפעל מחדש: `docker restart sonarqube`.           |
| **בדיקות נכשלות**               | בדוק קבצי בדיקות ותלויות.                                          |
| **Docker Build נכשל**            | ודא שה-`Dockerfile` תקין ו-Docker פועל.                             |
| **Kubernetes פריסה נכשלת**      | בדוק `kubectl get pods` וודא שהקלאסטר זמין.                        |

## 🤝 תרומות
פתח Issue או Pull Request ב-[https://github.com/idanvn/pipeline_project.git](https://github.com/idanvn/pipeline_project.git). תרומות יתקבלו בברכה!

## 📜 רישיון
מופץ תחת רישיון MIT.

---

*נבנה על ידי Eidan Vy עבור הדרכות CI/CD מתקדמות, עם דגש על אבטחה, איכות קוד, ופריסה מודרנית.*