# Part 1(Python) - Preapre data

## Step to run code for crawling data
 - ### Step 1: Set up a virtual environment
   - #### Install a virtual environment: `pip install virtualenv`
   - #### Create a project: `mkdir <project_name>`
   - #### Access to the project: `cd <project_name>`
   - #### Run the following command to create the Virtual Environment: `python -m venv env`
 - ### Step 2: Access to the Virtual Environment
   - #### `source env/bin/activate`
 - ### Step 3: Install the Python libraries which are defined in the requirements.txt file.
   - #### `pip install -r requirements.txt`
 - ### Step 4: Prepare the Chrome Drive.
   - #### Go to the https://sites.google.com/a/chromium.org/chromedriver/downloads for getting correct the Chrome Drive file that belongs to your Chrome version.
   - #### Extract it then move the file to the **F1_Crawling_Data/chromedriver_file** folder.
 - ### Step 5: Run the following command to start crawling data.
   - #### `python F1_result.py`    

## NOTE:
  - ### Make sure that your computer is installed with Python and Pip.
  - ### After the crawling data is completed the result will be saved in the **F1_Crawling_Data/data** folder.
  - ### To save time so I just crawl the data from **1960-2022**.
  - ### I can't crawl the data in multiple parts at once, please remove the comments part by part in the **F1_result.py** file from line **54-56** to do the data crawling.
