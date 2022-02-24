
# Importing the PIL library
from PIL import Image, ImageFilter, ImageOps, ImageFont
from PIL import ImageDraw
import requests
import cv2
import numpy as np 

def downloadImg(url):
    response = requests.get(url)
    with open("car.png", 'wb') as f:
        f.write(response.content)

# downloadImg("https://s.yimg.com/uu/api/res/1.2/HewxTcJGHqB7gEK7oLuVog--~B/aD00NDA7dz02ODA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/investopedia.com/55612c9f2571cacf52a5c809cf2c605a")

# Open an Image
img = Image.open('car.png')
 
# Call draw Method to add 2D graphics in an image
 
# Add Text to an image
 
# Display edited image
# img.show()
 
# Save the edited image
# im2.show()
border_hg = 200
text_place = border_hg - 10

new_img = ImageOps.expand(img, border=(0, 0, 0, border_hg))
new_img.save("car2.png")
img = Image.open('car2.png')
width, height = img.size
I2 = ImageDraw.Draw(img)
font = ImageFont.truetype("arial.ttf", 30)
I2.text(( ( width / 2 ) - 50, height - border_hg - 30), "ZerosFeed", fill=(62, 152, 247), font=font)

I1 = ImageDraw.Draw(img)
I1.text((28, height - text_place), "nice Car", fill=(62, 152, 247))
img.show()