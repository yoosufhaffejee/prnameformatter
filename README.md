# PR Name Formatter

A simple web application that formats pull request (PR) names based on a branch name input. It allows users to override the PR type and ensures consistency with a predefined naming convention.

## 🚀 Features
- **Automatic PR Name Formatting**: Extracts details from branch names to generate a formatted PR title.
- **Override PR Type**: Users can manually select a PR type.
- **Deselectable Selection**: Clicking an already selected type will unselect it.
- **Branch Naming Convention Display**: A clear guide on branch name structure.
- **User-Friendly UI**: Simple and intuitive design with Bootstrap styling.

## 📌 Naming Conventions
### **Branch Name Format**
```
[Name]/[Type]/[IssueNo]-[Description]-[BranchName]
```
**Example:**
```
Yoosuf/bug/1234-ServerSideFix-UAT
```

### **PR Name Format**
```
[Type] Short description (#IssueNumber)
```
**Example:**
```
[Bugfix] Server Side Fix (#1234)
```

## 🛠️ Tech Stack
- **HTML** / **CSS** / **JavaScript**
- **Bootstrap** (for styling)
- **FontAwesome** (icons)

## 🔧 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pr-name-formatter.git
   ```
2. Open `index.html` in a browser.

## 🎯 Usage
1. Enter your branch name in the input field.
2. The PR name is generated automatically.
3. Optionally, select a different PR type.
4. Click **Generate** to update the PR name field.

## 📷 Screenshot
![App Screenshot](https://github.com/yoosufhaffejee/prnameformatter/blob/main/Screenshot.png)

## 🤝 Contributing
Feel free to fork and submit pull requests! Suggestions and improvements are welcome.

## 📜 License
This project is licensed under the MIT License.

## ✨ Acknowledgments
- Inspired by the need for consistent PR naming conventions.
- Special thanks to all contributors! 🚀

