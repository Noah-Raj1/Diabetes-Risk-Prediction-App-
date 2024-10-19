# Diabetes Risk Prediction App



## Overview
The **Diabetes Risk Prediction App** is an AI-powered application designed to provide a personalized diabetes risk assessment based on user-provided information such as age, weight, height, lifestyle habits, and more. This tool aims to help individuals become more proactive about their health by offering insights and actionable recommendations based on credible datasets from the **Centers for Disease Control and Prevention (CDC)** and the **World Health Organization (WHO)**.

The app calculates a risk score and classifies the user’s risk level as low, moderate, or high. It provides tailored recommendations based on the user's score to encourage healthy lifestyle choices and, when necessary, guide them to consult with healthcare professionals.

## Key Features
- **Personalized Risk Assessment**: Users can input their details like age, weight, height, ethnicity, smoking status, physical activity level, and family history to receive a customized risk score.
- **Data-Driven Insights**: Utilizes publicly available datasets from the CDC and WHO to make evidence-based assessments.
- **Responsive User Interface**: Designed with a clean, modern, and mobile-responsive layout to ensure ease of use on multiple devices.
- **Actionable Recommendations**: Provides detailed next steps based on the user's risk level, aligning with CDC and WHO guidelines.
- **Interactive Elements**: Includes interactive modal windows for additional information and risk mitigation steps.
- **Secure and Scalable**: Uses front-end validation to ensure data consistency and prevent errors during submission.

## Technologies Used
- **React.js**: For building a responsive, dynamic user interface.
- **JavaScript (ES6)**: Core programming language for app functionality.
- **HTML5 & CSS3**: For structuring and styling the web application.
- **Node.js & npm**: For managing dependencies and running the project.
- **Axios**: For handling API calls (if needed in future updates).
- **CSS Grid & Flexbox**: For a flexible and modern layout.
- **Public Datasets**: CDC and WHO open data for calculating risk levels.

## Datasets Used
The application leverages statistical data and health insights from:
- **CDC National Diabetes Statistics Report**: Includes details on diabetes prevalence, incidence, risk factors, and complications across various demographics.
- **WHO Diabetes Data**: Provides global insights into diabetes trends, risks, and guidelines for prevention and management.

## How It Works
1. **User Inputs**: The user provides personal details like age, weight (in pounds), height (in feet and inches), gender, ethnicity, lifestyle habits, smoking status, and family history of diabetes.
2. **Risk Calculation**: The app processes these inputs using a formula that factors in age, BMI, lifestyle choices, and family history. A risk score is computed based on these inputs.
3. **Risk Categorization**: The app classifies the risk as low, moderate, or high and displays a message that suggests the next steps for health management.
4. **Recommendations**: The app provides tailored health tips and guidance based on the calculated risk score, in alignment with the CDC and WHO guidelines.
5. **Data Source References**: The app provides external links to the WHO and CDC webpages for users to explore more information on diabetes and its management.
