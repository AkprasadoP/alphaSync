**Full Stack Realtime Chat Application**

This project is a real-time chat application built as a hands-on exploration of modern web development technologies. The app supports secure user authentication, live messaging, and user status updates.

## **Features**

- **Tech Stack**: MERN (MongoDB, Express.js, React, Node.js) + Socket.io
- **Authentication & Authorization**: Secured with JWT
- **Real-Time Messaging**: Powered by Socket.io for instant communication
- **Online User Status**: See which users are currently online
- **State Management**: Efficiently managed using Zustand
- **Error Handling**: Comprehensive error management on both client and server
- **Cloud Media Storage**: Integrated with Cloudinary for managing images and files

---

## **Environment Setup**

To configure the app, create a `.env` file in the root directory and add the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

---

## **Build the Application**

To prepare the app for deployment, build the project using:

```bash
npm run build
```

---

## **Start the Application**

Run the application locally:

```bash
npm start
```

---

This project demonstrates key concepts in full-stack web development, including secure authentication, real-time communication, and efficient state management.
