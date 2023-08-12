import replicate
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

class summarizer:
    def __init__(self) -> None:
        pass
    
    def is_link(self, argument):
        try:
            parsed_url = urlparse(argument)
            return parsed_url.scheme != '' and parsed_url.netloc != ''
        except:
            return False
    
    # Checking for common social media websites
    # If true, link is discarded
    def is_text_based_website(self, link):
        # Check for common social media domains
        social_media_domains = ["twitter.com", "facebook.com", "instagram.com", "youtube.com"]
        
        parsed_url = urlparse(link)
        
        # Check if the domain matches known social media domains
        if any(domain in parsed_url.netloc for domain in social_media_domains):
            return False
        
        try:
            response = requests.get(link)
            content_type = response.headers.get('content-type', '').lower()
            
            # Check if the content type indicates text-based content
            if 'text/html' in content_type:
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Check for text content or headings in the HTML
                text_elements = soup.find_all(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'])
                if text_elements:
                    return True
        except:
            pass
        
        return False

    # Following function should only be given links as the input
    def summarizer(self, link):
        # Checks if passed arg is a link
        if self.is_link(link) is False:
            return "Please pass a link"
        
        if self.is_text_based_website(link)==False or self.is_link(link) is False:
            return "Please enter a valid link"
        
        # Creating a prompt
        prompt = "Summarize the content of the following link:" + link
        output = replicate.run(
            "replicate/llama-2-70b-chat:2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1",
            input={"prompt": prompt}
        )
        
        # Storing the o/p of iterator
        final_output = ''
        for item in output:
            final_output += item
        
        return final_output

if __name__ == "__main__":
    link = "https://dataconomy.com/2023/02/27/best-large-language-models-meta-llama-ai/"
    not_link = "deez nutz"
    invalid_link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    invalid_link2 = "https://twitter.com/" 
    print(summarizer().summarizer(link))