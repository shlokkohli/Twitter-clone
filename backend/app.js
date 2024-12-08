import express from 'express';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import notificationRoutes from './routes/notification.routes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json({limit: "5mb"}))
app.use(cookieParser())
app.use(express.urlencoded( {extended: true} ))
app.use(cors({origin: "http://localhost:5173", credentials: true}));
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// Routes declaration
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use('/api/notifications', notificationRoutes);

export { app };