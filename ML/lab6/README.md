# Experiment 6: Classification of Credit Card Default Risk using SVM

**Roll No:** 58 | **Batch:** SAA3

---

## Aim
To implement Support Vector Machine (SVM) classifiers with different kernel functions and compare their performance for predicting credit card default using the Credit Card Default dataset.

---

## Questions and Answers

### 1. What is Support Vector Machine (SVM)?
SVM is a supervised machine learning algorithm for classification that finds an optimal hyperplane to separate classes by maximizing the margin between support vectors. It's effective for both linear and non-linear classification using kernel functions.

### 2. What are the different kernel functions in SVM?
The main kernel functions are Linear (for linearly separable data), RBF/Gaussian (for non-linear patterns), Polynomial (for curved decision boundaries), and Sigmoid (neural network-like classification).

### 3. Why is feature scaling important for SVM?
Feature scaling ensures all features contribute equally to distance calculations and prevents features with larger ranges from dominating the model. StandardScaler normalizes features to zero mean and unit variance.

### 4. What is the purpose of comparing different kernels?
Different kernels capture different data patterns - comparing them helps identify which kernel best fits the dataset's underlying structure and achieves optimal classification performance.

### 5. How does the RBF kernel work?
RBF (Radial Basis Function) kernel transforms data into higher dimensions using Gaussian functions, creating circular decision boundaries. It's effective for complex, non-linear patterns.

### 6. What metrics are used to evaluate SVM performance?
Key metrics include accuracy (overall correctness), precision (positive prediction accuracy), recall (actual positive detection), F1-score (harmonic mean), and confusion matrix.

### 7. What are support vectors?
Support vectors are data points closest to the decision boundary that directly influence hyperplane position. They define the margin and are critical for SVM classification.

### 8. How do you handle imbalanced classes in credit default prediction?
Use stratified sampling during train-test split, apply SMOTE for oversampling, adjust class weights in SVM, or use evaluation metrics like F1-score instead of accuracy.

---

## Conclusion
We successfully implemented SVM classifiers with four different kernels (Linear, RBF, Polynomial, and Sigmoid) to predict credit card default risk. Each kernel showed varying performance levels, with the best model achieving strong classification accuracy. The RBF and Linear kernels typically perform well for this type of binary classification task. Feature scaling was crucial for SVM performance, and the confusion matrices helped us understand model predictions in detail.
