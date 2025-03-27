import { useState, useEffect } from "react";

function FileList() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [pdfs, setPdfs] = useState([]);
    const [remarks, setRemarks] = useState({});
    const [editingRemarkId, setEditingRemarkId] = useState(null);

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("title", title);
        formData.append("pdf", file);

        let result = await fetch("http://localhost:5000/register", {
            method: "POST",
            body: JSON.stringify({ name, email, title }),
            headers: { "Content-Type": "application/json" }
        });

        result = await result.json();

        if (result) {
            let uploadResult = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData
            });

            uploadResult = await uploadResult.json();

            if (uploadResult) {
                alert("Data and PDF uploaded successfully");
                setEmail("");
                setName("");
                setTitle("");
                setFile(null);
                fetchPdfs();
            }
        }
    };

    const fetchPdfs = async () => {
        let result = await fetch("http://localhost:5000/pdfs");
        result = await result.json();
        setPdfs(result);
    };

    useEffect(() => {
        fetchPdfs();
    }, []);

    return (
        <div>
            <h1>React WebApp - PDF Upload & Display</h1>

            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
                <button type="submit">Submit</button>
            </form>

            <button onClick={fetchPdfs} style={{ marginTop: "10px" }}>Fetch PDFs</button>

            <h2>Uploaded PDFs</h2>
            {pdfs.length > 0 ? (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Filename</th>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pdfs.map((pdf, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{pdf.filename}</td>
                                <td>{pdf.title}</td>
                                <td>{pdf.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No PDFs uploaded yet.</p>
            )}
        </div>
    );
}

export default FileList;