---
title: "Stock Market Predictor"
description: "A machine learning-powered stock prediction model built with Python and scikit-learn"
pubDate: "2025-04-30"
heroImage: "/StockPredictor-portfolio.png"
---
# Stock Market Predictor

*A machine learning-powered stock prediction model built with Python and scikit-learn*

*Published: April 30, 2025*

This project uses **historical stock data** to predict market trends using **machine learning models**. It’s a practical exploration of **time series forecasting**, **financial analysis**, and **Python-based prediction pipelines**.

---

## 📎 GitHub Repository

🔗 [View the source code on GitHub](https://github.com/graceieg/StockPredictor)

---

## 📈 Overview

The script loads S&P 500 index data, processes it into a suitable format, and applies a regression model to forecast future stock movements.

This program uses machine learning to predict whether the S&P 500 index will go up or down on the next trading day. It:

1. Fetches historical S&P 500 data from Yahoo Finance
2. Creates predictive features based on price patterns and trends
3. Trains a Random Forest Classifier model
4. Evaluates the model's performance on recent data
5. Provides a prediction for the next trading day

---

## 🧠 Technologies Used

- **Python 3**
- **pandas** & **NumPy** for data handling  
- **scikit-learn** for machine learning  
- **Matplotlib** for plotting  
- **yfinance** for stock data

---

## Features

- Data Preparation: Creates technical features based on various time horizons (2, 5, 60, 250, and 1000 days)
- Model Training: Uses Random Forest with optimized parameters
- Backtesting: Tests model performance across historical data
- Visualization: Creates plots of predictions vs actual outcomes
- Feature Importance: Shows which factors most influence predictions
- Next-Day Prediction: Forecasts whether the market will go up or down on the next trading day

---

## ⚙️ How It Works

The model outputs:

Prediction (UP or DOWN) for the next trading day
Probability of the market going up
Precision score (percentage of "UP" predictions that were correct)

Command-line options:

- start: Start date for data (YYYY-MM-DD)
- end: End date for data (defaults to today)
- test-size: Number of recent days to use for testing
- threshold: Probability threshold for predictions (default 0.6)
- backtest: Run backtesting on historical data
- backtest-start: Sample index to start backtesting from
- backtest-step: Step size for backtesting

---

## 🚀 Getting Started

### 📂 Folder Setup
<pre><code>
├── stock_predictor.ipynb
├── model.py
├── preprocess.py
└── predict.py
</code></pre>

---

## Important Notes

1. This tool is for educational purposes only and should not be used for actual investment decisions
2. Past performance does not guarantee future results
3. The stock market is influenced by many factors not captured in this model
4. Always consult with a qualified financial advisor before making investment decisions

---
