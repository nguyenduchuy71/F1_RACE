import pandas as pd
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService

RACE_RESULT_HEADER = ['GRAND PRIX', 'DATE', 'WINNER', 'CAR', 'LAPS', 'TIME']
DRIVER_RESULT_HEADER = ['POS', 'DRIVER', 'NATIONALITY', 'CAR', 'PTS']
TEAM_RESULT_HEADER = ['POS', 'TEAM', 'PTS']

chrome_options = Options()
chrome_options.add_experimental_option("detach", True) # Keep browser always open
service = ChromeService(executable_path='./chromedriver_linux64/chromedriver')
driver = webdriver.Chrome(options=chrome_options, service=service)

def crawl_race_result(driver):
    url = "https://www.formula1.com/en/results.html/2022/races.html"
    driver.get(url)
    action =  ActionChains(driver)
    startElement = driver.find_element(By.ID, 'truste-consent-button')
    action.click(on_element=startElement).perform()
    sleep(3)
    list_race_results_archive = driver.find_element(By.CLASS_NAME, 'resultsarchive-table').find_elements(By.XPATH, '//tr/td')
    data_race_not_null = []
    for value in list_race_results_archive:
        if len(value.text) > 0:
            data_race_not_null.append(value.text)
    size = len(RACE_RESULT_HEADER)
    data_race = [data_race_not_null[index:index+size] for index in range(0, len(data_race_not_null)-size+1, size)]
    df = pd.DataFrame(data_race, columns=[RACE_RESULT_HEADER])
    print(df)

def crawl_driver_result(driver):
    url = "https://www.formula1.com/en/results.html/2022/drivers.html"
    driver.get(url)
    action = ActionChains(driver)
    startElement = driver.find_element(By.ID, 'truste-consent-button')
    action.click(on_element=startElement).perform()
    sleep(3)
    list_race_results_archive = driver.find_element(By.CLASS_NAME, 'resultsarchive-table').find_elements(By.XPATH, '//tr/td')
    data_race_not_null = []
    for value in list_race_results_archive:
        if len(value.text) > 0:
            data_race_not_null.append(value.text)
    size = len(DRIVER_RESULT_HEADER)
    data_race = [data_race_not_null[index:index+size] for index in range(0, len(data_race_not_null)-size+1, size)]
    df = pd.DataFrame(data_race, columns=[DRIVER_RESULT_HEADER])

def crawl_team_result(driver):
    url = "https://www.formula1.com/en/results.html/2022/team.html"
    driver.get(url)
    action = ActionChains(driver)
    startElement = driver.find_element(By.ID, 'truste-consent-button')
    action.click(on_element=startElement).perform()
    sleep(3)
    list_race_results_archive = driver.find_element(By.CLASS_NAME, 'resultsarchive-table').find_elements(By.XPATH, '//tr/td')
    data_race_not_null = []
    for value in list_race_results_archive:
        if len(value.text) > 0:
            data_race_not_null.append(value.text)
    size = len(TEAM_RESULT_HEADER)
    data_race = [data_race_not_null[index:index+size] for index in range(0, len(data_race_not_null)-size+1, size)]
    df = pd.DataFrame(data_race, columns=[TEAM_RESULT_HEADER])
