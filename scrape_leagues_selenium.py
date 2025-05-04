from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time
import csv
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# LOGIN INFO — fill in your real email & password here
EMAIL = "Jasmine_tea"
PASSWORD = "SmaLLVi0lin-Law."

# Setup headless Chrome (change to False to see the browser)
options = Options()
options.headless = False
driver = webdriver.Chrome(options=options)

# Step 1: Log in
driver.get("https://fantasyscotus.net/login/")
wait = WebDriverWait(driver, 10)

username_input = wait.until(EC.presence_of_element_located((By.ID, "id_username")))
username_input.send_keys(EMAIL)

password_input = wait.until(EC.presence_of_element_located((By.ID, "id_password")))
password_input.send_keys(PASSWORD)

login_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Login')]")))
login_button.click()

# Step 2: Go to league list page
driver.get("https://fantasyscotus.net/league/list/")
time.sleep(3)

# Step 3: Scrape all league names and info
rows = driver.find_elements(By.CSS_SELECTOR, ".MuiTableRow-root")

leagues = []
for row in rows:
    try:
        name = row.find_element(By.CSS_SELECTOR, "a").text
        users = row.find_elements(By.CSS_SELECTOR, "td")[-1].text
        leagues.append([name, users])
    except:
        continue

# Step 4: Write to CSV
with open("leagues.csv", "w", newline='') as f:
    writer = csv.writer(f)
    writer.writerow(["League Name", "Users Count"])
    writer.writerows(leagues)

driver.quit()
print("✅ Done! Saved to leagues.csv")
