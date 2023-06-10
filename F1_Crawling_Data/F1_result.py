import os
import pandas as pd
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService

RACE_RESULT_HEADER = ['GRAND PRIX', 'DATE', 'WINNER', 'CAR', 'LAPS', 'TIME']
DRIVER_RESULT_HEADER = ['POS', 'DRIVER', 'NATIONALITY', 'CAR', 'PTS']
TEAM_RESULT_HEADER = ['POS', 'TEAM', 'PTS']
DATA_FOLDER = './data'

os.makedirs(DATA_FOLDER, exist_ok=True)
chrome_options = Options()
chrome_options.add_experimental_option("detach", True) # Keep browser always open
service = ChromeService(executable_path='./chromedriver_file/chromedriver')
driver = webdriver.Chrome(options=chrome_options, service=service)

def base_crawl(driver, url, header, start_year=1950, end_year=2023):
    data_race_not_null = []
    list_data_frame = []
    for year in range(start_year, end_year+1):
        driver.get(url.format(year))
        sleep(3)
        list_race_results_archive = driver.find_element(By.CLASS_NAME, 'resultsarchive-table').find_elements(By.XPATH, '//tr/td')
        for value in list_race_results_archive:
            if len(value.text) > 0:
                data_race_not_null.append(value.text)
        size = len(header)
        data_race = [data_race_not_null[index:index+size] for index in range(0, len(data_race_not_null)-size+1, size)]
        df = pd.DataFrame(data_race, columns=[header])
        df['year'] = year
        list_data_frame.append(df)
        data_race_not_null = []
    data_df = pd.concat(list_data_frame)
    driver.quit()
    return data_df

def crawl_race_result(driver, header, start_year, end_year):
    url = 'https://www.formula1.com/en/results.html/{0}/races.html'
    df = base_crawl(driver, url, header, start_year, end_year)
    df.to_csv(F'{DATA_FOLDER}/race_result.csv', index=False)

def crawl_driver_result(driver, header, start_year, end_year):
    url = 'https://www.formula1.com/en/results.html/{0}/drivers.html'
    df = base_crawl(driver, url, header, start_year, end_year)
    df.to_csv(F'{DATA_FOLDER}/driver_result.csv', index=False)

def crawl_team_result(driver, header, start_year, end_year):
    url = 'https://www.formula1.com/en/results.html/{0}/team.html'
    df = base_crawl(driver, url, header, start_year, end_year)
    df.to_csv(F'{DATA_FOLDER}/team_result.csv', index=False)

# crawl_race_result(driver, RACE_RESULT_HEADER, 1960, 2022)
# crawl_driver_result(driver, DRIVER_RESULT_HEADER, 1960, 2022)
# crawl_team_result(driver, TEAM_RESULT_HEADER, 1960, 2022)
