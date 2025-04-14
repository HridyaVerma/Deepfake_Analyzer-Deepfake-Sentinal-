import os
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

def reverse_image_search_with_selenium(frame_paths):
    driver = webdriver.Chrome()
    results = []

    for path in frame_paths:
        print("Processing:", path)
        driver.get("https://images.google.com/")
        time.sleep(2)

        try:
            camera_button = driver.find_element(By.CLASS_NAME, "ZaFQO")
            camera_button.click()
            time.sleep(1)

            upload_tab = driver.find_element(By.XPATH, "//a[contains(text(),'Upload an image')]")
            upload_tab.click()
            time.sleep(1)

            upload_input = driver.find_element(By.NAME, "encoded_image")
            upload_input.send_keys(os.path.abspath(path))
            time.sleep(5)

            links = [a.get_attribute("href") for a in driver.find_elements(By.CSS_SELECTOR, 'a') if "http" in a.get_attribute("href")]
            results.append({
                "frame_url": f"/{path}",
                "matches": links[:5]  # Top 5 links
            })

        except Exception as e:
            print(f"Error processing {path}: {e}")

    driver.quit()
    return results