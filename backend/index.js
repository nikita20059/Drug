const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const multer = require('multer');

const app = express();
const PORT = 5000;

// Database connection
mongoose.connect('mongodb://localhost:27017/simpleProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to simpleProject database');
}).catch(err => {
    console.error('Database connection error:', err);
});

// Define User Schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
});

const User = mongoose.model('users', UserSchema);

// Define PDF Schema
const PdfSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    remark: { type: String, default: '' },
});

const Pdf = mongoose.model('pdfs', PdfSchema);

// Middleware
app.use(express.json());
app.use(cors());

// Multer setup for file uploads (Memory Storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Root route
app.get("/", (req, res) => {
    res.send("App is Working");
});

// Register route
app.post("/register", async (req, res) => {
    try {
        const { name, email } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already registered" });
        }

        const user = new User({ name, email });
        const result = await user.save();

        res.status(201).json({ message: "User registered successfully", user: result });
        console.log(result);
    } catch (error) {
        console.error("Error in /register:", error);
        res.status(500).json({ error: "Something Went Wrong" });
    }
});

// PDF upload route
app.post("/upload", upload.single('pdf'), async (req, res) => {
    try {
        const pdf = new Pdf({
            filename: req.file.originalname,
            data: req.file.buffer,
            contentType: req.file.mimetype,
        });
        const result = await pdf.save();
        res.status(201).json({ message: "PDF uploaded successfully", pdf: result });
        console.log(result);
    } catch (error) {
        console.error("Error in /upload:", error);
        res.status(500).json({ error: "Something Went Wrong" });
    }
});

// Fetch all users route
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error in /users:", error);
        res.status(500).json({ error: "Something Went Wrong" });
    }
});

// Fetch all PDFs route
app.get("/pdfs", async (req, res) => {
    try {
        const pdfs = await Pdf.find();
        res.status(200).json(pdfs);
    } catch (error) {
        console.error("Error in /pdfs:", error);
        res.status(500).json({ error: "Something Went Wrong" });
    }
});

// Fetch a single PDF route
app.get("/pdf/:id", async (req, res) => {
    try {
        const pdf = await Pdf.findById(req.params.id);
        if (!pdf) {
            return res.status(404).json({ error: "PDF not found" });
        }
        res.contentType(pdf.contentType);
        res.send(pdf.data);
    } catch (error) {
        console.error("Error in /pdf:", error);
        res.status(500).json({ error: "Something Went Wrong" });
    }
});

// Approve PDF
app.put("/approve/:id", async (req, res) => {
    try {
        const pdf = await Pdf.findByIdAndUpdate(
            req.params.id,
            { status: "Approved" },
            { new: true }
        );
        if (!pdf) {
            return res.status(404).json({ error: "PDF not found" });
        }
        res.status(200).json({ message: "PDF Approved", pdf });
    } catch (error) {
        console.error("Error in /approve:", error);
        res.status(500).json({ error: "Something Went Wrong" });
    }
});

// Reject PDF with remark
app.put("/reject/:id", async (req, res) => {
    try {
        const { remark } = req.body;
        const pdf = await Pdf.findByIdAndUpdate(
            req.params.id,
            { status: "Rejected", remark },
            { new: true }
        );
        if (!pdf) {
            return res.status(404).json({ error: "PDF not found" });
        }
        res.status(200).json({ message: "PDF Rejected", pdf });
    } catch (error) {
        console.error("Error in /reject:", error);
        res.status(500).json({ error: "Something Went Wrong" });
    }
});

// ✅ Edit Remark Route
app.put("/updateRemark/:id", async (req, res) => {
    try {
        const { remark } = req.body;

        // Find PDF by ID
        const pdf = await Pdf.findById(req.params.id);
        if (!pdf) {
            return res.status(404).json({ error: "PDF not found" });
        }

        // Update the remark
        pdf.remark = remark;
        const updatedPdf = await pdf.save();

        res.status(200).json({ message: "Remark Updated Successfully", pdf: updatedPdf });
    } catch (error) {
        console.error("Error in /updateRemark:", error);
        res.status(500).json({ error: "Something Went Wrong" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});
