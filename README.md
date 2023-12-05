# Our Mobile Application Aqua Monitor

This app is coded using React Native, allowing users to open it on either Android or iOS phones. To launch the code and try it, you just have to type 'expo start' in the terminal.

Our mobile application, Aquamonitor, is dedicated to agriculture, aiming to conserve water by providing only the necessary amount for each plant. By utilizing the application, farmers can take a photo of the plant and indicate its features through the interface. The application will then provide information on the specific water requirements and the plant's name. This approach allows us to save more water and use it judiciously for various plants.


Initially, the farmer is required to create a user profile by providing their name, email, and password. Once this step is completed, they can access their profile through the login page. Upon entering the correct email and password, they will be directed to the main page, offering several options:

Water Inventory Page: This section displays the available water quantity for the farmer to utilize. The farmer can input a numerical value to add it to the reserved water. Following this, they can choose to allocate this reserved water for plant irrigation or delete the transfer.

Add a Plant Page: In this section, the farmer captures a photo of the plant, specifies its spatial requirements, and the app provides information on the required water amount along with the plant's name. These details are then added to the 'My Plants' page.

My Plants Page: A dedicated page listing all the plants the farmer has entered into the app. It includes details such as photos, water needs, and the space occupied by each plant.

Weather Page: This page informs the farmer about the day's weather, aiding in better understanding and planning for the weather conditions.

# Model 

This project involves the development of a plant recognition system that employs a deep learning model to categorize images of plants into three groups: apple, papaya and pineapple.Furthermore, the system offers weather information tailored to the user’s location. Depending on the geographical coordinates, there is an additional dataset that displays the required water quantity for each specific plant on particular day and in that specific location.
The project consists of two main components: 
1-	Plant recognition model:
-	A convolutional Neural Network ( CNN ) is trained on a dataset containing images of apples, papayas and pineapples.
-	The model achieves an accuracy of 88.35% on the test dataset 
-	Users can input an image, and the model will predict the class of the plant along with a confidence score.
2-	Weather information:
-	The system provides real-time weather information based on the user’s location.
-	Users are prompted to enter their city, and the system fetches weather data using the [Weatherstack API].
-	The current temperature is then compared with predefined temperature ranges for the specific plant class of the input image, and a recommendation is provided.