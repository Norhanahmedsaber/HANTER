# HANTER
[HANTER Website](https://hanter-meer.onrender.com)

This package is HANTER's CLI which can be used to identify vulnerabilities in JavaScript source code by running simple commands.


## Installation
```bash
npm i hanter
```
Initialize hanter.config.js file in your project
```bash
npx hanter init
```
if it already exists and you want to reset it to defaults
```bash
npx hanter init --force
```
Change the config file to suit you need

## Run the Analysis
To run the analysis
```bash
npx hanter
```
Reports should appear in the terminal

You can customize your usage by adding rules to the **rules directory**
## License

[MIT](https://choosealicense.com/licenses/mit/)